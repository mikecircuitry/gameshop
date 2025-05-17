'use client'
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface CartContextType {
    cartCount: number;
    addToCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartCount, setCartCount] = useState(0);

    // Load cart count from localStorage on initialization
    useEffect(() => {
        const storedCartCount = localStorage.getItem("cartCount");
        if (storedCartCount) {
            setCartCount(parseInt(storedCartCount, 10));
        }
    }, []);

    // Update localStorage whenever cartCount changes
    useEffect(() => {
        localStorage.setItem("cartCount", cartCount.toString());
    }, [cartCount]);

    const addToCart = () => {
        setCartCount((prev) => prev + 1);
    };

    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
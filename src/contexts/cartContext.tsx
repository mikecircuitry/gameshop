'use client'
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import {Cart, Product} from "@/models";

interface CartContextType {
    cart: Cart;
    addToCart: (item: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const newCart : Cart = {
        id: 0,
        itemCount: 0,
        items: []
    }
    const [cart, setCart] = useState(newCart);

    // Load cart count from localStorage on initialization
    useEffect(() => {
        const storedCartCount = localStorage.getItem("cart");
        if (storedCartCount) {
            const parsedCart = JSON.parse(storedCartCount);
            setCart(parsedCart);
        }
    }, []);

    // Update localStorage whenever cartCount changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: Product) => {

        // Check if the item already exists in the cart
         const existingItem = cart.items.find((x) => x.id === item.id);

         if (!existingItem) {
             setCart((prev) => ({
                 ...prev,
                    items: [...prev.items, { ...item, quantity: 1 }],
                 itemCount: prev.itemCount + 1,
             }));
         }
         else{
                // If it exists, update the quantity
                setCart((prev) => ({
                    ...prev,
                    items: prev.items.map((x) =>
                        x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
                    ),
                    itemCount: prev.itemCount + 1
                }));
         }

    };

    return (

        <CartContext.Provider value={{ cart, addToCart }}>
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
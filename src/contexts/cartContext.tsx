'use client'
import {createContext, useContext, useState, ReactNode, useEffect} from "react";
import {Cart, Product} from "@/models";

interface CartContextType {
    cart: Cart;
    addToCart: (item: Product) => void;
    clearCart: () => void;
    cartItemCount: number;
    removeFromCart: (item: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const defaultCart: Cart = {
    id: 0,
    items: []
}

export function CartProvider({children}: { children: ReactNode }) {
    const [cart, setCart] = useState(defaultCart);
    const cartItemCount = cart.items.reduce((acc, x) => acc + x.quantity, 0);

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

        setCart((prev) => ({
            ...prev,
            items: !existingItem ? [...prev.items, {...item}] : prev.items.map((x) =>
                x.id === item.id ? {...x, quantity: item.quantity} : x)
        }));
    };

    const clearCart = () => {
        setCart(defaultCart);
        localStorage.setItem("cart", JSON.stringify(defaultCart));
    }

    const removeFromCart = (item: Product) => {
        const remainingItems = cart.items.filter((x) => x.id != item.id);
        setCart((prev) => ({
            ...prev,
            items: remainingItems
        }));
    }


    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, cartItemCount, removeFromCart}}>
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
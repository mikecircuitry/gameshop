'use client'
import {createContext, useContext, useState, ReactNode, useEffect} from "react";
import {Cart, Product} from "@/models";

interface CartContextType {
    cart: Cart;
    addToCart: (item: Product) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children}: { children: ReactNode }) {
    const defaultCart: Cart = {
        id: 0,
        itemCount: 0,
        items: []
    }
    const [cart, setCart] = useState(defaultCart);

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
        console.log("Cart updated:",cart)
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart],);

    const addToCart = (item: Product) => {
        // Check if the item already exists in the cart
        const existingItem = cart.items.find((x) => x.id === item.id);

        console.log(item);
        if (!existingItem) {
            // cart.items.push(item);
            // cart.itemCount += item.quantity;
            //
            // console.log(cart);

            setCart((prev) => ({
                ...prev,
                items: [...prev.items, {...item}],
                itemCount: prev.itemCount + item.quantity,
            }));
        } else {
            // If it exists, update the quantity
            setCart((prev) => ({
                ...prev,
                items: prev.items.map((x) =>
                    x.id === item.id ? {...x, quantity: x.quantity + item.quantity} : x
                ),
                itemCount: prev.itemCount + item.quantity,
            }));
        }

    };

    const clearCart = () => {
        setCart(defaultCart);
        localStorage.setItem("cart", JSON.stringify(defaultCart));
    }

    return (

        <CartContext.Provider value={{cart, addToCart, clearCart}}>
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
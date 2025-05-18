'use client'
import {useCart} from "@/Contexts/CartContext.ts";
import ProductListItem from "@/app/cart/components/productItem";

export default function CartProductList() {
    const { cart } = useCart();

    //cart design inspirations
    // https://bootstrapexamples.com/@mason/clean-commerce-cart-design
    return (
        <div>
            <h1>Cart</h1>
            { !cart.itemCount && <p>Your cart is empty.</p> }
            { cart.itemCount > 0 && (
                <div>
                    <h2>Items in your cart:</h2>
                    
                        {cart.items.map((item) => (
                            <div className="row" key={item.id} style={{ paddingBottom: "20px" }} >
                                <ProductListItem product={item} />

                            </div>

                        ))}
                </div>
            )}
        </div>
    );

}
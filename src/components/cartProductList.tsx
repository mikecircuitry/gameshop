'use client'
import {useCart} from "@/contexts/cartContext";
import ProductListItem from "@/components/productItem";

export default function CartProductList() {
    const { cart, clearCart, itemCount } = useCart();

    //cart design inspirations
    // https://bootstrapexamples.com/@mason/clean-commerce-cart-design
    return (
        <div>
            <h1>Cart</h1>
            { !itemCount && <p>Your cart is empty.</p> }
            { itemCount > 0 && (

                <div>
                    <a href="#" onClick={clearCart} className="text-danger"> Clear Cart</a>
                    <h4>{itemCount} Items in your cart:</h4>
                    
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
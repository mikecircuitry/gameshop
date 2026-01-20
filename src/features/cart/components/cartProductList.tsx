"use client";
import { useCart } from "@/shared/providers/cartContext";
import ProductListItem from "@features/cart/components/productItem";

export default function CartProductList() {
  const { cart, clearCart, cartItemCount } = useCart();

  //cart design inspirations
  // https://bootstrapexamples.com/@mason/clean-commerce-cart-design
  return (
    <>
      {!cartItemCount && <h3>Your cart is empty.</h3>}
      {cartItemCount > 0 && (
        <div>
          <a href="#" onClick={clearCart} className="text-danger">
            {" "}
            Clear Cart
          </a>
          <h4>{cartItemCount} Items in your cart:</h4>

          {cart.items.map((item) => (
            <div className="row" key={item.id + item.platform} style={{ paddingBottom: "20px" }}>
              <ProductListItem product={item} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

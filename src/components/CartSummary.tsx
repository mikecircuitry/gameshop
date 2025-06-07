'use client';
import {useCart} from "@/contexts/cartContext";

export const CartSummary = () => {
    const {cart, cartItemCount} = useCart();
    const shippingCost = 5;

    //TODO: format currency to 2 decimal places
    //TODO: 7 games shows large decimal places
    //TODO: Format numbers to currency USD
    const subTotal = cart.items.reduce((acc, game) => acc + (game.price * game.quantity), 0);

    return (
        <>

            {cartItemCount > 0 && (
                <div className="summary-card p-4 shadow-sm">
                    <h5 className="mb-4">Order Summary</h5>
                    <div className="d-flex justify-content-between mb-2">
                        <span>Total Items:</span>
                        <span>{cartItemCount}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span className="text-muted">Subtotal</span>
                        <span>{subTotal}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span className="text-muted">Shipping</span>
                        <span>{shippingCost}</span>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between mb-4">
                        <span className="fw-bold">Total</span>
                        <span className="fw-bold">{subTotal + shippingCost}</span>
                    </div>
                </div>

            )}
        </>
    );
}
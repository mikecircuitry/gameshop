"use client";
import { useCart } from "@/shared/providers/cartContext";
import { formatCurrencyUSD } from "@/shared/utils/utils";

export const CartSummary = () => {
  const { cart, cartItemCount } = useCart();
  const subTotal = cart.items.reduce(
    (acc, game) => acc + game.price * game.quantity,
    0,
  );
  const shippingCost = 5;
  const total = subTotal + shippingCost;

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
            <span>{formatCurrencyUSD(subTotal)}</span>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <span className="text-muted">Shipping</span>
            <span>{formatCurrencyUSD(shippingCost)}</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between mb-4">
            <span className="fw-bold">Total</span>
            <span className="fw-bold">{formatCurrencyUSD(total)}</span>
          </div>
        </div>
      )}
    </>
  );
};

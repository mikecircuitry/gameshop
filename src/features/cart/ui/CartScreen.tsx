import CartProductList from "@features/cart/ui/cartProductList";
import { CartSummary } from "@features/cart/ui/CartSummary";

export const CartScreen = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <p className="text-3xl text-blue-900">Cart-HHH</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <CartProductList />
        </div>
        <div className="col-sm-4">
          <CartSummary />
        </div>
      </div>
    </>
  );
};

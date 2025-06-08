import CartProductList from "@/components/cartProductList";
import {CartSummary} from "@/components/CartSummary";


export default function Cart() {


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Cart</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8">
                    <CartProductList/>
                </div>
                <div className="col-sm-4">
                    <CartSummary />
                </div>
            </div>
        </>
    );
}
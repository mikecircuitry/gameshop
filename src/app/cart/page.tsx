import CartProductList from "@/components/cartProductList";
import {CartSummary} from "@/components/CartSummary";


export default function Cart() {


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <p className="text-3xl text-blue-900">Cart-HHH</p>
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
import {Product} from "@/models";
import {useCart} from "@/contexts/cartContext";

interface ProductListItemProp {
    product: Product;
}

export default function ProductListItem({product}: ProductListItemProp) {
    const {addToCart, removeFromCart} = useCart();

    const increaseQuantity = () => {
        product.quantity += 1;
        addToCart(product);
    }

    const decreaseQuantity = () => {
        if (product.quantity > 1) {
            product.quantity -= 1;
            addToCart(product);
        } else {
            removeFromCart(product);
        }
    }

    return (
        <div className="card">

            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">
                        <img src={product.image} className="rounded float-start card-img-top" alt={product.name}/>
                    </div>
                    <div className="col-md-4">
                        <h5 className="card-title text-centerx" style={{paddingTop: "7%"}}>{product.name}</h5>
                        <p>Platform: <b>{product.platform}</b></p>
                    </div>
                    <div className="col-sm-2">
                        <div className="input-group mb-3">
                            <button className="input-groupx btn btn-light col-sm-1"
                                    onClick={decreaseQuantity}>
                                <span>  - </span>
                            </button>
                            <input type="text" className="col-sm-2 text-center"
                                   style={{backgroundColor: "#fff", color: "#000"}} id={product.name}
                                   readOnly={true} value={product.quantity}/>


                            <button className="input-groupx btn btn-light col-sm-1"
                                    onClick={increaseQuantity}>
                                <span>  + </span>
                            </button>

                        </div>
                    </div>
                    <div className="col-sm-2">
                        <a href="#" className="text-danger" onClick={() => removeFromCart(product)}>remove</a>
                    </div>
                </div>

            </div>
        </div>
    );
}
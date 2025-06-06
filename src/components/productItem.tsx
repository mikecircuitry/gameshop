import {Product} from "@/models";
import {useCart} from "@/contexts/cartContext";
import {useState} from "react";

interface ProductListItemProp {
    product: Product;
}

export default function ProductListItem({product}: ProductListItemProp) {
 const { cart } = useCart();
    const [ currentCart, setCart] = useState(cart);
    const defaultQuantity = product.quantity;
    const [ quantity, setQuantity] = useState(defaultQuantity);


    // const addToCartClicked = () => {
    //     addToCart({
    //         id: product.id,
    //         name: product.name,
    //         image: product.image,
    //         quantity: 1,
    //     });
    // }

    const item = currentCart.items.find((x) => x.id === product.id);

    const increaseQuantity = () => {
        console.log("increase quantity clicked");

    product.quantity = product.quantity + 1;
    setQuantity((prev) => prev + 1);
    //     setCart((prev) => ({
    //         ...prev,
    //         items: prev.items.map((x) => x.id === product.id ? {...x, quantity: x.quantity + 1} : x),
    //         itemCount: prev.itemCount + 1,
    //     }));
        // if(item)
        // {
        //     item.quantity = item.quantity + 1;
        //     addToCart({
        //         id: product.id,
        //         name: product.name,
        //         image: product.image,
        //         quantity: item.quantity,
        //     });
        // }

        // console.log(item);
        //
        // currentCart.itemCount = currentCart.items.reduce((count, x) => count + x.quantity, 0);
        //
        //
        //
        // setCart(currentCart);
        // console.log(currentCart);
    }

    return (
        <div className="card">

            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">
                        <img src={product.image} className="rounded float-start card-img-top" alt={product.name}  />
                    </div>
                    <div className="col-md-4">
                        <h5 className="card-title text-centerx" style={{paddingTop:"7%"}}>{product.name}</h5>
                    </div>
                    <div className="col-sm-4">
                        <div className="input-group mb-3">
                            <button className="input-groupx btn btn-light col-sm-1"
                            >
                                <span>  - </span>
                            </button>
                            <input type="text" className="col-sm-2 text-center" style={{backgroundColor: "#fff", color: "#000"}} id={product.name}
                                readOnly={true}   value={product.quantity} />


                            <button className="input-groupx btn btn-light col-sm-1"
                                    onClick={increaseQuantity}>
                                <span>  + </span>
                            </button>
                            {/*<span className="input-group-text" id="basic-addon1">@</span>*/}
                            {/*<input type="text" className="form-control" placeholder="Username" aria-label="Username"*/}
                            {/*       aria-describedby="basic-addon1"/>*/}
                        </div>



                        {/*<h5 className="card-title text-centerx" style={{paddingTop: "7%"}}>{item.quantity}</h5>*/}
                    </div>
                </div>

            </div>
        </div>
    );
}
import {Product} from "@/models";

interface ProductListItemProp {
    product: Product;
}

export default function ProductListItem(prop: ProductListItemProp) {
const item = prop.product;

    return (
        <div className="card">

            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">
                        <img src={item.image} className="rounded float-start card-img-top" alt={item.name}  />
                    </div>
                    <div className="col-md-4">
                        <h5 className="card-title text-centerx" style={{paddingTop:"7%"}}>{item.name}</h5>
                    </div>
                    <div className="col-sm-4">
                        <div className="input-group mb-3">
                            <button className="input-groupx btn btn-light col-sm-1">
                                <span>  - </span>
                            </button>
                            <input type="text" className="col-sm-2 text-center" style={{backgroundColor: "#fff", color: "#000"}} id={item.name}
                                   value={item.quantity}/>
                            <button className="input-groupx btn btn-light col-sm-1">
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
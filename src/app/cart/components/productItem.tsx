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
                        <img src={item.image} className="rounded float-start card-img-top"  />
                    </div>
                    <div className="col-md-4">
                        <h5 className="card-title text-centerx" style={{paddingTop:"7%"}}>{item.name}</h5>
                    </div>
                    <div className="col-sm-4">
                        <h5 className="card-title text-centerx" style={{paddingTop:"7%"}}>{item.quantity}</h5>
                    </div>
                </div>

            </div>
        </div>
    );
}
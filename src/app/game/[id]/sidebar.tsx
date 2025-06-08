"use client";
import {useCart} from "@/contexts/cartContext";
import {GameDetails} from "@/models";

export interface SidebarProps {
    gameInfo: GameDetails;
}

export default function Sidebar({gameInfo}: SidebarProps) {
    const {addToCart} = useCart();

    const addToCartClicked = () => {
        addToCart({
            id: gameInfo.id,
            name: gameInfo.name,
            image: gameInfo.backgroundImage,
            quantity: 1,
            price: 29.99, // TODO: Replace with dynamic price
        });
    };

    return (
        <div className="col-sm-4" style={{height: "600px"}}>
            <div className="row">
                <div className="col-sm-5">{gameInfo.developer}</div>
                <div className="col-sm-5">
                    <span className="pull-left">{gameInfo.rating} out of 5 Stars</span>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h4> {gameInfo.name}</h4>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <h4 className="text-danger">$29.99</h4>
                    </div>
                </div>

                <div className="row">
                    {/* TODO: Make this a drop down list of game platforms to choose from */}
                    {/*<div className="col-sm-12">*/}
                    {/*  <h5>Platforms</h5>*/}
                    {/*  <ul className="list-group">*/}
                    {/*    {gameInfo.platforms.map((x) => (*/}
                    {/*      <li key={x.id} className="list-group-item">*/}
                    {/*        {x.name}*/}
                    {/*      </li>*/}
                    {/*    ))}*/}
                    {/*  </ul>*/}
                    {/*</div>*/}
                </div>

                <button
                    className="btn btn-danger"
                    style={{width: "100%"}}
                    onClick={addToCartClicked}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

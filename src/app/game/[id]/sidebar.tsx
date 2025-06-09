"use client";
import {useCart} from "@/contexts/cartContext";
import {GameDetails, GamePlatform} from "@/models";
import {useState} from "react";

export interface SidebarProps {
    gameInfo: GameDetails;
}

export default function Sidebar({gameInfo}: SidebarProps) {
    const {addToCart} = useCart();
    const [currentPlatform, setPlatform] = useState(GamePlatform.PS5);
    const [quantity, setQuantity] = useState(1);

    const addToCartClicked = () => {
        addToCart({
            id: gameInfo.id,
            name: gameInfo.name,
            image: gameInfo.backgroundImage,
            quantity: quantity,
            platform: currentPlatform,
            price: 29.99, // TODO: Replace with dynamic price
        });
    };

    const gameSelectionChanged = (newValue: string) => {
        console.log("new platform: ", newValue);
        const platform = newValue as GamePlatform;
        setPlatform(platform);

    }

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
                    <div className="col-sm-6">
                        <h5>Quantity</h5>
                        <select className="form-select"
                                onChange={(e) => setQuantity(parseInt(e.target.value))}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="col-sm-6">
                        <h5>Platforms</h5>
                        <select className="form-select"
                                defaultValue={currentPlatform}
                                onChange={(e) => gameSelectionChanged(e.target.value)}>
                            {
                                Object.values(GamePlatform).map((x) => (
                                    <option key={x}>{x}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <button
                            className="btn btn-danger"
                            style={{width: "100%"}}
                            onClick={addToCartClicked}
                        >
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

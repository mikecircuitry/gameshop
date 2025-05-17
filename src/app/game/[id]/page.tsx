//'use client'
//import {Game} from "@/app/game/Components/GameCard";

import {useCart} from "@/Contexts/CartContext.ts";

interface GameDetails {
    id:number;
    name: string;
    description:string;
    backgroundImage:string;
    rating:number;
}

interface GameDetailsApiResponse {
    id:number;
    name: string;
    description:string;
    background_image:string;
    rating:number;
}

const mapGameDetailsApiResponsetoGameDetails = (apiData: GameDetailsApiResponse): GameDetails => {
    return {
        id: apiData.id,
        name: apiData.name,
        description: apiData.description,
        backgroundImage: apiData.background_image,
        rating: apiData.rating
    }
}

export default async function details({params} : {params: Promise<{id: number}>}) {

    const {id} = await  params;
    console.log("what is this value Prop =>", id);

    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=fe565b13a3474b92bacee0ca58a37b12`);
    const data: GameDetailsApiResponse = await response.json();

    // const { addToCart } = useCart();
    const gameDetails = mapGameDetailsApiResponsetoGameDetails(data);
    return (
        <>
            <div className="card">
                <img src={gameDetails.backgroundImage} className="card-img-top" alt={gameDetails.name}/>
                <div className="card-body">
                    <h5 className="card-title">{gameDetails.name}</h5>
                    <p className="card-text">{gameDetails.description}</p>
                    <div className="row">
                        <div className="col-12">

                            {/*<button className="btn btn-primary" onClick={addToCart}>*/}
                            {/*    Add to Cart*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
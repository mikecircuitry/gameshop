'use client'
import Link from "next/link";
import {useCart} from "@/Contexts/CartContext.ts";

export interface Game  {
    id: number;
    name: string;
    backgroundImage: string;
    rating: number;
}

export interface GameCardProp {
    game: Game
}

export default function GameCard( prop: GameCardProp) {
    const {game} = prop;
    const { addToCart } = useCart();

    return (
        <div className="card h-100" >
            <img src={game.backgroundImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h4 className="card-title" >{game.name}</h4>
                <p className="card-text">
                    Quis Quisque volutpat posuere metus non facilisis. Fusce nec nunc odio. Sed arcu nisi.
                </p>

                <button className="btn btn-primary" onClick={addToCart}>
                    Add to Cart
                </button>


                <Link className="btn btn-secondary"
                href={`/game/${game.id}`}>
                Details</Link>
            </div>
        </div>
    );
}

// export default function GameCard( prop: Game) {
//
//   return (
//       <div className="card" style={{width: "18rem"}}>
//           <img src={prop.backgroundImage} className="card-img-top" alt="..."/>
//           <div className="card-body">
//               <h4 className="card-title" >{prop.name}</h4>
//               <p className="card-text">
//                   Quisque volutpat posuere metus non facilisis. Fusce nec nunc odio. Sed arcu nisi.
//               </p>
//               <a className="btn btn-secondary">Details</a>
//           </div>
//       </div>
//   );
// }
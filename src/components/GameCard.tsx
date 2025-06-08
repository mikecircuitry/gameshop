import Link from "next/link";
import {ReactNode} from "react";
import {Game} from "@/models";

export interface GameCardProp {
    game: Game;
    children?: ReactNode;
}

export default function GameCard({game, children}: GameCardProp) {

    return (
        <div className="card h-100">
            <Link
                href={`/game/${game.id}`}
                className="text-decoration-none text-dark"
            >
                <img
                    style={{height: "200px", objectFit: "cover"}}
                    src={game.backgroundImage}
                    className="card-img-top"
                    alt={game.name}
                />
                <div className="card-body">
                    <h4 className="card-title">{game.name}</h4>
                    {children}
                </div>
            </Link>
        </div>
    );
}

"use client";
import {Game} from "@/models";
import GameCard from "@/components/GameCard";

export interface gameGridProps {
    games: Game[];
}

export default function GameGrid({games}: gameGridProps) {
    return (
        <div className="row row-cols-3 row-gap-4">
            {games.map((x: Game) => (
                <div key={x.id} className="col">
                    <GameCard game={x}></GameCard>
                </div>
            ))}
        </div>
    );
}

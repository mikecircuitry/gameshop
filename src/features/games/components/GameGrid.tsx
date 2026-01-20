"use client";
import GameCard from "@features/games/components/GameCard";
import { Game } from "@features/games/types";

export interface gameGridProps {
  games: Game[];
}

export default function GameGrid({ games }: gameGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {games.map((x: Game) => (
        <div key={x.id} className="">
          <GameCard game={x}></GameCard>
        </div>
      ))}
    </div>
  );
}

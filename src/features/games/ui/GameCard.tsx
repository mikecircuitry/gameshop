import { ReactNode } from "react";

import { Game } from "@features/games/types";

export interface GameCardProp {
  game: Game;
  children?: ReactNode;
}

export default function GameCard({ game, children }: GameCardProp) {
  return (
    <>
      <div className="rounded shadow-sm shadow-gray-400">
        <a href={`/game/${game.id}`}>
          <img
            src={game.backgroundImage}
            className="h-[250] w-full rounded-t-sm object-fill"
            alt={game.name}
          />
        </a>
        <div className="p-4">
          <a href={`/game/${game.id}`}>
            <h5 className="font-bold">{game.name}</h5>
          </a>
          {children}
        </div>
      </div>
    </>

    // <div className="rounded-3 border-1 border-gray-300">
    //   <Link href={`/game/${game.id}`} className="no-underline">
    //     <img
    //       src={game.backgroundImage}
    //       className="h-[250] w-full object-fill"
    //       alt={game.name}
    //     />
    //     <div className="p-3">
    //       <p className="text-xl font-medium text-black no-underline">
    //         {game.name}
    //       </p>
    //       {children}
    //     </div>
    //   </Link>
    // </div>
  );
}

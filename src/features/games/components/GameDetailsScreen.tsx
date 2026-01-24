"use client";
import { GameDetailsSidebar } from "@features/games/components/GameDetailsSidebar";
import { GameDetails } from "@features/games/types";
import { gameQueries } from "@features/games/api/queries";
import { useQuery } from "@tanstack/react-query";

export type GameDetailsScreenProps = {
  // gameInfo: GameDetails;
  id: number;
};

export const GameDetailsScreen = ({ id }: GameDetailsScreenProps) => {
  const { data, isFetching } = useQuery(gameQueries.details(id));
  const gameInfo = data!;
  return (
    <>
      {!isFetching && (
        <div className="flex flex-row gap-5">
          <div className="">
            <div className="">
              <img src={gameInfo.backgroundImage} className="" alt={gameInfo.name} />
              <div className="">
                <h5 className="text-2xl text-red-500">{gameInfo.name}</h5>
                <p className="">{gameInfo.description}</p>
              </div>
            </div>
          </div>
          <GameDetailsSidebar gameInfo={gameInfo} />
        </div>
      )}
    </>
  );
};

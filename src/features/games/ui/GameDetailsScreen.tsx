import { GameDetailsSidebar } from "@features/games/ui/GameDetailsSidebar";
import { GameDetails } from "@features/games/types";

export type GameDetailsScreenProps = {
  gameInfo: GameDetails;
};

export const GameDetailsScreen = ({ gameInfo }: GameDetailsScreenProps) => {
  return (
    <div className="flex flex-row gap-5">
      <div className="">
        <div className="">
          <img
            src={gameInfo.backgroundImage}
            className=""
            alt={gameInfo.name}
          />
          <div className="">
            <h5 className="text-2xl text-red-500">{gameInfo.name}</h5>
            <p className="">{gameInfo.description}</p>
          </div>
        </div>
      </div>
      <GameDetailsSidebar gameInfo={gameInfo} />
    </div>
  );
};

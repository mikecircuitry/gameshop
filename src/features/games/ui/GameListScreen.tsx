import GameGrid from "@features/games/ui/GameGrid";
import Pagination from "@features/games/ui/Pagination";

import { Game } from "@features/games/types";

export type GameListScreenProps = {
  games: Game[];
  pageNo: number;
};
export const GameListScreen = ({ games, pageNo }: GameListScreenProps) => {
  return (
    <>
      <GameGrid games={games} />
      <Pagination currentPage={pageNo} />
    </>
  );
};

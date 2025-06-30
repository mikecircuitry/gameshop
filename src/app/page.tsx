import GameGrid from "@/components/GameGrid";
import Pagination from "@/components/Pagination";
import { getPagedGames } from "@/services/gameService";

export default async function page() {
  const pageNo = 1; // Default to page 1 for main page
  const gameResponse = await getPagedGames(pageNo);

  return (
    <div>
      <GameGrid games={gameResponse.games} />
      <Pagination />
    </div>
  );
}

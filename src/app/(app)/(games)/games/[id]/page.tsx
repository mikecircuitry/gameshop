import { GameListScreen } from "@features/games/ui/GameListScreen";
import { getGames } from "@features/games/queries";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const pageNo = Number(id);
  const gameResponse = await getGames(pageNo, 21);

  return <GameListScreen games={gameResponse.games} pageNo={pageNo} />;
}

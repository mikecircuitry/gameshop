import { gameApiService } from "@/services/gameService";
import { GameListScreen } from "@features/games/ui/GameListScreen";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const pageNo = Number(id);
  const gameResponse = await gameApiService.getPagedGames(pageNo); // await getPagedGames(pageNo);

  return <GameListScreen games={gameResponse.games} pageNo={pageNo} />;
}

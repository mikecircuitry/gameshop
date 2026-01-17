import { gameApiService } from "@/services/gameService";
import { GameDetailsScreen } from "@features/games/ui/GameDetailsScreen";

export default async function details({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const gameInfo = await gameApiService.getGameById(id);

  return <GameDetailsScreen gameInfo={gameInfo} />;
}

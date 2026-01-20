import { GameDetailsScreen } from "@features/games/ui/GameDetailsScreen";
import { getGameById } from "@features/games/queries";

export default async function details({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const gameInfo = await getGameById(id);

  return <GameDetailsScreen gameInfo={gameInfo} />;
}

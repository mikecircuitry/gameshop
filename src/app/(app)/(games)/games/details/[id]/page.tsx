import { GameDetailsScreen } from "@features/games/components/GameDetailsScreen";

export default async function details({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  // const gameInfo = await getGameById(id);

  return <GameDetailsScreen id={id} />;
}

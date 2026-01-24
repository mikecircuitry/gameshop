import { GameListScreen } from "@features/games/components/GameListScreen";
import { getGames } from "@features/games/service";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  // const { id } = await params;
  //
  // const pageNo = Number(id);
  // const gameResponse = await getGames(pageNo, 21);

  return <GameListScreen />;
}

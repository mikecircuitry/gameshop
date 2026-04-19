import { GameListScreen } from "@features/games/components/GameListScreen";

export default async function page() {
  // const { id } = await params;
  //
  // const pageNo = Number(id);
  // const gameResponse = await getGames(pageNo, 21);

  return <GameListScreen />;
}

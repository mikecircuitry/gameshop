import { GameDetails, GetGamesResponse } from "../types";

const BASE_URL = "/api/games";

export async function fetchGames(pageNum: number = 1): Promise<GetGamesResponse> {
  const results = await fetch(`${BASE_URL}?page=${pageNum}`);
  return await results.json();
}
export async function fetchGameById(id: number): Promise<GameDetails> {
  console.log(`SERVICE CALL ==> ${id}`);
  const results = await fetch(`${BASE_URL}/${id}`);
  return await results.json();
}

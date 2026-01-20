import "server-only";

import {
  getGameById as getGameByIdApi,
  getGames as getGamesApi,
} from "@/server/client/rawg/rawg.api";
import { GameDetails, GetGamesResponse } from "@features/games/types";
import {
  mapGameDetailsResponseToGameDetails,
  mapGameListResponseToGames,
} from "@features/games/mappers";

export async function getGames(
  pageNum: number = 1,
  pageSize: number = 21,
): Promise<GetGamesResponse> {
  const result = await getGamesApi({ page: pageNum, page_size: pageSize });

  if (!result.ok) {
    throw new Error(`Failed to fetch games: ${result.error}`);
  }

  return {
    games: mapGameListResponseToGames(result.data),
    recordCount: result.data.count,
  };
}

export async function getGameById(id: number): Promise<GameDetails> {
  const result = await getGameByIdApi(id.toString());

  if (!result.ok) {
    throw new Error(`Failed to fetch game with id ${id}: ${result.error}`);
  }

  return mapGameDetailsResponseToGameDetails(result.data);
}

import "server-only";
import rawgClient from "./client";
import { operations } from "./schema";
import { Result } from "@/shared/models/types";

export type gamesListParams = operations["games_list"]["parameters"]["query"];
export type gamesListResponse =
  operations["games_list"]["responses"]["200"]["content"]["application/json"];

export type gameDetailsResponse =
  operations["games_read"]["responses"]["200"]["content"]["application/json"];

export const getGames = async (query: gamesListParams): Promise<Result<gamesListResponse>> => {
  const { data, error } = await rawgClient.GET("/games", {
    params: {
      query,
    },
  });
  if (error) {
    console.error("Error fetching games:", error);
    return { ok: false, error };
  }
  return { ok: true, data };
};

export const getGameById = async (gameId: string): Promise<Result<gameDetailsResponse>> => {
  const { data, error } = await rawgClient.GET("/games/{id}", {
    params: {
      path: { id: gameId },
    },
  });

  if (error) {
    console.error(`Error fetching game with id ${gameId}:`, error);
    return { ok: false, error };
  }

  return { ok: true, data };
};

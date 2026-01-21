import "server-only";
import * as z from "zod";
import rawgClient from "./client";
import { operations } from "./schema";
import { Result } from "@/shared/types";

type gamesListParams = operations["games_list"]["parameters"]["query"];
// export type gamesListResponse =
//   operations["games_list"]["responses"]["200"]["content"]["application/json"];
//
// export type gameDetailsResponse =
//   operations["games_read"]["responses"]["200"]["content"]["application/json"];
// export type game = components["schemas"]["Game"];

const gameSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  background_image: z.string().optional(),
  rating: z.number(),
});
const gameListSchema = z.object({
  count: z.number(),
  next: z.string().optional(),
  previous: z.string().optional().nullable(),
  results: z.array(gameSchema),
});
const gameDetailsSchema = z.object({
  ...gameSchema.shape,
  description_raw: z.string(),
  released: z.string().optional(),
});

export type gamesListResponse = z.infer<typeof gameListSchema>;
export type gameDetailsResponse = z.infer<typeof gameDetailsSchema>;

export const getGames = async (query: gamesListParams): Promise<Result<gamesListResponse>> => {
  const { data, response } = await rawgClient.GET("/games", {
    params: {
      query,
    },
  });

  if (response.ok) {
    const results = gameListSchema.safeParse(data);
    if (!results.success) {
      console.error(`Error parsing game list:`, results.error);
      return { ok: false, error: results.error };
    }
    return { ok: true, data: results.data };
  } else {
    console.error("Error fetching games:", response.statusText);
    return { ok: false, error: response.statusText };
  }
};

export const getGameById = async (gameId: string): Promise<Result<gameDetailsResponse>> => {
  const { data, error, response } = await rawgClient.GET("/games/{id}", {
    params: {
      path: { id: gameId },
    },
  });

  if (data) {
    const results = gameDetailsSchema.safeParse(data);
    if (!results.success) {
      console.error(`Error parsing game details:`, results.error);
      return { ok: false, error: results.error };
    }
    return { ok: true, data: results.data };
  } else {
    console.error(`Error fetching game with id ${gameId}:`, error);
    return { ok: false, error: response.statusText };
  }
};

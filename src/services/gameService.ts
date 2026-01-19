import { PagedGameResponse } from "@/models/responses";
import { createGameAPIService } from "@/services/gameApiServiceImpl";
import { GameDetails } from "@features/games/types";

export interface GameAPIService {
  getPagedGames(pageNum?: number): Promise<PagedGameResponse>;

  getGameById(id: number): Promise<GameDetails>;
}

export interface GameAPIServiceDependencies {
  httpClient: typeof fetch;
  gameApiUrl: string;
  gameApiKey: string;
}

const createDependencies = (): GameAPIServiceDependencies => ({
  httpClient: fetch,
  gameApiUrl: (process.env.RAWG_API_URL || "") + "/games",
  gameApiKey: process.env.RAWG_API_KEY || "",
});

export const gameApiService = createGameAPIService(createDependencies());

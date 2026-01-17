import { GameDetails } from "@/models";
import { PagedGameResponse } from "@/models/responses";
import { createGameAPIService } from "@/services/gameApiServiceImpl";

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
  gameApiUrl: process.env.NEXT_PUBLIC_API_URL || "",
  gameApiKey: process.env.NEXT_PUBLIC_API_KEY || "",
});

export const gameApiService = createGameAPIService(createDependencies());

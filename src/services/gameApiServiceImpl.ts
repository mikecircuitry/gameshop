import {
  GameApiResponse,
  GameDetailsApiResponse,
  GameItemResponse,
  PagedGameResponse,
} from "@/models/responses";
import { GameAPIService, GameAPIServiceDependencies } from "@/services/gameService";
import { Game, GameDetails } from "@features/games/types";

export const createGameAPIService = ({
  httpClient,
  gameApiUrl,
  gameApiKey,
}: GameAPIServiceDependencies): GameAPIService => {
  const mapGameApiResponseToGames = (apiGameData: GameDetailsApiResponse): Game => {
    return {
      id: apiGameData.id,
      name: apiGameData.name,
      backgroundImage: apiGameData.background_image,
      rating: apiGameData.rating,
    };
  };

  const mapGameDetailsApiResponsetoGameDetails = (apiData: GameItemResponse): GameDetails => {
    return {
      id: apiData.id,
      name: apiData.name,
      description: apiData.description_raw,
      backgroundImage: apiData.background_image,
      rating: apiData.rating,
      developer: apiData.developers[0]?.name ?? "",
      platforms: apiData.platforms.map((x) => ({
        id: x.platform.id,
        name: x.platform.name,
      })),
    };
  };

  return {
    getPagedGames: async (pageNum: number = 1): Promise<PagedGameResponse> => {
      const response = await httpClient(
        `${gameApiUrl}?key=${gameApiKey}&page=${pageNum}&page_size=21`,
      );
      const data = (await response.json()) as GameApiResponse;

      return {
        recordCount: data.count,
        games: data.results.map(mapGameApiResponseToGames),
      };
    },

    getGameById: async (id: number): Promise<GameDetails> => {
      const response = await httpClient(`${gameApiUrl}/${id}?key=${gameApiKey}`);
      const data: GameItemResponse = await response.json();

      return mapGameDetailsApiResponsetoGameDetails(data);
    },
  };
};

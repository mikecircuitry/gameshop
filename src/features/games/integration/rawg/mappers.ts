import "server-only";
import { gameDetailsResponse, gamesListResponse } from "@features/games/integration/rawg/rawg.api";
import { Game, GameDetails } from "@features/games/types";

export const mapGameListResponseToGames = (response: gamesListResponse): Game[] => {
  return response.results.map((game) => ({
    id: game.id ?? 0,
    name: game.name ?? "",
    backgroundImage: game.background_image ?? "",
    rating: game.rating,
  }));
};

export const mapGameDetailsResponseToGameDetails = (response: gameDetailsResponse): GameDetails => {
  return {
    id: response.id ?? 0,
    name: response.name ?? "",
    backgroundImage: response.background_image ?? "",
    rating: response.rating,
    description: response.description_raw,
    developer: "",
    platforms: [],
  };
};

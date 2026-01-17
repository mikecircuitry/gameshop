import { Game } from "@features/games/types";

export interface GameApiResponse {
  count: number;
  results: GameDetailsApiResponse[];
}

export interface GameDetailsApiResponse {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  description: string;
  description_raw: string;
  released?: string;
}

export interface GameItemResponse {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  description: string;
  description_raw: string;
  released: string;
  website: string;
  metacritic: number;
  developers: {
    name: string;
  }[];
  platforms: {
    platform: {
      id: number;
      name: string;
    };
  }[];
  // genres: Genre[];
  // platforms: Platform[];
}

export interface PagedGameResponse {
  recordCount: number;
  games: Game[];
}

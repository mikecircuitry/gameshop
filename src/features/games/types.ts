export interface Game {
  id: number;
  name: string;
  backgroundImage: string;
  rating: number;
}

export interface GameDetails {
  id: number;
  name: string;
  backgroundImage: string;
  rating: number;
  description: string;
  developer: string;
  platforms: GameDetailPlatform[];
}

export interface GameDetailPlatform {
  id: number;
  name: string;
}

export enum GamePlatform {
  PC = "PC",
  PS4 = "PS4",
  PS5 = "PS5",
  XBOX_ONE = "XBOX ONE",
  XBOX_SERIES_X = "XBOX SERIES X",
  NINTENDO_SWITCH = "NINTENDO SWITCH",
}
export type GetGamesResponse = {
  games: Game[];
  recordCount: number;
};

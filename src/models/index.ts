export interface Cart {
  id: number;
  items: Product[];
}

export interface Product {
  id: number;
  name: string;
  image: string;
  quantity: number;
}

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

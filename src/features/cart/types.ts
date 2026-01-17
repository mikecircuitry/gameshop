import { GamePlatform } from "@features/games/types";

export interface Cart {
  id: number;
  items: Product[];
}

export interface Product {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  platform: GamePlatform;
}

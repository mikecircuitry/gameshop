

export interface gameApiResponse {
    results: GameDetailsApiResponse[]
}

export interface GameDetailsApiResponse {
    id:number;
    name: string;
    background_image:string;
    rating:number;
    description: string;
    description_raw: string;
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
    // genres: Genre[];
    // platforms: Platform[];
}
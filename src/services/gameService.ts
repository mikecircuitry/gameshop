import {Game, GameDetails} from "@/models";
import {
    GameApiResponse,
    GameDetailsApiResponse,
    GameItemResponse,
    PagedGameResponse
} from "@/models/responses";

const gameApiUrl = process.env.NEXT_PUBLIC_API_URL;
const gameApiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getPagedGames = async (pageNum: number = 1): Promise<PagedGameResponse> => {
    const response = await fetch(`${gameApiUrl}?key=${gameApiKey}&page=${pageNum}&page_size=21`);
    const data = await response.json() as GameApiResponse;

    return {
        recordCount: data.count,
        games: data.results.map(mapGameApiResponseToGames)
    };
}

const mapGameApiResponseToGames = (apiGameData: GameDetailsApiResponse): Game => {
    return {
        id: apiGameData.id,
        name: apiGameData.name,
        backgroundImage: apiGameData.background_image,
        rating: apiGameData.rating
    }
}

export const getGameDetails = async (id: number): Promise<GameDetails> => {
    const response = await fetch(
        `${gameApiUrl}/${id}?key=${gameApiKey}`
    );
    const data: GameItemResponse = await response.json();

    return mapGameDetailsApiResponsetoGameDetails(data);
};

export const mapGameDetailsApiResponsetoGameDetails = (
    apiData: GameItemResponse
): GameDetails => {
    return {
        id: apiData.id,
        name: apiData.name,
        description: apiData.description_raw,
        backgroundImage: apiData.background_image,
        rating: apiData.rating,
        developer: apiData.developers[0].name,
        platforms: apiData.platforms.map((x) => ({
            id: x.platform.id,
            name: x.platform.name,
        })),
    };
};
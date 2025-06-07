import {Game, GameDetails} from "@/models";
import {gameApiResponse, GameDetailsApiResponse, GameItemResponse} from "@/models/responses";

const gameApiUrl = process.env.NEXT_PUBLIC_API_URL;
const gameApiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getPagedGames = async (): Promise<Game[]> => {
    const response = await fetch(`${gameApiUrl}?key=${gameApiKey}&page_size=12`);
    const data = await response.json() as gameApiResponse;

    return data.results.map((x: GameDetailsApiResponse): Game => ({
        id: x.id,
        name: x.name,
        backgroundImage: x.background_image,
        rating: x.rating
    })) || [];
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
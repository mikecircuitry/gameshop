import GameGrid from "@/components/GameGrid";
import {Game} from "@/models";
import {gameApiResponse, GameDetailsApiResponse} from "@/models/responses";


export default async function page() {
    const games = await getPagedGames();
    return (
        <div>
            <GameGrid games={games}/>
        </div>
    );
}

const getPagedGames = async (): Promise<Game[]> => {
    const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&page_size=12`);
    const data = await response.json() as gameApiResponse;
    return data.results.map((x: GameDetailsApiResponse): Game => ({
        id: x.id,
        name: x.name,
        backgroundImage: x.background_image,
        rating: x.rating
    })) || [];
}


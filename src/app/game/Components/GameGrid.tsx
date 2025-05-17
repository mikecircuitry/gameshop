"use client";
import GameCard, {Game} from "@/app/game/Components/GameCard";
import useSWR from "swr";

interface gameApiResponse {
    results: GameDetails[]
}

interface GameDetails {
    id: number;
    name: string;
    background_image: string;
    rating: number;
}


const getPagedGames  = async (): Promise<gameApiResponse> => {
    const response = await fetch("https://api.rawg.io/api/games?key=fe565b13a3474b92bacee0ca58a37b12&page_size=12");
    return await response.json();
}

export default function GameGrid ()  {


    const {data} = useSWR<gameApiResponse>("/games",getPagedGames);


    const games = data?.results.map((x:GameDetails): Game => ({
        id: x.id,
        name: x.name,
        backgroundImage: x.background_image,
        rating: x.rating
    })) || [];

    return (
        <div>
            <div className="row row-cols-3 row-gap-4">
                {
                    games.map((x:Game) =>
                        <div key={x.id} className="col">
                            <GameCard game={x}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
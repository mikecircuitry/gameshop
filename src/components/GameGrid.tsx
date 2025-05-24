"use client";
import {Game} from "@/models";
import GameCard from "@/components/GameCard";

export interface gameGridProps {
    games: Game[];
}

export default function GameGrid ({games}:gameGridProps){


    //const {data} = useSWR<gameApiResponse>("/games",getPagedGames);


    // const games = data?.results.map((x:GameDetails): Game => ({
    //     id: x.id,
    //     name: x.name,
    //     backgroundImage: x.background_image,
    //     rating: x.rating
    // })) || [];

    return (
        <div>
            <div className="row row-cols-3 row-gap-4">
                {
                    games.map((x:Game) =>
                        <div key={x.id} className="col">
                            <GameCard game={x}>
                                <div>

                                </div>
                            </GameCard>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
import GameGrid from "@/components/GameGrid";
import {getPagedGames} from "@/services/gameService";

export default async function page() {
    const games = await getPagedGames();
    return (
        <div>
            <GameGrid games={games}/>
        </div>
    );
}


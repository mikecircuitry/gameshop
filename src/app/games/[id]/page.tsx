import GameGrid from "@/components/GameGrid";
import Pagination from "@/components/Pagination";
import {getPagedGames} from "@/services/gameService";

export default async function page({params}: {
    params: Promise<{ id: string }>;
}) {

    const {id} = await params;

    const pageNo =  Number(id);
    const gameResponse = await getPagedGames(pageNo);

    return (
        <div>
            <GameGrid games={gameResponse.games}/>
            <Pagination currentPage={pageNo} />
        </div>
    );
}


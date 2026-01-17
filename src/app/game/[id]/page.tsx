import Sidebar from "./sidebar";
import { gameApiService } from "@/services/gameService";


export default async function details({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const gameInfo = await gameApiService.getGameById(id);

  return (
    <div className="flex flex-row gap-5">
      <div className="">
        <div className="">
          <img
            src={gameInfo.backgroundImage}
            className=""
            alt={gameInfo.name}
           
            
          />
          <div className="">
            <h5 className="text-2xl text-red-500">{gameInfo.name}</h5>
            <p className="">{gameInfo.description}</p>
          </div>
        </div>
      </div>
      <Sidebar gameInfo={gameInfo} />
    </div>
  );
}

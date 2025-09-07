import Sidebar from "./sidebar";
import { gameApiService } from "@/services/gameService";
// import Image from "next/image";

export default async function details({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const gameDetails = await gameApiService.getGameById(id);

  return (
    <div className="">
      <div className="">
        <div className="">
          <img
            src={gameDetails.backgroundImage}
            className=""
            alt={gameDetails.name}
          />
          <div className="">
            <h5 className="">{gameDetails.name}</h5>
            <p className="">{gameDetails.description}</p>
          </div>
        </div>
      </div>
      <Sidebar gameInfo={gameDetails} />
    </div>
  );
}

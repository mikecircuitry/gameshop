import { GameItemResponse } from "@/models/responses";
import { GameDetails } from "@/models";
import Sidebar from "./sidebar";

export default async function details({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const gameDetails = await getGameDetails(id);

  return (
    <div className="row">
      <div className="col-sm-8">
        <div className="card">
          <img
            src={gameDetails.backgroundImage}
            className="card-img-top"
            alt={gameDetails.name}
          />
          <div className="card-body">
            <h5 className="card-title">{gameDetails.name}</h5>
            <p className="card-text">{gameDetails.description}</p>
            <div className="row">
              <div className="col-12">
                {/*<button className="btn btn-primary" onClick={addToCart}>*/}
                {/*    Add to Cart*/}
                {/*</button>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar gameInfo={gameDetails} />
    </div>
  );
}

const getGameDetails = async (id: number): Promise<GameDetails> => {
  const response = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data: GameItemResponse = await response.json();

  return mapGameDetailsApiResponsetoGameDetails(data);
};

const mapGameDetailsApiResponsetoGameDetails = (
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

import Sidebar from "./sidebar";
import {getGameDetails} from "@/services/gameService";

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



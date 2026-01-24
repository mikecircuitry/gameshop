import { NextResponse } from "next/server";
import { getGameById } from "@features/games/service";

export const GET = async (req: Request, { params }: { params: Promise<{ id: number }> }) => {
  const queryParams = await params;
  const { id } = queryParams;
  // console.log("=============================================");
  // console.log(`GAME-DETAILS WITH ID: ${id}`);
  // console.log("=============================================");
  const results = await getGameById(id);
  return NextResponse.json(results);
};

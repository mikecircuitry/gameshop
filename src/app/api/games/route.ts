import { NextRequest, NextResponse } from "next/server";
import { getGames } from "@features/games/service";

export async function GET(request: NextRequest) {
  const pageNo = Number(request.nextUrl.searchParams.get("page")) || 1;
  // console.log("=============================================");
  // console.log(`Handling games API request for page ${pageNo}`);
  // console.log("=============================================");

  const games = await getGames(pageNo, 21);
  return NextResponse.json(games);
}

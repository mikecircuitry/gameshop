import { NextRequest, NextResponse } from "next/server";
import { getGameById } from "@features/games/service";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const results = await getGameById(Number(id));
  return NextResponse.json(results);
}

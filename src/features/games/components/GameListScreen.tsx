"use client";
import GameGrid from "@features/games/components/GameGrid";
import Pagination from "@features/games/components/Pagination";

import { Game } from "@features/games/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { gameQueries } from "../api/queries";

export type GameListScreenProps = {
  games: Game[];
  pageNo: number;
};
export const GameListScreen = () => {
  const [pageNo, setPageNo] = useState(1);

  const { data, isFetching } = useQuery(gameQueries.list(pageNo));

  return (
    <>
      <GameGrid games={data?.games ?? []} />
      {isFetching && (
        <span className={"flex justify-center text-center text-3xl font-bold text-blue-900"}>
          Loading...
        </span>
      )}
      <Pagination
        currentPage={pageNo}
        totalPages={15}
        onPageSelect={(selPage) => setPageNo(selPage)}
        prevPage={() => setPageNo(pageNo - 1)}
        nextPage={() => setPageNo(pageNo + 1)}
      />
    </>
  );
};

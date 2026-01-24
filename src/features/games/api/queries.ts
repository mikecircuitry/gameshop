import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { fetchGameById, fetchGames } from "./client";
import { gameQueryKeys } from "./keys";

export const gameQueries = {
  list: (pageNo: number) =>
    queryOptions({
      queryKey: gameQueryKeys.list(pageNo),
      queryFn: async () => await fetchGames(pageNo),
      placeholderData: keepPreviousData,
    }),

  details: (id: number) =>
    queryOptions({
      queryKey: gameQueryKeys.details(id),
      queryFn: async () => await fetchGameById(id),
    }),
};

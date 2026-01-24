export const gameQueryKeys = {
  list: (pageNo: number) => ["games", pageNo] as const,
  details: (id: number) => ["game", id] as const,
};

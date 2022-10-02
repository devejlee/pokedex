import { useInfiniteQuery } from "react-query";
import { fetchPokemon } from "@api/pokemon";

export const useQueryPokemon = () => {
  return useInfiniteQuery(["pokemon"], fetchPokemon, {
    getNextPageParam: (lastPage) => lastPage?.nextPage,
  });
}
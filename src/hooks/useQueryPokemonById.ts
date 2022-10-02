import { useQuery } from "react-query";
import { fetchPokemonById } from "@api/pokemonById";

export const useQueryPokemonById = (id: string) => {
  return useQuery(["pokemonById"], () => fetchPokemonById(id));
}
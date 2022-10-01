import { useQuery } from "react-query";
import { fetchPokemon } from "../api/pokemon";

export const useQueryPokemon = () => {
  return useQuery(["getPokemon"], fetchPokemon);
}
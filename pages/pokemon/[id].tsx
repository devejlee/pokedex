import type { NextPage } from 'next'
import { useRouter } from "next/router";
import { useQueryPokemonById } from "@hooks/index"
import Image from "next/image";

const Pokemon: NextPage = () => {
  const router = useRouter();
  const pokemonId = typeof router.query?.id === "string" ? router.query.id : "";
  const pokemon = useQueryPokemonById(pokemonId)
  console.log('pokemon', pokemon)
  return (
    <div>
      <Image src={pokemon?.data?.sprites?.other?.["official-artwork"]?.front_default} alt={pokemonId} width={100} height={100}></Image>
    </div>
  )
}

export default Pokemon
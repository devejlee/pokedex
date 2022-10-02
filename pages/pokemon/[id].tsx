import { useRouter } from "next/router";
import { useQueryPokemonById } from "@hooks/useQueryPokemonById"
import Image from "next/image";

const Pokemon = () => {
  const router = useRouter();
  const pokemonId = typeof router.query?.id === "string" ? router.query.id : "";
  const pokemon = useQueryPokemonById(pokemonId)
  console.log('pokemonId', pokemonId, 'pokemon', pokemon)
  return (
    <div>
      <Image src={pokemon?.data?.sprites?.other?.["official-artwork"]?.front_default} alt={pokemonId} width={100} height={100}></Image>
    </div>
  )
}

export default Pokemon
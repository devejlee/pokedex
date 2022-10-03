import Link from "next/link";
import { Pokemon } from '@typedef/pokemon';
import { UseInfiniteQueryResult } from "react-query";

interface PokemonListProps {
  pokemons: UseInfiniteQueryResult<{
    results: any;
    nextPage: any;
  } | undefined, unknown>
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <>
      <ul>
        {
          pokemons?.data?.pages.map((group) =>
            group?.results.map((pokemon: Pokemon) => <li key={pokemon.name}>
              <Link href={`/pokemon/${pokemon.name}`} key={pokemon.name}>
                <a>
                  {pokemon.name}
                </a>
              </Link>
            </li>)
          )
        }
      </ul>
      <button
        onClick={() => pokemons.fetchNextPage()}
        disabled={!pokemons.hasNextPage || pokemons.isFetchingNextPage}
      >
        {pokemons.isFetchingNextPage
          ? "Loading more..."
          : pokemons.hasNextPage
            ? "Load More"
            : "Nothing more to load"}
      </button>
    </>
  )
}

export default PokemonList
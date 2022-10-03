import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import PokemonList from '@components/PokemonList';
import { useQueryPokemon } from '@hooks/index';
import { Pokemon } from '@typedef/pokemon';

const Home: NextPage = () => {
  const pokemons = useQueryPokemon()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PokemonList
          isLoading={pokemons.isLoading}
          isError={pokemons.isError}>
          {
            pokemons.data?.pages.map((group) =>
              group?.results.map((pokemon: Pokemon) => <div key={pokemon.name}>
                <Link href={`/pokemon/${pokemon.name}`} key={pokemon.name}>
                  <a>
                    {pokemon.name}
                  </a>
                </Link>
              </div>)
            )
          }
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
        </PokemonList>
      </main>

    </div>
  )
}

export default Home

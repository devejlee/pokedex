import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';
import { useQueryPokemon } from '@hooks/index';
import { Pokemon } from '@typedef/pokemon';

const Home: NextPage = () => {
  const pokemons = useQueryPokemon()

  useEffect(() => {
    console.log('pokemons', pokemons)
  }, [pokemons])

  if (pokemons.isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if (pokemons.isError) {
    return (
      <div>Error</div>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {
            pokemons?.data?.pages.map((group) =>
              group?.results.map((pokemon: Pokemon) => <li key={pokemon.name}>{pokemon.name}</li>)
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
      </main>

    </div>
  )
}

export default Home

import axios from 'axios'

export const fetchPokemon = async ({
  pageParam = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
}) => {
  try {
    const { data } = await axios.get(pageParam)
    return {results: data.results, nextPage: data.next}
  } catch (err) {
    console.error(err)
  }
}
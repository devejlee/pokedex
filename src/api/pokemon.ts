import axios from 'axios'

export const fetchPokemon = async () => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
    return data.results
  } catch (err) {
    console.error(err)
  }
}
import axios from 'axios'

export const fetchPokemonById = async (id: string) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return data
  } catch (err) {
    console.error(err)
  }
}
import axios from "axios";

const request = await axios.get("https://pokeapi.co/api/v2/pokedex/2");

const PokemonArray:any = [];
request.data.pokemon_entries.map((pokemon:any) => {
  axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.entry_number).then((resp) => {
      PokemonArray.push(resp.data);
  })
});

export { PokemonArray };

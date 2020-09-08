
import pokemonsApiData from "../../classes/pokemonsData.js";
import { checkLocalStorage } from "../storage/storage.js";
import { fetchData } from "../fetch/fetch_service.js";
import { mapPokemon } from "../maper/maper.js";

export async function getPokemonsApiData(url) {
  let pokemonsData;

  try {
    pokemonData = checkLocalStorage(url);
    return JSON.parse(pokemonData);
  } catch (e) {
    let response = await fetchData(url);

    let { count, previous, next, results } = await response;

    pokemonsData = new pokemonsApiData(
      count,
      previous,
      next,
      results.map((pokemon) => pokemon.url)
    );

    localStorage.setItem(url, JSON.stringify(pokemonsData));
  }

  return pokemonsData;
}

async function buildPokemonData(pokemonsApiData) {
  let pokemonsList = pokemonsApiData.pokemonsUrls.map(async (url) => {
    try {
      let pokemonCachedData = checkLocalStorage(url);
      return JSON.parse(pokemonCachedData);
    } catch (e) {
      let pokemonData = await fetchData(url);
      let pokemon = await mapPokemon(pokemonData);
      localStorage.setItem(url, JSON.stringify(pokemon));
      return pokemon;
    }
  });

  return pokemonsList;
}

export async function getPokemons(pokemonsApiData) {
  let pokemonsPromisesList = await buildPokemonData(pokemonsApiData);
  let pokemons = pokemonsPromisesList.map((pokemonPromise) =>
    pokemonPromise.then((pokemon) => pokemon)
  );
  return pokemons;
}

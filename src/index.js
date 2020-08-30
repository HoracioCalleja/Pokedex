import { printPokemons, setPokemonCounter, loader} from "./ui/pokemons.js";
import {setPreviousAndNextPage, setPages, activeItemPage} from "./ui/paginator.js";
import { getPokemonsApiData, getPokemons } from "./pokemons/pokemons.js";

const d = document;

const pokemonsFirstURL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12";

d.addEventListener("DOMContentLoaded", async () => {
  initialize(pokemonsFirstURL);
});

async function initialize(url) {

  const pokemonAPIdata = await getPokemonsApiData(url);

  setPages(await pokemonAPIdata);
  
  setPokemonCounter(await pokemonAPIdata);
  
  setPreviousAndNextPage( pokemonAPIdata.previousPage, pokemonAPIdata.nextPage);

  const pokemons = await getPokemons(pokemonAPIdata);

  printPokemons(await pokemons);
}

async function updatePokemonsList(url){
  
  loader();
  
  const pokemonAPIdata = await getPokemonsApiData(url);

  setPreviousAndNextPage( pokemonAPIdata.previousPage, pokemonAPIdata.nextPage);

  const pokemons = await getPokemons(pokemonAPIdata);

  printPokemons(await pokemons);
}


d.addEventListener("click", (e) => {
  
  if (e.target.matches(".page-link")) {
    updatePokemonsList(e.target.dataset.url 
        || e.target.dataset.next 
        || e.target.dataset.previous);
      activeItemPage(e.target.dataset.url 
        || e.target.dataset.next 
        || e.target.dataset.previous);
  }

});

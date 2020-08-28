import { printPokemons, setPokemonCounter } from "./ui.js";
import { getPokemonsApiData, getPokemons } from "./pokemons.js";
import { setPaginator, setPages, activeItemPage } from "./paginator.js";

const d = document;

const pokemonsFirstURL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12";

d.addEventListener("DOMContentLoaded", async () => {
  initialize(pokemonsFirstURL);
});

async function initialize(url) {

  const pokemonAPIdata = await getPokemonsApiData(url);

  setPages(await pokemonAPIdata);
  
  setPokemonCounter(await pokemonAPIdata);
  
  setPaginator( pokemonAPIdata.previousPage, pokemonAPIdata.nextPage);

  const pokemons = await getPokemons(pokemonAPIdata);

  printPokemons(await pokemons);
}

async function updatePokemons(url){
  const pokemonAPIdata = await getPokemonsApiData(url);

  setPaginator( pokemonAPIdata.previousPage, pokemonAPIdata.nextPage);

  const pokemons = await getPokemons(pokemonAPIdata);

  printPokemons(await pokemons);
}


d.addEventListener("click", (e) => {
  
  if (e.target.matches(".page-link")) {
    updatePokemons(e.target.dataset.url 
        || e.target.dataset.next 
        || e.target.dataset.previous);
      activeItemPage(e.target.dataset.url 
        || e.target.dataset.next 
        || e.target.dataset.previous);
  }

});

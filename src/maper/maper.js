import Pokemon from "../../classes/pokemon.js";

/**
 *
 * @param {Object} pokemonApiData
 * @returns {Pokemon}
 */

export async function mapPokemon(pokemonApiData) {
  const {
    id,
    name,
    height,
    weight,
    abilities,
    sprites,
    types,
    stats,
  } = await pokemonApiData;

  return new Pokemon(
    id,
    name,
    height,
    weight,
    abilities.map((item) => item.ability.name),
    sprites.front_default || sprites.front_shiny || sprites.back_female,
    sprites.back_default || sprites.back_shiny || sprites.back_female,
    stats[0].base_stat,
    types.map((item) => item.type.name)
  );
}

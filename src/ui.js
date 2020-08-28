const d = document,
  $fragment = d.createDocumentFragment(),
  $template = d.querySelector(".pokemon-card").content,
  $pokemonsContainer = d.querySelector(".pokemons-container"),
  $pokemonsCount = d.querySelector(".pokemons-count");

export async function printPokemons(pokemons) {
  updateUi();

  setTimeout(async () => {
    $pokemonsContainer.textContent = " ";
    await pokemons.forEach((pokemonData) =>
      pokemonData.then((pokemon) => {
        $template.querySelector(".carousel").id = pokemon.name;
        $template.querySelector(
          ".carousel-control-prev"
        ).href = `#${pokemon.name}`;
        $template.querySelector(
          ".carousel-control-next"
        ).href = `#${pokemon.name}`;
        $template.querySelector(".card").className = `card ${pokemon.types.join(
          " "
        )}`;
        $template.querySelector(".front").src =
          pokemon.front_img || "../assets/img/pokemon_default.jpg";
        $template.querySelector(
          ".front"
        ).alt = `Front image of ${pokemon.name}`;
        $template.querySelector(".back").src =
          pokemon.back_img || "../assets/img/pokemon_default.jpg";
        $template.querySelector(".back").alt = `Back image of ${pokemon.name}`;
        $template.querySelector(".name").textContent = pokemon.name;
        $template.querySelector(
          ".hp"
        ).innerHTML = `<p>HP ----->  ${pokemon.hp} </p>`;
        $template.querySelector(
          ".height"
        ).innerHTML = ` <p>Height ----->   ${pokemon.height}</p> `;
        $template.querySelector(
          ".type"
        ).innerHTML = ` <p>Type ----->   ${pokemon.types.join(" ")}</p> `;
        $template.querySelector(
          ".weight"
        ).innerHTML = ` <p>Weight ----->   ${pokemon.weight}</p> `;
        let clone = d.importNode($template, true);
        $fragment.appendChild(clone);
        $pokemonsContainer.appendChild($fragment);
      })
    );
  }, 250);
}

export async function setPokemonCounter(apiData) {
  const { count } = await apiData;
  $pokemonsCount.textContent = `There are ${count} Pokemon's`;
}

function updateUi() {
  $pokemonsContainer.innerHTML =
    "<div class='col-12'> <h3>Cargando...</h3> </div>";
}

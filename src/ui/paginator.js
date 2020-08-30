const $next = document.querySelector(".next"),
  $previous = document.querySelector(".previous"),
  $ul = document.querySelector(".pagination");

const $fragment = document.createDocumentFragment();

export async function setPages(pokemonApiData) {
  console.log(pokemonApiData)
  const { count } = await pokemonApiData;
  let pages = Math.ceil(count / 12);
  let offsetCounter = 0;
  for (let i = 0; i < pages; i++) {
    let $li = document.createElement("li");
    let $a = document.createElement("a");
    $li.className = "page-item";
    $a.className = "page-link";
    $a.href = "#";
    $a.textContent = i + 1;
    if (i > 0) {
      offsetCounter += +12;
    } else {
      $li.classList.add("active");
    }

    $li.dataset.url = `https://pokeapi.co/api/v2/pokemon/?offset=${offsetCounter}&limit=12`;
    $a.dataset.url = `https://pokeapi.co/api/v2/pokemon/?offset=${offsetCounter}&limit=12`;
    $li.appendChild($a);
    $fragment.appendChild($li);
  }
  $ul.appendChild($fragment);
}

export function activeItemPage(activeElementUrl) {
  $ul.querySelector(".active").classList.remove("active");
  $ul.querySelector(`[data-url = "${activeElementUrl}"]`).classList.add("active");
}

export function setPreviousAndNextPage(previous, next) {
  if (!previous) {
    $previous.parentNode.classList.add("disabled");
  } else {
    $previous.parentNode.classList.remove("disabled");
  }

  if (!next) {
    $next.parentNode.classList.add("disabled");
  } else {
    $next.parentNode.classList.remove("disabled");
  }

  $next.dataset.next = next;
  $previous.dataset.previous = previous;
}

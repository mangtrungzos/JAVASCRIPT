// fetch = Function used for making HTTP requests to fetch resources
//         (JSON style data, img, files)
//         Simplifies asynchronous data fetching in JS and
//         used for interacting with APIs to retrieve and send
//         data asynchronous over the web
//         fetch(url, {options})

// Fetching Data Pokemon
async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    );
    if (!response.ok) {
      throw new Error("Fetch failed");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (err) {
    console.error(err);
  }
}

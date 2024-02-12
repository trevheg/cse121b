fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => response.json()) // gets the json method and returns response object as a json format
  .then(data => console.log(data)) // gets the data object
  .catch(error => console.error(error))

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => response.json()) // uses the .json method in the api to return a JS object
  .then(data => console.log(data.weight)) // gets the data object's weight value
  .catch(error => console.error(error))

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => {
    if (!response.ok) { // the .ok property returns true if the data was successfully fetched
      throw new Error("Could not fetch resource");
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))

// using async instead
fetchData();
async function fetchData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.error(error);
  }
}

fetchData();
async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);

    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite")
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  }
  catch (error) {
    console.error(error);
  }
}
// Final Project

// Global Variables
const pokemonElement = document.querySelector("#pokemon");
const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000"
let pokemonList = [];

// Displays list of Pokemon
const displayPokemon = async (pokemonList) => {
    // console.log(pokemonList);
    reset();
    const pokeList = pokemonList.results;


    pokeList.forEach(async (poke) => {
        let h3 = document.createElement("h3");
        let img = document.createElement("img");

        // get current pokemon api json
        const response = await fetch(poke.url);
        const pokeData = await response.json();

        // get the types of the current pokemon
        let types = [];
        pokeData.types.forEach((type) => {
            types.push(type.type.name)
        })

        const userSelection = document.querySelector("#typeFilter").value;

        // print each pokemon of the selected type to the screen
        if (userSelection && userSelection != "all") {
            if (types.includes(document.querySelector("#typeFilter").value)) {
                showPoke(pokeData);
            }
        } else if (!userSelection || userSelection == "all") {
            showPoke(pokeData);
        }

        // adds the selected pokemon to the web page
        function showPoke(pokeData) {
            const article = document.createElement("article");
            h3.innerText = `${toTitleCase(pokeData.name)}`;
            img.src = `${pokeData.sprites.front_default}`;
            img.alt = `${pokeData.name}`;
            article.appendChild(h3);
            article.appendChild(img);
            pokemonElement.appendChild(article);

        }
    })
}

// gets pokemon list from the api
const getPokemonList = async (url) => {
    const response = await fetch(url);
    pokemonList = await response.json();
    displayPokemon(pokemonList);
}

/* reset Function */
const reset = function () {
    pokemonElement.innerHTML = "";
}
// converts a string to title case
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
// event listener
document.querySelector("#typeFilter").addEventListener("change", () => (displayPokemon(pokemonList)));
getPokemonList(pokemonUrl);
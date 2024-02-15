// Final Project

// Global Variables
const pokemonElement = document.querySelector("#pokemon");
const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=9"
let pokemonList = [];

// Displays list of Pokemon
const displayPokemon = async (pokemonList) => {
    // console.log(pokemonList);
    const article = document.createElement("article");
    const pokeList = pokemonList.results;
    pokeList.forEach(async (poke) => {
        let h3 = document.createElement("h3");
        let img = document.createElement("img");
        h3.innerText = `${poke.name}`;
        // console.log(poke.url);

        // get individual pokemon api
        const response = await fetch(poke.url);
        const pokeData = await response.json();
        console.log(pokeData);



        // console.log(await data.sprites.front_default)
        img.src = `${pokeData.sprites.front_default}`;
        img.alt = `${poke.name}`;
        article.appendChild(h3);
        article.appendChild(img);
        pokemonElement.appendChild(article);
    })
}

// gets pokemon list from the api
const getPokemonList = async (url) => {
    const response = await fetch(url);
    pokemonList = await response.json();
    displayPokemon(pokemonList);
}


// // gets pokemon array from api
// const getPokemonData = async (url) => {
//     const response = await fetch(url);
//     // if (response.ok) {
//     const data = await response.json();
//     // console.log(data.sprites.front_default);
//     return data;
//     // }
// }
/* reset Function */
const reset = function () {
    pokemonElement.innerHTML = "";
}
function filterByType(list) {

}
function filterPokemon(pokemonList) {
    // reset();
    filter = document.querySelector("#typeFilter").value;
    switch (filter) {
        case "bug":
            break;
        case "dark":
            break;
        case "dragon":
            break;
        case "electric":
            break;
        case "fairy":
            break;
        case "fighting":
            break;
        case "fire":
            break;
        case "flying":
            break;
        case "ghost":
            break;
        case "grass":
            break;
        case "ground":
            break;
        case "ice":
            break;
        case "normal":
            break;
        case "poison":
            break;
        case "psychic":
            break;
        case "rock":
            break;
        case "steel":
            break;
        case "water":
            break;
        case "all":
            break;
    }
}
// event listener
document.querySelector("#typeFilter").addEventListener("change", () => (filterPokemon(pokemonList)));
getPokemonList(pokemonUrl);
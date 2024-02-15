// Final Project

// Global Variables
const pokemonElement = document.querySelector("#pokemon");
let pokemonList = [];

// Displays list of Pokemon
// const displayPokemon = (pokemon) => {
//     pokemon.forEach((poke) => {
//         const article = document.createElement("article");
//         let h3 = document.createElement("h3");
//         let img = document.createElement("img");
//         // h3.innerText = 
//     })
// }

// gets pokemon from the api
const getPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    pokemonList = await response.json();
    // displayPokemon(pokemonList);
    console.log(pokemonList);
}

getPokemon();
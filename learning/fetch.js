// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
const bugList = "https://pokeapi.co/api/v2/type/7/";
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuff(data);
    }
}
function doStuff(data) {
    results = data;
    console.log("first: ", results);
    const outputElement = document.querySelector("#output");
    const pokeHtml = `<h2>${results.name}</h2>
                    <img src="${results.sprites.front_default}" alt="image of ${results.name}">`

    outputElement.innerHTML = pokeHtml;
}
function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    const pokeList = data.results;
    // for (const poke in pokeList) {
    //     const pokeHtml = `<li>${poke.name}</li>;`
    //     pokeListElement.innerHTML += pokeHtml;
    // }
    pokeList.forEach((currentItem) => {
        const html = `<li>${currentItem.name}</li>`;
        // note the += here...
        pokeListElement.innerHTML += html;
    });
}
async function getPokemonList(url) {
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        doStuffList(data);
    }
}
getPokemon(url);
getPokemonList(urlList);
// getPokemonList(bugList);
console.log("second: ", results);

/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement("article");
        let h3 = document.createElement("h3");
        let img = document.createElement("img");
        // h3 = `<h3>${temple.templeName}</h3>`;
        // img = `<img src="${temple.imageURL}" alt="${temple.location}">`;
        h3.innerText = `${temple.templeName}`;
        img.src = `${temple.imageUrl}`;
        img.alt = `${temple.location}`;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
    
    console.log(templeList);

}
/* reset Function */
const reset = function () {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
function filterTemples (temples) {
    reset();
    filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950)));
            break;
        case "all":
            displayTemples(temples)
            break;
    }
}
/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});

getTemples();
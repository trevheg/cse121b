/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    "name": "Trevor Hegstrom",
    "photo": "images/me-image.jpg",
    "favoriteFoods": [
        "pizza", 
        "cheesecake", 
        "curry", 
        "pretzel"
    ],
    "hobbies": [
        "music",
        "running",
        "role-playing games",
    ],
    "placesLived": [],
};

/* Populate Profile Object with placesLived objects */
myProfile.placesLived.push(
    {
        "place": "San Jose, California",
        "length": "25 years"
    }
);
myProfile.placesLived.push(
    {
        "place": "London, England",
        "length": "2 years"
    }
);
myProfile.placesLived.push(
    {
        "place": "Rexburg, Idaho",
        "length": "4 years"
    }
);
myProfile.placesLived.push(
    {
        "place": "San Luis Obispo, Idaho",
        "length": "3 years"
    }
);




/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;

document.querySelector("#photo").alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
    let newFood = document.createElement("li");
    newFood.textContent = food;
    favoriteFoods = document.querySelector("#favorite-foods");
    favoriteFoods.appendChild(newFood);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let newHobby = document.createElement("li");
    newHobby.textContent = hobby;
    document.querySelector("#hobbies").appendChild(newHobby);
})


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);

})


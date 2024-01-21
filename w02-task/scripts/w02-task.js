/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Trevor Hegstrom";
const currentYear = 2024;
const profilePicture = "images/me-image.jpg"

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
let imageElement = document.createElement('img');
imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ['pizza', 'doughnuts', 'curry'];
foodElement.innerHTML = favoriteFoods;
let newFood = "cheesecake";
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br> ${favoriteFoods}`;
favoriteFoods.shift(0);
foodElement.innerHTML += `<br> ${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br> ${favoriteFoods}`;







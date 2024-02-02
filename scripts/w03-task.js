/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers () {
    let add1 = Number(document.querySelector('#add1').value);
    let add2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(add1, add2);    
}
document.querySelector('#addNumbers').addEventListener("click", addNumbers)
/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}
const subtractNumbers = function () {
    let sub1 = Number(document.querySelector('#subtract1').value);
    let sub2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(sub1, sub2);
}
document.querySelector('#subtractNumbers').addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
}
const multiplyNumbers = () => {
    let num1 = Number(document.querySelector('#factor1').value);
    let num2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(num1, num2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
    return number1 / number2;
}
const divideNumbers = () => {
    let num1 = Number(document.querySelector('#dividend').value);
    let num2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(num1, num2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

const getTotal = () => {
    let subtotal = Number(document.querySelector('#subtotal').value)
    if (document.querySelector('#member').checked) {
        subtotal *= .8;
    }
    document.querySelector('#total').innerHTML = "$ " + subtotal.toFixed(2);

}

document.querySelector('#getTotal').addEventListener('click', getTotal)


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = myNumbs;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = myNumbs.filter(numb => numb % 2 === 1);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = myNumbs.filter(numb => numb % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = myNumbs.reduce((total, numb) => total + numb);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = myNumbs.map(numb => numb * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = myNumbs.map(numb => numb * 2).reduce((sum, numb) => sum + numb);

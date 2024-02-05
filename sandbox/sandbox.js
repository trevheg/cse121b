// const buttonElement = document.getElementById("submitButton");

// function copyInput(event) {
//   // take a look at the event!
//   console.log(event);
//   const inputElement = document.getElementById("inputBox");
//   const outputElement = document.getElementById("output");
//   outputElement.innerHTML = inputElement.value;
// }
// buttonElement.addEventListener("click", copyInput);
// const log = document.querySelector("#log");

// document.addEventListener("keydown", logKey);

// function logKey(e) {
//   // how do we know which key was pressed?
//   console.log(e);
//   console.log(e.key);
//   // checkout e.code, e.key, and e.keyCode
//   // what is the difference?
//   // the following will make the "log" paragraph equal to the key pressed
//   log.innerHTML = e.key;
// }

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i=0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}
let itemNo = 0;
while (itemNo < studentReport.length) {
  if (studentReport[itemNo] < LIMIT) {
    console.log(studentReport[itemNo]);
  }
  itemNo ++;
}
studentReport.forEach(n => {
  if (n < LIMIT) {
    console.log(n);
  }
})
for (const i in studentReport) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}
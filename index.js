// PRESS ONE NUMBER
// - GET THE NUMBER? 
const buttonOneHTML = document.getElementById("buttonOne");
let firstNumber;
buttonOneHTML.addEventListener("click", () => {
  // - SOMETHING TO HAPPEN WHEN CLICKED
  alert("THIS HAS BEEN CLICKED");  
  // - STORE IT -> VARIABLE
  firstNumber = 1;
})
// PRESS OPERATOR -> +
// - get the operation, add event listener and store it
const buttonPlusHTML = document.getElementById("buttonPlus");
let plusButton;
buttonPlusHTML.addEventListener("click", () => {
  plusButton = '+';
})
// PRESS SECOND NUMBER
const buttonTwoHTML = document.getElementById("buttonTwo");
let secondNumber;
buttonTwoHTML.addEventListener("click", () => {
  secondNumber = 2;
})
// PRESS EQUALS -> =
const buttonEqualsHTM = document.getElementById("buttonEquals");
let equalsButton;
buttonEqualsHTM.addEventListener("click", () => {
  equalsButton = '=';
})
// DISPLAY RESULT
console.log()
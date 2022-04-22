// // PRESS ONE NUMBER
// // - GET THE NUMBER?
// const buttonOneHTML = document.getElementById("buttonOne");
// let firstNumber;
// buttonOneHTML.addEventListener("click", () => {
//   // - SOMETHING TO HAPPEN WHEN CLICKED
//   alert("THIS HAS BEEN CLICKED");
//   // - STORE IT -> VARIABLE
//   firstNumber = 1;
// })
// // PRESS OPERATOR -> +
// // - get the operation, add event listener and store it
// const buttonPlusHTML = document.getElementById("buttonPlus");
// let plusButton;
// buttonPlusHTML.addEventListener("click", () => {
//   plusButton = '+';
// })
// // PRESS SECOND NUMBER
// const buttonTwoHTML = document.getElementById("buttonTwo");
// let secondNumber;
// buttonTwoHTML.addEventListener("click", () => {
//   secondNumber = 2;
// })
// // PRESS EQUALS -> =
// const buttonEqualsHTM = document.getElementById("buttonEquals");
// let equalsButton;
// buttonEqualsHTM.addEventListener("click", () => {
//   equalsButton = '=';
// })
// // DISPLAY RESULT
// console.log()...
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    // damit verhindere ich, dass ich mehr als einen Punkt machen kann
    this.currentOperand = this.currentOperand.toString() + number.toString();
    // toString: muss ich so machen, damit die Nummern nicht addiert werden, sondern hintereinander geschrieben werden
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return; // falls die Eingabe leer ist, geht es nicht weiter
    if (this.previousOperand !== "") {
      this.compute(); // wenn der vorherige nicht leer ist und unten was steht, dann soll es gerechnet werden und danach erst weiter
    } // zum updaten alle Variablen
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    // hiermit speichere ich die aktuelle Eingabe und schiebe sie in die previous und dann leere ich die aktuelle Eingabe wieder mit:
    this.currentOperand = "";
    // jetzt muss ich das im updateDisplay updaten damit es dort in die obere Zeile kommt (this.previousOperandTextElement.innerText = this.previousOperand)
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      case "±":
        computation = "-" + current;
        break;
      case "%":
        computation = current / 100;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]); // Zahl vor dem Punkt
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay; // Zahl nach dem Punkt
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      // falls Dezimalzahl
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = ""; // leert die prevOp Zeile
    }
  }
}

// als erstes definiere ich die button
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");

const clearButton = document.querySelector("[data-clear]");
const equalsButton = document.querySelector("[data-equals]");
const plusMinusButton = document.querySelector("[data-plusMinus]");
const percentButton = document.querySelector("[data-percent]");

const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// danach: add.EventListener for Buttons (forEach): numbers, operations, clear and equals
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

clearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

plusMinusButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

percentButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

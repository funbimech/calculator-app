const buttonchoice = document.querySelectorAll(".buttonchoice");
const btnchoice = document.querySelectorAll(".btnchoice");
const btnchoices = document.querySelector(".btnchoices");
const btnchoice2 = document.querySelector(".btnchoice2");
const btnchoice3 = document.querySelector(".btnchoice3");
const buttonchoices = document.querySelector(".buttonchoices");
const container = document.querySelector(".container");
const buttonchoice1 = document.querySelector(".buttonchoice1");
//  const result = document.getElementById('result')
const btn = document.querySelector(".btn");

let answer = 0;
let operation = "";
let expression = "";
let num1 = "";
let num2 = "";

buttonchoice.forEach((button) => {
  button.addEventListener("click", () => {
    // const numDiv = parseInt(button.textContent);
    expression += button.textContent;
    answer = button.textContent;
    result.textContent = expression;
  });
});

btnchoice.forEach((button) => {
  button.addEventListener("click", () => {
    expression += button.textContent;
    answer = "";
    result.textContent = expression;
  });
});

buttonchoices.addEventListener("click", () => {
  answer = "";
  expression = "";
  result.textContent = "";
});
function operate(operatorsymbol) {
  operation = operatorsymbol;  
  num1 = result.textContent;
  answer = "";
}
function evaluation(expression) {
  expression = answer;
  switch (operation) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      result = parseFloat(num1) / parseFloat(num2);
      break;
  }
  const result = (document.getElementById("result").value = answer);
}

// function appendnum(buttonchoice) {
//   answer += buttonchoice
// };
// function appendoperator(btnchoice) {
// operator = btnchoice;
// num1 = answer;
// answer = ''
// }
// function evaluation() {
//   num2 = answer;
// switch(operator) {
//   case '+':
// answer = parseFloat(num1) + parseFloat(num2);
// break;

btnchoices.addEventListener("click", () => {
  answer = evaluation(expression);
  result.textContent = answer;
});

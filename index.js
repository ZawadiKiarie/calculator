function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let num1;
let op;
let num2;

function operate(num1, op, num2) {
  if(op === '+') {
    return add(num1, num2);
  }else if(op === '-'){
    return subtract(num1, num2);
  }else if(op === '*'){
    return multiply(num1, num2);
  }else if(op === '/'){
    return divide(num1, num2);
  }
}

console.log(operate(1,'-',1));
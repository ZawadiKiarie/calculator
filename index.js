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

function divisible(num1, num2){
  return num1 % num2;
}

let num1 = '';
let op = '';
let num2 = '';

function operate(num1, op, num2) {
  if(op === '+') {
    return add(num1, num2);
  }else if(op === '-'){
    return subtract(num1, num2);
  }else if(op === '×'){
    return multiply(num1, num2);
  }else if(op === '÷'){
    return divide(num1, num2);
  }else if(op === '%'){
    return divisible(num1, num2);
  }
}

const numBtns = document.querySelectorAll('.num');

numBtns.forEach((numDiv) => {
  numDiv.addEventListener('click', () => {
    if(op === ''){
      num1 +=  numDiv.textContent;
      displayNum(num1);
    }else{
      num2 += numDiv.textContent;
      displayNum(num2);
    }
  });
});

const upperDisplay = document.querySelector('.upper');
const lowerDisplay = document.querySelector('.lower');


function displayNum(num) {
  lowerDisplay.textContent = num;
  return upperDisplay;
}

const opBtns = document.querySelectorAll('.op');
let result = 0;

opBtns.forEach((opDiv) => {
  opDiv.addEventListener('click', () => {
    if(op === ''){
      if(lowerDisplay.textContent === ''){
        num1 = '0';
      }else{
        num1 = lowerDisplay.textContent;
      }
      op = opDiv.textContent;
      displayOp();
    }else if(num2 !== '') {
      result = operate(parseFloat(num1), op, parseFloat(num2));
      num1 = result;
      op = opDiv.textContent;
      displayNum(num1);
      displayOp();
      num2 = '';
    }else {
      op = opDiv.textContent;
      displayOp();
    }
  });
});

function displayOp() {
  upperDisplay.textContent = `${num1} ${op}`;
}

const equalBtn = document.querySelector('.equal');

equalBtn.addEventListener('click', () => {
  result = operate(parseFloat(num1), op, parseFloat(num2));
  roundedResult = parseFloat(result.toFixed(3));
  upperDisplay.textContent = `${num1} ${op} ${num2} =`;
  console.log(roundedResult);
  if(!isFinite(roundedResult) || isNaN(roundedResult)){
    lowerDisplay.textContent = 'MATH ERROR';
  }else {
    lowerDisplay.textContent = roundedResult;
  }
  num1 = '';
  num2 = '';
  op = '';
});

const allClearBtn = document.querySelector('.allClear');

allClearBtn.addEventListener('click', () => {
  clearDisplay();
});

function clearDisplay() {
  upperDisplay.textContent = '';
  lowerDisplay.textContent = 0;
  num1 = '';
  op = '';
  num2 = '';
}

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
  if(lowerDisplay.textContent !== '') {
    if(num2 === ''){
      lowerDisplay.textContent = lowerDisplay.textContent.slice(0, -1);
      num1 = lowerDisplay.textContent;
    }else if(num2 !== ''){
      lowerDisplay.textContent = lowerDisplay.textContent.slice(0, -1);
      num2 = lowerDisplay.textContent;
    }
  }
});

let decimalEntered = false;

const dotBtn = document.querySelector('.dot');
dotBtn.addEventListener('click', () => {
  if(decimalEntered == false){
    if(op === ''){
      if(lowerDisplay.textContent === ''){
        num1 = '0';
        num1 += '.';
        displayNum(num1);
      }else{
        num1 = lowerDisplay.textContent;
        num1 += '.';
        displayNum(num1);
      }
    }else {
      num2 += '.';
      displayNum(num2);
    }
  }
  decimalEntered = true;
});
const buttons = document.querySelectorAll('.button');
const equality = document.querySelector('#equality');
const clear = document.querySelector('#C');
const del = document.querySelector('#del');

buttons.forEach((button) => {
  button.addEventListener('click', addToDisplay);
});

// remove event listener from equality, clear, and del
equality.removeEventListener('click', addToDisplay);
clear.removeEventListener('click', addToDisplay);
del.removeEventListener('click', addToDisplay);

function addToDisplay(e) {
  const display = document.querySelector('.display');
  if (display.value === undefined) {
    display.value = '';
  }
  if (
    e.target.innerText === '+' ||
    e.target.innerText === '-' ||
    e.target.innerText === '*' ||
    e.target.innerText === '/'
  ) {
    display.value += ' ' + e.target.innerText + ' ';
  } else {
    display.value += e.target.innerText;
  }
  display.innerText = display.value;
  console.log(e.target.innerText);
}

del.addEventListener('click', () => {
  const display = document.querySelector('.display');
  display.value = display.value.slice(0, -1);
  display.innerText = display.value;
});

clear.addEventListener('click', () => {
  const display = document.querySelector('.display');
  display.value = '';
  display.innerText = display.value;
});

equality.addEventListener('click', evaluate);

function evaluate() {
  const display = document.querySelector('.display');
  const displayValue = display.value;
  const displayArray = displayValue.split(' ');
  if (displayArray.length % 2 === 0 || displayArray.length === 1) {
    display.value = 'ERROR';
    display.innerText = display.value;
  } else {
    for (let i = 0; i < displayArray.length; i++) {
      if (
        (displayArray[i] === '+' ||
          displayArray[i] === '-' ||
          displayArray[i] === '*' ||
          displayArray[i] === '/') &&
        (displayArray[i + 1] === '+' ||
          displayArray[i + 1] === '-' ||
          displayArray[i + 1] === '*' ||
          displayArray[i + 1] === '/' ||
          displayArray[i - 1] === '+' ||
          displayArray[i - 1] === '-' ||
          displayArray[i - 1] === '*' ||
          displayArray[i - 1] === '/')
      ) {
        display.value = 'ERROR';
        display.innerText = display.value;
      }
      if (displayArray[i] === '*') {
        displayArray.splice(
          i - 1,
          3,
          parseFloat(displayArray[i - 1]) * parseFloat(displayArray[i + 1])
        );
        i = 0;
      } else if (displayArray[i] === '/') {
        displayArray.splice(
          i - 1,
          3,
          parseFloat(displayArray[i - 1]) / parseFloat(displayArray[i + 1])
        );
        i = 0;
      }
    }

    for (let i = 0; i < displayArray.length; i++) {
      if (
        (displayArray[i] === '+' ||
          displayArray[i] === '-' ||
          displayArray[i] === '*' ||
          displayArray[i] === '/') &&
        (displayArray[i + 1] === '+' ||
          displayArray[i + 1] === '-' ||
          displayArray[i + 1] === '*' ||
          displayArray[i + 1] === '/' ||
          displayArray[i - 1] === '+' ||
          displayArray[i - 1] === '-' ||
          displayArray[i - 1] === '*' ||
          displayArray[i - 1] === '/')
      ) {
        display.value = 'ERROR';
        display.innerText = display.value;
      }
      if (displayArray[i] === '+') {
        displayArray.splice(
          i - 1,
          3,
          parseFloat(displayArray[i - 1]) + parseFloat(displayArray[i + 1])
        );
        i = 0;
      } else if (displayArray[i] === '-') {
        displayArray.splice(
          i - 1,
          3,
          parseFloat(displayArray[i - 1]) - parseFloat(displayArray[i + 1])
        );
        i = 0;
      }
    }
    display.value = displayArray[0];
    display.innerText = display.value;
    console.log(displayArray);
  }
}

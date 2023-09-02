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

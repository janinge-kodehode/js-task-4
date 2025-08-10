const display = document.getElementById('display');

//Takes the input and appends it to the display
function appendToDisplay(input) {
  display.value += input;
}

//Clears the display
function clearDisplay() {
  display.value = '';
}

//Calculates the equation in the display, if the equiation isnt valid it returns an error message, If the display is empty it returns undefined
function calculate() {
  try {
    display.value = eval(display.value);
    console.log(display.value);
  } catch (error) {
    display.value = 'Error';
    console.log('Error');
  }
}

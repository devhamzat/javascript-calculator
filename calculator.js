var errorMessage = "syntax error";
var currentOperator = '';

function changeOperator(newOperator) {
  currentOperator = newOperator;
  var display = document.getElementById("input-text");
  if (display.value.endsWith('+') || display.value.endsWith('-') || display.value.endsWith('*') || display.value.endsWith('/')) {
    display.value = display.value.slice(0, -1);
  }
  display.value += currentOperator;
}

function displayFunction(displayValue) {
  var display = document.getElementById("input-text");
  if ((displayValue === '+' || displayValue === '-' || displayValue === '*' || displayValue === '/') &&
      (display.value.endsWith('+') || display.value.endsWith('-') || display.value.endsWith('*') || display.value.endsWith('/'))) {
    return;
  }
  if (displayValue === '.' && (display.value.endsWith('.') || display.value === '')) {
    return;
  }
  display.value += displayValue;
}

function calcButton() {
  var display = document.getElementById("input-text");
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert(errorMessage);
  }
}

function deleteFunction() {
  var display = document.getElementById("input-text");
  display.value = display.value.slice(0, -1);
}

function clearFunction() {
  var display = document.getElementById("input-text");
  display.value = "";
}




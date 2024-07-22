
function askNumber (message = 'Dime un número.') {
  let number;
  do {
    number = prompt(message);
  } while (number === null || number === '' || isNaN(number))
  number = Number(number);

  return number;
}

function askText (message = 'Dime un texto.') {
  let text;
  do {
    text = prompt(message);    
  } while (text === null || text === '' || !isNaN(text));

  return text;
}


export { askNumber, askText };
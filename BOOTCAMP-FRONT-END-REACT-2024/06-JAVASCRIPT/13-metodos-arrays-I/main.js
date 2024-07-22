//? Métodos de los arrays

const frutas = ['🍎', '🍐', '🍌', '🍇'];

//! no puedes saber si un array es o no un array usando el "typeof"
console.log(typeof frutas);

//* hay que usar Array.isArray()
console.log(Array.isArray(frutas));


//* ========================================== *//
//! OJO!!!! Porque los 4 siguientes métodos MUTAN EL ARRAY ORIGINAL
//! Imagínate los arrays como un LIFO (Last in first out), con lo que es mejor usar push y pop, que unshift y shift

//* .push(...elementos) 👉 Para METER elementos AL FINAL DEL ARRAY

frutas.push('🍑');
console.log(frutas);

// puedes añadir varios a la vez
frutas.push('🍈', '🍉');
console.log(frutas);

//* .pop() 👉 Para QUITAR elementos de la última posición
frutas.pop();
frutas.pop();
frutas.pop();
console.log(frutas);

//* .unshift(...elementos) 👉 Para METER elementos AL PRINCIPIO DEL ARRAY
frutas.unshift('🍈', '🍉');
console.log(frutas);

//* .shift() 👉 Para QUITAR elementos del PRINCIPIO DEL ARRAY
frutas.shift();
frutas.shift();
console.log(frutas);


//* ========================================== *//
//* ========================================== *//

//* indexOf(valor) 👉 Devuelve el índice del array en la posición donde se encuentra el valor que has pasado
//! solo vale para valores primitivos!

console.log(frutas.indexOf('🍌'));
console.log(frutas.indexOf('🍍'));

//* .includes(valor) 👉 Deevuelve true o false dependiendo de si elvalor se encuentra en el array o no
console.log(frutas.includes('🍌'));
console.log(frutas.includes('🍍'));


//* ========================================== *//

//* .reverse() 👉 Para invertir un array

console.log(frutas.reverse());

//! OJO!!! porque invirte el array original
console.log(frutas);

// De siempre hemos clonado el array y luego invertirlo

const frutasInvertido = [...frutas].reverse();

console.log(frutasInvertido);
console.log(frutas);         

//* TENEMOS NUEVO MÉTODO --> toReversed() 👉 Lo mismo que reverse() pero sin mutar, te devuelve un array nuevo

const frutasNuevoReverse = frutas.toReversed();

console.log(frutas);            
console.log(frutasNuevoReverse);

//* ========================================== *//

const frase = 'Con cien cañones por banda';

const palabras =  frase.split(' ');
console.log(palabras);

//* .join('separador') 👉 Para juntar un array y transformarlo en un string usando el separador que le pongas

const stringConGuiones = palabras.join('-');
const stringConAsteriscos = palabras.join('***');
console.log(stringConGuiones);
console.log(stringConAsteriscos);


// ejemplo de capitalizar un texto entero

const palabrasCapitalizadas = [];

for (const palabra of palabras) {
  const palabraCapitalizada = palabra.slice(0, 1).toUpperCase() + palabra.slice(1);
  palabrasCapitalizadas.push(palabraCapitalizada);
}

const stringConEspacios = palabrasCapitalizadas.join(' ');
console.log(stringConEspacios);


// ejemplo de hacer esto en una función

function capitalizeWords (text = '') {
  if (typeof text !== 'string') return '';

  const words = text.split(' ');
  const capitalizedWords = [];

  for (const word of words) {
    const capitalizeWord = word.slice(0, 1).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalizeWord);
  }

  return capitalizedWords.join(' ');
}



//* ========================================== *//

//* .slice(corteInicial, corteFinal) 👉 Para que te de una copia de un pedazo de trozo de array

const nums = [2, 15, -13, 23, 75, 4, 12];

const trozoDeNums = nums.slice(2, 5);
console.log(trozoDeNums);

const desdeIndice3HastaFinal = nums.slice(3);
console.log(desdeIndice3HastaFinal);

console.log(nums);




//* .splice(corteInicial, cantidadACortar) 👉 Para que QUITE DEL ARRAY ORIGINAL ELEMENTOS
//! ESTE MUTA!!!

nums.splice(1, 1);

console.log(nums);

// además te permite METER ELEMENTOS EN ESA POSICIÓN, en el tercer parámetro

// si quieres cambiar un trozo por algo en el segundo parámetro pon un número
nums.splice(3, 1, '🐶');

console.log(nums);

// si no quieres quitar ninguno, pon un 0

nums.splice(1, 0, '🐱', '🐀');
console.log(nums);



//* NUEVO MÉTODO!!!!   toSpliced() 👉 Hace lo mismo pero NUNCA MUTA EL ORIGINAL, siempre te da un array nuevo modificado

const nuevoArraySin23 = nums.toSpliced(nums.indexOf(23), 1);

console.log(nuevoArraySin23);
console.log(nums);           

/*
  RESUMEN

  Array.isArray()     👉 Para saber si una variable tiene un array
  
  .push()             👉 Para añadir al final       //! MUTA
  .pop()              👉 Para quitar final          //! MUTA
  .unshift()          👉 Para añadir al principio   //! MUTA
  .shift()            👉 Para quitar del principio  //! MUTA


  .indexOf()          👉 Para encontrar el índice de un elemento
  .includes()         👉 Para saber si el elemento está en el array


  .join()             👉 Crear un string a partir de un array

  .reverse()          👉 Invertir un array MUTÁNDOLO   //! MUTA
  .toReversed()       👉 Invertir un array SIN MUTARLO

  .slice()            👉 Para que te de una ciopia de un trozo de array
  .splice()           👉 Para que te eleminie elementos de un array MUTÁNDOLO  //! MUTA
  .toSpliced()        👉 Para que te eleminie elementos de un array SIN MUTARLO

*/

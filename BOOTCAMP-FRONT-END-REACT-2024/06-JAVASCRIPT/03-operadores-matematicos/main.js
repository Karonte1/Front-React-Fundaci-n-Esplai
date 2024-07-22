//? Operadores matemáticos

//* Sumar --> +


const num1 = 5;
const num2 = 10;

// PODEMOS SUMAR
console.log('num1 + num2 -->', num1 + num2);

// También podemos CONCATENAR STRINGS
const nombre = 'Ivan';
const apellido = 'Luengo';
const nombreCompleto = 'Mi nombre es ' + nombre + ' ' + apellido + '.';

console.log(nombreCompleto);

// la otra forma es usando backticks (template literal)

const nombreCompletoBacktick = `Mi nombre es ${nombre} ${apellido}.`;
console.log(nombreCompletoBacktick);

//! cosas raras del símbolo +
//* Si uno de los dos valores a sumar ES UN STRING, va a intentar convertir el otro en un STRING y los va a concatenar.

console.log('5 + 5 -->', 5 + 5);
console.log('5 + "5" -->', 5 + "5");
console.log('"5" + true -->', "5" + true);
console.log('"5" + undefined -->', "5" + undefined);



//* ========================================== *//

//* Restar -->    -

console.log('num1 - num2 -->', num1 - num2);

//! Cosas raras de la resta y de todos los siguientes
//* Si uno de los dos es un number, va a intentar transformar el otro en un number


console.log('5 - 3 -->', 5 - 3);
console.log('5 - "3" -->', 5 - "3");
console.log('5 - true -->', 5 - true);
console.log('5 - false -->', 5 - false);
console.log('5 - null -->', 5 - null);
console.log('5 - undefined -->', 5 - undefined);
console.log('5 - "hola" -->', 5 - "hola");

// cosa curiosa --> NaN (not a number) es un valor de tipo Number
console.log(typeof NaN);

//* Multiplicar --> *

console.log('num1 * num2 -->', num1 * num2);
console.log('5 * null -->', 5 * null);


//* Exponente -->  **

console.log('num1 ** num2 -->', num1 ** num2);
console.log('3 ** 3 -->', 3 ** 3);



//* Dividir --> /

console.log('num1 / num2 -->', num1 / num2);
console.log('5 / null -->', 5 / null); // Infinity

console.log(typeof Infinity); // "number"


//* Módulo --> %
console.log(10 % 5); // 0 porque 10 entre 5 es exacto

console.log(10 % 3); // 1 porque 10 entre 3 es 9 y a diez falta 1

console.log(5 % 10) // 5 porque 10 * 0 = 0 y faltan 5;

// Para qué carajo lo usamos???

// Para saber si un número es múltiplo de otro
// Para saber si un número es par o impar


// ¿es múltiplo?
console.log(237 % 37); // No, porque no da 0, da 15
console.log(144 % 12); // Sí, porque da 0, es exacto, 12 * 12 = 144

// ¿Es par?
console.log(36343543 % 2); // No es par, es impar

//* ========================================== *//

//* ========================================== *//

//? EXTRAS!!

//* Decidir cuantos decimales quieres en un número --> toFixed()

const division = 10 / 3;
console.log(division);

const divisionDosDecimalesString = division.toFixed(2);
console.log(divisionDosDecimalesString);



//* Convertir un string a un Number

const divisionEntera = parseInt(divisionDosDecimalesString);
console.log(divisionEntera);

const divisionFlotante = parseFloat(divisionDosDecimalesString);
console.log(divisionFlotante);

const divisionNumber = Number(divisionDosDecimalesString);
console.log(divisionNumber);

const divisionPlus = +divisionDosDecimalesString;
console.log(divisionPlus);


//* Podemos hacerlo todo en la misma línea
//! pero dependiendo de cómo, yo preferiría separar por líneas


const division2 = Number((10 / 3).toFixed(2));
console.log('division2 -->', division2);

const division3 = 10 / 3;
const division3Decimals = division3.toFixed(2);
const division3Number = Number(division3Decimals);
console.log('division3Number -->', division3Number);

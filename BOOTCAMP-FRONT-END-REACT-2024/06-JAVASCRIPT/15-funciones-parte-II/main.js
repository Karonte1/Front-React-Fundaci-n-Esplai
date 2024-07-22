"use strict"


//? Funciones - Parte II

//* Todo argumento que le pases a una función cuando la ejecutes, TAMBIÉN CUMPLE LO DE VALOR/REFERENCIA

const numero = 5;

function cambiarValor (valor) { // valor = 5
  valor += 5;

  console.log('Dentro de la funcion' ,valor);
}


cambiarValor(numero);

console.log(numero);


// En este caso, al pasar el valor primitivio, solo estamos pasando una copia del valor, la variable original se queda fuera y no cambia.

//! En el siguiente caso, al pasar por parámetro un array, lo que le pasamos a la función es LA REFERENECIA AL ARRAY ORIGINAL, así que si dentro de la funci´ñon cambias el array, estás cambiando el original


const frutas = ['🍎', '🍐'];


function cambiarArray (array) {
  array.push('algo');
  console.log('Dentro de la funcion', array);
}

cambiarArray(frutas);
console.log(frutas);

//* ========================================== *//
//* ========================================== *//


//* Las funciones "antiguas" que usan la palabra function tienen la particularidad de que pueden ser ejecutadas ANTES INCLUSO DE SER CREADAS
// A esto se le llama "hoisting". 


saludo();

function saludo () {
  console.log('hola');
}

//! con una variable esto es impensable
// console.log(nombre); //! no se puede
const nombre = 'Ivan';


//* ========================================== *//
//* ========================================== *//

//* Funciones anónimas

//* el problema, podemos sin querer sobreescribir el valor de una funciñon por otra cosa

function restar (a, b) {
  return a - b;
}
restar = '👿';
// restar() // cagada 💩

//* solución, guardarla en una constante como función anónima para que no te permita reasignarle un valor.

const multiplicar = function (a, b) {
  return a * b;
}
// multiplicar = '👹';




//! no se pueden crear y dejarlas sueltas sin nombre, hay que guardarlas en una varuable o pasarselas a alguien
// function (a, b) {
//   return a + b;
// }

// en una variable
const sumar = function (a, b) { return a + b }; // 0x555

console.log(sumar(4, 7));


// pasarla a una función como argumento

function dameUnaFucnion (texto, fn) {
  console.log(texto);
  fn()
}

dameUnaFucnion('Hola', function () { console.log('qué ase?') });





//* ========================================== *//
//* ========================================== *//
//* ========================================== *//

//* Arrow functions => funciones flecha


// función anónima normal    function () { }
// función flecha            () => {}

const division = function (a, b) {
  return a / b;
}

const modulo = (a, b) => {
  return a % b;
}


//* Nuevas características

//* Si solo tiene 1 parámetro, te permite quitar los paréntesis

const buenosDias = nombre => {
  console.log('Buenos días, ' + nombre);
}


//* Si NO TIENE PARÁMETROS, puedes quitarle los paréntesis y poner un guión bajo

const buenasTardes = _ => {
  console.log('Buenos tardes');
}


//* Si solo tienes UNA LÍNEA DE EJECUCIÓN, puedes quitar las llaves

const buenasNoches = (nombre) => console.log('Buenas noches, ' + nombre);


//* Si esa única línea de ejecución ES UN RETURN, NO HACE FALTA QUE PONGAS LA PALABRA return, porque la flecha del arrow function tiene un return implícito

const resta = (a, b) => {
  return a - b;
}

const suma = (a, b) => a + b;
console.log(suma(5, 3));



//* ¿Dónde utilizo yo cada una?  

//! Completamente SUBJETIVO

//? Las funciones normales las uso siempre que tengo que crear una función suelta.

function convertirString (texto) {
  // convertir texto

  return texto;
}


//? Las arrow functions las utilizo cuando una función me pide que le pase otra función.

function dameUnaFuncion (fn) {

  // hace lo que sea
  fn();
}

dameUnaFuncion(function () { console.log('Ivan') });

dameUnaFuncion(() => console.log('Ivan'));
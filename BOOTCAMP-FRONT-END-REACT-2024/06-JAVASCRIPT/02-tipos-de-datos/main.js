//? Tipos de datos

//? PRIMITIVOS

//* Strings - cadenas de texto

const nombre = 'Ivan';
const apellido = "Luengo";
const ciudad = `Barcelona`;
const textoConSaltos = `Esto es un texto
con un salto de línea`;
const textoConBarraN = 'Otro texto con \nsalto de línea';
const textoVacío = ''; // técnicamente es un string

console.log(nombre);
console.log(typeof nombre); // "string"

console.log(textoConSaltos);
console.log(textoConBarraN);



//* Number - TODOS los números

const edad = 37;
const temperatura = 30.5;
const congelado = -7.4;

console.log(edad);
console.log('37');
console.log(typeof temperatura); // "number"

console.log(typeof 493753945878935475345n); // "bigint"

//* Boolean - Valores booleanos  on/off si/no 1/0  -->  true/false

const estoyCasado = true;
const tengoHijos = false;

const isMarried = true;

console.log(isMarried);
console.log('true');
console.log(typeof tengoHijos); // "boolean"

//* undefined - cuando no hemos dado ningún tipo de valor de forma explícita

let city;
console.log(city);
console.log(typeof city); // "undefined"

//* null - cuando EXPLÍCITAMENTE quiero que algo guarde NADA como valor

let password = null;
console.log(password);

console.log(typeof null); //* curiosidad de JavaScript (ERROR).



//* Symbol()

const simbolo = Symbol();
console.log(typeof simbolo); // "symbol"


//* ========================================== *//
//* ========================================== *//

//? NO PRIMITIVOS

//* Arrays -- []

const amigos = ['Carlos', 'Jesus'];
const edades = [37, 15, 24, 13.6, -5];
const mix = ['Hola', 13, true, null, undefined]; //* Se permite
//! pero no se recomienda

const matriz = [ ['Ivan', 37], ['Adri', 20] ];


//* Objetos -- {}

const usuario = { nombre: 'Ivan', edad: 37, estaCasado: true };


//* Funciones -- function () {}    () => {}

function sumar (a, b) {
  return a + b;
}

const restar = (a, b) => { return a - b };

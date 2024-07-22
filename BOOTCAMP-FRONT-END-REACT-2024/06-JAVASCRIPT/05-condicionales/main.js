//? CONDICIONALES

const num1 = 5;
const num2 = 10;

//* if....   si "esto" se cumple....haz "esto otro"


/*
  if (condicion se cumple) {
    ejecuta esto;
  }
*/

if (true) { 
  console.log('Dentro del if - true');
}

if (false) {
  console.log('Dentro del if - false');
}



//? Operadores de comparación o condicionales
//* Mayor que...    >

if (num1 > num2) {
  console.log('num1 es mayor que num2');
}



//* Mayor o igual que...    >=

if (num1 >= 5) {
  console.log('num1 es mayor o igual que 5');
}

//* Menor que...   <
if (num1 < 6) {
  console.log('num1 es menor que 6');
}

//* Menor o igual que...   <=
if (num1 <= 5) {
  console.log('num1 es menor o igual que 5');
}


//* Igual que... (solo comprueba el valor, no el tipo de dato)     ==
//! NO RECOMENDADO

if (5 == '5') {
  console.log('num1 tiene el valor 5');
}

//* Igual que...de verdad de la buena (también mira el tipo de dato)    ===

if (5 === '5') {
  console.log('El primer elemento tiene EXACTAMENTE el mismo valor y tipo que el segundo');
}


//* Distinto de...   !=
//! NO RECOMENDADO

if (5 != '5') {
  console.log('Son distintos');
}


//* Distinto de...de verdad de la buena   !==
if (5 !== '5') {
  console.log('Son distintos');
}



// ejemplos

const nombre = 'Ivan';

if (nombre === 'Ivan') {
  console.log('El capo');
}


const isAdmin = true;
if (isAdmin === true) {
  console.log('Puedes cambiar lo que quieras.');
}


const edad = '37';
if (typeof edad !== 'number') {
  console.log('Me tienes que pasar un number');
}

//* ========================================== *//
//* ========================================== *//

// Podemos añadir condiciones usando && (and) y || (or)

//                   true
//         true       &&    true
if (nombre === 'Ivan' && edad >= 18) {
  console.log('Ivan, puedes pasar.');
}

/*

 AND

 true && true  = true
 true && false = false
 false && true = false
 false && false = false

 OR 

 true && true  = true
 true && false = true
 false && true = true
 false && false = false

*/

//                    true
//           true      ||        false
if (nombre === 'Carlos' || nombre === 'Sergio') {
  console.log('No moláis tanto como Ivan');
}


//* ========================================== *//
//* ========================================== *//

//* else if...
// puede haber 0 o más, pero siempre después de un if

// en cambio...si se cumple esto...ejecuta esto otro

if (nombre === 'Carlos') {
  console.log('Hola Carlos');
} else if (nombre === 'Ivan') {
  console.log('Hola Ivan');
} else if (nombre === 'Javi') {
  console.log('Hola Javi');
}


//* ========================================== *//
//* ========================================== *//


//* else...
// puede estar o no estar, pero solo puede haber uno y siempre cuando hay un if
//! No necesita condicion

// si no se cumple nada de lo anterior......ejecuta esto

const valor = '04398573486';


if (valor === true) {
  console.log('If');
} else {
  console.log('Else')
}


if (valor === 'hola') {
  console.log('hola');
} else if (valor === 'adios') {
  console.log('adios');
} else {
  console.log('No es ninguno de los anteriores');
}

//* ========================================= *//
//* ========================================== *//
//* ========================================== *//

//* EXTRA 1:
//* Podemos evaluar directamente el valor de una variable sin usar comparadores

const isConnected = true;

// if (isConnected === true) {
if (isConnected) {
  console.log('Usuario conectado ✅');
} else {
  console.log('NO CONECTADO ❌');
}



//* EXTRA 2:
//* Javascript interpreta algunos valores como "truthy" (verdaderos) y otros como "falsy" (falsos)


const value = ''; //  false  null  undefined  0   ''

if (value) {
  console.log('✅');
  } else {
  console.log('❌');    
}

//* EXTRA 3:
//* Si utilizamos el signo de admiración, INVERTIMOS EL VALOR
//! cuando veas una admiraciñon léelo como un ¡NO!

const isMarried = true;

if (!isMarried) {
  console.log('Se te pasa el arroz');
} else {
  console.log('Viva los novios');
}

// el double bang !! sirve para obtener el valor booleano de cualquier valor

console.log(!!5);
console.log(!!undefined);

//* EXTRA 4:
//* Si lo que hay dentro del if, else if o else es solo una línea de ejecución, puedes quitar las llaves



if (valor === null) {
  console.log('Es nulo');
}

if (valor === null) 
console.log('Es nulo');


//* ========================================== *//
//* ========================================== *//

//? Ámbito de las variables

// variable GLOBAL, se puede usar en todas partes
const perra = 'Freya';

if (2 === 2) {
  console.log(perra);

  // variable LOCAL, se queda dentro del bloque if
  const otraPerra = 'Kira';

  // var crea las variables de forma GLOBAL con lo que se pueden usar en todas partes
  var ultimaPerra = 'Fluffy';
}

// console.log(otraPerra);
console.log(ultimaPerra);




// si necesito modificar una variable dentro deun bloque y la necesito fuera, la creo antes del bloque, la modifico dentro y la vuelvo a usar fuera.

let children = 0;
const isPregnant = false;

if (isPregnant) {
  children++;
}

console.log(children);



// si dentro de un bloque creamos una variable que se llame igual que una global, tiene preferencia LA LOCAL.

const friend = 'Carlos';

if (true) {
  let friend = 'Xavi';

  friend = 'Ivan';
}

console.log(friend);

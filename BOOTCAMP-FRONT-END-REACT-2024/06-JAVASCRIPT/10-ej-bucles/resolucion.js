// Escribe un programa que pida al usuario introducir un número entero entre 50 y 100, el cuadro de texto volverá a aparecer si el número es menor o mayor

/*

let numeroUsuario = prompt('Dime un número entero del 1 al 100.');

while (numeroUsuario !== null && (isNaN(numeroUsuario) === true || numeroUsuario <= 0 || numeroUsuario > 100)) {
  numeroUsuario = prompt('Mal. Tiene que ser un número y además entre 1 y 100.');
}

*/


//* ========================================== *//
// En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10. Si el número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca el valor correcto. Una vez haya introducido un valor entre 2 y 10, se mostrará por consola la tabla de multiplicar del número elegido.


/* 
let numeroUsuario = prompt('Dime un número entero del 2 al 10');

while (numeroUsuario !== null && (isNaN(numeroUsuario) === true || numeroUsuario < 2 || numeroUsuario > 10)) {
  numeroUsuario = prompt('Mal. Tiene que ser un número y además entre 2 y 10.');
}

//  3 x 1 = 3
//  3 x 2 = 6
//  3 x 3 = 9
//  3 x 4 = 12
// ...


console.log('===Tabla del ' + numeroUsuario + '===');
for (let i = 1; i <= 10; i++) {
  console.log(`${numeroUsuario} x ${i} = ${numeroUsuario * i}`);
}
 */


//* ========================================== *//

// Con un while  construye y muestra por consola un "triángulo" de 7 líneas
/* 
const estrellas = 7;
let stringEstrellas = '';

while (stringEstrellas.length < 7 ) {
  stringEstrellas += '*';
  console.log(stringEstrellas);
}
 */

/* let estrellas = 7;
let estrella = '*';

while (estrellas > 0) {
  console.log(estrella);
  estrella += '*';

  estrellas--;
} */

/* 
const estrellas = 7;
const estrella = '*';
let stringEstrellas = '';

for (let i = 1; i <= estrellas; i++) {
  stringEstrellas += estrella;
  console.log(stringEstrellas);
}
 */


//* ========================================== *//
// En un array cualquiera con 10 números, contar cuantos números positivos hay, cuantos negativos y cuantos ceros.

/*
const nums = [2, 15, -13, 23, 75, 4, 12, -7, 19, 0];

let positivos = 0;
let negativos = 0;
let ceros = 0;

*/

/* for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (num < 0)      negativos++;
  else if (num > 0) positivos++;
  else                  ceros++;
} */

// for (const num of nums) {
//   if (num < 0)      negativos++;
//   else if (num > 0) positivos++;
//   else                  ceros++;
// }

/*
for (const i in nums) {
  const num = nums[i];
  if (num < 0)      negativos++;
  else if (num > 0) positivos++;
  else                  ceros++;
}


console.log(`
RESULTADO
Positivos:  ${positivos}
Negativos:  ${negativos}
Ceros:      ${ceros}  
`);
*/


//* ========================================== *//

// Hay que crear un programa de JS que permita adivinar un número secreto entre 1 y 100. 
  // Se considera que cuando el usuario introduce un valor, éste es siempre válido. 
  // Con cada intento del jugador, el programa le dice si el número secreto es mayor o menor. 
  // El jugador tiene 6 intentos para adivinar el número
  // Para crear un número aleatorio real utilizamos este código:
  // Math.floor((Math.random() * 100) + 1)


let secreto = Math.ceil(Math.random() * 100);
let intentos = 6;
let hasGanado = false;

let numeroUsuario = Number(prompt('Dime un número del 1 al 100 a ver si lo adivino.'));


while (!hasGanado && intentos >= 1) {
  
  if (numeroUsuario > secreto) {
    intentos--;
    numeroUsuario = Number(prompt(`El número secreto es MENOR que ${numeroUsuario}. Te quedan ${intentos} intentos.`));
  } else if (numeroUsuario < secreto) {
    intentos--;
    numeroUsuario = Number(prompt(`El número secreto es MAYOR que ${numeroUsuario}. Te quedan ${intentos} intentos.`));
  } else {
    hasGanado = true;
  }

}

if (!hasGanado) {
  console.log(`¡Has perdido! 😢 El número secreto era ${secreto}`);
} else {
  console.log('¡Has ganado! 🎉🥳');
}

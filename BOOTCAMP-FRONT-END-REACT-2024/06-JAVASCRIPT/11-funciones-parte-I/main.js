//? Funciones en JavaScript
// Son bloques de código reutilizables

//* definir la función
function saludar () {   // 0x999
  console.log('Hola');
}

const arr1 = [1, 2] // 0x123
const arr2 = arr1 // 0x123

const otroSaludo = saludar; // 0x999


//* Ejecutar la función
saludar();
otroSaludo();


//* ========================================== *//
//* ========================================== *//

//* Le añadimos un poco de dinamismo --> parámetros


function buenosDias (nombre) {

  console.log('Buenos días, ' + nombre);

}

buenosDias('Ivan');
buenosDias('Jenni');
buenosDias('Davide');
buenosDias();

//* Podemos validar datos dentro de la función de forma normal

function buenasTardes (nombre) {
  if (nombre !== undefined) {
    console.log('Buenas tardes, ' + nombre);
  } else {
    console.log('Buenas tardes, amig@');
  }
}

buenasTardes('Bryan');
buenasTardes();


//* Podemos darle un valor por defecto a los parámetros

function buenasNoches (nombre = 'amig@') {
  console.log('Buenas noches, ' + nombre);
}

buenasNoches('Adri');
buenasNoches();


//* Podemos pedir tantos parámetros como nos de la gana
//! OJO que el orden es importantísimo

function muyBuenas (nombre = 'amig@', apellido = '', edad = 10) {
  console.log(`Muy buenas, ${nombre} ${apellido}, tienes ${edad} años.`);
}

muyBuenas('Thiago', 'Bal', 20);
muyBuenas();


//* Podemos definir que puedes pasar TANTOS PARÁMETROS COMO DECIDA EL QUE EJECUTA

function sumarDosNumeros (a, b) {
  console.log(a + b);
}

sumarDosNumeros(5, 4);

// usando lo contrario del spreadOperator podemos permitir infinitos parámetros. Javascript los meterá todos en un array que se llama como hayas dicho, en este caso "numeros"


// spread operator:    [1, 2, 3]   =>   1, 2, 3
// rest operator:       1, 2, 3    =>  [1, 2, 3]

function sumarVariosNumeros (nombre, ...numeros) {
  let total = 0;
  for (const num of numeros) {
    total += num;
  }

  console.log(`Hola, ${nombre}, el total de la suma es: ${total}`);
}

sumarVariosNumeros('ivan', 2, 4, 6) // =>  [2, 4, 6]
sumarVariosNumeros('Javier', 2, 4, 5, 3, 5, 7, 8, 6) // =>  [2, 4, 5, 3, 5, 7, 8, 6]


//* ========================================== *//
//* ========================================== *//


function cuadrado (num) {
  const resultado = num ** 2
  console.log(resultado);
}

function exponente (base, exponente) {
  const resultado = base ** exponente;

  return resultado;
}

const numero = 7;
cuadrado(numero);
// aquí no tengo el 49!!



const exp = exponente(3, 3);
// aquí ya puedo usar el valor que retorna la función sin problema
console.log(exp);


//! Normas del return!!
//! Después del return NO SE EJECUTA NADA MÁS DE LA FUNCIÓN

function resta (num1, num2) {

  return num1 - num2;

  console.log('Esto no se ejecuta');
}

const resta5y2 = resta(5, 2);
console.log(resta5y2);



function saludito (nombre) {

  if (nombre === undefined) return;

  console.log('Hola, holita, ' + nombre);
}

saludito('Bryan');
saludito();


//! Aunque una función no retorne nada explícitamente, SIEMPRE RETORNARÁ undefined

function hola () {
  console.log('hola');
}

const queRetornaHola = hola();
console.log(queRetornaHola);

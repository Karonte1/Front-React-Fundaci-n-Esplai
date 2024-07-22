console.log('Hola desde main.js');

/*  
Comentarios que 
son de tipo bloque 
*/

// Esto es un comentario de línea

//? Características del lenguaje
let nombre = 'Ivan';
let NOMBRE = 'Jenni';

console.log(nombre);
nombre = 23;
console.log(nombre);



//* Javascript es case-sensitive
  // la variable nombre no es igual a NOMBRE

//* Es un lenguaje de tipado débil
  // NO REQUIERE QUE TIPEMOS LAS VARIABLES

//* Es un lenguaje dinámico
  // permite cambiar el tipo de dato que guardaba una variable

//* Cada sentencia termina con punto y coma.
  //! PERO NO ES OBLIGATORIO


//? VARIABLES

var edad = 37; //! DESACONSEJADA

let casado = true; // Genera variables que luego pueden ser reasignadas
casado = false;

let city;
city = 'Madrid';

const hijos = 0; // Genera variables que luego NO PUEDEN SER REASIGNADAS
// hijos = 3; //! no se puede reasignar

console.log('FIN');

//const ciudad; //! No podemos declarar una variable const SIN INICIALIZARLA






//? Nombres para las variables

const MiNombre = 'Ivan'; //* Se permite 
//! Pero no lo hagáis con variables, se utiliza solo en Classes

const acéntosyEñes = 'válidos'; //* Se permite
//! Yo te diría que no lo hicieras, cíñete a letras de la a a la z
console.log(acéntosyEñes);

// const 2casas = 'no se puede'; //! no se puede empezar con un número

// const kebab-case-no-deja = 'no válido' //! no se puede!

const snake_case_si = true;
const camelCaseSi = true;
const tengo2Coches = true;
const nombre2 = 'Carlos';
const _ = true;
const $ = true;


//! POR FAVOR, NOMBRES DESCRIPTIVOS
//! 👇 Esto caca 
const a = 2;
const j = 3;


//* ========================================== *//


//? Qué utilizamos para mostrar datos para debuggear

console.log(window.console.log('Console usando window.'));

console.log('Para imprimir en consola');

//! alert corta la ejecución hasta que le demos a aceptar
alert('Muestra una ventana modal'); // <--

console.log('Después del alert');

//! confirm también corta la ejecución, hasta que demos a aceptar o cancelar
confirm('Esto es un confirm'); 

//! prompt sirve para pedir datos al usuario de forma FEA, en realidad usaremos formularios
prompt('Dime tu nombre');

//? Otras maneras de imprimir con "console"

console.error('Esto sería un error');

console.warn('Esto es un warning');


console.time();

console.timeEnd();


console.time('Contador 1');

console.timeEnd('Contador 1');

//* console permite imprimir varios logs a la vez separados por coma

const perro1 = 'Kira';
console.log('El nombre de perro 1 es: ',  perro1);

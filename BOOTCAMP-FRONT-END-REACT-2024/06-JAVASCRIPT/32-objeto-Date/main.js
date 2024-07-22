// ? Fechas
const fecha1 = '14 de junio de 1914';
const fecha2 = '24 de junio de 1914';



//* Date

//* Date me ofrece un método static

console.log(Date.now()) // son los milisegundos del momento actual desde 1 enero 1970

//* si yo instancio Date sin pasarle ningún argumento, me crea un objeto de fecha con el momento actual

const fechaActual = new Date();
console.log(fechaActual);

//* puedo crear un objeto detipo fecha pasándole datos por separado
const finDeAño = new Date(2024, 11, 31, 23, 59);

//! los meses del año empiezan en 0 y terminan en 11
console.log(finDeAño);

//* puedo crear un objeto Date pasando un string en un formato concreto

const navidad = new Date('2024-12-25T22:37:55');
console.log(navidad);

const $inputCumple = document.querySelector('.cumple');

$inputCumple.onchange = () => {
  console.log($inputCumple.value);
  const cumple = new Date($inputCumple.value);
  console.log(cumple);
}


//* ========================================== *//
//* ========================================== *//
//* ========================================== *//

//? ¿Y qué hago con un objeto de tipo fecha?

//* Leer sus datos

// su año
console.log(navidad.getFullYear()); // 2024

// su mes
//! recuerda que es de 0 a 11
console.log(navidad.getMonth()); // 11

// su día del mes
console.log(navidad.getDate()); // 25

// su día de la semana
//! OJO porque los días de la semana van del 0 al 6 
//! SIENDO 0 el domingo
console.log(navidad.getDay()); // 3 (miércoles)

// sus horas
console.log(navidad.getHours()); // 22

// sus minutos
console.log(navidad.getMinutes()); // 37

// sus segundos
console.log(navidad.getSeconds()); // 55



//* Podemos sacar un dato curioso.
//! los milisegundos que pasarán desde el 1 de enero de 1970 hasta la fecha en concreto

console.log(navidad.getTime()); // 1735162675000

// hacia atrás son negativos
console.log((new Date(1960, 0, 5)).getTime()); // -315277200000


//* ejemplo para saber mis milisegundos de vida

const ahora = new Date();
const cumpleIvan = new Date('1987-01-04T21:40');

const ahoraMS = ahora.getTime();
const cumpleIvanMS = cumpleIvan.getTime();

const msTotal = ahoraMS - cumpleIvanMS;

console.log(msTotal / 1000 / 60 / 60 / 24 / 365);

//* ========================================== *//
//* ========================================== *//



//* Podemos cambiar un objeto fecha en alguno de sus valores

navidad.setFullYear(2035);
console.log(navidad);

// y así con todos los mismos de antes pero con el set.....



//* ========================================== *//
//* ========================================== *//

// para tener un texto COMO TE DE LA GANA en el que te muestre la fecha podemos usar un método que se llama

console.log('.toLocaleString()');

console.log(cumpleIvan);

console.log(cumpleIvan.toLocaleString());
console.log(cumpleIvan.toLocaleString('de'));
console.log(cumpleIvan.toLocaleString('en'));


console.log(cumpleIvan.toLocaleString('es', {  
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}));

console.log(cumpleIvan.toLocaleString('it', {  
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}));

console.log(cumpleIvan.toLocaleString('zh', {  
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}));

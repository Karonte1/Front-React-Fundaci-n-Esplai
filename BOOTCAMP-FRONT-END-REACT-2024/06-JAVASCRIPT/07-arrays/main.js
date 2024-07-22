//? Arrays

//                  0        1               
const nombres = ['Ivan', 'Jessica'];


console.log(nombres);


//* Acceder a valores del array
console.log(nombres['0']);
console.log(nombres['1']);
console.log(nombres[50]);

//* todos los arrays tienen la propiedad length igual que los strings
console.log(nombres.length);


//* modificar un valor del array
nombres[1] = 'Davide';
console.log(nombres);


//* añadir elementos que no existen
nombres[2] = 'Jenni';
console.log(nombres);

// nombres[10] = 'Guillem';
// console.log(nombres);


//* añadir algo al final del array usando array.length

nombres[nombres.length] = 'Bryan';
nombres[nombres.length] = 'Ruth';
console.log(nombres);


//* ========================================== *//

//* Los strings funcionan PARECIDO A LOS ARRAYS
// puedes acceder a un elemnto de un string por su posición

const palabra = 'zapato';

console.log(palabra[2]);
palabra[2] = 'W'; //! no funciona
console.log(palabra);


//* ========================================== *//
//* ========================================== *//


let valor1 = 23;
let valor2 = valor1;

valor1 = 'hola';

console.log(valor1, valor2);


const arr1 = [1, 2]; // 0x123
const arr2 = arr1; // 0x123

arr1[1] = '🍎';

console.log(arr1, arr2);


//* ¿Cómo duplico un array sin modificar el original? 


// spread operator ...
const arr3 = [...arr1]; // 0x456
console.log(arr3);

// .concat()
const arr4 = arr1.concat() // 0x789
console.log(arr4);

arr2[0] = '🍐';

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);


console.log([...arr1, '🐶' , ...arr2]);


//! Esto no duplica arrays de forma profunda

const numeros1 = [1, 2, 3, [4, 5]]; // 0x111  0x999

const numeros2 = [...numeros1]; // 0x444  0x999

//* Array generado con todo lo que tenga dentro con NUEVAS REFERENCIAS
const numeros3 = structuredClone(numeros1); // 0x777  0x222

numeros2[0] = '🚑';
numeros2[3][0] = '🚐';

console.log(numeros1);
console.log(numeros2);
console.log(numeros3);

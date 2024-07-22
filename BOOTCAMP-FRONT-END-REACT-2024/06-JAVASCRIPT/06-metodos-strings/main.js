//? Métodos de los strings

const frase = 'Con diez cañones por banda...';

//* length --> longitud del texto

console.log(frase.length);

//* .toUpperCase() y .toLowerCase()

const fraseMayusculas = frase.toUpperCase();
const fraseMinusculas = frase.toLowerCase();

console.log(fraseMayusculas);
console.log(fraseMinusculas);

console.log(frase);

//* .trim()  --> para quitar espacios en blanco delante y detrás

const palabra = '    hola    ';

const palabrasinEspacios = palabra.trim();

console.log(palabrasinEspacios);


//* .indexOf('substring') --> te devuelve el índice del trozo de texto que le has pasado, si no lo encuentra devuelve -1

console.log(frase.indexOf('cañon'));
console.log(frase.indexOf('zapato'));

// siempre da la primera que encuentra
console.log(frase.indexOf('n'));

// si quieres la última, puedes usar .lastIndexOf()
console.log(frase.lastIndexOf('n'));


//* ========================================== *//

//* .includes('substring')  --> simplemente te da true o false si se encuentra o no el trozo de texto que le has pasado

console.log(frase.includes('cañon'));
console.log(frase.includes('zapato'));


//* .slice(inicio corte,  final corte)  --> te devuelve un pedazo del texto, sin modificar el original

const trozoFrase1 = frase.slice(4);
console.log(trozoFrase1);

const trozoFrase2 = frase.slice(4, 10);
console.log(trozoFrase2);

// en negativo empieza a contar desde atrás
const trozoFrase3 = frase.slice(4, -5);
console.log(trozoFrase3);

//* .split('separador')  --> genera un nuevo ARRAY a partir del texto dado y separa el texto según el separador que le hayas pasado

const arrayPalabras = frase.split(' ');
console.log(arrayPalabras);
console.log(arrayPalabras.length);

const arrayLetras = frase.split('');
console.log(arrayLetras);




const word = 'zapato';
const firstLetter = word.slice(0,1).toUpperCase();
const rest = word.slice(1);

const wordCapitalized = firstLetter + rest;
console.log(wordCapitalized);
//? tipado básico

//* Podemos tipar nuestras variables si nos da la gana usando 2 puntos :

let edad: number = 37;
let nombre: string = 'Ivan';
let estaCasado: boolean = true;
let valorNulo: null = null;
let valorNoDefinido: undefined = undefined;

//* No obstante, Typescript YA ES SUFICIENTEMENTE INTELIGENTE PARA "INFERIR" EL TIPADO A UNA VARIABLE QUE ESTÁS CREANDO DE MANERA LITERAL
let apellido = 'Luengo';


//* Typescript te va a dar error si intentas cambiarle el tipo de valor a una variable durante la ejecución
nombre = 50;
edad = 'hola';

//* ========================================== *//
//* Arrays
//* Hay dos maneras de tipar un array, y las dos son válidas para todos los casos
const frutas1: string[] = ['🍎', '🍐', '🍌'];
const frutas2: Array<string> = ['🍎', '🍐', '🍌'];
const nums1: number[] = [2, 15, -7, 5.46];
const nums2: Array<number> = [2, 15, -7, 5.46];

frutas1.push(35);

//* ========================================== *//
//* any --> es un tipo que solo existe en typescript y que significa que esa variable puede tener cualquier tipo de dato

let valor: any = 37;
valor = 'hola';
valor = true;
//! Esto NUNCA DEBERÍA PASAR, no permitas que existan tipos any en tu código

//* ========================================== *//
//* ========================================== *//
//* Unions --> una variable puedes definirle que pueda tener más de un tipo de dato usanod la barra vertical

let hijos: number | null = 5;

// ahora esta variable puede guardar números o el valor null

hijos = null;


//* ========================================== *//
//* ========================================== *//
//* enums --> Muy parecido a los unions que son "varios tipos de dato", los enums son "varios valores posibles"

let role: 'admin' | 'user' | 'boss' = 'boss';

let gender: 'male' | 'female' = 'female';

//* ========================================== *//
//* Funciones
function sumar (num1: number, num2: number): number {
  return num1 + num2;
}

sumar(5, 7);

const restar = (a: number, b: number): number => a - b;

//* Parámetros opcionales?

// opción 1 --> dando un valor por defecto
function saludar (nombre: string, apellido = '') {
  console.log(`Hola, ${nombre}` + apellido ? ` ${apellido}` : '')
}
saludar('Ivan');

// opción 2 --> ponle un interrogante a lo que pueda ser opcional
function despedida (nombre: string, apellido?: string) {  
  console.log(`Hola, ${nombre}` + apellido ? ` ${apellido}` : '')
}
despedida('Ivan');

//* void --> cuando una función no retorna nada
function buenosDias (): void{
  console.log('Buenos días.');
}

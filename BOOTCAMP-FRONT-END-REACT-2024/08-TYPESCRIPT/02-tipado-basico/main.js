"use strict";
//? tipado básico
//* Podemos tipar nuestras variables si nos da la gana usando 2 puntos :
let edad = 37;
let nombre = 'Ivan';
let estaCasado = true;
let valorNulo = null;
let valorNoDefinido = undefined;
//* No obstante, Typescript YA ES SUFICIENTEMENTE INTELIGENTE PARA "INFERIR" EL TIPADO A UNA VARIABLE QUE ESTÁS CREANDO DE MANERA LITERAL
let apellido = 'Luengo';
//* Typescript te va a dar error si intentas cambiarle el tipo de valor a una variable durante la ejecución
nombre = 50;
edad = 'hola';
//* ========================================== *//
//* Arrays
//* Hay dos maneras de tipar un array, y las dos son válidas para todos los casos
const frutas1 = ['🍎', '🍐', '🍌'];
const frutas2 = ['🍎', '🍐', '🍌'];
const nums1 = [2, 15, -7, 5.46];
const nums2 = [2, 15, -7, 5.46];
frutas1.push(35);
//* ========================================== *//
//* any --> es un tipo que solo existe en typescript y que significa que esa variable puede tener cualquier tipo de dato
let valor = 37;
valor = 'hola';
valor = true;
//! Esto NUNCA DEBERÍA PASAR, no permitas que existan tipos any en tu código
//* ========================================== *//
//* Funciones
function sumar(num1, num2) {
    return num1 + num2;
}
sumar(5, 7);
//* Parámetros opcionales?
// opción 1 --> dando un valor por defecto
function saludar(nombre, apellido = '') {
    console.log(`Hola, ${nombre}` + apellido ? ` ${apellido}` : '');
}
saludar('Ivan');
// opción 2 --> ponle un interrogante a lo que pueda ser opcional
function despedida(nombre, apellido) {
    console.log(`Hola, ${nombre}` + apellido ? ` ${apellido}` : '');
}
despedida('Ivan');
//* void --> cuando una función no retorna nada
function buenosDias() {
    console.log('Buenos días.');
}

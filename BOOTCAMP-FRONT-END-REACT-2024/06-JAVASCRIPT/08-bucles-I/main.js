//? Bucles en JavaScript

//* Son estructuras de datos que sirven para:

  // 1: Para tepetir código un número de veces

  // 2: Para recorrer elementos ITERABLES (que pueden ser recorridos (array, string, objeto));


//* for...
  // 3 sentencias separadas por punto y coma
    // inicializa las viaribles que necesites
    // condición que mientras se cumpla, repetirá el bucle
    // modificación de las variables para que deje de cumplirse la condición

  for (let variable = 0; variable <= 5;  variable += 2) {
    console.log('Hola');
  }

  // normalmente lo escribimos con la varibale llamada i
  for (let i = 0; i < 5; i++) {
    console.log('Adios');
  }

  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }


//* Para recorrer cualquier iterable usaremos esa variable que tiene números correlativos

const frutas = ['🍎', '🍐', '🍌', '🍇', '🍒', '🍊', '🍉', '🥑'];


console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

console.log('Con un bucle for');

//! siempre que veas array[i] piensa que ESO VALE CADA ELEMENTO DEL ARRAY EN CADA VUELTA DEL BUCLE

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// al revés!
for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]);
}

//* también lo puedo hacer con los strings
const frase = 'Me gusta JavaScript';

for (let i = 0; i < frase.length; i++) {
  console.log(frase[i]);
}


//* Podemos debuggear en JavaScript --> debugger

// debugger
for (let i = 0; i < frase.length; i++) {
  console.log(frase[i]);
}




//* ========================================== *//
//* ========================================== *//
//* EJEMPLOS

//* Dado el siguiente array de números, guarda en un nuevo array todos los números que sean pares

const numeros = [2, 15, -13, 23, 75, 4, 12];

const pares = [];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];

  if (numero % 2 === 0) {
    pares[pares.length] = numero;
  }
  
}

console.log(pares);

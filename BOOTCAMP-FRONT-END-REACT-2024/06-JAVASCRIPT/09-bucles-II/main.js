//* for...of
  // SIEMPRE empieza en el primer elemento
  // SIEMPRE termina en el ÚLTIMO
  // SIEMPRE VA DE 1 en 1

const frutas = ['🍎', '🍐', '🍌', '🍇', '🍒', '🍊', '🍉', '🥑'];
const frase = 'Me encanta JavaScript';

// frutas[i]
for (const fruta of frutas) {
  console.log(fruta);
}

for (const letra of frase) {
  console.log(letra);
}

const nums = [2, 15, -13, 23, 75, 4, 12];

for (let i = 0; i < nums.length; i++) {

  // let num = nums[i]; // 2

  if (nums[i] % 2 === 0) {
    nums[i] *= 0;
  }
}
    
console.log(nums);
    
const nums2 = [2, 15, -13, 23, 75, 4, 12];

for(let num of nums2) {
  num = num * 0;
}

console.log(nums2); // con el for of no se ha mutado nada del original


//* ========================================== *//
//* ========================================== *//

//* for...in
  // SIEMPRE empieza en el primer elemento
  // SIEMPRE termina en el ÚLTIMO
  // SIEMPRE VA DE 1 en 1

console.log('for..in frutas');
for (const index in frutas) {
  console.log(index);
}
  
console.log('for..in nums');
for (const index in nums) {  
  console.log(index , nums[index]);
}


//* ========================================== *//
//* ========================================== *//

//* while
// mientras se cumpla la condición no dejará de dar vueltas
console.log('while');

let i = 0;
while (i < 5) {
  console.log(i);

  i++;
}


/*
let password = prompt('Dime la contraseña');

while (password !== '1234') {
  password = prompt('Contraseña errónea, vuelve a intentarlo.');
}
console.log('Contraseña correcta');
*/

//* ========================================== *//
//* do...while
// la diferencia es que primero ejecuta el código dentro del bucle y luego hace la primera consulta de la condición
/*

let pass = '1234';
do {
  pass = prompt('Dime la contraseña');
} while(pass !== '1234')

*/
  //* ========================================== *//

//* EXTRA!!  Podemos romper el bucle usando la cláusula "continue" o "break"



let numero = 0;

while(true) {
  numero++;
  
  if (numero % 2 === 0) {
    continue;
  }

  console.log(numero);

  if (numero === 11) {
    break;
  }
}


// Dime si un número es primo o no

const numeroUsuario = 3546513;
let esPrimo = true;

console.time()
for (let i = 2; i < numeroUsuario; i++) {
  if (numeroUsuario % i === 0) {
    esPrimo = false;
    break;
  }
}
console.timeEnd();

console.log(esPrimo);
//* Funciones de primera clase o de orden superiir
// Funciones que reciben como parámetro otra función o funciones que retornan otra función

// function hof (fn) {}

// function hof () {
//    return () => {}
// }

function saludo (nombre = 'amig@') {
  console.log('Hola, '+ nombre);
}



for (let i = 1; i <= 5; i++) {
  console.log('hola');
}

for (let i = 1; i <= 5; i++) {
  saludo('Ivan');
}


function imprimirAlgo5Veces (dato) {

  for (let i = 1; i <= 5; i++) {
    console.log(dato)
  }

}

imprimirAlgo5Veces('5');

function doblar5Veces (numero) {
  for (let i = 1; i <= 5; i++) {
    numero *= 2;
  }
  console.log(numero);
}

doblar5Veces(2);


function cincoVecesLoQueQuieras (fn) {
  for (let i = 1; i <= 5; i++) {
    // ¿Cómo paso aquí líneas de código?
    fn();
  }
}


cincoVecesLoQueQuieras(saludo);

cincoVecesLoQueQuieras(function () { console.log('🍎') })
cincoVecesLoQueQuieras(() => console.log('🍐'));

let valor = 2;
cincoVecesLoQueQuieras(() => { valor *= 2 });
console.log(valor);


//* Si esto lo llevo a algo útil de verdad... como recorrer un array...


const frutas = ['🍎', '🍐', '🍌'];

function imprimirFrutasUnaPorUna () {
  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
}

imprimirFrutasUnaPorUna()

const nums = [2, 15, -13, 23, 75, 4, 12];

function multiplicarPorDosUnoPorUno (arrNums) {
  for (let i = 0; i < arrNums.length; i++) {
    arrNums[i] *= 2;
  }
}

multiplicarPorDosUnoPorUno(nums);
console.log(nums);


function recorredoraDeArrays (array, fn) {
  for (let i = 0; i < array.length; i++) {
    // aquí quiero hacer LO QUE ME DE LA GANA EN CADA OCASIÓN
    fn();
  }
}

recorredoraDeArrays(nums, () => { console.log('recorriendo nums'); });
recorredoraDeArrays(frutas, () => { console.log('recorriendo frutas'); });


//* molaría que en cada ejecución del callback, éste tuviera algñún dato para jugar con él

function recorredoraDeArraysExtra (array, fn) {

  for (let i = 0; i < array.length; i++) {

    fn(array[i], i, array);

  }
}

const pelis = ['Harry Potter', 'Memento', 'Robocop'];

recorredoraDeArraysExtra(frutas, (fruta) => { console.log(fruta) })
recorredoraDeArraysExtra(nums, (num) => { console.log(num) })
recorredoraDeArraysExtra([4, 5, 6], () => { console.log('456') })

recorredoraDeArraysExtra(pelis, (peli, index) => { 
  console.log(`Película ${index + 1}: ${peli}`)
});


//* esto es lo mismo que una función (método) que YA TENEMOS EN JAVASCRIPT que es forEach

console.log('For Each');

// pelis.forEach(() => {});
// pelis.forEach(function () {});
// pelis.forEach(saludo);

pelis.forEach(() => console.log('peli forEach'));
pelis.forEach((valor) => console.log(`peli: ${valor}`));
pelis.forEach((valor, i) => console.log(`peli ${i + 1}: ${valor}`));
pelis.forEach((_, i) => console.log(`peli ${i + 1}`));

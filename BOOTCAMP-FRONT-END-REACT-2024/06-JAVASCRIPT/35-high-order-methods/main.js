//* .forEach()  --> Como un bucle normal, en cada vuelta haz lo que quieras

const pelis = ['Harry Potter', 'Memento', 'Robocop'];

pelis.forEach(() => console.log('peli forEach'));
pelis.forEach((valor) => console.log(`peli: ${valor}`));
pelis.forEach((valor, i) => console.log(`peli ${i + 1}: ${valor}`));
pelis.forEach((_, i) => console.log(`peli ${i + 1}`));


//* Qué pasa si queremos encontrar UN ELEMENTO dentro de un array de objetos
let usuarios = [
  {
      id: 1,
      ciudad: 'Barcelona',
      nombre: 'Ivan',
      edad: 36
  },
  {
      id: 2,
      ciudad: 'Madrid',
      nombre: 'Carlos',
      edad: 18
  },
  {
      id: 3,
      ciudad: 'Sevilla',
      nombre: 'Javier',
      edad: 40
  },
  {
      id: 4,
      ciudad: 'Madrid',
      nombre: 'Sergio',
      edad: 32
  },
  {
      id: 5,
      ciudad: 'Bilbao',
      nombre: 'María',
      edad: 60
  },
];

//! el indexOf solo encuentra valores PRIMITIVOS
console.log(pelis.indexOf('Memento'))

function encontrarUnObjeto (array, fn) {
  for (let i = 0; i < array.length; i++) {

    if (fn(array[i], i, array)) {
      return array[i];
    }

  }
}

console.log(encontrarUnObjeto(usuarios, (user) => {  
  if (user.ciudad === 'Madrid') {
    return true;
  } else {
    return false;
  }
}));


//* El método de Javascript que hace lo mismo es .find()
// SIEMPRE NECESITA QUE EL CALLBACK RETORNE UN BOOLEANO
// si te encuentra el objeto te lo dará y si no lo encuentra te dará undefined


console.log(usuarios.find((user) => {  
  return user.edad < 40
    ? true
    : false
}));

console.log(usuarios.find((user) => {  
  return user.nombre.toLowerCase().includes('j')
}));

console.log(usuarios.find((user) => user.nombre.toLowerCase().includes('j')));


//* .findLast() --> lo mismo que el find pero te devuelve el últmo que encuentra

console.log(usuarios.find((usuario) => usuario.ciudad === 'Madrid'));
console.log(usuarios.findLast((usuario) => usuario.ciudad === 'Madrid'));

//* .findIndex() --> funciona igual que los dos anteriores (hay que retornar un booleano), pero lo que te retorna es el índice de la posición del objeto o -1

console.log(usuarios.findIndex((user) => user.edad > 30));
console.log(usuarios.findIndex((user) => user.edad > 75));


//* ========================================== *//
//* ========================================== *//
//* ========================================== *//


//* Si quisiéramos que nos devolviera VARIOS OBJETOS QUE CUMPLAN LA MISMA CONDICIÓN lo haríamos así

function encontrarVariosObjetos (array, fn) {
  const finalArray = [];

  for (let i = 0; i < array.length; i++) {
    const obj = array[i];

    if (fn(obj, i, array)) {
      finalArray.push(obj);
    }

  }

  return finalArray;
}

console.log(encontrarVariosObjetos(usuarios, (user) => {
  return user.ciudad === 'Madrid';
}))

//* .filter() --> SIEMPRE NECESITA RETORNAR UN BOOLEANO
// Siempre te va a devolver un array NUEVO. 
// Si algún cumple la condición estarár en el nuevo array
// si nadie cumple tendrás un array vacío

console.log(usuarios.filter((usuario) => { return usuario.edad > 40}));
console.log(usuarios.filter((usuario) => usuario.edad <= 40));


//* TRUQUITO para utilizar el filer para BORRAR UN ELEMENTO DEL ARRAY.





//* ========================================== *//

//* versión splice 
//! MUTANDO EL ARRAY ORIGINAL
// necesitamos el índice

const indexId4 = usuarios.findIndex((user) => user.id === 4);
console.log(indexId4);
// usuarios.splice(indexId4, 1); //! esto es lo que muta

//* versión toSpliced()
const nuevosUsuarios = usuarios.toSpliced(indexId4, 1);

console.log(usuarios);
console.log(nuevosUsuarios);

//* versión filter

const usuariosFiltrados = usuarios.filter((usuario) => usuario.id !== 4);

console.log(usuariosFiltrados);

//* ========================================== *//
//* ========================================== *//

//* Si yo quisiera obtener un array nuevo a partir de otro, pero este array nuevo que sea completamente distinto del original podriamos:

function modificadorDeArrays (array, fn) {
  const finalArray = [];

  for (let i = 0; i < array.length; i++) {
    finalArray.push(fn(array[i], i, array));
  }

  return finalArray;
}

const nums = [2, 15, -13, 23, 75, 4, 12];

console.log(modificadorDeArrays(nums, () => {   return 'hola'  }));

//* .map() --> Siempre devolverá un array NUEVO que SIEMPRE tendrá el mismo length que el original.
//* LO QUE SEA QUE RETORNE EL CALLBACK VA A SER LO QUE METAS EN EL NUEVO ARRAY

console.log(nums.map((num) => { return num * 2 }));
console.log(nums.map((num) => num + 5 ));


const usuariosSimples = usuarios.map((user) => {
  return { identificador: user.id, nombre: user.nombre }
});

console.log(usuariosSimples);

//! OJO con retornar sin las llaves cuando lo que retornas es un objeto

console.log(usuarios.map((user) => { id: user.id })); //! ESTO NO VA!!! 💩
//* ponle paréntesis
console.log(usuarios.map((user) => ({ id: user.id })));


//* Y si lo que quiero es modificar una pequeña parte de cada usuario
console.log(usuarios);

//! OJO PORQUE ESTÁS MUTANDO EL ARRAY ORIGINAL
console.log(usuarios.map((user) => {
  user.edad += 1;
  return user;
}));

//! si quisieras hacer eso ya usuarias el forEach
usuarios.forEach((user) => user.edad += 1)

//* Lo que queremos es un NUEVO ARRAY con los usuarios modificados

const arr1 = [1, 2]
arr2 = [...arr1]

const obj1 = { id: 1 }
const obj2 = { ...obj1 }

console.log(usuarios.map((user) => {
  return { ...user, edad: user.edad + 1, isAdmin: true };
}));

//* Y si lo que quiero es SOLO CAMBIAR ALGUN OBJETO????
//! Ojo!! porque NUNCA TE PUEDES OLVIDAR de RETORNAR EN TODOS LOS CASOS

const usuarios2 = usuarios.map(user => { //0x111
  if (user.ciudad === 'Madrid') {
    return { ...user, isAdmin: true }
  } else {
    return user; 
  }
});
//                       0x111                    0x222
let frutas = [ { id: 1, fruta: '🍎' }, { id: 2, fruta: '🍌' }] //array  0x999
                      //    0x222
const frutas2 = frutas.map(fruta => {                            // array  0x555
  return { ...fruta } // 0x41425
})

//                    0x65435121                  0x41425
// frutas2  [ { id: 1, fruta: '🍎' }, { id: 2, fruta: '🍌' }] // array  0x555

frutas2[0].fruta = '🍊'

console.log(frutas);
console.log(frutas2);


const frutas3 = frutas.map(fruta => {
  if (fruta.id === 2) {
    return { ...fruta, cantidad: 5 }
  } else {
    return {...fruta};
  }
})

frutas3[0].fruta = '🍉'

console.log(frutas);
console.log(frutas3);


//! Si quieres sobreescribir el array original entonces no pasa nada, puedes retornar los objetos sin usar el ...
frutas = frutas.map(fruta => fruta.id === 2 ? { ...fruta, cantidad: 5 } : fruta);


//* Otro ejemplo en el que de un array de objetos, me quedo sol ocon los valores
// Cuál es la edad más alta
const edadesUsuarios = usuarios.map(user => user.edad);
console.log(edadesUsuarios);

const edadMasAlta = Math.max(...edadesUsuarios); // [2, 4, 6] -> 2, 4, 6
console.log(edadMasAlta);

//* ¿Cuántas ciudades hay entre los usuarios
const ciudades = usuarios.map(user => user.ciudad);
console.log(ciudades);

// Existe una class en JavaScript para generar una especie de arrays que NO PERMITEN DUPLICADOS  -->  Set

const ciudadesSinDuplicar = new Set(ciudades);
console.log(ciudadesSinDuplicar.size);


const nuevoSet = new Set();

nuevoSet.add(1);
nuevoSet.add(2);
nuevoSet.add(2);
nuevoSet.add(2);
nuevoSet.add(2);
nuevoSet.add(2);
nuevoSet.add(4);
console.log(nuevoSet);


//* filter y map a la vez
// de todos los usuarios SOLO QUIERO LOS MADRILEÑOS y quiero que el nuevo array solo tenga id y ciudad

const filterMap = usuarios
                    .filter(user => user.ciudad === 'Madrid')
                    .map(user => ({ id: user.id, nombre: user.nombre}));

console.log(filterMap);


//* ========================================== *//
//* ========================================== *//
//* ========================================== *//


//* .some() --> La sintaxis del callback interior es igual que el find, filter, findIndex y findLast (necesitan retornar un booleano)
//* TODO EL .some() TE RETORNA true SI "ALGUNO" DE LOS ELEMENTOS CUMPLE CON LA CONDICIÓN


const algunoDeSevilla = usuarios.some(user => user.ciudad === 'Sevilla');
const algunoDeMallorca = usuarios.some(user => user.ciudad === 'Mallorca');
console.log(algunoDeSevilla);
console.log(algunoDeMallorca);

//* .every() --> Funciona igual que el anterior
//* NECESITA QUE TODOS CUMPLAN LA CONDICIÓN para retornar true

const todosDeSevilla = usuarios.every(user => user.ciudad === 'Sevilla');
const todosMayorEdad = usuarios.every(user => { return user.edad >= 18 })

console.log(todosDeSevilla);
console.log(todosMayorEdad);


//* ========================================== *//



//* .sort() --> Ordenar arrays
//* siempre necesita 2 parámetros

const numbers = [2, 15, -13, 23, 75, 4, 12];
const names = ['davide', 'ivan', 'alicia', 'Jesus'];

//! OJO porque el sort MUTA EL ARRAY ORIGINAL
// numbers.sort();

//* para evitar esto normalmente DUPLICÁBAMOS EL ARRAY y hacíamos el sort en el nuevo

const numbersASC = [...numbers].sort();
const nombresASC = [...names].sort();

console.log(numbers);
console.log(numbersASC);

console.log(nombresASC);
//* AHORA TAMBIñEN TENEMOS EL NUEVO MÉTODO que no muta    toSorted()
const numbersDESC = numbers.toSorted();

//! No obstante NO HACES SORT NUNCA POR DEFECTO, SIEMPRE USAMOS EL CALLBACK

// la sintaxis es:
  // el callback tiene que retorna un numero mayor de 0 si el primer valor es mayor
  // el callback tiene que retorna un numero menor de 0 si el primer valor es menor
  // el callback tiene que retorna 0 si el primer valor y el segundo son iguales
const numbersOrdenadoASC = numbers.toSorted((valorA, valorB) => {
  if (valorA > valorB) return 1;
  if (valorA < valorB) return -1;
  return 0;
});




console.log(numbersOrdenadoASC);

//* si queremos ordenar a la inversa, simplemente cambiamos el -1 por el 1
const numbersOrdenadoDESC = numbers.toSorted((valorA, valorB) => {
  if (valorA > valorB) return -1;
  if (valorA < valorB) return 1;
  return 0;
});

console.log(numbersOrdenadoDESC);

//* las palabras tmabién se ordenan igual
const nombresAZ = names.toSorted((valorA, valorB) => {
  if (valorA.toLowerCase() > valorB.toLowerCase()) return 1;
  if (valorA.toLowerCase() < valorB.toLowerCase()) return -1;
  return 0;
});

const nombresZA = names.toSorted((valorA, valorB) => {
  if (valorA.toLowerCase() > valorB.toLowerCase()) return -1;
  if (valorA.toLowerCase() < valorB.toLowerCase()) return 1;
  return 0;
});

console.log(nombresAZ);
console.log(nombresZA);

//* TRUQUITO CON LOS NÚMEROS


const numerosAscendentes = numbers.toSorted((num1, num2) => {
   return num1 - num2;
})
const numerosDescendentes = numbers.toSorted((num1, num2) => num2 - num1);
console.log(numerosAscendentes);
console.log(numerosDescendentes);

//* TRUQUITO CON TEXTOS

const nombresOrdenados = names.toSorted((nameA, nameB) => {
  return nameA.localeCompare(nameB);
});
const nombresOrdenadosCool = names.toSorted((nameA, nameB) => nameA.toLowerCase().localeCompare(nameB.toLowerCase()));

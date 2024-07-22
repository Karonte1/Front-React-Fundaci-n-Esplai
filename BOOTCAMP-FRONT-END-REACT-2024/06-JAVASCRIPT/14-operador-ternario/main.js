//? Operador ternario

//* Caso 1: En sustitución de un if else muy simple, solo vale si tienen una línea de ejecución
//! a mí no me suele gustar usarlo en lugar de un if else...

const estanCasados = false;

if (estanCasados) {
  console.log('Viva los novios');
} else {
  console.log('A qué esperan.');
}

// con el ternario

//   pregunta  ?  ejecución si es true  :  ejecucion si es false

estanCasados ? console.log('Viva los novios') : console.log('A qué esperan');

estanCasados 
  ? console.log('Viva los novios') 
  : console.log('A qué esperan');

//* Caso 2: Lo utilizamos en el lugar donde necesitamos poner UN VALOR O OTRO DEPENDIENDO DE UNA CONDICIÓN --> donde te pidan expresiones

  //? Cuando creas una variable. a la derecha del igual se espera una expresión.

  const edad = 25;

  let esMayorDeEdad;
  
  if (edad >= 18) {
    esMayorDeEdad = true;
  } else {
    esMayorDeEdad = false;
  }

  esMayorDeEdad = edad >= 18 ? true : false;



  //? en el return de una función

  function esPar (num) {
    if (num % 2 === 0) {
      return 'es par';
    } else {
      return 'es impar';
    }
  }

  function esParCool (num) {
    return num % 2 === 0 ? 'es par' : 'es impar';
  }


  //? En una interpolación usando backticks y ${}

  const tuEdad = 15;

  console.log(`Tienes ${tuEdad} años y ${tuEdad >= 18 ? 'eres' : 'no eres'} mayor de edad.`);



  // para mí siempre es mejor hacer lo mismo en una variable explicativa y luego usarla en la interpolación
  const eresNoEres = tuEdad >= 18 ? 'eres' : 'no eres';
  console.log(`Tienes ${tuEdad} años y ${eresNoEres} mayor de edad.`);

  

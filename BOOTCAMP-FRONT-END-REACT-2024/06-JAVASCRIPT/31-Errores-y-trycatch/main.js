//* ERRORES

const miError = new Error('Error porque no has pasado un numero');

// console.dir(miError);
// console.log(miError.stack);
// console.log(miError.message);
// console.log(miError.name);


class MyError {
  name = 'Error';

  constructor (message = '') {
    this.message = message;
    this.stack = 'string de stack' // whatever
  }
}



//* Cómo implementamos los errores

function sumar (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    const error = new Error('Tienes que pasar un number.')
    throw error; //! se corta la ejecución de esta función    
  }

  return a + b;
}

function reverseText (text = '') {
  if (typeof text !== 'string') {
    throw new TypeError('Me tienes que pasar un texto');
  }
  return text.split('').reverse().join('');
}


function calcularDiasQueTienesDeVida (edad) {
  if (edad < 0 || edad > 130) {
    throw new RangeError('Tiene que ser entre 0 y 130 años')
  }
  return edad * 365;
}

// console.log(calcularDiasQueTienesDeVida(500))


// const suma5y4 = sumar(5, '4');
// console.log(suma5y4);


// console.log('hola!!! no llega aquí si no manejamos el error');


//* Cómo "cazamos" los errores?? try catch

// try {
    
//   const suma5y4 = sumar(5, 4);
//   console.log(suma5y4);

//   const fraseGirada = reverseText('hola');
//   console.log(fraseGirada);

  
// } catch (error){
//   console.log('Ha habido algún error');
//   console.log(error);
// }


// console.log('Console debajo del trycatch');



//* Hay varios errores y también podemos crear nuevos tipos de error

const nombre = 'ivan'
// console.log(apellido); // ReferenceError

const edad = null;
// console.log(edad.length); // TypeError

class HttpError extends Error {
  constructor (message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const error1 = new HttpError('Error al hacer fetch', 404);
// console.dir(error1);


function hacerPeticion () {
  // lo que sea

  throw new HttpError('No encontrado', 404);
}


//* ========================================== *//
//* Dentro del catch podemos saber cuál es el error que ha llegado usando "instanceof"


try {
    
  const suma5y4 = sumar(5, 4);
  console.log(suma5y4);

  const fraseGirada = reverseText('hola');
  console.log(fraseGirada);

  hacerPeticion();
  
} catch (error){
  console.log('Stack: ', error.stack);

  if (error instanceof HttpError) {
    console.log('Error de tipo HTTP');
    console.log('Status: ', error.statusCode);
  } else if (error instanceof TypeError) {
    console.log('Error de tipo');
    console.log(error.message);
  } else {
    console.log(error.message);
  }

}


//* existe una tercera palabra que sirve para ejcutar TANTO SI VA BIEN EN EL TRY COMO SI VA MAL

try {
  // esto se ejecuta mientras vaya bien
} catch (error) {
  // si va mal se ejecuta esto  
} finally {
  // esto se ejecutará siempre al acabar
}

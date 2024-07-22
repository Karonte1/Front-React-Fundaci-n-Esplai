

// Esquema manual
// nombre: string
// email: string
// edad: number


//* Validando manualmente

function validarData (objeto) {

  if (objeto.nombre === undefined) {
    throw new Error('A este objeto le falta la propiedad "nombre"')
  }
  if (objeto.email === undefined) {
    throw new Error('A este objeto le falta la propiedad "email"')
  }
  if (objeto.edad === undefined) {
    throw new Error('A este objeto le falta la propiedad "edad"')
  }

  if (typeof objeto.nombre !== 'string') {
    throw new Error('"Nombre tiene que ser un string')
  }
  if (typeof objeto.email !== 'string') {
    throw new Error('"Email tiene que ser un string')
  }
  if (typeof objeto.edad !== 'number') {
    throw new Error('"Edad tiene que ser un number')
  }


  return objeto;
}

const objetoBBDD = {
  nombre: 'Ivan',
  isMarried: true,
  email: 'lsjgnsdgdg',
  edad: 37
}

const objetoValidado = validarData(objetoBBDD);

// console.log(objetoValidado);

//* usando ZOD

import { object, z } from 'zod';

// esquema para ZOD
// vamos a validar un simple string

//* Paso 1: creamos el schema
const reverseTextSchema = z.string({ invalid_type_error: 'Tiene que ser un string' }).min(1, 'Mínimo un caracter').max(10, 'Máximo 10 caracteres').email('No es un email válido');

//* Paso 2: validamos donde quieras con "parse", que hará un throw ZodError si no valida bien
/*
function reverseText (text = '') {

  // validar que me pases un string
  const validatedText = reverseTextSchema.parse(text);

  return validatedText.split('').reverse().join('');
}


try {
  console.log(reverseText('hola@h'));
  console.log(reverseText('fldfdkgñfdgkjfgñd'));
  console.log(reverseText(23));
} catch (error) {
  console.error(error.issues[0].message);
}

*/
//* Opción 2, usar safeParse, que no hará throw

function reverseTextSafe (text = '') {

  // validar que me pases un string
  const { success, data, error } = reverseTextSchema.safeParse(text);
  
  if (!success) {
    return console.error(error.issues[0].message);
  }
    
  return data.split('').reverse().join('');
}
/*
console.log(reverseTextSafe('ho@gg.com'));
console.log(reverseTextSafe(23));
*/

//* ========================================== *//

//* Vamos a validar un objeto

// nombre: string
// email: string
// edad: number

//* Paso 1: el esquema

const userSchema = z.object({
  nombre: 
    z.string({ invalid_type_error: 'No es un string', required_error: 'Campo requerido' })
    .min(1, 'Mínimo 1 caracter'),
  email: 
    z.string()
    .email(),
  gender: 
    z.enum(['male', 'female'], { message: 'Tiene que ser "male" o "female"' }),
  edad: 
    z.coerce.number()
    .optional()
}).strict('No puedes poner campos extra');

const usuario1 = {
  nombre: 'Ivan',
  // isMarried: true,
  email: 'ls@fdf.com',
  edad: '37',
  gender: 'male'
}

const {success, data, error } = userSchema.safeParse(usuario1);

console.log(data);

if (!success) {
  const errors = mappingZodErrors(error);
  console.log(errors);
}



function mappingZodErrors (error) {
  const objectErrors = {};

  for(const err of error.issues) {
    objectErrors[err.path[0]] =  `${err.message}`;
  }

  return objectErrors;
}

function mappingZodErrorsArray (error) {
  const arrayErrors = [];
  
  for(const err of error.issues) {
    arrayErrors.push([err.path[0], err.message]);
  }

  return arrayErrors;
}

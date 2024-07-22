//? Módulos JS -->  ES Modules
// cuando vayas a importar en javascript nativo, asegúrate que tu etiqueta <script> tenga el atributo  type="module"
//* para importar algo por defecto NO UTILIZO LLAVES
// import sumar from './helpers/operaciones.js';

//* para importar de forma nombrada UTILIZO LLAVES
// import { restar } from './helpers/operaciones.js';

//* Podemos poner todo lo que venga del mismo archivo en la misma línea
// import sumarcillo, { restar } from './helpers/operaciones.js';

//* podemos poner alias a las exportaciones nombradas usando as

import sumarcillo, { restar as restur } from './helpers/operaciones.js';


// De repente aquí en medio de mi código me gustaría poder utilizar una función que tengo en otro archivo.

const num1 = 7;
const num2 = 9;

const suma7y9 = sumarcillo(num1, num2);
console.log(suma7y9);

const resta7y9 = restur(num1, num2);
console.log(resta7y9);



// CommonJS
// export
module.exports = { sumar }

// import
const { sumar } = require('./helpers/operaciones.js');
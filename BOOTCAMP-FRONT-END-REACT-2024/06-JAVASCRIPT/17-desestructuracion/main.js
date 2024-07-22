//? Desestructuración

const frutas = ['🍎', '🍐', '🍌'];


//! problema
const manzana = frutas[0];
const pera = frutas[1];
const platano = frutas[2];


//* solución --> DESESTRUCTURACIÓN DE ARRAYS

const [apple, pear, banana] = frutas;


console.log(`La primera fruta es la ${frutas[0]}, la segunda es una ${frutas[1]} y la tercera es un ${frutas[2]} `);
console.log(`La primera fruta es la ${manzana}, la segunda es una ${pera} y la tercera es un ${platano} `);


console.log(`La primera fruta es la ${apple}, la segunda es una ${pear} y la tercera es un ${banana} `);


//! NORMAS!!!
//! No importa el nombre que pongas a las variables
//! Lo importante ES EL ORDEN

//* Si te quieres saltar una posición, DEJA EL HUECO VACÍO

const [, , platan] = frutas;
console.log(platan);

// ejemplo de uso con arrays

function operacionesArray (num1, num2) {
  const suma = num1 + num2;
  const resta = num1 - num2;
  const multiplicacion = num1 * num2;
  const division = num1 / num2;
  const potencia = num1 ** num2;

  return [suma, resta, multiplicacion, division, potencia];
}


const operaciones5y4 = operacionesArray(5, 4);

// forma fea
// const resta5y4 = operaciones5y4[1];
// console.log(resta5y4);

// forma cool
const [ , resta5y4] = operaciones5y4;
console.log(resta5y4);

// lo puedo mejorar SI DIRECTAMENTE DESESTRUCTURO EL RETORNO DE LA FUNCIÓN

const [ , , multiplicacion3y5] = operacionesArray(3, 5);
console.log(multiplicacion3y5);


const [ , , , , potencia7ymenos5] = operacionesArray(7, -5);
console.log(potencia7ymenos5);


//* ========================================== *//
//* ========================================== *//
//* ========================================== *//

//* Desestructuración de objetos
// ES LO MISMO QUE CON LOS ARRAYS PERO LAS NORMAS ESTAN INVERTIDAS

const pepino = {
  cantidad: 3,
  procedencia: 'Marruecos',
  tieneMotitas: true,
  emoticono: '🥒'
};

//! problema
// const cantidad = pepino.cantidad;
// const procedencia = pepino.procedencia;
// const emoticono = pepino.emoticono;

//* SOLUCIÓN

const { emoticono, cantidad, procedencia } = pepino;

//! NORMAS!!!
//! LE DA IGUAL EL ORDEN
//! LO IMPORTANTE ES QUE LAS VARIABLES SE LLAMEN IGUAL QUE LAS PROPIEDADES DEL OBJETO

console.log(`El ${pepino.emoticono} viene de ${pepino.procedencia}, y me quedan ${pepino.cantidad}`);


console.log(`El ${emoticono} viene de ${procedencia}, y me quedan ${cantidad}`);

// el problema que surge es que ya no lo puedo hacer otra vez
//* NO PASA NADA!! porque se le pueden poner ALIAS a las variables
const { emoticono: emoti, cantidad: cant, procedencia: proce } = pepino;
console.log(emoti, cant, proce);

// Caso práctico con objetos
function operacionesObjeto (num1, num2) {
  const suma = num1 + num2;
  const resta = num1 - num2;
  const multiplicacion = num1 * num2;
  const division = num1 / num2;
  const potencia = num1 ** num2;

  return { suma, resta, multiplicacion, division, potencia }  // 0x123
}

const { potencia: potencia14y7 } = operacionesObjeto(14, 7);
const { potencia: potencia4y3 } = operacionesObjeto(4, 3);

console.log(potencia14y7);
console.log(potencia4y3);


//* EXTRA!!  
//* También podemos desestructurar DIRECTAMENTE EN EL PARÁMETRO DE UNA FUNCIÓN

function showUserInfo (user) {

  const { name, lastname, email, isAdmin } = user;

  console.log(`
    INFO DEL USUARIO:
    Nombre: ${name}
    Apellidos: ${lastname}
    Email: ${email}
    Admin: ${isAdmin ? '😎' : '🤓'}
  `);
}



const user1 = {
  name: 'Ivan',
  lastname: 'Luengo',
  email: 'ivan@email.com',
  isAdmin: false
}


showUserInfo(user1);
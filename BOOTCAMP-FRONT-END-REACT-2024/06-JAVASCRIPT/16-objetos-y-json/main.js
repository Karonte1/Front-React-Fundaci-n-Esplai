//? Objetos en JavaScript

//* Son valores NO PRIMITIVOS que permite guardar varios valores, PERO QUE SIEMPRE HABLAN DE LA MISMA ENTIDAD

const usuario1ojos = 'verdes';
const usuario1nombre = 'Ivan';

const usuario1 = {  // 0x444
  //* propiedades
  nombre: 'Ivan',
  edad: 37,
  isMarried: true,
  amigos: ['Davide', 'Ruth', 'Jose', { nombre: 'Adri', isAdmin: true }],
  caracteristicas: {
    ojos: 'verdes',
    pelo: 'rubio'
  },

  //* métodos
  connect: function () { console.log('conectado') }
};

console.log(usuario1);

//* ========================================== *//
//* Cómo leemos datos de un objeto?  -->   .

console.log(usuario1.nombre);


// ya podemos viajar por cualquier dato usando puntos y corchetes
console.log(usuario1.amigos[3].nombre);

// podemos leer propiedades que no existen
console.log(usuario1.ciudad);


// si quieres llamar a una función dentro de un objeto lo haces igual pero poniendo paréntesis

usuario1.connect();

//! Ojo! porque si intento acceder a algo de un objeto que es null o undefined puede dar error, para ello tenemos el operador ? que nos puede ayudar --> optional chaining  




const perro1 = {
  nombre: 'Kira',
  cachorros: ['Fluffy', 'Bongo'],
  caracteristicas: null
}


const perro2 = {
  nombre: 'Freya',
  caracteristicas: {
    pelo: 'largo',
    ojos: 'miel'
  }
}

console.log('Nombre');
console.log(perro1.nombre);
console.log(perro2.nombre);

console.log('Cachorros');
console.log(perro1.cachorros?.[1]);
console.log(perro2.cachorros?.[1]);

console.log('Características');
console.log(perro1.caracteristicas?.pelo);
console.log(perro2.caracteristicas?.pelo);

// podemos utilizarlo para tantas propiedades de objeto como necesites
// console.log(user.city?.street?.number);

console.log('Si hay crash aquí no sigue');

//* ========================================== *//
//* ========================================== *//

//* ¿Cómo modificamos valores de un objeto?

perro1.nombre = 'Tula';
console.log(perro1);

//* También podemos añadir nuevas propiedades

console.log(perro1);
perro1.ciudad = 'Barcelona';
console.log(perro1);


//* Otra forma de llamar a las propiedades, en lugar del punto CON CORCHETES!!
const platano = {
  cantidad: 7,
  procedencia: 'Canarias',
  tieneMotitas: true,
  'emoticono': {
    'emo 1': '🍌'
  },
  'donde comprar': 'Lidl', 
}

console.log(platano.cantidad);
console.log(platano['cantidad']);

console.log(platano.tieneMotitas);
console.log(platano['tieneMotitas']);


console.log(platano['donde comprar']);

console.log(platano['emoticono']['emo 1']);



//* Propiedades computadas, que son propiedades que genramos o conseguimos a raiz del string guardado en una variable


const valorDelInput = 'Luengo';
const valorDeUnSelect = 'apellidos';


const user1 = {
  email: 'ivan@email.com',
  pass: '1234',
  [valorDeUnSelect]: valorDelInput
}

console.log(user1);


const otroSelect = 'apellidos';

console.log(user1[otroSelect]);



//* Podemos RECORRER un objeto?? Sí, con un for...in

for (const key in platano) {
  console.log(key);
  
  console.log(platano[key]);
}


//* EXTRA!!!  Cuando un objeto tiene como nombre de propiedad el mismo nombre que la variable que uses para añadirle un valor, te permite quitar uno de los dos nombres.

const miNombre = 'Ivan';
const miEdad = 37;

const nombre = 'Carlos';
const edad = 45;


const usuario = {
  nombre: miNombre,
  edad: miEdad
}

const usuario2 = { nombre, edad, ciudad: 'Madrid' };

console.log(usuario);
console.log(usuario2);

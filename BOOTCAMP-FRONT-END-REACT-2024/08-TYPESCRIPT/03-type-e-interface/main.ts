//? type  y  interface

//* interface --> solo funciona para Objectos y Classes

interface Tarea {
  id: number;
  task: string;
  isCompleted: boolean;
}

const toDo: Tarea = {
  id: 1,
  task: 'Estudiar Typescript',
  isCompleted: false
}

// toDo.id = 'hola' //! no permitido

//* Parametros opcionales  -->  ?

interface User {
  id: number;
  username: string;
  email?: string;
}

const user1: User = {
  id: 2,
  username: 'ivluengo'
};

//* Podemos extender interfaces usando extends
// Siempre que quieras tener otro tipo de dato que sea muy parecido a otro, podemos extender una interface de otra


// interface Admin {
//   id: number;
//   username: string;
//   email?: string;
//   isAdmin: boolean
// }

interface Admin extends User {
  isAdmin: boolean;
}

const admin1: Admin = {
  id: 1,
  username: 'carlos',
  email: 'carlos@gmail.com',
  isAdmin: true
}

//* Ahora ya puedo decirle a un array por ejemplo que todos sus elementos sean de tipo User

const users: User[] = [];

const newUser = {
  id: 3,
  username: 'Thiago'
}

users.push(newUser);

//* Es mas, ahora cuando uso cualquier método de javascript, me ayuda con el tipado de cada cosa

const arrayFiltrado = users.filter((user) => user.username.includes('i'));

//* ========================================== *//
//* ========================================== *//

//* type --> Permite también generar NUEVOS TIPOS DE DATO SIMPLES, NO HACE FALTA QUE SEAN OBJETOS

type Gender =  'male' | 'female' | 'non-binary';

interface Perro {
  name: string;
  raza: string;
  gender: Gender;
}

interface Gato {
  name: string;
  raza: string;
  gender: Gender;
}

//* Pero puedes crear tipos de objeto usando type

type Pajaro = {
  name: string;
  raza: string;
  gender: Gender;
};

const perro1: Perro = {
  name: 'Kira',
  raza: 'Mestiza',
  gender: 'female'
}

const pajaro1: Pajaro = {
  name: 'Floki',
  raza: 'Agaporni',
  gender: "male"
}

//* también podemos extender types, usamos --> &

type Pescado = Perro & {
  itSwims: boolean
}

const fish1: Pescado = {
  name: 'Wanda',
  raza: 'goldfish',
  gender: "female",
  itSwims: false
}

//* ========================================== *//
//* ========================================== *//

//* clases

// interface ClassCoche {
//   marca: string;
//   modelo: string;
//   puertas: number;
//   info: () => void;
//   getMarca: () => string;
//   setMarca: (nuevaMarca: string) => void;
// }


class Coche /* implements ClassCoche */ {
  //! en typescript ES OBLIGATORIO DEFINIR EL TIPO DE CADA PROPIEDAD ANTES DEL CONSTRUCTOR
  marca: string;
  modelo: string;
  puertas: number;

  constructor (marca: string, modelo: string, puertas: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.puertas = puertas;
  }

  info () {
    console.log(`Es un coche ${this.marca} ${this.modelo} y tiene ${this.puertas} puertas`);
  }

  getMarca () {
    return this.marca;
  }

  setMarca (nuevaMarca: string) {
    this.marca = nuevaMarca;
  }

} 

const c1 = new Coche('Opel', 'Zafira', 5);

c1.setMarca('Seat');
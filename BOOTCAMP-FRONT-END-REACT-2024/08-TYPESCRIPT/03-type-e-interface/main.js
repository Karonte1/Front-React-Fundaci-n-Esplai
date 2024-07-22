"use strict";
//? type  y  interface
const toDo = {
    id: 1,
    task: 'Estudiar Typescript',
    isCompleted: false
};
const user1 = {
    id: 2,
    username: 'ivluengo'
};
const admin1 = {
    id: 1,
    username: 'carlos',
    email: 'carlos@gmail.com',
    isAdmin: true
};
//* Ahora ya puedo decirle a un array por ejemplo que todos sus elementos sean de tipo User
const users = [];
const newUser = {
    id: 3,
    username: 'Thiago'
};
users.push(newUser);
//* Es mas, ahora cuando uso cualquier método de javascript, me ayuda con el tipado de cada cosa
const arrayFiltrado = users.filter((user) => user.username.includes('i'));
const perro1 = {
    name: 'Kira',
    raza: 'Mestiza',
    gender: 'female'
};
const pajaro1 = {
    name: 'Floki',
    raza: 'Agaporni',
    gender: "male"
};
const fish1 = {
    name: 'Wanda',
    raza: 'goldfish',
    gender: "female",
    itSwims: false
};
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
    constructor(marca, modelo, puertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.puertas = puertas;
    }
    info() {
        console.log(`Es un coche ${this.marca} ${this.modelo} y tiene ${this.puertas} puertas`);
    }
    getMarca() {
        return this.marca;
    }
    setMarca(nuevaMarca) {
        this.marca = nuevaMarca;
    }
}
const c1 = new Coche('Opel', 'Zafira', 5);
c1.setMarca('Seat');

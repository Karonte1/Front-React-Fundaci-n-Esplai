import Texts from '../../00-EXTRAS/00-API/Texts.js';


//* STATIC
// propiedades y métodos que NO ES NECESARIO QUE INSTANCIEMOS LA CLASE PARA USARLOS.

class Persona {

  piernas = 2;
  static brazos = 2;

  constructor (nombre) {
    this.nombre = nombre;
  }

}

const p1 = new Persona('Ivan');

console.log(p1);

console.log(p1.piernas);
console.log(p1.brazos);  //! no se le da a los objetos nuevos
console.log(Persona.brazos); //* Solo puedo ver esa propiedad si la llamo usando la Clase


console.log(Math.PI);

class MyMath {
  static PI = 3.141592653589793;

  static random () {
    return Math.random()
  }
}

console.log(MyMath.PI);
console.log(MyMath.random());

const frase = 'Con diez cañones por banda...';

const fraseGirada = Texts.reverseText(frase);

console.log(fraseGirada);


//* ========================================== *//
//* ========================================== *//

//* PRIVATE 
// Propiedades y métodos QUE SOLO PUEDEN SER USADOS DENTRO DE LA CLASE, NO SE PUEDEN LEER DESDE FUERA

class Coche {
  #marca;
  #modelo;
  #puertas;

  constructor (marca, modelo, puertas) {
    this.#marca = marca;
    this.#modelo = modelo; 
    this.#puertas = puertas;
  }

  info () {
    console.log(`
      INFO COCHE:
      Marca: ${this.#marca}
      Modelo: ${this.#modelo}
      Puertas: ${this.#puertas}
    `);
  }

  getMarca () {
    // return 'La marca es: ' + this.#marca;
    return this.#marca;
  }

  setMarca (nuevaMarca) {
    const marcasPermitidas = ['Seat', 'Opel', 'Mercedes'];

    if (typeof nuevaMarca !== 'string') return;

    if (!marcasPermitidas.includes(nuevaMarca)) return;
    
    this.#marca = nuevaMarca;
  }


  get marca () {
    return this.#marca;
  }

  set marca (nuevaMarca) {
    const marcasPermitidas = ['Seat', 'Opel', 'Mercedes'];

    if (typeof nuevaMarca !== 'string') return;

    if (!marcasPermitidas.includes(nuevaMarca)) return;
    
    this.#marca = nuevaMarca;
  }

}

const c1 = new Coche('Seat', 'Ibiza', 5);

// console.log(c1.#marca);

// c1.#marca = 'zapato';

// console.log(c1.#modelo);

c1.info();

const marca = c1.getMarca();
console.log(marca);
c1.setMarca('Zapato');
console.log(c1);


// utilizando set y get (accessors)
console.log(c1.marca);
c1.marca = 'Mercedes';
console.log(c1);

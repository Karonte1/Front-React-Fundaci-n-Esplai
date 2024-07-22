//? PASO 1:  "CAZAR" ELEMENTOS DEL DOM

//* Cazamos usando el ID de un elemento --> getElementById()
const h1 = document.getElementById('supertitulo');
console.log(h1); // 0x123


//* Cazamos usando CUALQUIER SELECTOR CSS  --> querySelector()

const elMismoH1 = document.querySelector('#supertitulo');
console.log(elMismoH1); // 0123


const ultimoLiLista2 = document.querySelector('.lista-2 li:last-child');
console.log(ultimoLiLista2);

// también podemos cazar varios elementos usando querySeletorAll

const todosLosLiDeLaWeb = document.querySelectorAll('li');
console.log(todosLosLiDeLaWeb);


//* ========================================== *//

//? ¿Qué puedo hacer con cada elemento que cace?

//? Propiedades básicas que podemos ver/modificar


//* ID
console.log(h1.id);
h1.id = 'titulazo';

//* name
const inputName = document.querySelector('[type="email"]');
console.log(inputName.name);
inputName.name = 'mi_email';

//* src
const foto1 = document.querySelector('.foto-1');

console.log(foto1.src);
foto1.src = 'https://picsum.photos/id/12/200/200';

//* alt
console.log(foto1.alt);
foto1.alt = 'Paisaje de rocas en la playa';


//* sus clases
//* className --> el string entero de clases
console.log(foto1.className);
foto1.className += ' text-xl'
console.log(foto1.className);


//* classList --> tiene una serie de métodos para añadir, quitar, remplazar clases

// Para añadir --> .add()
foto1.classList.add('rounded', 'border-red-500');

// Para quitar --> .remove()
//! si no existe la clase no hay problema
foto1.classList.remove('rounded', 'zapato');

// Para reemplazar una clase por otra --> .replace(antigua, nueva)
foto1.classList.replace('border-red-500', 'border-green-500');

// Para saber si tiene una clase concreta --> .contains()
console.log(foto1.classList.contains('rounded'));
console.log(foto1.classList.contains('border-green-500'));

// Para quitar o poner una clase dependiendo de si la tiene puesta o no (interruptor) --> .toggle()
foto1.classList.toggle('show');



//* Para cualquier atributo --> getAttribute()  y setAttribute()

console.log(foto1.getAttribute('class'));
console.log(foto1.getAttribute('title'));
console.log(foto1.getAttribute('id')); // foto1.id

foto1.setAttribute('title', 'Soy una foto 🎞');



//* ========================================== *//


//* Contenido de dentro

//* innerText
console.log(h1.innerText);
// h1.innerText = 'Texto cambiado desde <u>JavaScript</u>';

//* innerHTML
console.log(h1.innerHTML);
h1.innerHTML = 'Texto cambiado desde <u>JavaScript</u>';

const lista1 = document.querySelector('.lista-1');

console.log(lista1.innerHTML);

// vaciar un elemento HTML
lista1.innerHTML = '';

const valor = 'Texto del Li 😃'

// rellenarlo desde JavaScript
lista1.innerHTML = `
  <li>Li desde Javascript</li>
  <li class="especial">Li desde Javascript</li>
  <li>${valor}</li>
  <li title="soy el último">Li desde Javascript</li>
`;


//* ========================================== *//

//* Los estilos CSS

const padding = 2 * 1.5;

h1.style.backgroundColor = 'pink';

h1.style.padding = `${padding}rem`

//! No es muy recomendale añadir estilos desde JavaScript. 
//* Hazlo solo cuando necesites hacer algún cálculo para tener ese estilo.
//* En los otros casos, mejor añade una clase nueva en tu hoja de esilos y se lo añades desde javascript

// h1.style.fontFamily = 'Arial';
h1.classList.add('sans-serif');

//* también puedo añadir varios estilos a la vez usando "cssText"

// foto1.style.borderRadius = '15px';
// foto1.style.border = '4px solid black';
// foto1.style.boxShadow = '0 0 20px 5px rgb(0 0 0 / 0.5)';

foto1.style.cssText = `
  border-radius: 15px;
  border: 4px solid black;
  box-shadow: 0 0 20px 5px rgb(0 0 0 / 0.5);
`;

//* ========================================== *//
//* ========================================== *//

//? Crear elementos del DOM

//* Paso 1: Crear el nuevo elemento en Memoria.  createelement()

const ulLista3 = document.createElement('ul');

//* Paso 2: Dale todos los atributos que quieras que tenga cuando lo metas en el DOM

ulLista3.className = 'font-semibold text-xl text-black';

//* Paso 3: Añádele todo el contenido que quieras

const itemsLista = ['Item 1', 'Item 2', 'Item 3'];

// ulLista3.innerHTML = `
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// `


for (const item of itemsLista) {
  ulLista3.innerHTML += `<li>${item}</li>` 
}

//* Paso 4: Dale estilos CSS si fuera necesario

ulLista3.style.padding = '1rem';
ulLista3.style.border = '2px solid crimson';

//* Paso 5: Ponlo en el DOM DONDE QUIERAS

// siempre necesitaremos otro elemento del DOM como referencia
const sectionListaJS = document.querySelector('.lista-js');

// Para meter DENTRO y en la ÚLTIMA POSICIÓN (último hijo) --> append()
sectionListaJS.append(ulLista3);

// Para meter DENTRO y en la PRIMERA POSICIÓN (primer hijo) --> prepend()
sectionListaJS.prepend(ulLista3);

// Para meter FUERA y DESPUÉS --> after()
sectionListaJS.after(ulLista3);

// Para meter FUERA y ANTES --> before()
sectionListaJS.before(ulLista3);


// esto vale para cualquier elemento del DOM en cualquier momento
document.body.append(h1);


//* La otra forma de añadir elementos como contenido sería volver a crearlos con createElement() y meterlos dentro del ul con append()

const nuevoLi = document.createElement('li');
nuevoLi.innerText = 'Item 4';

ulLista3.append(nuevoLi);



console.log(ulLista3);
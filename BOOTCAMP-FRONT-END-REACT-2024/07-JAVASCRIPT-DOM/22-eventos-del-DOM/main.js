// cazamos lo que necesitemos usar
const img = document.querySelector('.foto-1');
const h1 = document.querySelector('h1');


// escuchamos el evento que queramos

//* Versión creando la función aparte y pasándosela al addEventListener

// function handleImageClick () {
//   console.log('Has hecho click en la imagen.');

//   h1.classList.add('text-red');
// }


// img.addEventListener('click', handleImageClick);  // 0x123

//* ========================================== *//

//* Opción Crear una función anónima "in situ" directamente como parámetro.


// img.addEventListener('click', function () { 

//   console.log(`Has hecho click en la imagen.`);

//   h1.classList.add('text-red');

// }); 


//* Opción 3. Lo mismo que antes pero con una función anónima tipo arrow function
// img.addEventListener('click',  () => { 

//   console.log(`Has hecho click en la imagen.`);

//   h1.classList.add('text-red');

// }); 


//* Opción 4: Pasarle parámetros a la función que le estamos pasando al addEventListener

function handleImageClick (nombre) {
  console.log(`${nombre}, Has hecho click en la imagen.`);

  h1.classList.add('text-red');
}


function funcionWrapper () {
  handleImageClick('Ivan');
}

img.addEventListener('click', funcionWrapper);  // 0x123



//* CONCLUSIÓN
//* Si la función que quieres ejecutar para que haga cambios (handleImageClick) no recibe parámetros, ponla tal cual en el addEventListener
img.addEventListener('click', handleImageClick);  // 0x123


//* Si la función SI RECIBE PARÁMETROS, tienes que pasarsela al addEventListener SIEMPRE DENTRO DE OTRA FUCNIÓN

img.addEventListener('click', function () { handleImageClick('Carlos') }); 

img.addEventListener('click', () => { handleImageClick('Carlos') }); 

img.addEventListener('click', () => handleImageClick('Carlos')); 


//* ========================================== *//
//* Ejemplos de eventos

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');
const inputChange = document.querySelector('[placeholder="change"]');
const inputKeypress = document.querySelector('[placeholder="keypress"]');
const inputRange = document.querySelector('[type="range"]');


//? MOUSE

//* click

btn1.addEventListener('click', () => {
  console.log('CLICK');
});

//* dblclick

btn2.addEventListener('dblclick', () => {
  console.log('DOBLE CLICK');
});

//* mouseenter

btn3.addEventListener('mouseenter', () => {
  console.log('Has entrado en el botón');
});

//* mouseleave

btn4.addEventListener('mouseleave', () => {
  console.log('Has SALIDO del botón');
});

//* mousemove

btn5.addEventListener('mousemove', () => {
  console.log('Te estás moviendo por el botón');
});



//? Teclado

//* change
inputChange.addEventListener('change', () => {
  console.log('Has modificado el input');
});

//* keypress
inputKeypress.addEventListener('keypress', () => {
  console.log('Has apretado una tecla cualquiera');
  const random = Math.floor(Math.random() * 360);
  
  document.body.style.backgroundColor = `hsl( ${random}  20% 50% / 0.5)`
});

document.body.addEventListener('keypress', () => {
  console.log('Has apretado una tecla en cualquier lado');
});


//* scroll
const parrafo = document.querySelector('.scroll');

parrafo.addEventListener('scroll', () => {
  console.log('SCROLL');

  // scrollTop te dice cuantos pixeles llevas de scroll
  console.log(parrafo.scrollTop);
  if (parrafo.scrollTop > 50) parrafo.style.borderColor = 'red';
});

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
});


//* transitionend
const btnTransition = document.querySelector('.transicion');
btnTransition.addEventListener('transitionend', () => {
  console.log('END');
})


//* animationend
const cajaAnimacion = document.querySelector('.animacion');
cajaAnimacion.addEventListener('animationend', () => {
  console.log('Animacion finalizada');
});


// ejemplo de donde querría un evento para una animación cuando se termina
// para esperar a que termine una animación antes de borrar un elemento del DOM

const deleteBoxBtn = document.querySelector('.delete-box');
deleteBoxBtn.addEventListener('click', () => {
  cajaAnimacion.classList.add('out');

  cajaAnimacion.addEventListener('animationend', () => cajaAnimacion.remove());
});



//* ========================================== *//
//* ========================================== *//

//? Otras maneras de añadir escuchadores de eventos

//* Usando las propiedades on...


const foto2 = document.querySelector('.foto-2');

foto2.addEventListener('click', () => console.log('click'));
foto2.addEventListener('click', () => console.log('click 2'));



foto2.onmouseenter = () => foto2.style.outline = '2px solid crimson'
foto2.onmouseleave = () => foto2.style.outline = 'none'

//! Diferencias:

//! usando addEventListener PUEDES AÑADIR VARIAS VECES EL MISMO EVENTO AL MISMO ELEMENTO

//! hay un tercer parámetro en el addEventListener que no puedes usar si lo haces con las propiedades on....


//* usando los atributos HTML on.....

function handleFotoClick () {
  document.body.style.backgroundColor = 'lightpink';
}

//* ========================================== *//
//* ========================================== *//

//? ¿Cómo limpiamos los listeners?
const $foto3 = document.querySelector('.foto-3');
const $foto4 = document.querySelector('.foto-4');
const $removeEventBtn = document.querySelector('.remove-event');

$foto3.onmousemove = (event) => console.log('Primera imagen: ',event.offsetX, event.offsetY);



function handleImageMove (event) {
  console.log('Segunda imagen: ',event.offsetX, event.offsetY);
}

$foto4.addEventListener('mousemove', handleImageMove);


$removeEventBtn.onclick = () => {
  $foto3.onmousemove = null;

  $foto4.removeEventListener('mousemove', handleImageMove);
}
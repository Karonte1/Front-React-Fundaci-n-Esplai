const form = document.querySelector('.main-form');

//* podemos cazar cada input y recoger su Value o lo que sea
const inputName = document.querySelector('[placeholder="Nombre..."]');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Has hecho submit');

  //* así recogeríamos el value de un input "cazado"
  const name = inputName.value;
  
  //* pero si le pones un name="" puedes conseguir el valor usando el formulario que has "cazado"
  const age = form.age.value;
  const ageNumber = form.age.valueAsNumber;

  const birthday = form.birthday.value;
  const birthdayDate = form.birthday.valueAsDate;
  const color = form.color.value;
  const note = form.note.valueAsNumber;
  const city = form.city.value;

  const gender = form.gender.value;
  const accept = form.accept.checked;


  // console.log(`
  // VALORES DEL FORMULARIO:
  // Nombre: ${name}  
  // Edad: ${age}  
  // Fecha: ${birthday}  
  // Color: ${color}  
  // Nota: ${note}  
  // Ciudad: ${city}
  // `);


  //* Hay una tercera forma de capturar los datos de un formulario y es usando una clase de JavaScript llamada FormData

  const datosFormulario = new FormData(form);

  console.log(datosFormulario.get('age'));
  console.log(datosFormulario.get('color'));
  console.log(datosFormulario.get('city'));

  for (const entry of datosFormulario.entries()) {
    console.log(entry);
  }

});


//* Eventos de un formulario

//* change e input
const comarca = document.querySelector('.comarca');

form.city.onchange = () => { 
  console.log('Has cambiado la ciudad');

  if (form.city.value === 'Barcelona') {
    comarca.classList.add('show');
  } else {
    comarca.classList.remove('show');
  }
}

//* en un input en el que haces cambios mientras tocas con el raton, la diferencia entre el evento change y el evento input es que con CHANGE --> hasta que no salgas no se lanza y con INPUT --> mientras cambias el valor se va ejecutando

form.color.oninput = () => {
  document.body.style.backgroundColor = form.color.value;
}

const rangeOutput = document.querySelector('.range-output');
form.note.oninput = () => {
  rangeOutput.innerText = form.note.value;
}


//* ========================================== *//
//* ========================================== *//

//* Hay elementos del DOM, que cuando los cazas tienen funciones incluidas.

//* método focus() --> para poner en foco un input
inputName.focus();


//* método submit() --> para hacer submit en un formulario

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // haz lo que quieras



  // haz submit
  form.submit();
});


//* método reset() -->para vaciar el formulario

// en cualquier punto...
form.reset();

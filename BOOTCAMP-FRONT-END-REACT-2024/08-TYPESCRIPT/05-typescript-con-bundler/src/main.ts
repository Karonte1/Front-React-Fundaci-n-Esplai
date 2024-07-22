//* Como cazamos en typescript

const btn1 = document.querySelector('.btn-1');
//! Hay que tener cuidado porque cuando "cazamos" un elemento puede ser null, así que habría que asegurarse siempre de que no lo sea antes de hacer algo con ese elemento


// if (btn1 !== null) {
//   btn1.addEventListener('click', () => {
//     console.log('Has hecho click')
//   })
// }

btn1?.addEventListener('click', () => {
  console.log('Has hecho click')
});


//* Typescript te permite decirle a un elemento que "SABES QUE NO ES NULL" -->   !
const foto1 = document.querySelector('.foto-1')!;

//* ========================================== *//
//* ========================================== *//

//* Qué pasa con el objeto event


foto1.addEventListener('click', (event) => {
  console.log(event)
});

//! Typescript te va a pedir siempre que le pongas tipo al objeto event si lo usas en una función aparte. Por lo menos usa el tipo genérico Event, si no conoces qué evento específico debería de ser.
function handleFotoClick (event: Event) {
  console.log('click en la foto', event)
}

foto1.addEventListener('click', handleFotoClick);



// ejemplo con un formulario
// const form: HTMLFormElement | null = document.querySelector('.main-form');
const form = document.querySelector<HTMLFormElement>('.main-form');


function handleSubmit (event: SubmitEvent) {
  event.preventDefault();

}

form?.addEventListener('submit', handleSubmit);

//* ========================================== *//
//* ========================================== *//

//* Si tienes que utilizar un método especial de algún elemento del DOM (focus(), reset(), play(), pause()) tienes que asegurarle a TypeScript de que ese elemento es del tipo correcto

const form2 = document.querySelector<HTMLFormElement>('.form-2')!;
const input = document.querySelector<HTMLInputElement>('[name="nombre"]')!;

if (form2) {
  form2.onsbumit = (event: SubmitEvent) => {
    event.preventDefault();

    // haces lo que quieras con los valores

    // borrar el input
    input.value = '';

    // haces foco en el input
    input.focus();
  }
}

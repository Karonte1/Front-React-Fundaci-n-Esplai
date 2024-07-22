//? sincronía y asincronía
//* Javascript es un lenguaje que tiene UN SOLO HILO DE EJECUCIÓN (single threaded)

//? Código síncrono --> Hasta que no termina de ejecutar un cierto código, no pasa a la siguiente línea de ejecución (cola de la panadería)

/*
console.log('uno');

for (let i = 0; i <= 4000000000; i++ ) {
  //
}

console.log('dos');
*/

//? Código asíncrono --> Existen funciones que mientras se están ejecutando, permiten que JavaScript siga adelante haciendo otras cosas y ya cuando estas funciones terminen ya tendremos su resultado.
/*
console.log('uno');

setTimeout(() => { console.log('dos') }, 2000);

console.log('tres');
*/

//* ========================================== *//
//* ========================================== *//


//? Simulacro de pedir algo a una API (servidor) y que tarde en llegar

function pedirElTiempoEn(ciudad) {
  const randomTemp = Math.random() * 4000;

  setTimeout(() => {
    // aquí dentro supuestamente tengo la información del tiempo
    const tiempo = `El tiempo en ${ciudad} es: 🌞`;


    console.log(tiempo);
    return tiempo;    
  }, randomTemp);

}

const tiempoBarcelona = pedirElTiempoEn('Barcelona');
console.log(tiempoBarcelona); // aquí tengo undefined porque javascript no se va a esperar a que termine lo de dentro de la función antes de retornartelo. 


//* Primera solución de toda la vida es usar callbacks



function pedirElTiempoCallbackEn(ciudad, callback) {
  const randomTemp = Math.random() * 4000;

  setTimeout(() => {
    // aquí dentro supuestamente tengo la información del tiempo
    const tiempo = `El tiempo en ${ciudad} es: 🌞`;

    callback(tiempo);
    
    return tiempo;    
  }, randomTemp);

}


pedirElTiempoCallbackEn('Madrid', (tiempo) => {
  document.body.prepend(tiempo);
})
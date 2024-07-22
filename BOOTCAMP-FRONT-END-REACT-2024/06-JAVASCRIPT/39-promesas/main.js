//? Promesas

//? Toda promesa tiene 2 partes
//* La definición, creacion de la promesa (el contrato)

// Toda promesa tiene 3 estados
  // PENDING --> pendiente de cumplirse
  // FULLFILLED --> Se ha cumplido
  // REJECTED --> NO se ha cumplido


//* para crear una promesa usamos new Promise()
const miPromesa = new Promise(() => {});
// console.log(miPromesa);



//* Normalmente trabajamos con promesas creando una función que RETORNE UNA PROMESA

function llevoABryanADisneyland () {   
  return new Promise((resolve, reject) => {

    const randomTemp = Math.random() * 3000;
    const randomBoolean = Math.random() >= 0.5;
    
    setTimeout(() => {
      if (randomBoolean) {
        // se cumple la promesa
        resolve();
      } else {
        // no se cumple la promesa
        reject();
      }
    }, randomTemp);
  });
}


//* Consumir la promesa (decidir qué hacer cuando se cumple y cuando no)

//* Dos maneras de consumir las promesas --> .then()  .catch()
//! no nos olvidemos para qué estan las promesas, si yo pongo código antes y después, el código es ASÍNCRONO y le permite a Javascript continuar


/*
console.log('uno');


llevoABryanADisneyland().then(() => {
  // aquí pon todo el código JavaScript que quieres que se ejecute CUANDO SE CUMPLA LA PROMESA
  console.log('Bryan está super contento 😃');
}).catch(() => {
  // aquí dentro pon todo el código JavaScript que quieras que se ejecute CUANDO NO SE CUMPLA LA PROMESA
  console.log('Bryan ya no me está 😡')
}).finally(() => {
  // esto se va a ejecutar SE CUMPLA O NO SE CUMPLA
  console.log('Terminó la promesa');
});


console.log('dos');
*/

//* Ejemplo un poco más realista

function getWeather (city) {
  const time = Math.random() * 3000;
  const boolean = Math.random() >= 0.5;

  
  return new Promise((resolve, reject) => {
    
    //! si ocurre algún error crítico de JavaScript dentro de una promesa, SALTARÁ EL RESOLVE enviando el objeto de error para que el Catch lo reciba
    // const edad = null.toLowerCase();

    setTimeout(() => {

      // pido al servidor el tiempo
      if (boolean) {
        resolve(`El tiempo en ${city} es: 🌞`);
      } else {
        reject(new Error('Ha habido un error en el servidor.'));
      }

    }, time);


  });
}


getWeather('Sevilla')
  .then((loQueHayaEnElResolve) => { console.log(`Tenemos tiempo!: ${loQueHayaEnElResolve}`)  })
  .catch((loQueHayaEnElReject) => { console.log('No tenemos tiempo', loQueHayaEnElReject); });

getWeather('Barcelona')
  .then(tiempo => document.body.prepend(tiempo))
  .catch((err) => {console.error(err.message)});
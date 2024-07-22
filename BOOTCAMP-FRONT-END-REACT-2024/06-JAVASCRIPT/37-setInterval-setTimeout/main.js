//* setTimeout -> temporizador:   Pasado un tiempo, ejecuta "esto"


// setTimeout(funcion, tiempo);

setTimeout(() => { console.log('Ejecutado') }, 3000);

//! para limpiar (parar) un timeout tenemos que recoger el ID que nos devuelve setTimeout y utilizarlo dentro de clearTimeout


const outputTimeout = document.querySelector('.output-timeout');
const outputInterval = document.querySelector('.output-interval');

const stopTimeoutBtn = document.querySelector('.stop-timeout');
const stopIntervalBtn = document.querySelector('.stop-interval');

const idTimeout = setTimeout(() => { outputTimeout.innerText = '🤘' }, 2000);

stopTimeoutBtn.addEventListener('click', () => {
  clearTimeout(idTimeout);
})


//* setInterval -> repetidor: Cada cierto tiempo, "repite" esta ejecución

//! para parar un interval hacemos EXACTAMENTE LO MISMO que con el timeout

// setInterval(funcion, tiempo)

let contador = 0;
const idInterval = setInterval(() => { 
  contador++;
  outputInterval.innerText = contador;
}, 1000)

stopIntervalBtn.addEventListener('click', () => clearInterval(idInterval));

//* ========================================== *//
//* ========================================== *//

const dias = document.querySelector('.dias');
const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

const fecha = new Date('2024-06-26T00:00:00');
const fechaMS = fecha.getTime();


setInterval(() => {
  const diferencia = fechaMS - Date.now();
  const segundosRestantes = Math.floor((diferencia / 1000) % 60); 
  const minutosRestantes = Math.floor((diferencia / 1000 / 60) % 60);
  const horasRestantes = Math.floor((diferencia / 1000 / 60 / 60) % 24);
  const diasRestantes = Math.floor((diferencia / 1000 / 60 / 60 / 24) % 365);

  dias.innerText = diasRestantes;
  horas.innerText = horasRestantes;
  minutos.innerText = minutosRestantes;

  // opcion ternario
  // segundos.innerText = segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes;
  // opción padStart --> hay que pasar a string
  segundos.innerText = segundosRestantes.toString().padStart(2, '0');

}, 1000);


const fechaDias = (fechaMS - Date.now()) / 1000 / 60 / 60 / 24;
console.log(fechaDias);
const fechaHoras = fechaDias * 24;
console.log(fechaHoras);
const fechaMinutos = (fechaHoras - Math.floor(fechaHoras)) * 60;
console.log(fechaMinutos);
const fechaSegundos = Math.floor(fechaMinutos - Math.floor(fechaMinutos)) * 60;
console.log(fechaSegundos);
//? Async y await
//* Es la segunda forma de CONSUMIR PROMESAS


const URL = 'https://randomuser.me/api/';

// versión then catch
// fetch(URL)
//   .then(resp => resp.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err.message));

// versión async await


// async function getRandomUser () {

//   try {
//     const resp = await fetch(URL);
//     const user = await resp.json();

//     console.log(1, resp);
//     console.log(2, user);
    
//   } catch (error) {
//     console.error(error.message);
//   }

// }

// getRandomUser();


//* si no quisieras crear una función y luego ejecutarla puedes utilizar el truquito del IIFE - Inmediately Invoked Function Expression

// function sumar (a, b) {
//   console.log(a + b);
// }

// sumar(4, 5);




// IIFE
// (function (a, b) {
//   console.log(a + b);
// })(5, 3);



// IIFE
// (async function () {

//   try {
//     const resp = await fetch(URL);
//     const user = await resp.json();

//     console.log(1, resp);
//     console.log(2, user);
    
//   } catch (error) {
//     console.error(error.message);
//   }

// })()


//* Ejemplo de varias peticiones seguidas

const API_KEY = '1e37aa1d6e7893e46fc18e5a28e8561e';
const URL_WEATHER = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&appid=${API_KEY}`;
const URL_LAT_LON = `http://api.openweathermap.org/geo/1.0/direct?appid=${API_KEY}`;


const cityInput = document.querySelector('[name="city"]');
const output = document.querySelector('.output');


cityInput.onkeypress = (event) => {
  if (event.key !== 'Enter') return;
  
  const city = cityInput.value;

  if (city === '' || !isNaN(city)) return

  //* version then then catch
  // getWeatherLongThenIn(city);
  // getWeatherShortThenIn(city);

  //* versión async await
  getWeatherAsyncAwaytIn(city);


} 


function getWeatherLongThenIn(city) {

  fetch(URL_LAT_LON + `&q=${city}`)
    .then(resp => {
      console.log(1, resp);
      return resp.json();
    })
    .then(json => {
      console.log(2, json);

      // aquí dentro tengo la lat y lon de Barcelona así que hago otra petición
      const {lat, lon} = json[0];

      fetch(URL_WEATHER + `&lat=${lat}&lon=${lon}`)
        .then(resp => {
          console.log(3, resp);

          return resp.json();
        })
        .then(data => {
          console.log(4, data);
          output.innerHTML = `
          <h2>El tiempo en ${city} es ${data.weather[0].description}</h2>
          `
          
        });
    })
    .catch(err => console.error(err.message));

}

function getWeatherShortThenIn(city) {

  fetch(URL_LAT_LON + `&q=${city}`)
    .then(resp => resp.json())
    .then(json => {
      if (json.length === 0) {
        throw new Error('No se ha encontrado ninguna ciudad con ese nombre.');
      }
      // aquí dentro tengo la lat y lon de Barcelona así que hago otra petición
      const {lat, lon} = json[0];

      return fetch(URL_WEATHER + `&lat=${lat}&lon=${lon}`)  
    })
    .then(resp => resp.json())
    .then(data => {
      output.innerHTML = `
      <h2>El tiempo en ${city} es ${data.weather[0].description}</h2>
      `
    })
    .catch(err => console.error(err.message));
}

async function getWeatherAsyncAwaytIn (city) {

  try {
    const respLatLon = await fetch(URL_LAT_LON + `&q=${city}`);
    const json = await respLatLon.json();
    
    if (json.length === 0) {
      throw new Error('No se ha encontrado ninguna ciudad con ese nombre.');
    }

    const {lat, lon} = json[0];

    const respWeather = await fetch(URL_WEATHER + `&lat=${lat}&lon=${lon}`);
    const data = await respWeather.json();

    output.innerHTML = `
      <h2>El tiempo en ${city} es ${data.weather[0].description}</h2>
    `;
    
  } catch (error) {
    console.error(error.message);
  }

}

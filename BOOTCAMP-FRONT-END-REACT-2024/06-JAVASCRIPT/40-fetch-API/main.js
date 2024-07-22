/* function fetch (URL, opciones) {
  return new Promise()
} */

const btnTxt = document.querySelector('.txt');
const btnJson = document.querySelector('.json');
const btnApi = document.querySelector('.api');
const output = document.querySelector('.output')

btnTxt.onclick = () => {

  //* versión larga
  // fetch('./assets/quijote.txt')
  //   .then((response) => {

  //   console.log(response);

  //   response.text().then((textoQuijote) => { console.log(textoQuijote)})

  // })
  // .catch((error) => console.error(error.message));

  //* versión corta

  fetch('./assets/quijote.txt')
    .then((response) => { return response.text() })
    .then((textoQuijote) => { output.append(textoQuijote); })
    .catch((error) => console.error(error.message));

}

btnJson.onclick = () => {
  fetch('./assets/miArchivo.json')
    .then((resp) => {
      // haz lo que quieras con la response
      // retornamos la promesa para CREAR EL JSON
      return resp.json()
    })
    .then((json) => { 
      // en este punto YO SE QUE TENGO EL JSON
      console.log(json);
     })
    .catch(err => console.error(err));
}

btnApi.onclick = () => {

  fetch('https://randomuser.me/api/')
    .then(resp => {
      console.log(resp);


      return resp.json();
    })
    .then(data => {
      console.log(data.results[0])
      const { picture, name } = data.results[0];

      const userHTML = document.createElement('article');

      userHTML.innerHTML = `
      <img src="${picture.thumbnail}">   
      <h3>${name.first} ${name.last}</h3>   
      `;

      output.append(userHTML);

    })
    .catch(error => console.error(error.message));
}


//* ========================================== *//
//* Buscador de países

const countryInput = document.querySelector('[name="country"]');
const countryList = document.querySelector('.country-list');

countryInput.onkeypress = (event) => {
  if (event.key !== 'Enter') return;
  
  const country = countryInput.value;

  if (country === '' || !isNaN(country)) return

  getCountryBy(country);

} 

function getCountryBy (name) {
  const URL = 'https://restcountries.com/v3.1/name/';
  fetch(URL + name)
    .then(resp => {
      console.log(1, resp);
      
      if (resp.status === 404) {
        throw new Error(`No se ha encontrado ningún país por: "${name}"`);
      }

      return resp.json();
    })
    .then(countries => {
      countryList.innerHTML = '';
      countries.forEach(country => countryList.append(createCountryMarkup(country)));
    })
    .catch(err => console.error(err.message));
}


function createCountryMarkup (country) {
  const article = document.createElement('article');
  article.innerHTML = `
  <article>
    <img src="${country.flags?.svg}" alt="Bandera de ${country.translations?.spa?.common}" width="100%">
    <span>${country.translations?.spa?.common}</span>
    <span>👪 ${country.population}</span>
  </article>
  `;

  return article;
}
"use strict";

//* Ejemplo con un objeto para hacer cosas con el

const luke = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/6/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/7/'
  ],
  species: [
      'https://swapi.dev/api/species/1/'
  ],
  vehicles: [
      'https://swapi.dev/api/vehicles/14/',
      'https://swapi.dev/api/vehicles/30/'
  ],
  starships: [
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/22/'
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/'
}

// Imprimir en consola
  // "Nombre: Luke Skywalker"
  // "Altura: 172"

console.log(`Nombre: ${luke.name}`);
console.log(`Altura: ${luke.height}cm`);

// cambiale el color de pelo de "blond" a "brown"
luke.hair_color = "brown";
console.log(luke.hair_color);

// Listad en consola todas las "url" de las peliculas en las que sale

for (const film of luke.films) {
  console.log(film);
}

for (const index in luke.films) {
  console.log(`Pelicula ${+index + 1}: ${luke.films[index]}`);
}

// imprime en consola el color de ojos usando los corchetes en lugar del punto

console.log(luke.eye_color);
console.log(luke['eye_color']);


// guarda en una variable el valor de luke.city.name y que NO DE ERROR

let nombreCityLuke;
if (luke.city) {
  nombreCityLuke = luke.city.name;
}

const nombreCityLuke2 = luke.city?.name;

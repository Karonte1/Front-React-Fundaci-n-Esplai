const frutas = [
    {
      nombre: 'plátano',
      procedencia: 'Canarias',
      cantidad: 5,
      emoticono: '🍌'
    },
    {
      nombre: 'manzana',
      procedencia: 'Marruecos',
      cantidad: 2,
      emoticono: '🍎'
    },
    {
      nombre: 'uvas',
      procedencia: 'La Rioja',
      cantidad: 10,
      emoticono: '🍇'
    },
    {
      nombre: 'aguacate',
      procedencia: 'Perú',
      cantidad: 0,
      emoticono: '🥑'
    },
    {
      nombre: 'pera',
      procedencia: 'Toledo',
      cantidad: 7,
      emoticono: '🍐'
    },
    {
      nombre: 'sandía',
      procedencia: 'Marruecos',
      cantidad: 0,
      emoticono: '🍉'
    }
  ]
  
  
  //* Filtra en un array nuevo todas las frutas que tengan más de 5 unidades

  console.log(frutas.filter(fruta => { return fruta.cantidad > 5}));
  console.log(frutas.filter(fruta => fruta.cantidad > 5));  
  
  //* Filtra todas las frutas que sean de Marruecos
  console.log(frutas.filter(fruta => fruta.procedencia.toLowerCase() === 'marruecos'));

  
  //* Encuentra la fruta que tenga menos de 5 unidades y luego imprime su emoticono en consola
  const frutaMenos5Unidades = frutas.find(fruta => fruta.cantidad < 5);
  console.log(frutaMenos5Unidades.emoticono);

  
  //* Encuentra la fruta que venga de Canarias y súmale 2 a su cantidad
  console.log(frutas.map(fruta => {
    if (fruta.procedencia.toLowerCase().includes('canarias')) {
      return { ...fruta, cantidad: fruta.cantidad + 2 }
    }
    else {
      return { ...fruta }
    }
  }));  

  console.log(frutas.map(fruta => fruta.procedencia.toLowerCase().includes('canarias') 
    ? { ...fruta, cantidad: fruta.cantidad + 2 } 
    : { ...fruta }
  )); 


  //* ========================================== *//


  const peliculas = [
    {
      titulo: 'El Señor de los Anillos',
      genero: ['Aventuras', 'Acción'],
      duracion: 250,
      year: 2001,
      director: 'Peter Jackson'
    },
    { 
      titulo: 'Harry Potter', 
      genero: ['Aventuras', 'Fantasía'], 
      duracion: 151, 
      year: 2001 , 
      director: 'Chris Columbus' 
    },
    { 
      titulo: 'Troya', 
      genero: ['Histórica', 'Acción'], 
      duracion: 132, 
      year: 2004 , 
      director: 'Wolfgang Petersen' 
    },
    { 
      titulo: 'Iron Man', 
      genero: ['Ciencia Ficción', 'Acción'], 
      duracion: 126,
      year: 2008 , 
      director: 'Jon Favreau' 
    },
    { 
      titulo: 'E.T.', 
      genero: ['Aventuras', 'Ciencia Ficción'], 
      duracion: 115, 
      year: 1982 , 
      director: 'Steven Spielberg' 
    },
    { 
      titulo: 'Los Goonies', 
      genero: ['Aventuras', 'Comedia'], 
      duracion: 114, 
      year: 1985 , 
      director: 'Richard Donner' 
    },
    { 
      titulo: 'Algo Pasa con Mary', 
      genero: ['Comedia', 'Comedia Romántica'], 
      duracion: 119, 
      year: 1998 , 
      director: 'Bobby Farrelly' 
    },
    { 
      titulo: 'Hook',
      genero: ['Aventuras', 'Fantasía'], 
      duracion: 142, 
      year: 1991 , 
      director: 'steven Spielberg' 
    }
  ];



//* 1.- Vamos a imprimir todas los títulos de las películas con un número delante. 

/*javascript
// 1.- El Señor de los Anillos
// 2.- Harry Potter
// ...
*/

peliculas.forEach((pelicula, i) => {
  console.log(`${i + 1}.- ${pelicula.titulo}`)
});


//* 2.- Filtra todas las películas que sean más modernas que el año 2000 y imprime el array por consola
console.log(peliculas.filter(peli => peli.year > 2000));


//* 5.- Vamos a MODIFICAR cada duración de las películas y sumarle a todas 100 minutos
console.log(peliculas.map(peli => ({ ...peli, duracion: peli.duracion + 100}) ));

//* 6.- Vamos a AÑADIR a todas las películas la propiedad `rating` que empezará con el valor 5 excepto 'Hook' que tendrá un 10
console.log(peliculas.map(peli => peli.titulo === 'Hook' ? { ...peli, rating: 10 } : { ...peli, rating: 5 }));

//* 7.- Crea un array con todos los nombres de los directores en MAYUSCULAS (solo los nombres)
const directores = peliculas.map(peli => peli.director.toUpperCase());

console.log(directores.length);
const directoresNoRepetidos = new Set(directores);
console.log(directoresNoRepetidos.size);



//* 8.- Crea un array con solo los años de las películas (solo los números) y luego adivina cuál es la película más antigua y la más moderna (RECUERDA EL OBJETO MATH)
const moviesYears = peliculas.map(peli => peli.year);
const olderMovie = Math.min(...moviesYears);
const newerMovie = Math.max(...moviesYears);

console.log(peliculas.find(peli => peli.year === olderMovie)?.titulo);
console.log(peliculas.find(peli => peli.year === newerMovie)?.titulo);



//* 9.- Ordena las películas de más antíguas a más modernas
console.log(peliculas.toSorted((peliA, peliB) => peliA.year - peliB.year));
console.log(peliculas.toSorted((peliA, peliB) => peliB.year - peliA.year));


//* 10.- Ordena las películas por el nombre del director de forma alfabética A-Z
console.log(peliculas.toSorted((peliA, peliB) => {
  if (peliA.director.toLowerCase() > peliB.director.toLowerCase()) return 1
  if (peliA.director.toLowerCase() < peliB.director.toLowerCase()) return -1
  return 0
}));

console.log(peliculas.toSorted((peliA, peliB) => peliA.director.toLowerCase().localeCompare(peliB.director.toLowerCase()), 'es'));


//* 11.- ¿Hay alguna película que Terror en el array? Demuéstralo.
console.log(peliculas.some(peli => peli.genero.includes('Terror')));


//* 12.- ¿Duran TODAS las películas más de 2 horas?
console.log(peliculas.every(peli => peli.duracion > 120));

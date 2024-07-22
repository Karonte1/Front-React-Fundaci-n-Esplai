
//* Si tengo en alguna App un montón de cosas que tengo que cajar porque hay que borrar elementos o hacer cambios en ellos y hay una lista muy larga podemos:

//* CAZAR TODOS LOS ELEMENTOS --> 💩

//* Event delegation --> CAZA SOLO AL PADRE y escuchas los clicks dentro de él.

const moviesSection = document.querySelector('.movies-section');

moviesSection.addEventListener('click', (event) => {
  const target = event.target;


  if (target.name === 'edit') {
    // aquí dentro solo entra si has hecho click al boton de editar de alguna película
    console.log('estás editando');

    console.log(target);

  } else if (target.classList.contains('delete')) {
    const movie = target.parentElement;

    console.log('estás borrando');

    // consigue el ID y bórralo en la BBDD
    console.log(target.dataset.id);
    console.log(target.getAttribute('data-id'));

    // ponerle animacion de salida
    movie.classList.add('delete-animation');

    // espera a que termine la animación
    movie.onanimationend = () => {
      // borralo del DOM
      movie.remove();
    }

  }

})
import React from 'react';

export default function NormaFragment () {
  return (
    //* cuando necesitemos un div, section o lo que sea úsalo
    // <div>
    //* si no lo necesitamos, usa un Fragment
    // <React.Fragment>
    //* React decidió tiempo atrás que no sea necesario escribir la palabra React.Fragment, y poner solo unas etiquetas vacías
    <>
      <h2>normas</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consectetur molestiae dolorem et omnis repellat molestias sapiente, reprehenderit beatae, magni sequi voluptatem veritatis, id enim? Repellat atque et quod nisi.</p>
    </>
    // </React.Fragment>
    // </div>
  );
}

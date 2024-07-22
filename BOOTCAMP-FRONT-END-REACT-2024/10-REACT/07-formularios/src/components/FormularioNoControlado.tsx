import { useRef } from "react";

function FormularioNoControlado() {
  console.log('NO controlado');

  //* Para poder coger el .value de un input cualquiera, necesitaré la referencia a ese input del DOM, usamos useRef()

  //* Paso 1: Generar la variable que va a guardar la referencia del DOM
  const inputNameRef = useRef<HTMLInputElement>(null);  //  { current: null }
  const inputEmailRef = useRef<HTMLInputElement>(null);  //  { current: null }


  function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // * Paso 3: Leer los valores como si de javascript se tratara. Dentro de la propiedad current tienes el objeto del DOM del input, así que puedes escuchar su propiedad value
    const name = inputNameRef.current?.value;
    const email = inputEmailRef.current?.value;

    console.log(name, email);   

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario No Controlado</h2>
      <hr />
      <label htmlFor="name">Nombre</label>

      {/*//* Paso 2: Utiliza la variable creada arriba en el atributo ref="" del componente que quieras  */}
      <input id="name" type="text" placeholder="Nombre..." ref={inputNameRef}/>

      <label htmlFor="email">Email</label>
      <input id="email" type="text" placeholder="Email..." ref={inputEmailRef}/>

      <button>Enviar</button>
    </form>
  )
}

export default FormularioNoControlado;
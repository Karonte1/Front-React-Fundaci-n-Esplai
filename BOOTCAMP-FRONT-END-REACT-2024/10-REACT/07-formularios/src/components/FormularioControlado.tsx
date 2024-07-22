import { useState } from "react"

function FormularioControlado() {
  console.log('Controlado')


  // Paso 1: Generar un estado para el valor de los inputs
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  
  // Paso 2: Crear un evento onChange para el input
  function handleNameChange (event: React.ChangeEvent<HTMLInputElement>) {
    setNameValue(event.target.value);
  }



  function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(nameValue, emailValue);

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario Controlado</h2>

      <label htmlFor="name">Nombre</label>
      <input id="name" type="text" placeholder="Nombre..." onChange={handleNameChange} value={nameValue}/>

      <label htmlFor="email">Email</label>
      <input id="email" type="text" placeholder="Email..." onChange={(event) => setEmailValue(event.target.value)}/>

      <button>Enviar</button>

      <h2>{nameValue}</h2>
      <h2>{emailValue}</h2>
    </form>
  )
}

export default FormularioControlado;
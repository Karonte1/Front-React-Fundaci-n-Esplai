import { useState } from "react"

function FormularioCmplejo() {

  //* Paso 1: Creas UN SOLO ESTADO para todos los inputs usando un objeto
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    city: '',
    accept: false,
  });
  
  

  
  //* Paso 2: Crear un evento onChange para el input

  //! No interesa tener una función para cada input
  // function handleNameChange (event) {
  //   setFormValues({ ...formValues,  name: event.target.value  }); // name
  // }
  // function handleEmailChange (event) {
  //   setFormValues({ ...formValues,  email: event.target.value  }); // email
  // }

  function handleFormChange (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    // setFormValues({ ...formValues, name: event.target.value }); // name
    // setFormValues({ ...formValues, email: event.target.value }); // email
    // setFormValues({ ...formValues, city: event.target.value }); // city
    // setFormValues({ ...formValues, accept: event.target.checked }); // accept
    // setFormValues({ ...formValues, [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value }); 

    const { value, type, name } = event.target;

    // const checked = (event.target as HTMLInputElement).checked;
    const checked = event.target instanceof HTMLInputElement ? event.target.checked : undefined;
   
    setFormValues({ ...formValues, [name]: type === 'checkbox' ? checked : value }); 
  }




  function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();


  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario Controlado</h2>

    <textarea name="" id="" onChange={handleFormChange}></textarea>
      <div>
        <label htmlFor="name">Nombre</label>
        <input id="name" type="text" placeholder="Nombre..." onChange={handleFormChange}  name="name"/>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="Email..." onChange={handleFormChange} name="email"/>
      </div>

      <div>
        <label>
          Ciudad
          <select onChange={handleFormChange} name="city">
            <option value="">Seleccionar ciudad...</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Madrid">Madrid</option>
            <option value="Sevilla">Sevilla</option>
            <option value="A Coruña">A Coruña</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" onChange={handleFormChange} name="accept"/>
          ¿Aceptas?
        </label>
      </div>

      <pre>
        { JSON.stringify(formValues) }
      </pre>

      <button>Enviar</button>
    </form>
  )
}

export default FormularioCmplejo;
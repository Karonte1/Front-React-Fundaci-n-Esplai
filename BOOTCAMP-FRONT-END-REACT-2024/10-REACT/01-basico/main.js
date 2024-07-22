
// En este ejemplo gracias a poner los scripts en el head, dispongo de React y ReactDOM para poder usarlos
console.log(React);
console.log(ReactDOM);


//* único elemento del DOM donde vamos a meter todo nuestro contenido
const rootDiv = document.getElementById('root');


//* crear un elemento del DOM de forma nativa
/*
const h2Nativo = document.createElement('h2');
h2Nativo.className = 'text-blue-200';
h2Nativo.id = 'titulo';
h2Nativo.innerHTML = 'Soy un H2 Nativo';

console.log('NATIVO ->', h2Nativo);

rootDiv.append(h2Nativo);

*/

//* ========================================== *//


//* crear un elemento del DOM con React
/*
const h2React = React.createElement(
  'h2', 
  { 
    className: 'text-blue-200', 
    id: 'titulo' 
  }, 
  'Soy un H2 de React'
);
console.log('REACT ->', h2React);
*/
// rootDiv.append(h2React);  //! no se puede, no es un objeto del DOM

//* para meter en el DOM algo de React, necesitamos decirle a ReactDOM cuál es la raíz de nuestra app, es decir, dónde va a inyectar todo

// const root = ReactDOM.createRoot(rootDiv);
// root.render(h2React);

//* ========================================== *//


//* Ejemplo más complicado

//   <ul>
//     <li class="bg-black">Item 1</li>
//   </ul>


const ulReact = React.createElement(
  'ul',
  null,
  React.createElement(
    'li',
    {
      className: 'bg-black'
    },
    'Item 1'
  )
);

//* gracias a babel, podemos escribir esta notacion parecida a HTML que Rect ha llamado JSX

/*
const ulNuevo = 
  <ul> 
    <li className="bg-black">Item 1</li> 
    <li className="bg-black">Item 2</li> 
    <li className="bg-black">Item 3</li> 
    <li className="bg-black">Item 4</li> 
  </ul>;

  const root = ReactDOM.createRoot(rootDiv);
  
  root.render(ulNuevo)
  
  */
 
 //* Nosotros trabajaremso siempre con componentes que estan en archivos separados. Estos normalmente son funciones
 

 //* componente
function Saludo () {
  return <h2>Hola</h2>
}

//! función normal
function sumar (a, b) {
  return a + b
}
 
 
const root = ReactDOM.createRoot(rootDiv);
 

//* Podemos ejecutar un Componente usando la vieja manera Saludo()
//  root.render(Saludo())
 
//* React nos permite ejecutar las funciones de los componentes escribiéndolos como si fueran otra etiqueta HTML
root.render(<Saludo/>)
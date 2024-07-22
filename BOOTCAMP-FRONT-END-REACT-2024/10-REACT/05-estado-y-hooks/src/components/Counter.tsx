import { useState } from 'react';


/* CONTRATO DEL useState

function useState (valorInicial) {
  // aqui pasan cosas

  return [valorActual, funcionParaCambiarElEstado]
}

*/

//! NO podemos usar HOOKS fuera de componentes o de otros custom hooks
//! useState()


function Counter() { // contador = 2
  console.log('Counter')
  // let contadorJS = 4;



  //* Puedes crear tantos estados como te apetezca

  //* Todos los hooks, ya sean de REACT o custom SIEMPRE EMPIEZAN POR "use"
  const [contador, setContador] = useState(0);
  const [user, setUser] = useState({ name: 'Ivan' });
  const [fruta, setFruta] = useState('🍎');
  const [zapatos, setZapatos] = useState(['nike', 'adidas']);

  //! NORMA!! No podemos usar ningún HOOK dentro de un bloque (if, for, while, etc)

  /* 
  if (true) {
    const [value, setValue] = useState(5);
    console.log(value)
    setValue()
  }
 */


  function handleIncrement () {
    // contadorJS += 1;
    setContador(contador + 1);  // contador = 2
    // console.log(contador)
  }

  
  return (
    <div className="text-center">
      <h2>Contador</h2>
      <h3>{contador}</h3>
      <button onClick={handleIncrement}>+1</button>
    </div>
  )
}

export default Counter;
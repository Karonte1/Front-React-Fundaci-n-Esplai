import { useEffect, useState } from "react"

function Counter() {
  console.log('Counter - Lógica')

  const [inputValue, setInputValue] = useState('');
  
  const [counter, setCounter] = useState(0); 
  
  
  
  //* el useEffect SIEMPRE SE EJECUTARÁ DESPUÉS DE QUE SE RENDERICE EL COMPONENTE
  //* cuando el hook NO TIENE SEGUNDO PARÁMETRO, se va a ejecutar al iniciar y cada vez que se actualice el componente
  useEffect(() => {
    console.log('Counter - useEffect() 1')
  });
  
  //* cuando le pasamos un array de dependencias VACÍO, hace que el hook se lance una vez al iniciar y NUNCA MÁS
  useEffect(() => {
    console.log('Counter - useEffect([]) 2')
    // este fetch se ejecutará solo una vez
    fetch('https://randomuser.me/api/')
      .then(resp => resp.json())
      .then(data => {
        const number = data.results[0].registered.age;
        //aquí actualizamos el estado
        setCounter(number);
      })
  }, []);

  //* cuando dentro del array ponemos alguna variable, el hook se ejecutará una primera vez y luego CADA VEZ QUE EL VALOR DE ESA VARIABLE CAMBIE
  useEffect(() => {
    console.log('Counter - useEffect([counter]) 3')
  }, [counter]);

  useEffect(() => {
    console.log('Counter - useEffect([inputValue]) 4')
  }, [inputValue]);


  //! Ojo con meter dentro de un useEffect un set... vigila siempre que no vaya a hacer un renderizado infinito porque cada vez que ejecutes el componente vuelva a lanzar el set... y así infinitamente
  // useEffect(() => {
  //   setCounter(counter + 1)
  // })


  //! Mi recomendación siempre que hagas un set.... dentro de un useEffect es que utilices la "segunda forma" de actualizar el estado, la del callback. Así nunca necesitas usar la variable del estado que hay fuera
  useEffect(() => {
    setCounter((prevCounter) => prevCounter + 1)
  }, [inputValue])


  /////////////////////////////////////////////

  //* ¿Cómo ejecuto algo cuando se desmonta el componente? -- cleanup

  useEffect(() => {
    // el JS que pongas aquí se ejecuta de forma normal como siempre
    console.log('Counter - useEffect([]) 5')

    //* esta función que retorna el callback principal se ejecutará cuando se desmonte el componente
    return () => { console.log('Counter desmontado') }

  }, []);


  
  
  return (
    <div className="text-center">
      <>{ console.log('Counter - Render') }</>

      <input type="text" onChange={(e) => setInputValue(e.target.value)}/>

      <h2>Counter</h2>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
}

export default Counter;
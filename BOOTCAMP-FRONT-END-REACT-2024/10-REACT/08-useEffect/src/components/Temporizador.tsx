import { useEffect, useState } from "react"

function Temporizador() {
  const [temporizador, setTemporizador] = useState(0);
  
  //! OJO!! porque se va a crear un setInterval cada segundo, con lo que el navegador tendrá cientos de setIntervals guardados --> 💩
  // setInterval(() => {
  //   setTemporizador(temporizador + 1)
  // }, 1000);
  
  //* siempre usa la segunda forma de actualizar el estado
  //! ojo porque no estamos limpiando el intervalo si desmontamos el componente
  // useEffect(() => {    
  //   setInterval(() => {
  //     console.log('Intervalo ejecutado')
  //     setTemporizador((prevTemp) => prevTemp + 1);
  //   }, 1000);    
  // }, []);

  useEffect(() => {    
    const id = setInterval(() => {
      console.log('Intervalo ejecutado')
      setTemporizador((prevTemp) => prevTemp + 1);
    }, 1000);    

    return () => clearInterval(id);
  }, []);
  
  return (
    <div className="text-center">
      <h2>Temporizador</h2>
      <h3>{temporizador}s</h3>
    </div>
  )
}

export default Temporizador;
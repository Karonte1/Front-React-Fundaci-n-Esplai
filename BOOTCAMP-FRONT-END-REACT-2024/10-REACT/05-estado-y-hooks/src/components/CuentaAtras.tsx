import { useState } from "react";

function CuentaAtras() {

  const [countdown, setCountdown] = useState(30);

  // De momento React se volverá loco porque cada vez que cambia el segundero, se ejecuta otra vez el componente y se vuelve a generar un setInterval con lo que cada vez hay más y más...
  // Esto lo arreglaremos con el hook useEffect
  setInterval(( ) => {
    setCountdown(countdown - 1); // countdown = 29
  }, 1000);
  
  return (
    <div className="text-center mt-5">
      <h2>Cuenta Atrás</h2>
      <h3>{countdown}</h3>
    </div>
  )
}

export default CuentaAtras;
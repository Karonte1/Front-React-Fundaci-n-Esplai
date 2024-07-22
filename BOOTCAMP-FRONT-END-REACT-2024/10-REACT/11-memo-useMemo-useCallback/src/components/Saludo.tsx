import { memo } from "react";

type Props = {
  nombre: string;
}

const Saludo = memo(function Saludo({ nombre }: Props) {
  console.log('Saludo');

  for(let i = 0; i <= 2000000000; i++) {
    //
  }
  
  return (
    <>
      <h2>Hola, {nombre}</h2>
    </>
  )
})

export default Saludo;
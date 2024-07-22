type Props = {
  nombre?: string;
}

function Saludo(props: Props) { 
  // console.log(props)
  return (
    <>
      <p>Hola, {props.nombre}</p>
    </>
  )
}

export default Saludo;
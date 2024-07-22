type Props = {
  valor: any;
  tipo: string;
}

function QueRendreiza(props: Props) {
  
  return (
    <>
      <h2>{props.tipo}: {props.valor}</h2>
    </>
  )
}

export default QueRendreiza;
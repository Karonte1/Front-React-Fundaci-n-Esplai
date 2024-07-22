type BuenosDiasProps = {
  nombre?: string;
}

function BuenosDias({ nombre }: BuenosDiasProps) {

  if (nombre) {
    return (
      <>
          <h2>Buenos Dias, {nombre}</h2>
      </>
    )
  }

  return <h2>Buenos días, amig@</h2>
  
}

export default BuenosDias;
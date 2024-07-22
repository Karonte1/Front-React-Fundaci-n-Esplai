type BuenasNochesProps = {
  nombre?: string;
}

function BuenasNoches({ nombre }: BuenasNochesProps) {
  
  return (
    <>
      { nombre && <h2>Buenas Noches, {nombre}</h2> }
      { !nombre && <h2>Buenas Noches, amig@</h2> }
    </>
  )
  
}

export default BuenasNoches;
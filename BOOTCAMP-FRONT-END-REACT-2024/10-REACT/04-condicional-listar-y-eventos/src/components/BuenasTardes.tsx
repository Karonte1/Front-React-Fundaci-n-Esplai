type BuenasTardesProps = {
  nombre?: string;
}

function BuenasTardes({ nombre }: BuenasTardesProps) {
  
  return nombre
    ? <h2>Buenas Tardes, {nombre}</h2>
    : <h2>Buenas Tardes, amig@</h2>
  
}

export default BuenasTardes;
import { memo } from "react"

type ListaFrutasProps = {
  frutas: string[];
}

const ListaFrutas = memo(function ListaFrutas({ frutas }: ListaFrutasProps) {
  console.log('Frutas')  

  return (
    <>
      <h2>ListaFrutas</h2> 
      <ul>
        {
          frutas.map((fruta, i) => <li key={i}>{fruta}</li>)
        }
      </ul>           
    </>
  )
});

export default ListaFrutas;
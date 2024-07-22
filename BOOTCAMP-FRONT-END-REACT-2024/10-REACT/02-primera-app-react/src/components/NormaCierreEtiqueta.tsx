import Title from "./Title"

export default function NormaCierreEtiqueta () {
  //! TODAS LAS ETIQUETAS TIENE QUE SER CERRADAS, SI ES UNA HUÉRFANA PONDRÁS UNA BARRA AL FINAL
  return <>
    <div></div>
    <img src="https://picsum.photos/id/12/200"  />
    <input type="text" />
    <br />
    <Title></Title>
    <Title />
  </>
}
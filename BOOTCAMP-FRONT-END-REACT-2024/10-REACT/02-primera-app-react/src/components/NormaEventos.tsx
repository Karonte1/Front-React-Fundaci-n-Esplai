function NormaEventos() {  

  function handleClick () {
    console.log('click')
  }

  //! Los nombres de los eventos en JSX van SIEMPRE EN camelCase
  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default NormaEventos;
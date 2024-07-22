import { useContext } from "react"
import { DarkModeContext } from "../App"

function Padre2() {
  const context = useContext(DarkModeContext);
  console.log(context)
  
  return (
    <>
      <h2>Padre 2</h2>

    </>
  )
}

export default Padre2;
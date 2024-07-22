import { useContext } from "react"
import { DarkModeContext } from "../App"
import Nieto from "./Nieto"

type Props = {
  user: {
    name: string;
  }
}

function Hijo({ user }: Props) {
  const { toggleDarkMode } = useContext(DarkModeContext);
  
  return (
    <>
      <h3>Hijo</h3>
      <button onClick={toggleDarkMode}>Cambiar tema</button>

      <Nieto user={user}/>
    </>
  )
}

export default Hijo;
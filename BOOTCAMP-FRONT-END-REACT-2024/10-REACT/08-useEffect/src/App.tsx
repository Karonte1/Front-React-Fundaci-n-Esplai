import { useState } from "react"
import Counter from "./components/Counter"
import InputFocus from "./components/InputFocus"
import Temporizador from "./components/Temporizador"
import MouseMove from "./components/MouseMove"
import FetchDesmontable from "./components/FetchDesmontable"

function App () {
    const [toggle, setToggle] = useState(true);
    

    return (
        <div className='text-center'>
            <h1>useEffect hook</h1>

            <button onClick={() => setToggle(!toggle)}>{toggle ? 'OFF' : 'ON'}</button>
            
            {/* {toggle && <Counter />} */}
{/* 
            <h2>Hacer foco en un input al cargar</h2>
            <InputFocus /> */}

            <h2>Hacer <em>cleanup</em> de un componente</h2>
            {/* {toggle && <Temporizador />} */}

            {/* {toggle && <MouseMove />} */}

            {toggle && <FetchDesmontable />}
           
        </div>
    );
}

export default App;

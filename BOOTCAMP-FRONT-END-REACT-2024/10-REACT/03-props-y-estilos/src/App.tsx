import { CSSProperties } from "react"
import Button from "./components/Button"
import Card from "./components/Card"
import Saludo from "./components/Saludo"
import User from "./components/User"
import ButtonStyledComponents from "./components/ButtonStyledComponents"
import ButtonTailwind from "./components/ButtonTailwind"

function App () {

    const estilosTitulo: CSSProperties = {
        color: 'yellow',
        backgroundColor: 'pink',
    }

    return (
        <div className='center-vertical'>
            <h1>React + TypeScript</h1>
            <h2>Props normales</h2>
            <Saludo nombre="Ivan" />
            <Saludo nombre="Jenni" />
            <Saludo />

            <hr />
            <h2>Children</h2>

            <Button text="Apretar aquí" />
            <Button><div>Hola</div></Button>
            <Button>Enviar</Button>
            <Button><Saludo /></Button>
            <Button bg="lightseagreen" />

            <hr />
            <h2>Estilos</h2>
            <h3 style={estilosTitulo}>Titulo con estilos en línea</h3>
            <h3 style={{ backgroundColor: 'crimson' }}>Titulo con estilos en línea</h3>
            <Card />

            <h3>Styled Components</h3>
            <User />
            <ButtonStyledComponents>Botón</ButtonStyledComponents>
            <ButtonStyledComponents bg="crimson">Botón</ButtonStyledComponents>
            <ButtonStyledComponents bg="lightseagreen">Botón</ButtonStyledComponents>
            <ButtonStyledComponents big>Boton grande</ButtonStyledComponents>

            <br />

            <h3>TailwindCSS</h3>
            <ButtonTailwind color="red" className="bg-red-200">Tailwind</ButtonTailwind>

        </div>
    );
}

export default App;

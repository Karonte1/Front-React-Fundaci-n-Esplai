import NormaFragment from './components/NormaFragment';
import NormaClassFor from './components/NormaClassFor';
import NormaCierreEtiqueta from './components/NormaCierreEtiqueta';
import NormaEventos from './components/NormaEventos';
import Title from './components/Title';
import About from './pages/About'
import Blog from './pages/Blog';

import logoReact from './assets/react.svg';

import './App.css';

function App() {  

  return (
    <main>
      <Title></Title>
      <Title />

      <NormaFragment />

      <NormaClassFor />

      <NormaCierreEtiqueta />

      <NormaEventos />

      {/* //* Si quisieras mostrar páginas las creas IGUALMENTE COMO UN COMPONENTE */}

      <About />
      {/* <Blog /> */}

      {/* //* Cómo renderizamos una imagen?? */}

      {/* Opción en la carpeta public */}
      <img src="/vite.svg" />

      {/* Opción fuera de public */}
      {/* //! Siempre hay que importar ese archivo antes de usarlo */}

      {/* <img src="./assets/react.svg" alt="" /> */}
      <img src={logoReact} alt="Logo de React" />
      

    </main>
  )
}

export default App

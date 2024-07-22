import Counter from "./components/Counter"
import CounterClass from "./components/CounterClass"
import InfoUser from "./components/InfoUser"
// import CuentaAtras from "./components/CuentaAtras"

function App () {
    return (
        <div className='center-vertical'>
            <h1>Estado y Hooks</h1>

            <Counter />
            <CounterClass />
            {/* <CuentaAtras /> */}

            <InfoUser user={{ username: 'Davide'}} />
            <InfoUser user={null} />
           
        </div>
    );
}

export default App;

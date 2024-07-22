import useToggle from "./hooks/useToggle"

function App () {    
    const [toggle, changeToggle] = useToggle(false);

    return (
        <div className='center-vertical'>
            <h1>Custom Hooks</h1>
           
            <button onClick={changeToggle}>{toggle ? 'OFF' : 'ON'}</button>
        </div>
    );
}

export default App;

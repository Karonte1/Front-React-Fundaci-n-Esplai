import { useState, useMemo, useCallback } from "react"
import Saludo from "./components/Saludo"
import ListaFrutas from "./components/ListaFrutas"
import SaludoUser from "./components/SaludoUser"
import Button from "./components/Button"

function App () {



    const [cart, setCart] = useState({
        favorites: [{},{},{},{},{},{},{},{},{}],
        inCart: [{},{},{},{},{},{},{},{},{ id: 5, product: 'raqueta' }],        
    });

    // setCart({ ...cart, inCart: cart.inCart.filter(el => el.id !== 5)})
    setCart({ ...cart, inCart: cart.inCart.map(el => el.id === 5 ? { ...el, product: 'pelota'} : { ...el })})
































    console.log('App')
    const [ inputValue, setInputValue] = useState('');

    // con valores primitivos NO HAY QUE HACER NADA, solo usar memo dentro del componente
    const nombre = 'Ivan';

    let valor = null;
    if (inputValue.includes('pice')) {
        valor = true;
    }


    // con valores NO primitivios, antes de pasar ese array/objeto primero lo MEMOIZAMOS

    //* con un array
    // const frutas = ['🍎', '🍐', '🍌']; 
    const frutas = useMemo(() => { return  ['🍎', '🍐', '🍌'] }, [valor]); // 0x123

    //* con un objeto
    // const user = { name: 'Guillem' };
    const user = useMemo(() => { return { name: 'Guillem' }} , [])
    // const user = useMemo(() => ({ name: 'Guillem' }) , [])

    //* con una función
    // function toggleDarkMode () {
    //     // cambiar el darkmode
    //     console.log('Cambiando dark mode')
    // }

    // const toggleDarkMode = useMemo(() => {
    //     return () => {
    //         // cambiar el darkmode
    //         console.log('Cambiando dark mode')
    //     }
    // }, [])

    const toggleDarkMode = useCallback(() => {
         // cambiar el darkmode
         console.log('Cambiando dark mode')
    }, []);

    
    return (
        <div className='center-vertical'>
            <h1>Mejorar la performance</h1>

            <input type="text" onChange={(e) => setInputValue(e.target.value)}/>

            <Saludo nombre={nombre}/>

            <ListaFrutas frutas={frutas}/>

            <SaludoUser user={user}/>

            <Button toggle={toggleDarkMode}>Clcik</Button>

           
        </div>
    );
}





export default App;

import { createContext, useState } from "react";
import Padre from "./components/Padre";
import Padre2 from "./components/Padre2"
import CartProvider from "./contexts/CartProvider"


type DarkModeContextType = {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}


const DarkModeContext = createContext<DarkModeContextType | null>(null);

function App () {

    const [user] = useState({ name: 'Ivan'});  

    const [isDarkMode, setIsDarkMode] = useState(true);

    function toggleDarkMode () {
        setIsDarkMode(!isDarkMode);
    }
    
    const valueToSend = { isDarkMode, toggleDarkMode };
   


    return (
        <div className='text-center'>
            <h1>Context y useContext</h1>

            <CartProvider>            
                <DarkModeContext.Provider value={valueToSend}>
                    <Padre user={user} />
                </DarkModeContext.Provider>
            </CartProvider>

            
            
            
            
            
            <Padre2 />

           
        </div>
    );
}

export default App;
export { DarkModeContext };

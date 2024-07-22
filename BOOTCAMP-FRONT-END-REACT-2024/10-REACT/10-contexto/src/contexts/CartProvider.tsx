import { createContext, useState } from "react"

// ['manzanas', 'peras']

type Product = string;

type CartContextType = {
  cart: Product[];
  addToCart: (prduct: Product) => void;
}

// Paso 1: Creamos el contexto (programa de radio)
const CartContext = createContext<CartContextType | null>(null);


type Props = {
  children: React.ReactNode
}

// Paso 2: Crea el componente tuyo que envolverá a todos los componentes que quieras que puedan leer la info del carrito
function CartProvider({ children }: Props) {
  
  // Paso 4: Crea un estado que se enviará en el contexto
  const [cart, setCart] = useState<Product[]>(['manzanas', 'peras']);
  
  function addToCart (product: Product) {
    
    if (typeof product !== 'string') return;
    
    //! NUNCA ACTUALICES EL ESTADO MUTANDO EL ESTADO ORIGINAL
    // cart.push('melones');    
    // setCart(cart);
    
    setCart([...cart, product]);
    // setCart(cart.concat(product));
  }
  
  // Paso 5: Generamos el objeto o array que vamos a enviar en el contexto
  const valueToSend = { cart, addToCart };
  
  
  return (
    // Paso 3: utiliza el Provider que te da el Contexto para envolver a todos los "children" de este componente
    // Paso 6: ponle el objeto que has creado para enviar en el value={} del Provider
    <CartContext.Provider value={valueToSend}>
      {children}
    </CartContext.Provider>
  )
}


// Paso 7: Exporta el componente CartProvider y envuelve a todos los componentes que quieras que tengan acceso al contexto con él

// Paso 8: Tipa todo con Typescript

export default CartProvider;
export { CartContext };
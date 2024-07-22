import { useContext } from "react";
import { DarkModeContext } from "../App"
import { CartContext } from "../contexts/CartProvider"
import AddProduct from "./AddProduct"

type Props = {
  user: {
    name: string;
  }
}

function Nieto({ user }: Props) {

  const { isDarkMode } = useContext(DarkModeContext);
  const { cart } = useContext(CartContext);
  

  return (
    <>
      <h4 style={{ color: isDarkMode ? 'white' : 'black' }}>Nieto</h4>
      <h5>{user.name}</h5>
      <ul className="center-vertical">
        {
          cart.map((item, i) => <li key={i}>{item}</li>)
        }
      </ul>

      <AddProduct />
    </>
  )
}

export default Nieto;
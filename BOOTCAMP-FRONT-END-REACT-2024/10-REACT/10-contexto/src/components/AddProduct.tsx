import { useContext, useRef } from "react"
import { CartContext } from "../contexts/CartProvider"

function AddProduct() {

  const { addToCart } = useContext(CartContext);

  const addProductInputRef = useRef<HTMLInputElement | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newProduct = addProductInputRef.current?.value;

    if (!newProduct) return;

    addToCart(newProduct);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input ref={addProductInputRef} type="text" placeholder="Producto..." />
    </form>
  )
}

export default AddProduct;
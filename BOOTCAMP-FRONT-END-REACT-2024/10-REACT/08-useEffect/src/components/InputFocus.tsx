import { useEffect, useRef } from "react"

function InputFocus() {

  // esto va PRIMERO
  const inputRef = useRef<HTMLInputElement | null>(null); // { current: null }
  
  //! inputRef.current es null, así que no puedo hacer null.focus()
  // inputRef.current?.focus(); // { current: <input> }

  // Esto va TERCERO
  useEffect(() => {
    inputRef.current?.focus(); // { current: <input> }
  }, []);
  
  
  // Esto va SEGUNDO
  return <input ref={inputRef} type="text" placeholder="Nombre..." />;
}

export default InputFocus;
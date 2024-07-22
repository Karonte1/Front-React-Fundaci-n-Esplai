import { ReactNode } from "react";
import './button.css';


type Props = {
  text?: string;
  children?: ReactNode;
  bg?: string;
}

function Button(props: Props) {  
  // console.log(props)

  return (
    <button style={{ backgroundColor: props.bg }} className="btn card">{props.children || props.text || "Click"}</button>
  )
}

export default Button;
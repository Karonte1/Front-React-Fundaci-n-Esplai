import { ReactNode } from "react";
import cn from "../utils/cn"

type Props = {
  children?: ReactNode;
  bg?: string;
  big?: boolean;
  color?: string;
  className?: string;
}

type ColorClass = {
  [key: string]: string;
}

function ButtonTailwind(props: Props) {  
  console.log(props)
  
  const baseClasses = 'bg-yellow-300 font-bold';
  const colorClasses: ColorClass = {
    red: 'text-red-400',
    blue: 'text-blue-400',
    indigo: 'text-indigo-400', 
    default: 'text-indigo-600'   
  }

  const classes = cn(baseClasses, props.className, colorClasses[props.color || 'default']);

  return (
    <button className={classes}>{props.children || "Click"}</button>
  )
}

export default ButtonTailwind;

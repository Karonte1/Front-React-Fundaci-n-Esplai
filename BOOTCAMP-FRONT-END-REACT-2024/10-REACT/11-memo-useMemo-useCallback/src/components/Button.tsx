import { memo } from "react"

type ButtonProps = {
  toggle: () => void; 
  children: React.ReactNode; 
}

const Button = memo(function Button({ toggle, children }: ButtonProps) {
  console.log('Button')
    
  return (
    <button onClick={toggle}>{children}</button>
  )
});

export default Button;
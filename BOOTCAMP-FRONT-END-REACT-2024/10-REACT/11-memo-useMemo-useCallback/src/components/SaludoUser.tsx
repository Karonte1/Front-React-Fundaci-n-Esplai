import { memo } from "react";

type Props = {
  user: { 
    name: string; 
  };
}

const SaludoUser = memo(function SaludoUser({ user }: Props) {
  console.log('Saludo User');
  
  return (
    <>
      <h2>Hola, {user.name}</h2>
    </>
  )
});

export default SaludoUser;
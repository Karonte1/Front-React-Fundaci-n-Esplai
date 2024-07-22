import { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';

export default function useUserContext () {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('El hook useUserContext tiene que ser usado dentro de UserProvider');
  }

  return context;
}

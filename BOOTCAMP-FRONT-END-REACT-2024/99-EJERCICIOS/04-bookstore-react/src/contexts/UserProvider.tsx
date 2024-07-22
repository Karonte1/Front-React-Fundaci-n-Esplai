import { createContext, useEffect, useState } from 'react';
import { User } from '../config/types';
import { useNavigate } from 'react-router-dom';

type UserContextType = {
  user: User | null;
  logIn: (user: User) => void;
  logOut: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

type Props = {
  children: React.ReactNode;
}
function UserProvider ({ children }: Props) {
  const navigate = useNavigate();
  // const initialUser = {
  //   name: 'Ivan',
  //   surname: 'Luengo',
  //   email: 'ivluengo@gmail.com',
  //   photo: 'https://randomuser.me/api/portraits/men/90.jpg'
  // };
  // const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState<User | null>(() => {
    const user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    return null;
  });

  //* Opcion 1 para almacenar el usuario en el contexto al cargar
  // useEffect(() => {
  //   setTimeout(() => {
  //     const user = localStorage.getItem('user');
  //     if (user) {
  //       setUser(JSON.parse(user));
  //     }
  //   }, 2000);
  // }, []);

  function logIn (user: User) {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  function logOut () {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  }

  const valueToSend = {
    user,
    logIn,
    logOut
  };

  return (
    <UserContext.Provider value={valueToSend}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
export { UserContext };

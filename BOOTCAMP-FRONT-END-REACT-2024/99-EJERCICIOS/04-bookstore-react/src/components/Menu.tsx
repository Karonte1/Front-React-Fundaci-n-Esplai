import { NavLink } from 'react-router-dom';
import useUserContext from '../hooks/useUserContext';
import Button from './Button';

type Props = {
  direction?: 'horizontal' | 'vertical';
  toggleSidebar?: () => void
}

function Menu ({ direction, toggleSidebar }: Props) {
  const { user, logOut } = useUserContext();

  const directionClasses = direction === 'vertical' ? 'flex-col items-center' : '';

  return (
    <nav className={`${directionClasses} flex ml-auto gap-4 items-center *:text-white *:uppercase *:text-3xl *:md:text-xl`}>
      <NavLink onClick={toggleSidebar} to="/">Home</NavLink>

      {
        user && <>
          <NavLink onClick={toggleSidebar} to="/books">Libros</NavLink>
          <NavLink onClick={toggleSidebar} to="/profile">Perfil</NavLink>
          <NavLink onClick={toggleSidebar} to="/add-book">Añadir Libro</NavLink>
          <Button onClick={logOut}>Cerrar</Button>
        </>
      }

      {
        !user && <>
          <NavLink onClick={toggleSidebar} to="/login">Log In</NavLink>
          <NavLink onClick={toggleSidebar} to="/register">Regístrate</NavLink>
        </>
      }

    </nav>
  );
}

export default Menu;

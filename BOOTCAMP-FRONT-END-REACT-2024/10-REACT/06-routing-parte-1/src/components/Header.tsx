import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {

  const user = null;
  // const user = { name: 'Ivan' };
  
  // function setActiveClassName ({ isActive } : { isActive: boolean }): string {
  //   const activeClasses = 'text-white text-2xl underline';
  //   return isActive ? activeClasses : '';
  // }

  // function setActiveClassNameParams ({ isActive }, classes = '' ): string {
  //   return isActive ? classes : '';
  // }
  
  return (
    <header className="flex justify-between  items-center bg-pink-400 p-4 border-b-2 border-black">
      <span className="text-3xl font-bold">Logo.</span>

      <nav className="flex gap-4">

        {/* //* Solución para cuando usamos módulos CSS */}
        {/* <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/about">About</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/blog">Blog</NavLink> */}

        {/* //* Solución usando un callback dentro de className=""  */}
        {/* <NavLink className={({ isActive }) => isActive ? 'text-white' : ''} to="/">Home</NavLink>
        <NavLink className={setActiveClassName} to="/about">About</NavLink>
        <NavLink className={setActiveClassName} to="/blog">Blog</NavLink> */}

        {/* //* Lo mismo que antes pero pasando las clases tu */}
        {/* <NavLink className={(props) => setActiveClassNameParams(props, 'text-yellow-400 underline')} to="/">Home</NavLink>
        <NavLink className={(props) => setActiveClassNameParams(props, 'text-yellow-400 underline')} to="/about">About</NavLink>
        <NavLink className={(props) => setActiveClassNameParams(props, 'text-yellow-400 underline')} to="/blog">Blog</NavLink> */}

        {/* //* Solución de estilos usando tailwind y selectores arbitrarios */}
        <NavLink className="[&.active]:text-white" to="/">Home</NavLink>
        <NavLink className="[&.active]:text-white" to="/about">About</NavLink>
        <NavLink className="[&.active]:text-white" to="/blog">Blog</NavLink>

        { user && <NavLink className="[&.active]:text-white" to="/profile">Perfil</NavLink> }
        { user && <NavLink className="[&.active]:text-white" to="/profile/books">Tus Libros</NavLink> }
        { user && <NavLink className="[&.active]:text-white" to="/profile/account">Tu cuenta</NavLink> }
        { user && <NavLink className="[&.active]:text-white" to="/dashboard">Dashboard</NavLink> }




      </nav>

    </header>
  )
}

export default Header;
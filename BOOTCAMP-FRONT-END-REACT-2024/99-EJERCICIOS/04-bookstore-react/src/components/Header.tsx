import { FaBars } from 'react-icons/fa';

import Logo from './Logo';
import Menu from './Menu';
import Sidebar from './Sidebar';
import { AnimatePresence } from 'framer-motion';
import useToggle from '../hooks/useToggle';

function Header () {
  const [isOpenSidebar, toggleSidebar] = useToggle(false);

  return (
    <header className="bg-emerald-500 px-4 py-4 flex items-center">
      <Logo />

      <div className="hidden md:block ml-auto">
        <Menu />
      </div>

      {/* <button onClick={() => setIsOpenSidebar(!isOpenSidebar)} className="ml-auto md:hidden"> */}
      <button onClick={toggleSidebar} className="ml-auto md:hidden">
        <FaBars size={35} color="white"/>
      </button>

      {/* {isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar} />} */}
      <AnimatePresence>
        {isOpenSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
      </AnimatePresence>
    </header>
  );
}

export default Header;

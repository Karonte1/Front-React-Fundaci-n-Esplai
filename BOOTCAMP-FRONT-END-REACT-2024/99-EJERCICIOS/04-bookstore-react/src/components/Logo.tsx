import { motion } from 'framer-motion';

// import logoBookstore from '../assets/img/logo-bookstore.svg';
import LogoBookstore from './LogoSVG';
// import LogoBookstore from '../assets/img/logo-bookstore.svg?react';

function Logo () {
  return (
    // <motion.div
    //   className="flex items-center"
    //   initial={{
    //     opacity: 0,
    //     y: -100
    //   }}
    //   animate={{
    //     opacity: 1,
    //     y: 0
    //   }}
    // >
    <motion.div
      className="flex items-center"
      animate={{
        opacity: [0, 1],
        y: [-100, 0]
      }}
    >
      {/* <img className="w-24" src={logoBookstore} alt="Logo Bookstore" /> */}
      {/* <LogoSVG /> */}
      <LogoBookstore className='size-20'/>
      <motion.span
        className='font-black text-2xl text-white'
        drag
        dragSnapToOrigin
        dragConstraints={{
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        }}

      >BOOKSTORE</motion.span>
    </motion.div>
  );
}

export default Logo;

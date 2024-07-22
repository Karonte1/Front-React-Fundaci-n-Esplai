import { motion } from 'framer-motion';

function Animations () {
  const demoVariants = {

    fadein: {
      opacity: [0, 1],
      transition: {
        delay: 1
      }
    },

    fadeout: {
      opacity: [1, 0],
      transition: {
        delay: 1
      }
    },

    down: {
      y: [-50, 0],
      transition: {
        staggerChildren: 0.4
      }
    },

    fadeinStagger: {
      opacity: [0, 1],
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fakeBoolean = false;

  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <h2>Animations</h2>

      <motion.img
        className='my-4'
        src="https://picsum.photos/id/237/100"
        animate={{
          y: 0
        }}
        initial={{
          y: -30
        }}
        transition={{
          delay: 0.4
        }}
      />

      <motion.img
        className='my-4'
        src="https://picsum.photos/id/239/100"
        animate={{
          x: [-100, 0]
        }}
        transition={{
          delay: 0.4
        }}
      />

      <motion.img
        className='my-4'
        src="https://picsum.photos/id/240/100"
        variants={demoVariants}
        animate={`${fakeBoolean ? 'fadein' : 'fadeout'}`}
      />

      <motion.div
        className='flex gap-4'
        variants={demoVariants}
        animate="fadeinStagger"
      >

        <motion.div
          className='bg-pink-400 p-4 rounded border-2 border-black text-center'
          variants={demoVariants}
        >1</motion.div>

        <motion.div
          className='bg-pink-400 p-4 rounded border-2 border-black text-center'
          variants={demoVariants}
        >2</motion.div>

        <motion.div
          className='bg-pink-400 p-4 rounded border-2 border-black text-center'
          variants={demoVariants}
        >3</motion.div>

        <motion.div
          className='bg-pink-400 p-4 rounded border-2 border-black text-center'
          variants={demoVariants}
        >4</motion.div>
        <motion.div
          className='bg-pink-400 p-4 rounded border-2 border-black text-center'
          variants={demoVariants}
        >5</motion.div>
      </motion.div>

      <motion.div
        className='flex gap-4'
        variants={demoVariants}
        animate="fadeinStagger"
      >

        {
          numbers.map(num => <motion.div
            key={num}
            className='bg-pink-400 p-4 rounded border-2 border-black text-center'
            variants={demoVariants}
          >{num}</motion.div>)
        }

      </motion.div>
    </>
  );
}

export default Animations;

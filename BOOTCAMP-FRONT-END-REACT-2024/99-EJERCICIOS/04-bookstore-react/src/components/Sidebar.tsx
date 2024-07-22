import { RxCross1 } from 'react-icons/rx';
import Menu from './Menu';

import { motion } from 'framer-motion';

// type Props = {
//   setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
// }
type Props = {
  toggleSidebar: () => void;
}

function Sidebar (props: Props) {
  // function handleCloseSidebar () {
  //   props.setIsOpenSidebar((prevIsOpenSidebar) => !prevIsOpenSidebar)
  // }

  return (
    <motion.div
      className="fixed inset-0 bg-teal-400 z-10 grid place-content-center"
      animate={{
        x: ['100%', '0%'],
        opacity: [0, 1]
      }}
      exit={{
        x: ['0%', '150%']
      }}
    >
      {/* <button onClick={handleCloseSidebar}> */}
      <button onClick={props.toggleSidebar}>
        <RxCross1 className="absolute top-4 right-4" size={35} color="white" />
      </button>
      <Menu direction="vertical" toggleSidebar={props.toggleSidebar}/>
    </motion.div>
  );
}

export default Sidebar;

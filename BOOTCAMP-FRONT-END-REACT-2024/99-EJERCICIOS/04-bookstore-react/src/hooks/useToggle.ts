import { useState } from 'react';

export default function useToggle (initialValue = true) {
  const [toggle, setToggle] = useState(initialValue);

  function changeToggle () {
    setToggle(!toggle);
  }

  return [toggle, changeToggle] as const;
}

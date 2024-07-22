import { useEffect, useState } from "react"

type Position = {
  x: number | null;
  y: number | null;
}

function MouseMove() {
  const [position, setPosition] = useState<Position>({ x: null, y: null });

  //! ojo!! porque estás añadiendo cientos de listeners a window, usa un useEffect
  // window.addEventListener('mousemove', (event) => {
  //   setPosition({ x: event.clientX, y: event.clientY })
  // });
  
  useEffect(() => {

    function handleMouseMove (event: MouseEvent) {
      setPosition({ x: event.clientX, y: event.clientY });
      console.log('moviendo mouse')
    } 

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [])
  
  
  return (
    <div className="text-center">
      <h2>MouseMove</h2>
      <h3>x: {position.x}</h3>
      <h3>y: {position.y}</h3>
    </div>
  )
}

export default MouseMove;
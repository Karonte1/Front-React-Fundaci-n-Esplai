import Hijo from "./Hijo"

type Props = {
  user: {
    name: string;
  }
}

function Padre({ user }: Props) {
  
  return (
    <>
      <h2>Padre</h2>


      <Hijo user={user} />
    </>
  )
}

export default Padre;
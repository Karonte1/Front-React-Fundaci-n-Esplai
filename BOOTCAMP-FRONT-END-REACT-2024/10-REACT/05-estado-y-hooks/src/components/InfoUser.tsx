import { useState } from "react"

type User = {
  username: string;
}

type Props = {
  user: User | null
}

function InfoUser(props: Props) {

  const [user, setUser] = useState<User | null>(props.user);
  
  return (
    <>
        <h2>InfoUser</h2>
        <h3>{user?.username}</h3>
        {user &&  <h3>{user.username}</h3>}
    </>
  )
}

export default InfoUser;
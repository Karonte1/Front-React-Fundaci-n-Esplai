import { useEffect, useState } from "react"

type User = {
  name: string;
}

function FetchDesmontable() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {

    const controller = new AbortController();
    
    async function getUser () {
      try {
        const resp = await fetch('https://randomuser.me/api/', { signal: controller.signal});
        const { results } = await resp.json();
  
        const name = results[0].name.first
  
        console.log(name);
        setUser({ name });        
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          console.log('Has abortado el fetch');
        }

      }
    }

    getUser();

    return () => controller.abort();


  }, [])
  
  
  return (
    <>
      <h3>Fetch Desmontable</h3>
      <article>
        <h4>{user?.name}</h4>
      </article>
    </>
  )
}

export default FetchDesmontable;
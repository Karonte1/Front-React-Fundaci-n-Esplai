import { Outlet } from 'react-router-dom';

function Profile() {
  console.log('profile');
  
  return (
    <>
      <h1 className="text-3xl font-bold">Tu perfil</h1>
      <h2>Hola, Ivan</h2>
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Foto perfil" />

      <Outlet />
    </>
  )
}

export default Profile;
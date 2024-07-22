import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {

  const user = null;
  // const user = { name: 'Ivan' };

  // if (user) {
  //   return <Outlet />
  // }
  // return <Navigate to="/" />

  return user ? <Outlet /> : <Navigate to="/" />


}

export default PrivateRoutes;
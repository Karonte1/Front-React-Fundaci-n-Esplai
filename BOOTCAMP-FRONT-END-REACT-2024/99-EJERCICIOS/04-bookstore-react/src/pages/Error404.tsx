import { Link, useNavigate } from 'react-router-dom';
import { Typography } from '../components';
import { useEffect, useState } from 'react';

function Error404 () {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const idInterval = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    const idTimeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearTimeout(idTimeout);
      clearInterval(idInterval);
    };
  }, []);

  return (
    <>
      <Typography as="h1">Error 404</Typography>
      <Typography as="h2">Página no encontrada</Typography>
      <Typography className='mt-8'>Volviendo a la página principal en {countdown} segundos.</Typography>
      <Typography>Haz click en el siguiente enlace para <Link className='text-indigo-500 underline' to="/">volver a la página principal</Link></Typography>

    </>
  );
}

export default Error404;

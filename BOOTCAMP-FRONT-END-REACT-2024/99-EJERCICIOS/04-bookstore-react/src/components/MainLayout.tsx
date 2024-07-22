import { ToastContainer } from 'react-toastify';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function MainLayout () {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow w-3/4 max-w-5xl mx-auto my-20">
        <Outlet />
      </main>
      <Footer />

      <ToastContainer position='bottom-right' autoClose={3000} />
    </div>
  );
}

export default MainLayout;

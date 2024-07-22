import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header, Footer } from '@c/index';

import { Home, Books, Profile, AddBook, EditBook, LogIn, RegisterZOD, Error404 } from '@p/index';
// import Animations from './pages/Animations'

import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from '@c/PrivateRoute';
import PublicRoute from '@c/PublicRoute';

function App () {
  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <Header />
      <main className="grow w-3/4 max-w-5xl mx-auto my-20">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<PrivateRoute />}>
            <Route path="/books" element={<Books />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/edit-book/:bookId" element={<EditBook />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<RegisterZOD />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />

      <ToastContainer position='bottom-right' autoClose={3000} />
    </div>
  );
}

export default App;

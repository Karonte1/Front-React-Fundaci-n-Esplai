import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { RouterProvider } from 'react-router-dom';
// import router from './config/router.tsx';

import App from './App.tsx';

import './index.css';
import UserProvider from './contexts/UserProvider.tsx';
import BooksProvider from './contexts/BooksProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <UserProvider>
      <BooksProvider>
        <App />
      </BooksProvider>
    </UserProvider>
  </BrowserRouter>
);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <RouterProvider router={router} />
// );

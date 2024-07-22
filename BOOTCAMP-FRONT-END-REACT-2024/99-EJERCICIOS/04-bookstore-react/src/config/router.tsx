import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Books from '../pages/Books';
import MainLayout from '../components/MainLayout';
import Profile from '../pages/Profile';
import PrivateRoute from '../components/PrivateRoute'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/books',
        element: <Books />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: '/profile',
            element: <Profile />
          }
        ]
      }
    ]
  }

]);

export default router;

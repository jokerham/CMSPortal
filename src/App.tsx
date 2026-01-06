import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Header from '@/components/navigation/Header';
import { AuthGuard } from '@/components/auth/AuthGuard';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthGuard>
        <Header />
      </AuthGuard>
    ),
  },
  {
    path: '/login',
    element: (
      <Login />
    ),
  },
  {
    path: '/signup',
    element: (
      <Signup />
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
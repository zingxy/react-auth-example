import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../pages/Layout';
import Missing from '../pages/Missing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import UserBoard from '../pages/UserBoard';
import AdminBoard from '../pages/AdminBoard';
import Public from '../pages/Public';
import Unauthorized from '../pages/Unauthorized';

import RequireAuth from '../components/RequireAuth';

export enum ROLES {
  Admin = 'admin',
  User = 'user',
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      /* 404 */
      {
        path: '*',
        element: <Missing />,
      },
      {
        path: 'unauthorized',
        element: <Unauthorized />,
      },
      /* public */
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        index: true,
        element: <Public />,
      },
      /* protected */
      {
        path: 'user',
        element: (
          <RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]}>
            <UserBoard />
          </RequireAuth>
        ),
      },
      {
        path: 'admin',
        element: (
          <RequireAuth allowedRoles={[ROLES.Admin]}>
            <AdminBoard />
          </RequireAuth>
        ),
      },
    ],
  },
]);

export default router;

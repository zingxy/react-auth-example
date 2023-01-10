import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { AuthProvider } from './context/AuththProvider';

export default function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>;
      </AuthProvider>
    </>
  );
}

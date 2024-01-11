import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, 
  Navigate, 
  // Navigate,
   RouterProvider } from 'react-router-dom';

// import Root from './Root';
import ErrorPage from './ErrorPage';

import Login from './components/user/Login';
import ListaFrutas from './components/frutas/ListaFrutas';
import {useContext} from 'react';
import {UserContext} from './context/UserContext';
import Root from './Root';

function App() {
  const {user} = useContext(UserContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: user ? <Root /> : <Login />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Navigate to="/lista-frutas" replace />
        },
        {
          path: 'lista-frutas',
          element: user  ? <ListaFrutas /> : <Navigate to="/" replace />,
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;

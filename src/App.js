import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, 
  // Navigate,
   RouterProvider } from 'react-router-dom';

// import Root from './Root';
import ErrorPage from './ErrorPage';

import Login from './components/user/Login';
import ListaFrutas from './components/frutas/ListaFrutas';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
      // element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'lista-frutas',
          // element: user  ? <ListaFrutas /> : <Navigate to="/" replace />,
          element: <ListaFrutas />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;

// import logo from './logo.svg';
// import './App.css';



import { createBrowserRouter, 
  // Navigate,
   RouterProvider } from 'react-router-dom';
import Login from './components/user/Login';
import ErrorPage from './ErrorPage';
// import Root from './Root';
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
          // element: user && user[0].usuario_rol === 'admincom' ? <Cliente /> : <Navigate to="/" replace />, 
          element: <ListaFrutas />, 
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;

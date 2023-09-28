import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginPage from './components/login/Login-page';
import store from './app/store';
import Motorcycle from './components/motorcycle/Motorcycle';
import Detail from './components/motorcycle/Detail';
import DeleteMotorcycle from './components/motorcycle/DeleteMotorcycle';
import Layout from './layout/Layout';
import AddMotorcycle from './components/motorcycle/AddMototorcycle';
import AddReservation from './components/AddReservation/AddReservation';
import Reservation from './components/Reservation/Reservation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/motorcycles',
    element: <Layout />,
    children: [
      {
        path: '/motorcycles',
        element: <Motorcycle />,
      },
      {
        path: '/motorcycles/:id',
        element: <Detail />,
        loader: async ({ params }) => params,
      },
      {
        path: '/motorcycles/new',
        element: <AddMotorcycle />,
      },
      {
        path: '/motorcycles/delete-motorcycles',
        element: <DeleteMotorcycle />,
        loader: async ({ params }) => params,
      },
    ],
  },
  {
    path: '/reservations',
    element: <Layout />,
    children: [
      {
        path: '/reservations',
        element: <Reservation />,
      },
      {
        path: '/reservations/new',
        element: <AddReservation />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;

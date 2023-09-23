import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginPage from './components/login/Login-page';
import store from './app/store';
import Motorcycle from './components/motorcycle/Motorcycle';
import Detail from './components/motorcycle/Detail';
import DeleteMotorcycle from './components/motorcycle/DeleteMotorcycle';
import Layout from './layout/Layout';
import AddReservation from './components/AddReservation/AddReservation';
import Reservation from './components/Reservation/Reservation';
import Sidebar from './components/Sidebar/Sidebar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/motorcycles',
        element: ((<Motorcycle />), (<Sidebar />)),
      },
      {
        path: '/motorcycles/:id',
        element: <Detail />,
        loader: async ({ params }) => params,
      },
      {
        path: '/motorcycles/delete-motorcycles',
        element: <DeleteMotorcycle />,
        loader: async ({ params }) => params,
      },
      {
        path: '/AddReservation',
        element: <AddReservation />,
      },
      {
        path: '/Reservation',
        element: <Reservation />,
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

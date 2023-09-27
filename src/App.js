import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import LoginPage from './components/login/Login-page';
import store from './app/store';
import Motorcycle from './components/motorcycle/Motorcycle';
import Detail from './components/motorcycle/Detail';
import DeleteMotorcycle from './components/motorcycle/DeleteMotorcycle';
import Layout from './layout/Layout';
import AddMotorcycle from './components/motorcycle/AddMototorcycle';
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
        element: ((<Detail />), (<Sidebar />)),
        loader: async ({ params }) => params,
      },
      {
        path: '/motorcycles/new',
        element: ((<AddMotorcycle />), (<Sidebar />)),
      },
      {
        path: '/motorcycles/delete-motorcycles',
        element: ((<DeleteMotorcycle />), (<Sidebar />)),
        loader: async ({ params }) => params,
      },
      {
        path: '/AddReservation',
        element: ((<AddReservation />), (<Sidebar />)),
      },
      {
        path: '/Reservation',
        element: ((<Reservation />), (<Sidebar />)),
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;

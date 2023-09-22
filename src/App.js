import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Motorcycle from './components/motorcycle/Motorcycle';
import Detail from './components/motorcycle/Detail';
import Layout from './layout/Layout';
import AddReservation from './components/AddReservation/AddReservation';
import Reservation from './components/Reservation/Reservation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/motorcycle',
        element: <Motorcycle />,
      },
      {
        path: '/motorcycle/:id',
        element: <Detail />,
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

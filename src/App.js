import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Motorcycle from './components/motorcycle/Motorcycle';
import Detail from './components/motorcycle/Detail';
import Layout from './layout/Layout';
import Login from './components/login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/motorcycle',
        element: <Motorcycle />,
      },
      {
        path: '/motorcycle/:id',
        element: <Detail />,
        loader: async ({ params }) => params,
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

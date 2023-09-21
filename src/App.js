import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginPage from './components/login/Login-page';
import store from './redux/store';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;

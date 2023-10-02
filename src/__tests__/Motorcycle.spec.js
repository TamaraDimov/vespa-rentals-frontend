import { create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import Motorcycle from '../components/motorcycle/Motorcycle';

describe('Motorcycle component', () => {
  test('renders correctly', () => {
    const component = create(
      <Provider store={store}>
        <Router>
          <Motorcycle />
        </Router>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

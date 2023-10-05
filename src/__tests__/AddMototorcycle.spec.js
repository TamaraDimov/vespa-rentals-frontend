import { create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import AddMototorcycle from '../components/motorcycle/AddMototorcycle';

describe('AddMototorcycle component', () => {
  test('renders correctly', () => {
    const component = create(
      <Provider store={store}>
        <Router>
          <AddMototorcycle />
        </Router>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

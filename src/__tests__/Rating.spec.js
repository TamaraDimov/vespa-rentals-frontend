import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Rating from '../components/Sidebar/Rating';
import 'mock-local-storage';

const mockStore = configureMockStore();
const testuser = {
  user: {
    data: {
      id: 1,
      email: 'kiflekifle23@gmail.com',
      created_at: '2023-09-22T13:51:50.089Z',
    },
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlYjI2ZTA2Yy1lMTM1LTRmMmEtYTYwZi1iYmMwM2I1MGE2MmQiLCJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjk2MjI2NTUwLCJleHAiOjE3MDE0MTA1NTB9.g0XLlQ7sc-1r0KIevNXVKwwH61FzdXM_sB-tpS6WWK4',
  },
};
const store = mockStore({
  user: {
    isLoading: false,
    user: testuser,
    token: testuser.token,
  },
});
describe('Rating', () => {
  let mockLocalStorage;
  let originalLocalStorage;

  beforeAll(() => {
    originalLocalStorage = global.localStorage;

    mockLocalStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    };

    const localStorageMock = {
      ...mockLocalStorage,
      getItem: jest.fn().mockImplementation((key) => mockLocalStorage[key]),
      setItem: jest.fn().mockImplementation((key, value) => {
        mockLocalStorage[key] = value;
      }),
      removeItem: jest.fn().mockImplementation((key) => {
        delete mockLocalStorage[key];
      }),
      clear: jest.fn().mockImplementation(() => {
        mockLocalStorage = {};
      }),
    };

    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
    });

    localStorageMock.getItem.mockImplementation(() => JSON.stringify(testuser));
  });

  afterAll(() => {
    Object.defineProperty(global, 'localStorage', {
      value: originalLocalStorage,
    });
  });

  let rating;
  beforeAll(async () => {
    rating = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Rating />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render correctly', () => {
    expect(rating).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(rating).toMatchSnapshot();
  });
});

import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AddReservation from '../components/AddReservation/AddReservation';
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
  motorcycle: {
    motorcycle: [
      {
        id: 1,
        name: 'Honda CBR600RR',
        model: 'CBR600RR',
        photo: 'https://example.com/photo1.jpg',
        description: 'Description for Honda CBR600RR',
      },
      {
        id: 2,
        name: 'Yamaha YZF-R6',
        model: 'YZF-R6',
        photo: 'https://example.com/photo2.jpg',
        description: 'Description for Yamaha YZF-R6',
      },
    ],
  },
  reservation: {
    reservation: [
      {
        id: 1, start_date: '2023-10-01', end_date: '2023-10-02', city: 'Chicago', user_id: 1, motorcycle_id: 1,
      },
    ],
  },
  user: {
    isLoading: false,
    user: testuser,
    token: testuser.token,
  },
});
describe('AddReservation', () => {
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

  let addReservation;
  beforeAll(async () => {
    addReservation = renderer
      .create(
        <Provider store={store}>
          <Router>
            <AddReservation />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render correctly', () => {
    expect(addReservation).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(addReservation).toMatchSnapshot();
  });
});

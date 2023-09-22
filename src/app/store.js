import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../redux/reducers/userSlice';
import motorcycleReducer from '../redux/reducers/motorcycleSlice';
import reservationReducer from '../redux/reducers/reservationSlice';

const store = configureStore({
  reducer: {
    motorcycle: motorcycleReducer,
    reservation: reservationReducer,
    user: userSlice,
  },
});

export default store;

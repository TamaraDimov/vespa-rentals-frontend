import { configureStore } from '@reduxjs/toolkit';
import motorcycleReducer from '../components/motorcycle/motorcycleSlice';
import reservationReducer from '../redux/reservationSlice';

export default configureStore({
  reducer: {
    motorcycle: motorcycleReducer,
    reservation: reservationReducer,
  },
});

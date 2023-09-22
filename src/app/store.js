import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../redux/reducers/userSlice';
import motorcycleReducer from '../redux/reducers/motorcycleSlice';

const store = configureStore({
  reducer: {
    motorcycle: motorcycleReducer,
    user: userSlice,
  },
});

export default store;

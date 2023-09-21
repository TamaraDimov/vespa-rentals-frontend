import { configureStore } from '@reduxjs/toolkit';
import motorcycleReducer from '../components/motorcycle/motorcycleSlice';

export default configureStore({
  reducer: {
    motorcycle: motorcycleReducer,
  },
});

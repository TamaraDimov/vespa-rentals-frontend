import { createSlice } from '@reduxjs/toolkit';
import {
  fetchReservations,
  addReservation,
  deleteReservation,
} from '../reservationActions';

const initialState = {
  reservations: [],
  status: 'idle',
  error: null,
};

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.status = 'success';
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.status = 'failure';
        state.error = action.error.message;
      })
      .addCase(addReservation.pending, (state) => {
        state.status = 'saving';
      })
      .addCase(addReservation.fulfilled, (state, action) => {
        state.status = 'success';
        state.reservations.push(action.payload);
      })
      .addCase(addReservation.rejected, (state, action) => {
        state.status = 'failure';
        state.error = action.error.message;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        if (action.payload && action.payload.id) {
          const deletedReservationId = action.payload.id;
          state.reservations = state.reservations.filter(
            (reservation) => reservation.id !== deletedReservationId,
          );
        }
      });
  },
});

export default reservationSlice.reducer;

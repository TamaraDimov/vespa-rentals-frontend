import { createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../app/API_URL';

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/reservations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch reservations');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (reservation) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reservation),
      });
      if (!response.ok) {
        throw new Error('Failed to add reservation');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export default { fetchReservations, addReservation };

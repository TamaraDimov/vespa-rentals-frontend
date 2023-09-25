import { createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../app/API_URL';
import { getUserFromLocalStorage } from '../helpers/LocalStorage';
import { toast } from 'react-toastify';

const userData = getUserFromLocalStorage();

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    try {
      const response = await fetch(`${API_URL}/reservations`, {
        headers: {
          Authorization: `Bearer ${userData.user.token}`,
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
  }
);

export const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (reservation) => {
    try {
      const response = await fetch(`${API_URL}/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userData.user.token}`,
        },
        body: JSON.stringify(reservation),
      });
      if (!response.ok) {
        throw new Error('Failed to add reservation');
      }
      const data = await response.json();
      toast.success('Successfully made reservation');
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export default { fetchReservations, addReservation };

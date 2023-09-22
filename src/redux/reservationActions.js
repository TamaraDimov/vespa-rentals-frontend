import { createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../App/API_URL';

export const fetchReservations = createAsyncThunk(
    'reservations/fetchReservations',
    async () => {
        try {
            const response = await fetch(`${API_URL}/reservations`);
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
    }
);

export default { fetchReservations, addReservation };

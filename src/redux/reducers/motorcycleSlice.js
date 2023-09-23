import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserFromLocalStorage } from '../../helpers/LocalStorage';
import API_URL from '../../app/API_URL';

const data = getUserFromLocalStorage();

export const fetchMotorcycle = createAsyncThunk('get/ferchMortcycle', async () => {
  try {
    const motorcycleData = await fetch('http://localhost:4000/api/v1/motorcycles', {
      headers: {
        Authorization: `Bearer ${data.user.token}`,
      },
    });
    const dataJson = motorcycleData.json();
    return dataJson;
  } catch (error) {
    return error;
  }
});

export const fetchSpecificMotorcycle = createAsyncThunk(
  'get/fetchSpecificMotorcycle',
  async (id) => {
    try {
      const motorcycleData = await fetch(
        `http://localhost:4000/api/v1/motorcycles/${id}`, {
          headers: {
            Authorization: `Bearer ${data.user.token}`,
          },
        },
      );
      const dataJson = motorcycleData.json();
      return dataJson;
    } catch (error) {
      return error;
    }
  },
);

export const deleteMotorcycle = createAsyncThunk(
  'motorcycle/deleteMotorcycle',
  async (id) => {
    try {
      const response = await fetch(`${API_URL}/motorcycles/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.user.token}`,
        },
      });
      const dataJson = await response.json();
      return dataJson;
    } catch (error) {
      return error;
    }
  },
);

const motorcycleSlice = createSlice({
  name: 'motorcycle',
  initialState: {
    motorcycle: {},
    status: false,
    specificMotorcycle: {
      motorcycle: {},
      status: false,
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMotorcycle.pending, (state) => {
        state.status = false;
      })
      .addCase(fetchMotorcycle.fulfilled, (state, action) => {
        state.status = true;
        state.motorcycle = action.payload;
      })
      .addCase(fetchSpecificMotorcycle.pending, (state) => {
        state.specificMotorcycle.status = false;
      })
      .addCase(fetchSpecificMotorcycle.fulfilled, (state, action) => {
        state.specificMotorcycle.status = true;
        state.specificMotorcycle.motorcycle = action.payload;
      })
      .addCase(deleteMotorcycle.pending, (state) => {
        state.status = 'deleting';
      })
      .addCase(deleteMotorcycle.fulfilled, (state, action) => {
        state.status = 'success';
        state.motorcycle.push(action.payload);
      })
      .addCase(deleteMotorcycle.rejected, (state, action) => {
        state.status = 'failure';
        state.error = action.error.message;
      });
  },
});

export default motorcycleSlice.reducer;

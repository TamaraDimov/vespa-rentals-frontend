import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserFromLocalStorage } from '../../helpers/LocalStorage';
import { API_URL, API_URL_SHORT } from '../../app/API_URL';

const data = getUserFromLocalStorage();

export const fetchMotorcycle = createAsyncThunk(
  'get/ferchMortcycle',
  async (token) => {
    try {
      const motorcycleData = await fetch(`${API_URL}/motorcycles`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const dataJson = motorcycleData.json();
      return dataJson;
    } catch (error) {
      return error;
    }
  },
);

export const fetchUser = createAsyncThunk('get/fetchUser', async (token) => {
  try {
    const motorcycleData = await fetch(`${API_URL_SHORT}/current_user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const dataJson = motorcycleData.status;
    return dataJson;
  } catch (error) {
    return error;
  }
});

export const fetchSpecificMotorcycle = createAsyncThunk(
  'get/fetchSpecificMotorcycle',
  async (id) => {
    try {
      const motorcycleData = await fetch(`${API_URL}/motorcycles/${id}`, {
        headers: {
          Authorization: `Bearer ${data.user.token}`,
        },
      });
      const dataJson = motorcycleData.json();
      return dataJson;
    } catch (error) {
      return error;
    }
  },
);

export const deleteMotorcycle = createAsyncThunk(
  'motorcycle/deleteMotorcycle',
  async (motorcycleId) => {
    try {
      await fetch(`${API_URL}/motorcycles/${motorcycleId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.user.token}`,
        },
      });
      return { id: motorcycleId };
    } catch (error) {
      return error;
    }
  },
);

export const adddMotorcycle = createAsyncThunk(
  'get/adddMotorcycle',
  async (params) => {
    try {
      const motorcycleData = await fetch(`${API_URL}/motorcycles`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${data.user.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
      const dataJson = motorcycleData.status;
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
    isLoading: false,
    returnedMessage: '',
    specificMotorcycle: {
      motorcycle: {},
      isLoading: false,
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMotorcycle.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchMotorcycle.fulfilled, (state, action) => {
        state.isLoading = true;
        state.motorcycle = action.payload;
      })

      .addCase(fetchSpecificMotorcycle.pending, (state) => {
        state.specificMotorcycle.isLoading = false;
      })

      .addCase(fetchSpecificMotorcycle.rejected, (state) => {
        state.specificMotorcycle.isLoading = false;
      })

      .addCase(fetchSpecificMotorcycle.fulfilled, (state, action) => {
        state.specificMotorcycle.isLoading = true;
        state.specificMotorcycle.motorcycle = action.payload;
      })

      .addCase(adddMotorcycle.rejected, (state) => {
        state.returnedMessage = 'pending';
      })

      .addCase(adddMotorcycle.pending, (state) => {
        state.returnedMessage = 'pending';
      })

      .addCase(adddMotorcycle.fulfilled, (state, action) => {
        if (action.payload === 201) {
          state.returnedMessage = 'created';
        } else {
          state.returnedMessage = 'Unprocessable Entity';
        }
      })

      .addCase(fetchUser.rejected, (state) => {
        state.status = false;
      })

      .addCase(fetchUser.pending, (state) => {
        state.status = false;
      })

      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = action.payload;
      })

      .addCase(deleteMotorcycle.pending, (state) => {
        state.status = 'deleting';
      })

      .addCase(deleteMotorcycle.fulfilled, (state, action) => {
        state.status = 'success';
        if (action.payload && action.payload.id) {
          const deletedMotorcycleId = action.payload.id;
          state.motorcycle = state.motorcycle.filter(
            (motorcycle) => motorcycle.id !== deletedMotorcycleId,
          );
        }
      })

      .addCase(deleteMotorcycle.rejected, (state, action) => {
        state.status = 'failure';
        state.error = action.error.message;
      });
  },
});

export default motorcycleSlice.reducer;

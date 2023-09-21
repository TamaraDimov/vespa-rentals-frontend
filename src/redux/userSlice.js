/* eslint-disable */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../helpers/axios';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../helpers/LocalStorage';

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

const registerUser = createAsyncThunk(
  '/register',
  async ({ username, password }) => {
    try {
      const resp = await customFetch.post('/api/v1/register', {
        user: {
          username,
          password,
        },
      });

      return resp.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
);

const loginUser = createAsyncThunk('/login', async ({ username, password }) => {
  try {
    const resp = await customFetch.post('/api/v1/login', {
      username,
      password,
    });
    return resp.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        addUserToLocalStorage(payload);
        alert.success(`Hello 👋 ${payload.username}`);
      })
      .addCase(registerUser.rejected, (state, { error }) => {
        state.isLoading = false;
        alert.error(error.message);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        addUserToLocalStorage(payload);
        alert.success(`Welcome Back 😀 ${payload.username}`);
      })
      .addCase(loginUser.rejected, (state, { error }) => {
        state.isLoading = false;
        alert.error(error.message);
      });
  },
});

export const { logoutUser } = userSlice.actions;

export { registerUser, loginUser };

export default userSlice.reducer;

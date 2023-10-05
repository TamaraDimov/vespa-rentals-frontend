import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import customFetch from '../../helpers/axios';
import { API_URL_SHORT } from '../../app/API_URL';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../helpers/LocalStorage';

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  token: '',
};

const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ email, username, password }) => {
    try {
      const resp = await customFetch.post(`${API_URL_SHORT}/signup`, {
        user: {
          email,
          username,
          password,
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
);

const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, username, password }) => {
    try {
      const resp = await customFetch.post(`${API_URL_SHORT}/login`, {
        user: {
          email,
          username,
          password,
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
);

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
        toast.success('Hello 👋 ');
      })
      .addCase(registerUser.rejected, (state, { error }) => {
        state.isLoading = false;
        toast.error(error.message);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        addUserToLocalStorage(payload);
        toast.success('Welcome Back 😀 ');
      })
      .addCase(loginUser.rejected, (state, { error }) => {
        state.isLoading = false;
        toast.error(error.message);
      });
  },
});

export const { logoutUser } = userSlice.actions;

export { registerUser, loginUser };

export default userSlice.reducer;

import { createReducer, createAsyncThunk, PayloadAction, createSlice, AnyAction } from '@reduxjs/toolkit';
import { axiosInstance } from '../core/clients/axios';
import { BaseInitialState } from './baseInitialState';
import { HYDRATE } from 'next-redux-wrapper';

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  isAdmin?: boolean;
  phone?: string;
  address?: { street?: string; city?: string; postCode?: string };
}

export interface LoginFields {
  email: string;
  password: string;
}

export interface UserState extends BaseInitialState {
  userInfo: User;
}

export const loginRequest = createAsyncThunk('LOGIN', async (data: LoginFields) => {
  try {
    const {
      data: { user },
    } = await axiosInstance.post(`/auth/local`, data);

    return user;
  } catch (error) {
    return error;
  }
});

const initialState = {
  userInfo: {},
  isLoading: false,
  error: false,
} as UserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state: UserState, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.user,
      };
    });
    builder.addCase(loginRequest.fulfilled, (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
      state.isLoading = false;
    });
    builder.addCase(loginRequest.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;

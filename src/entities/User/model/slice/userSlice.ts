import { createSlice } from '@reduxjs/toolkit';
import { IUserSchema } from '../types/user.interface';

const initialState: IUserSchema = {
  user: {
    name: '',
  },
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

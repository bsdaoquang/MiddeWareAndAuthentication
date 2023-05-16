import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'addAuth',
  initialState: {
    userData: {
      email: '',
      fcmtoken: ''
    }
  },
  reducers: {
    addAuth: (state, action) =>
    {
      state.userData = action.payload;
    }
  }
});

export const authReducer = authSlice.reducer;
export const { addAuth } = authSlice.actions;

export const authSelector = (state) => state.authReducer.userData;

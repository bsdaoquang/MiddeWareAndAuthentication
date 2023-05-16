import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'addcart',
  initialState: {
    cartData: []
  },
  reducers: {
    addcart: (state, action) =>
    {
      state.cartData = action.payload;
    }
  }
});

export const cartReducer = cartSlice.reducer;
export const { addcart } = cartSlice.actions;

export const cartSelector = (state) => state.cartReducer.cartData;

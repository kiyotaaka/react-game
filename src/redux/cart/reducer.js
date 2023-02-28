import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, { payload }) => {
      state.itemsInCart.push(payload);
    },
    deleteItemFromCart: (state, { payload }) => {
      state.itemsInCart = state.itemsInCart.filter((game) => game.id !== payload);
    },
  },
});
export default cartSlice.reducer;
export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;

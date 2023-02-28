import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/reducer";
import gamesSlice from "./games/reducer";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    games: gamesSlice,
  },
});
export default store;

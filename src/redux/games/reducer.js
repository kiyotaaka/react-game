import { createSlice } from '@reduxjs/toolkit';

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    currentGame: null,
  },
  reducers: {
    setCurrentGame: (state, { payload }) => {
      state.currentGame = payload;
    },
  },
});
export default gamesSlice.reducer;
export const { setCurrentGame } = gamesSlice.actions;

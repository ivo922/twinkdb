import { createSlice } from '@reduxjs/toolkit';

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    add: (state, action) => {
      state.items.push({
        url: action.payload,
        checked: false,
      });
    },
    remove: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    check: (state, action) => {
      state.items[action.payload].checked =
        !state.items[action.payload].checked;
    },
    togglePopup: (state) => {
      state.isOpen = !state.isOpen;
    },
    replaceItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { add, remove, check, togglePopup, replaceItems } = wishlistSlice.actions;

export default wishlistSlice.reducer;

//This a slice created for cart in the store

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //addItem is the action
    //state is the intial state or the previous state when modifying the state holding the current state
    //action is the data which is coming in through payload
    //remember this function does not return anything, it takes a state and modify it

    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    //no payload needed here
    clearCart: (state) => {
      state.items = [];
    },

    //action will contain the payload for the item to be removed
    removeItem: (state, action) => {
      state.items.pop();
    },
  },
});

// I need to export actions and reducer
export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    //name of the slice and the actual slice
    cart: cartSlice,
  },
});

export default store;

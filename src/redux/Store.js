import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice/AddcartSlice";
import cartReducer from "./Slice/CartSlice"

const store = configureStore({
  reducer: {
    addcart: counterReducer,
     cart: cartReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlicer";
import restaurantReducer from "./restaurantmenuSlice";
import restaurantDataReducer from "./restaurantDataSlice";

export const store = configureStore({
  reducer: {
    cartslice: CartReducer,
    restaurant: restaurantReducer,
     restaurantData: restaurantDataReducer,
  },
});

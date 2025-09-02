import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: {} // key = restaurantId, value = { apiData, tempData, RestData }
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    saveRestaurantData: (state, action) => {
      const { id, apiData, tempData, RestData } = action.payload;
      state.restaurants[id] = { apiData, tempData, RestData };
    }
  }
});

export const { saveRestaurantData } = restaurantSlice.actions;
export default restaurantSlice.reducer;

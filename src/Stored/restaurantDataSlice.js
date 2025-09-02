// restaurantDataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch restaurants
export const fetchRestaurantData = createAsyncThunk(
  "restaurantData/fetchRestaurantData",
  async () => {
    const proxyServer = "https://cors-anywhere.herokuapp.com/";
    const swiggyAPI =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

    const response = await fetch(proxyServer + swiggyAPI);
    const data = await response.json();

    return {
      header: data?.data?.cards[0]?.card?.card,
      title: data?.data?.cards[1]?.card?.card?.header?.title,
      restaurants:
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [],
    };
  }
);

const restaurantDataSlice = createSlice({
  name: "restaurantData",
  initialState: {
    header: {},
    title: "",
    restaurants: [],
    isLoading: false,
    hasFetched: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRestaurantData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.header = action.payload.header;
        state.title = action.payload.title;
        state.restaurants = action.payload.restaurants;
        state.hasFetched = true;
      })
      .addCase(fetchRestaurantData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default restaurantDataSlice.reducer;

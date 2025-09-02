import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home-page/Home.js";
import { BrowserRouter, Route, Routes } from "react-router";
import Restaurant from "./components/Food-Delivery/Restaurant.js";
import RestaurantMenu from "./components/Food-Delivery/RestaurantMenu.js";
import SearchFood from "./components/Food-Delivery/SearchFood.js";
import SecondaryHome from "./components/Food-Delivery/SecondaryHome.js";
import { store } from "./Stored/stores";
import { Provider } from "react-redux";
import Checkout from "./components/Food-Delivery/cart/Checkout.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
              <Route
                path="/restaurant"
                element={<Restaurant></Restaurant>}
              ></Route>
              <Route
                path="/city/delhi/:id"
                element={<RestaurantMenu></RestaurantMenu>}
              ></Route>
              <Route
                path="/city/delhi/:id/search"
                element={<SearchFood></SearchFood>}
              ></Route>
            </Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);

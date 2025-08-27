import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.js";
import { BrowserRouter, Route, Routes } from "react-router";
import Restaurant from "./components/Restaurant.js";


function App(){
    
    return (
       <>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/restaurant" element={<Restaurant />} />

         </Routes>
       </BrowserRouter>
       </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);

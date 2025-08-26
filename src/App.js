import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";
import GroceryOption from "./components/GroceryOption";
import DineOption from "./components/DineOption";
import Banner from "./components/Banner";
import FoodDelivery from "./components/FoodDelivery";
import GroceryDelivery from "./components/GroceryDelivery.js";

function App(){
    
    return (
       <>
       <Header></Header>
         <FoodOption></FoodOption>
                <GroceryOption></GroceryOption>
                   <DineOption></DineOption>
                     <Banner></Banner>
                        <FoodDelivery></FoodDelivery>
                           <GroceryDelivery></GroceryDelivery> 
       </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);

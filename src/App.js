import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";
import GroceryOption from "./components/GroceryOption";

function App(){
    
    return (
       <>
       <Header></Header>
         <FoodOption></FoodOption>
                <GroceryOption></GroceryOption>
       </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);

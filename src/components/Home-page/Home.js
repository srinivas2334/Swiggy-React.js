import FoodOption from "./FoodOption.js";
import GroceryOption from "./GroceryOption.js";
import DineOption from "./DineOption.js";
import Banner from "./Banner.js";
import FoodDelivery from "./FoodDelivery.js";
import GroceryDelivery from "./GroceryDelivery.js";
import Header from "./Header.js";
import Foot from "./mainfooter.js"

export default function Home() {
    return (
        <>
        <Header></Header>
         <FoodOption></FoodOption>
            <GroceryOption></GroceryOption>
                <DineOption></DineOption>
                    <Banner></Banner>
                        <FoodDelivery></FoodDelivery>
                        <GroceryDelivery></GroceryDelivery> 
                        <Foot></Foot>
        </>
    );
}

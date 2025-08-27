import FoodOption from "./FoodOption";
import GroceryOption from "./GroceryOption";
import DineOption from "./DineOption";
import Banner from "./Banner";
import FoodDelivery from "./FoodDelivery";
import GroceryDelivery from "./GroceryDelivery.js";
import Header from "./Header.js";

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
        </>
    );
}

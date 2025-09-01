import { GrocerGridCard } from "../../utils/Grocery.js";
import Grocerycard from "./Grocerycard.js";
import CarouselControls from "../common/CarouselControls.js";

export default function GroceryOption() {
  return (
    <div className="mt-20 w-[80%] container mx-auto">
      <CarouselControls title="Shop Groceries on Instamart">
        {GrocerGridCard.map((foodData) => (
          <Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>
        ))}
        </CarouselControls>
      </div>
 
  );
}

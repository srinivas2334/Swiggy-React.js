import {GrocerGridCard} from "../utils/Grocery"
import Grocerycard from "./Grocerycard.js"

export default function GroceryOption(){


    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="text-3xl font-bold mb-10">Shop Groceries on Instamart</h1>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto gap-3">
                    {
                        GrocerGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                    }
                  </div>
        </div>
    )
}
// import { imageGridCards } from "../../utils/foodData.js";
// import Foodcard from "./FoodCard.js";

// export default function FoodOption() {
//   return (
//     <>
//       <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
//         {imageGridCards.map((foodData) => (
//           <Foodcard key={foodData.id} foodData={foodData}></Foodcard>
//         ))}
//       </div>
//     </>
//   );
// }

import { imageGridCards } from "../../utils/foodData.js";
import FoodCard from "./FoodCard";
import CarouselControls from "../common/CarouselControls.js"; // import compound

export default function FoodOption() {
  return (
    <div className="mt-20 w-[80%] container mx-auto">

      {/* Use CarouselControls compound */}
      <CarouselControls title={"Order our best food options"}>
        <div className="flex flex-nowrap overflow-x-auto hide-scrollbar gap-3">
          {/* Break the cards into two rows */}
          <div className="grid grid-rows-2 grid-flow-col gap-6">
            {imageGridCards.map((foodData) => (
              <FoodCard key={foodData.id} foodData={foodData} />
            ))}
          </div>
        </div>
      </CarouselControls>
    </div>
  );
}

 

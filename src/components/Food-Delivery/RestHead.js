
import RestFoodCard from "./RestFoodCard.js";
import CarouselControls from "../common/CarouselControls.js"; // import compound

export default function RestFoodOption({restaurants}) {
  return (
    <div className="mt-20 w-[80%] container mx-auto ">

      {/* Use CarouselControls compound */}
      <CarouselControls title={restaurants?.header?.title}>
            { restaurants?.imageGridCards?.info?.map((foodData) => (
              <RestFoodCard key={foodData.id} foodData={foodData} />
            ))}
      </CarouselControls>
    </div>
  );
}
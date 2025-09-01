import {dineoutRestaurants} from "../../utils/DineData.js"
import DineCard from "./DineCard.js"
import CarouselControls from "../common/CarouselControls.js";

export default function DineOption(){

    return (
        <div className="w-[80%] mx-auto mt-20 mb-20">
            <CarouselControls title="Discover best restaurants on Dineout">
                {
                    dineoutRestaurants.map((RestData)=><DineCard key={RestData?.info?.id} RestData={RestData}></DineCard>)
                }
            </CarouselControls>

        </div>
    )
}


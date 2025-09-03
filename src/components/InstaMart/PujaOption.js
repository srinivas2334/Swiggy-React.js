import { cards  } from "../../utils/instamart.js";
import Pujacard from "./Pujacard.js";
import CarouselControls from "../common/CarouselControls.js";
import HotDealscard from "./HotDealscard.js";

export default function PujaOption() {
  return (
    <div className="flex flex-col  flex-nowrap">
    <div className="mt-20  container mx-auto">
      <CarouselControls title={cards[0]?.card1?.header?.title}>
        {cards[0]?.card1?.gridElements?.infoWithStyle?.items.map((PoojaData) => (
          <Pujacard key={PoojaData.productId} PoojaData={PoojaData}></Pujacard>
        ))}
        </CarouselControls>
        </div>
        <div className="  container mx-auto">
        <CarouselControls title={cards[0]?.card2?.header?.title}>
        {cards[0]?.card2?.gridElements?.infoWithStyle?.items.map((Data) => (
          <HotDealscard key={Data.productId} DealsData={Data}></HotDealscard>
        ))}
        </CarouselControls>
      </div>
     <div className="grid grid-cols-2 gap-4 mt-10 mb-10">
  <img
    src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/36dde4f0500c8bdd4e043c162007d3b4"
    alt="Placeholder"
    className="w-full h-full object-cover rounded-lg"
  />
  <img
    src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/0d833d6e509ccb8644e6daedab28457b"
    alt="Placeholder"
    className="w-full h-full object-cover rounded-lg"
  />
  <img
    src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/b5b8351aff700830ca422397bca043fa"
    alt="Placeholder"
    className="w-full h-full object-cover rounded-lg"
  />
  <img
    src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/f0baff454a9d2bb83d71dcd921cafff3"
    alt="Placeholder"
    className="w-full h-full object-cover rounded-lg"
  />
  <img
    src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/963f12506378094cc49205a7846c1ffd"
    alt="Placeholder"
    className="w-full h-full object-cover rounded-lg"
  />
  <img
    src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/rng/md/carousel/production/51a15567a07b9d57206c1639a0e5c2e6"
    alt="Placeholder"
    className="w-full h-full object-cover rounded-lg"
  />
</div>

      </div>
 
  );
}

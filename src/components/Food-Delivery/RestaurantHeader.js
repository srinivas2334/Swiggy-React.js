// export default function RestaurantHeader({ HeaderData }) {
 
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl text-black font-bold px-5">{HeaderData?.cards[2]?.card?.card?.info?.name}</h1>
//           <div className="rounded-4xl border-l-[20px] border-r-[20px] border-b-[20px] border-gray-200">
//             <div className="flex flex-col gap-2 mt-3 p-7 shadow-lg rounded-2xl">
//             <div className="flex items-center gap-2 rounded-3xl">
//                 <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 className="w-5 h-5 text-white bg-green-600 rounded-full "
//                 >
//                 <path
//                     d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
//                     fill="currentColor"
//                 />
//                 </svg>
//             <span className="text-lg">{HeaderData?.cards[2]?.card?.card?.info?.avgRatingString}</span>
//             <span className="text-lg font-semibold">{"(" + HeaderData?.cards[2]?.card?.card?.info?.totalRatingsString + ") - "}</span>
//             <span className="text-lg font-semibold">{HeaderData?.cards[2]?.card?.card?.info?.costForTwoMessage}</span>

//         </div>
//             <p className="text-lg text-[#ff5200] font-bold underline">{HeaderData?.cards[2]?.card?.card?.info?.cuisines?.join(", ")}</p>
         
 
            
//     <div className="flex items-start space-x-2">
//       {/* Vertical connector */}
//       <div className="flex flex-col items-center">
       
//         <div className="w-px flex-1 bg-gray-300"></div>
//       </div>

//       {/* Content */}
//       <div>
//         <div className="flex items-center space-x-1">
//            <div className="w-2 h-2 bg-gray-300 rounded-full  mr-3"></div>
//          <span className="font-bold text-lg">Outlet</span>
//          <span className="text-gray-700 px-3 font-bold" >{ HeaderData?.cards[2]?.card?.card?.info?.areaName}</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
//           <div className="font-bold text-lg">{HeaderData?.cards[2]?.card?.card?.info?.sla?.slaString} </div>
//         </div>
//       </div>
//       </div>
 

//          </div>
//         </div>
//     </div>
//   );
// }

import OffersCard from "./OffersCard.js";
import CarouselControls from "../common/CarouselControls.js";

export default function RestaurantHeader({ HeaderData }) {
  const info = HeaderData?.cards?.[2]?.card?.card?.info;
  const offers = HeaderData?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

  if (!info) return null; // Prevent crash if API not loaded yet

  return (
    <div className="container mx-auto mt-10">
      {/* Restaurant Name */}
      <h1 className="text-xl sm:text-3xl md:text-4xl text-black font-bold px-5">
        {info.name}
      </h1>

      {/* Card Wrapper */}
      <div className="rounded-4xl border-l-[20px] border-r-[20px] border-b-[20px] border-gray-200">
        <div className="flex flex-col gap-2 mt-3 p-7 shadow-lg rounded-2xl">
          
          {/* Rating + Cost */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded-full text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-4 h-4"
                fill="currentColor"
              >
                <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" />
              </svg>
              <span>{info.avgRatingString}</span>
            </div>

            <span className="text-lg font-semibold">
              ({info.totalRatingsString}) - {info.costForTwoMessage}
            </span>
          </div>

          {/* Cuisines */}
          <p className="text-lg text-[#ff5200] font-bold underline">
            {info.cuisines?.join(", ")}
          </p>

          {/* Outlet + SLA */}
          <div className="flex flex-col pl-5 relative mt-2">
            {/* Vertical line */}
            <div className="absolute left-0 top-1 bottom-1 w-px bg-gray-300"></div>

            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
              <span className="font-bold text-lg">Outlet</span>
              <span className="text-gray-700 px-2 font-bold">
                {info.areaName}
              </span>
            </div>

            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
              <span className="font-bold text-lg">{info.sla?.slaString}</span>
            </div>
          </div>

        </div>
      </div>
 
         <div className="mt-20 container mx-auto px-5 overflow-x-auto">
              <CarouselControls title="Deals for you">
                  <div className="flex gap-6">
                  {offers.filter((offer) => offer.info) // only keep valid offers with info
                  .map((offer, index) => 
                    (<OffersCard key={offer.info?.offerIds?.join('-') || index} offerdata={offer.info}></OffersCard>
                    ))}
                    </div>
              </CarouselControls>
            </div>

            <div className="flex items-center justify-center mt-5  p-4 rounded-lg  bg-white ">
              <span className="text-xl">🔥</span>  {/* Left icon */}
              <span className="font-bold text-gray-400 text-xl"> M E N U </span>  {/* Menu text */}
              <span className="text-xl">🔥</span>  {/* Right icon */}
            </div>

      </div>
 
  );
}


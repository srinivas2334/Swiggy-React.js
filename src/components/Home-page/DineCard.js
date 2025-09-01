
export default function DineCard({RestData}){

    const firstOffer = RestData?.info?.offerInfoV2?.otherOffers?.offers?.[0];

    return (
        <div className="max-w-md flex-none rounded-xl overflow-hidden shadow-lg border border-gray-200">
          {/* cta means call to action */}
       <a target="_blank" href={RestData.cta.link}>
        <div className="relative">
          <img
            className="w-120 h-60 object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles[0]?.url
            }
            alt="Restaurant"
          />
          {/* Gradient overlay behind the text */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
          {/* Text with higher z-index */}
          {/* absolute bottom-2 left-2 text-xl text-white z-10 */}
          <p className="absolute bottom-2 left-2 text-2xl font-extrabold text-white z-10 ">
            {RestData.info.name}
          </p>
          {/* absolute bottom-2 right-2 text-xl text-white z-10 */}
          <p className="absolute bottom-2 right-2 text-xl font-medium text-white z-10">
            {RestData?.info?.rating?.value}
          </p>
        </div>
        <div className="relative px-4 pt-3 pb-4">
          {/* First Row: Cuisines & Cost */}
          <div className="flex justify-between">
            <p>{RestData?.info?.cuisines?.join(" + ")}</p>
            <p>{RestData?.info?.costForTwo}</p>
          </div>

          {/* Second Row: Address & Distance */}
          <div className="flex justify-between mt-2">
            <p>{RestData?.info?.locationInfo?.formattedAddress}</p>
            <p>{RestData?.info?.locationInfo?.distanceString}</p>
          </div>
         {/* Third Row: Table Bookings */}
        <div className="flex items-center gap-2 mt-2 bg-gray-200 px-2 rounded-lg w-fit">
          <img
            className="w-4 h-4"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png"
            alt="Table Booking"
          />
          <p>Table Bookings</p>
        </div>

        {firstOffer && (
          <div className="flex justify-between mt-2 bg-green-600 text-white font-bold text-lg text-center items-center px-3 py-2 rounded-lg">
            <div className="flex text-center items-center gap-1.5">
            <img
            className="w-6"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"
            alt="offer_icon"></img>
            <p>{RestData?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header+" on pre-booking"}</p>
            </div>
            <p>
            {RestData?.info?.vendorOffer?.offerCount-1?` +${RestData.info.vendorOffer.offerCount - 1} more`: ""}
          </p>
          </div>
          )}

          <div>
           <p className="mt-2 bg-green-200 text-green-600 font-bold text-xl items-center px-3 py-2 rounded-lg">
            {RestData?.info?.customerOffer?.infos[0]?.description}
           </p>
          </div>
          <div>
            <p className="mt-2  text-gray-600 font-bold items-center py-1.5 rounded-lg">{RestData?.info?.vendorOffer?.infos[0]?.header}</p>
          </div>

        </div>
        </a>
      </div>
      
    )

}
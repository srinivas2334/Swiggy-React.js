export default function Pujacard({ PoojaData }) {
  const variation = PoojaData?.variations?.[0]; // first variation
  const firstImage = variation?.imageIds?.[0]; // first image only
  const discount = variation?.price?.offerApplied?.listingDescription; // "15% OFF"

  return (
    <div className="min-w-[200px]  flex flex-col items-center text-center  rounded-lg p-3 shadow-sm">
      {/* Image wrapper with badge */}
      <div className="relative">
        {/* Discount Badge */}
        {discount && (
          <div className="absolute -top-1 -left-2 bg-green-700 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
            {discount}
          </div>
        )}

        {/* Product Image */}
        {firstImage && (
          <img
            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + firstImage}
            alt={PoojaData?.displayName}
            className="w-32 h-32 object-cover rounded-lg px-0.5 py-0.5 shadow-xl"
          />
        )}
      </div>

      {/* Name */}
     <h2 className="text-lg font-bold mt-2 overflow-hidden text-ellipsis"
    style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
  {PoojaData?.displayName}
</h2>


      {/* Price */}
      {variation?.price && (
        <div className="mt-1">
          <span className="text-green-600 font-semibold">
            ₹{variation.price.offerPrice.units}
          </span>
          <span className="text-gray-500 line-through ml-2 text-sm">
            ₹{variation.price.mrp.units}
          </span>
        </div>
      )}
    </div>
  );
}

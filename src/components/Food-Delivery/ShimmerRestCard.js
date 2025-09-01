export default function ShimmerRestCard() {
  return (
    <div className="max-w-[280px] mb-2 animate-pulse ">
      {/* Image Placeholder */}
      <div className="w-70 h-45 bg-gray-300 rounded-xl"></div>

      <div className="w-[95%] mx-auto mt-3 space-y-2">
        {/* Title Placeholder */}
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>

        {/* Rating + Delivery time */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="h-5 bg-gray-300 rounded w-10"></div>
          <div className="h-5 bg-gray-300 rounded w-14"></div>
        </div>

        {/* Cuisines Placeholder */}
        <div className="h-5 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
}

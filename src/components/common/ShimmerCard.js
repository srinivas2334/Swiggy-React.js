export default function ShimmerCard({ count = 3 }) {
  const cards = Array.from({ length: count });

  return (
    <div className="flex flex-col gap-6">
      {cards.map((_, index) => (
        <div
          key={index}
          className="flex gap-4 p-4 bg-gray-100 rounded-3xl animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-32 h-32 bg-gray-300 rounded-2xl flex-shrink-0"></div>

          {/* Text placeholder */}
          <div className="flex flex-col justify-between flex-1 py-2 gap-3">
            <div className="w-3/4 h-6 bg-gray-300 rounded-lg"></div>
            <div className="w-1/2 h-6 bg-gray-300 rounded-lg"></div>
            <div className="w-1/4 h-6 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

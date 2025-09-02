export default function Shimmer({ width = "w-full", height = "h-6", rounded = "rounded-md", count = 1, gap = "gap-4" }) {
  // count = number of shimmer lines
  const shimmerLines = Array.from({ length: count });

  return (
    <div className={`flex flex-col ${gap}`}>
      {shimmerLines.map((_, index) => (
        <div
          key={index}
          className={`${width} ${height} ${rounded} bg-gray-200 animate-pulse`}
        ></div>
      ))}
    </div>
  );
}

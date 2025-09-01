import ShimmerRestCard from "./ShimmerRestCard";

export default function Shimmer({count}) {
  
  // showing 10 shimmer cards
  return (
    <div className="flex flex-wrap gap-4">
      {Array(count).fill("").map((_, index) => (
        <ShimmerRestCard key={index} />
      ))}
    </div>
  );
}

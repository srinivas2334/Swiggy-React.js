import ShimmerRestCard from "./ShimmerRestCard";

export default function Shimmer() {
  // showing 10 shimmer cards
  return (
    <div className="flex flex-wrap gap-4">
      {Array(10).fill("").map((_, index) => (
        <ShimmerRestCard key={index} />
      ))}
    </div>
  );
}

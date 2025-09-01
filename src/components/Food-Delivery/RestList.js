import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function RestList({ restaurants, isLoading }) {
  return (
    <div className="flex flex-wrap gap-4">
      {isLoading ? (
        <Shimmer
          count={restaurants.length > 0 ? restaurants.length : 20}
        ></Shimmer> // show placeholders
      ) : (
        restaurants.map((restInfo) => (
          <RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>
        ))
      )}
    </div>
  );
}

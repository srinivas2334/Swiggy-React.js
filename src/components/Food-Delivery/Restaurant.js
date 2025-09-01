import { useEffect, useState } from "react";
import RestList from "./RestList.js";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // track loading

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";

        const swiggyAPI =
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();
        const restaurants =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        // setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestData(restaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setIsLoading(false); // stop loading after fetch
      }
    }
    fetchData();
  }, []);
  console.log(RestData);

  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5 ">
      <RestList restaurants={RestData} isLoading={isLoading}></RestList>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { saveRestaurantData } from "../../Stored/restaurantmenuSlice.js"; 
 
import RestInfo from "./RestInfo.js"

export default function SearchFood() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => state.restaurant.restaurants[id]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // ✅ Fetch only if not cached
  useEffect(() => {
    async function fetchData() {
      if (restaurant) 
      return; // already in store

      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();

        const tempData =
          data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        const menuItems = tempData.filter(
          (items) => "title" in items?.card?.card
        );

        dispatch(saveRestaurantData({ id, apiData: data, tempData, RestData: menuItems }));
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    }

    fetchData();
  }, [id, dispatch, restaurant]);

  // ✅ Debounced search
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchText.length >= 2 && restaurant?.RestData) {
        console.log(restaurant?.RestData);
      const result = restaurant.RestData.flatMap((category) =>
  category?.card?.card?.itemCards?.filter((dish) =>
    dish?.card?.info?.name
      ?.toLowerCase()
      .includes(searchText.toLowerCase())
  ) || []
);
        console.log(result);
        setFilteredData(result);

      } else {
        setFilteredData([]);
      }
    }, 300); // debounce delay

    return () => clearTimeout(handler);
  }, [searchText, restaurant]);

  return (
    <div className="w-[80%] mx-auto mt-20">
      <input
        className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"
        placeholder="Search here"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      
<div
  className={`mt-20 w-[80%] mx-auto transition-all duration-500 ease-in-out
    ${filteredData.length > 0 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
>
  <h2 className="text-2xl text-center font-bold text-white mb-6 bg-green-600 px-4 py-2 rounded-xl shadow-sm">
    Available Items
  </h2>

  {filteredData.map((item, index) => (
    <RestInfo
      key={`${item?.card?.info?.id}-${index}`}
      restData={item?.card?.info}
    />
  ))}
</div>


    </div>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import MenuCard from "./MenuCard.js";
import { Link } from "react-router";
import VegNonVegToggle from "./VegNonVegToggle";
import RestaurantHeader from "./RestaurantHeader.js";
import RestFooter from "./RestFooter.js";
import ShimmerCard from "../common/ShimmerCard.js";
import { saveRestaurantData } from "../../Stored/restaurantmenuSlice.js";

export default function RestaurantMenu() {
  let { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  const restaurants = useSelector((state) => state.restaurant.restaurants);
  const restaurantCache = restaurants[id] || {};
  const [selected, setSelected] = useState(null);
  // const [RestData, setRestData] = useState([]);
  // const [apiData, setApiData] = useState(null);
  // const [tempData, setTempData] = useState(null);
  const [RestData, setRestData] = useState(restaurantCache.RestData || []);
  const [apiData, setApiData] = useState(restaurantCache.apiData || null);
  const [tempData, setTempData] = useState(restaurantCache.tempData || null);
  const [loading, setLoading] = useState(!restaurantCache.RestData);

  useEffect(() => {
    async function fetchData() {
      if (restaurants[id]) {
        // ✅ Use cached data
        setRestData(restaurants[id].RestData);
        setApiData(restaurants[id].apiData);
        setTempData(restaurants[id].tempData);
        setLoading(false);
        return;
      }

      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      try {
        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();
        // setApiData(data);
        const tempdata =
          data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        // setTempData(tempdata);
        const filterData = tempdata.filter(
          (items) => "title" in items?.card?.card
        );
        // setRestData(filterData);
        dispatch(
          saveRestaurantData({
            id,
            apiData: data,
            tempData,
            RestData: filterData,
          })
        );

        setApiData(data);
        setTempData(tempdata);
        setRestData(filterData);
      } catch (error) {
        console.error("Error fetching restaurant menu:", error);
      } finally {
        setLoading(false); // ✅ stop loading once everything is set
      }
    }

    fetchData();
  }, [id, restaurants, dispatch]);

  console.log(RestData);

  if (loading) {
    return (
      <div className="container mx-auto mt-10 w-[70%]">
        {/* Header shimmer */}
        <div className="mb-10">
          <div className="w-1/2 h-12 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>

        {/* Search button shimmer */}
        <div className="mb-10">
          <div className="w-full h-12 bg-gray-200 rounded-3xl animate-pulse"></div>
        </div>

        {/* Menu cards shimmer */}
        <ShimmerCard count={5} />

        {/* Footer shimmer */}
        <div className="mt-10">
          <div className="w-full h-24 bg-gray-200 rounded-2xl animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto ">
      <div className="w-[70%] mx-auto">
        <RestaurantHeader HeaderData={apiData?.data}></RestaurantHeader>
      </div>
      <div className="w-[70%] mx-auto mt-20 mb-20">
        <Link to={`/city/delhi/${id}/search`}>
          <p className="w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl">
            Search for Dishes
          </p>
        </Link>
      </div>

      {/* <div className="w-[80%] mx-auto mt-20 mb-20">
        <button
          className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${
            selected === "veg" ? "bg-green-600" : "bg-gray-300"
          } `}
          onClick={() => setSelected(selected === "veg" ? null : "veg")}
        >
          Veg
        </button>
        <button
          className={`text-2xl py-2 px-4 border rounded-2xl ${
            selected === "nonveg" ? "bg-red-500" : "bg-gray-300"
          }`}
          onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}
        >
          Non veg
        </button>
      </div> */}

      {/* ✅ Use Toggle Component */}
      <VegNonVegToggle selected={selected} setSelected={setSelected} />

      <div className="w-[70%] mx-auto mt-20">
        {RestData.map((menuItems) => (
          <MenuCard
            key={menuItems?.card?.card?.title}
            menuItems={menuItems?.card?.card}
            foodselected={selected}
          >
            {" "}
          </MenuCard>
        ))}
      </div>
      <div>
        <RestFooter restaurantData={tempData}></RestFooter>
      </div>
    </div>
  );
}

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=17301&catalog_qa=undefined&submitAction=ENTER

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard.js";
import { Link } from "react-router";
import VegNonVegToggle from "./VegNonVegToggle";
import RestaurantHeader from "./RestaurantHeader.js";

export default function RestaurantMenu() {
  let { id } = useParams();
  console.log(id);
  const [selected, setSelected] = useState(null);
  const [RestData, setRestData] = useState([]);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      setApiData(data);
      const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filterData = tempData.filter(
        (items) => "title" in items?.card?.card
      );
      setRestData(filterData);
    }

    fetchData();
  }, [id]);

  console.log(RestData);

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
    </div>
  );
}

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=17301&catalog_qa=undefined&submitAction=ENTER

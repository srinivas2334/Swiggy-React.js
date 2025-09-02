// import { useEffect, useState } from "react";
// import RestList from "./RestList.js";
// import RestHead from "./RestHead.js";

// export default function Restaurant() {
//   const[HeadData,setHeadData]=useState([]);
//   const [RestData, setRestData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // track loading

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const proxyServer = "https://cors-anywhere.herokuapp.com/";

//         const swiggyAPI =
//           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
//         const response = await fetch(proxyServer + swiggyAPI);
//         const data = await response.json();
//         const header = data?.data?.cards[0]?.card?.card;
//         setHeadData(header);
//         const restaurants =
//           data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//             ?.restaurants || [];
//         // setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         setRestData(restaurants);
//       } catch (error) {
//         console.error("Error fetching restaurants:", error);
//       } finally {
//         setIsLoading(false); // stop loading after fetch
//       }
//     }
//     fetchData();
//   }, []);
//   console.log(RestData);

//   return (
//     <div>
//      <div>
//        {!isLoading && <RestHead restaurants={HeadData} />}
//      </div>
//     <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5 ">
//       <RestList restaurants={RestData} isLoading={isLoading}></RestList>
//     </div>
//     </div>
//   );
// }

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestList from "./RestList.js";
import RestHead from "./RestHead.js";
import { fetchRestaurantData } from "../../Stored/restaurantDataSlice.js";

export default function Restaurant() {
  const dispatch = useDispatch();
  const { header, restaurants, isLoading, hasFetched, title } = useSelector(
    (state) => state.restaurantData
  );

  useEffect(() => {
    if (!hasFetched) {
      dispatch(fetchRestaurantData());
    }
  }, [dispatch, hasFetched]);
  console.log(title);

  return (
    <div>
      {!isLoading && <RestHead restaurants={header} />}
      <h2 className="text-3xl  font-bold  w-[80%] mx-auto mt-10 ">{title}</h2>
      <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
        <RestList restaurants={restaurants} isLoading={isLoading} />
      </div>
    </div>
  );
}


import { useState, useEffect } from "react";
import { useParams } from "react-router"
import FoodSearchCard from "./FoodSearchCard.js";



export default function SearchFood(){
    
    const {id} = useParams();
    
    const [searchText, setSearchText] = useState("");
    const [restData, setRestData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);


    useEffect(()=>{
        
            async function fetchData() {
               try {
               const proxyServer = "https://cors-anywhere.herokuapp.com/"
               const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
               const response = await fetch(proxyServer+swiggyAPI);
               const data = await response.json();
               const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            //    console.log(data);
            //    console.log(tempData);
               const menuItems = tempData.filter((items)=> 'title' in items?.card?.card)
            //    console.log(menuItems);
               setRestData(menuItems);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        }

        fetchData();
    }, [id]);

    useEffect(() => {
        if (searchText.length >= 2) {
            const result = restData.filter((item) =>
                item.card.card.title.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(result);
            setFilteredData(result);
        } else {
            setFilteredData([]); // Clear results if less than 2 letters
        }
    }, [searchText, restData]);




    return(
         <div className="w-[80%] mx-auto mt-20">
            <input
                className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"
                placeholder="Search here"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        
             
        </div>
    )
}
 
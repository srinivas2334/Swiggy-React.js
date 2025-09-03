import RestInfo from "./RestInfo";

export default function FoodSearchCard({ data }) {
    
  
    return (
      <div className="w-full">
        
        <div>
          {data?.card?.info ? data?.card?.info.map((items) => (
              <RestInfo
                key={items?.card?.info?.id}
                restData={items?.card?.info}
              ></RestInfo>
            )) : null}
 
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
 
}

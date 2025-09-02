export default function FoodSearchCard({ data }) {
    
  
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{data?.info?.title}</p>
 
        </div>
        <div>
          {data?.info ? data.info.map((items) => (
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

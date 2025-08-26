import {Deliverycard} from "../utils/Deliverycard.js";

 const banner = Deliverycard[0].banners[0];  
 const categories = banner.categories;

export default function FoodDelivery(){
    
  return (
    <div className="m-w-[60%] ml-70 mr-100 mt-25">
      <h1 className="text-3xl font-extrabold mb-6">{banner.title}</h1>
      <div className="grid grid-cols-4 grid-rows-3 gap-6 text-center  rounded-2xl items-stretch">
        {categories.slice(0, 11).map((category, index) => (
          <a target='_blank' key={index} href={category.link} 
          className="p-5 border-white rounded-lg shadow-sm shadow-gray-400 hover:bg-gray-100 transition font-semibold text-lg flex items-center justify-center">{category.text}</a>
        ))}
        <a href="/all-cities"
          className="p-5 text-orange-500 border-white rounded-lg shadow-sm shadow-gray-400 hover:bg-gray-100 transition font-bold text-lg  text-center flex items-center justify-center"
        >See more</a>
      </div>
   </div>
  );
}

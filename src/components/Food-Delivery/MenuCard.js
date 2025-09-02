import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems, foodselected }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen(!isOpen);
 
  const arrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 transform transition-transform duration-300 ${
        isOpen ? "rotate-180" : "rotate-0"
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  if ("categories" in menuItems) {
    return (
      <div className="w-full mt-4">
        <p className="text-2xl font-bold text-gray-800 mb-3">{menuItems.title}</p>
        <div className="space-y-3">
          {menuItems?.categories?.map((items) => (
            <MenuCard
              key={items?.title}
              menuItems={items}
              foodselected={foodselected}
            />
          ))}
        </div>
      </div>
    );
  }

  // if (!isOpen) {
  //   return (
  //     <div className="w-full">
  //       <div className="flex justify-between w-full">
  //         <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
  //         <button
  //           className="text-5xl font-bold mr-20"
  //           onClick={() => setIsOpen(!isOpen)}
  //         >
  //           {arrowIcon}
  //         </button>
  //       </div>
  //       <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
  //     </div>
  //   );
  // }


  let filteredItems = menuItems?.itemCards || [];
  if (foodselected === "veg") {
    filteredItems = filteredItems.filter((food) => "isVeg" in food?.card?.info);
  } else if (foodselected === "nonveg") {
    filteredItems = filteredItems.filter((food) => !("isVeg" in food?.card?.info));
  }

  // if (foodselected === "veg") {
  //   return (
  //     <div className="w-full">
  //       <div className="flex justify-between w-full">
  //         <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
  //         <button
  //           className="text-5xl font-bold mr-20"
  //           onClick={() => setIsOpen(!isOpen)}
  //         >
  //           {arrowIcon}
  //         </button>
  //       </div>
  //       <div>
  //         {menuItems?.itemCards
  //           ?.filter((food) => "isVeg" in food?.card?.info)
  //           .map((items) => (
  //             <RestInfo
  //               key={items?.card?.info?.id}
  //               restData={items?.card?.info}
  //             ></RestInfo>
  //           ))}
  //       </div>
  //       <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
  //     </div>
  //   );
  // }

  // if (foodselected === "nonveg") {
  //   return (
  //     <div className="w-full">
  //       <div className="flex justify-between w-full">
  //         <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
  //         <button
  //           className="text-5xl font-bold mr-20"
  //           onClick={() => setIsOpen(!isOpen)}
  //         >
  //           {arrowIcon}
  //         </button>
  //       </div>
  //       <div>
  //         {menuItems?.itemCards
  //           ?.filter((food) => !("isVeg" in food?.card?.info))
  //           .map((items) => (
  //             <RestInfo
  //               key={items?.card?.info?.id}
  //               restData={items?.card?.info}
  //             ></RestInfo>
  //           ))}
  //       </div>
  //       <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
  //     </div>
  //   );
  // }

//   return (
//     <div className="w-full">
//       <div className="flex justify-between w-full">
//         <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
//         <button
//           className="text-5xl font-bold mr-20"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {" "}
//           {arrowIcon}{" "}
//         </button>
//       </div>
//       <div>
//         {menuItems?.itemCards?.map((items) => (
//           <RestInfo
//             key={items?.card?.info?.id}
//             restData={items?.card?.info}
//           ></RestInfo>
//         ))}
//       </div>
//       <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
//     </div>
//   );
// }


  return (
    <div className="w-full bg-white rounded-xl shadow-md mb-4 overflow-hidden hover:shadow-xl transition-shadow">
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-gradient-to-r from-orange-50 to-orange-100"
        onClick={toggleOpen}
      >
        <p className="text-2xl font-semibold text-gray-900">{menuItems.title}</p>
        <div className="text-orange-500">{arrowIcon}</div>
      </div>

      {/* Items
      {isOpen && (
        <div className="p-4 space-y-3 bg-gray-50">
          {filteredItems.length > 0 ? (
            filteredItems.map((items) => (
              <div
                key={items?.card?.info?.id}
                className="p-3 rounded-lg hover:bg-white transition"
              >
                <RestInfo restData={items?.card?.info} />
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items available</p>
          )}
        </div>
      )}
    </div>
  );
}
 */}
 
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {filteredItems.length > 0 ? (
          <div className="p-4 space-y-3 bg-gray-50">
            {filteredItems.map((items) => (
              <div
                key={items?.card?.info?.id}
                className="flex items-center p-3 rounded-lg hover:bg-white transition"
              >
                 
                <RestInfo restData={items?.card?.info} />
              </div>
            ))}
          </div>
        ) : (
          <p className="p-4 text-gray-500 bg-gray-50">No items available</p>
        )}
      </div>
    </div>
  );
}


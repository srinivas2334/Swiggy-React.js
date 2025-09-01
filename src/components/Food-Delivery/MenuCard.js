import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems, foodselected }) {
  const [isOpen, setIsOpen] = useState(true);

  if ("categories" in menuItems) {
    return (
      <div className="w-full">
        <p className="text-2xl font-bold">{menuItems.title}</p>
        <div>
          {menuItems?.categories?.map((items) => (
            <MenuCard
              key={items?.title}
              menuItems={items}
              foodselected={foodselected}
            ></MenuCard>
          ))}
        </div>
      </div>
    );
  }
  const arrowIcon = isOpen ? (
    // Down Arrow
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
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
  ) : (
    // Up Arrow
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </svg>
  );
  if (!isOpen) {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
          <button
            className="text-5xl font-bold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {arrowIcon}
          </button>
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }

  if (foodselected === "veg") {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
          <button
            className="text-5xl font-bold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {arrowIcon}
          </button>
        </div>
        <div>
          {menuItems?.itemCards
            ?.filter((food) => "isVeg" in food?.card?.info)
            .map((items) => (
              <RestInfo
                key={items?.card?.info?.id}
                restData={items?.card?.info}
              ></RestInfo>
            ))}
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }

  if (foodselected === "nonveg") {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
          <button
            className="text-5xl font-bold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {arrowIcon}
          </button>
        </div>
        <div>
          {menuItems?.itemCards
            ?.filter((food) => !("isVeg" in food?.card?.info))
            .map((items) => (
              <RestInfo
                key={items?.card?.info?.id}
                restData={items?.card?.info}
              ></RestInfo>
            ))}
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
        <button
          className="text-5xl font-bold mr-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {" "}
          {arrowIcon}{" "}
        </button>
      </div>
      <div>
        {menuItems?.itemCards?.map((items) => (
          <RestInfo
            key={items?.card?.info?.id}
            restData={items?.card?.info}
          ></RestInfo>
        ))}
      </div>
      <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
    </div>
  );
}

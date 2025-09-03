import { Search, User } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full  p-4">
      {/* Top Row */}
      <div className="flex justify-between items-center">
        {/* Delivery Time + Location */}
        <div className="flex items-center gap-2">
          <div className= " flex flex-col items-center bg-blue-600 text-white font-bold px-1.5 rounded-lg ">
            <h1 className="text-xl font-extrabold">23</h1>
            <p className="font-bold">MINS</p>
          </div>
          <div className="font-bold text-black ">
            Delivery to Other 
          </div>
        </div>

        {/* Profile Icon */}
        <div className="bg-gray-200 p-2 rounded-full cursor-pointer">
          <User className="h-5 w-5 text-gray-700" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-4">
        <div className="flex items-center rounded-lg px-6 py-2 shadow-sm border border-gray-400">
          <input
            type="text"
            placeholder='Search for "Dry Fruits"'
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
          <Search className="h-5 w-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

import { CheckCircle, Triangle } from "lucide-react"; 

export default function VegNonVegToggle({ selected, setSelected }) {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center gap-1">
        {/* Veg Button */}
        <button
          onClick={() => setSelected(selected === "veg" ? null : "veg")}
          className={`flex items-center gap-2 px-4 py-2 border rounded-full overflow-hidden text-lg font-medium transition-colors ${
            selected === "veg"? "bg-green-600 text-white": "bg-white border-black text-green-600"
          }`}
        >
          <span
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              selected === "veg" ? "border-white bg-white" : "border-green-600"
            }`}
          >
            <CheckCircle size={12} className={`${selected === "veg" ? "text-green-600" : "hidden"}`}/>
          </span>
          Veg
        </button>

        {/* Divider */}
        <div className="w-[1px] bg-gray-300"></div>

        {/* Non-Veg Button */}
        <button
          onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}
          className={`flex items-center gap-2 px-4 py-2 border rounded-full overflow-hidden text-lg font-medium transition-colors ${
            selected === "nonveg" ? "bg-red-500 text-white": "bg-white border-black text-red-500"
          }`}
        >
          <span className={`w-4 h-4 border-2 flex items-center justify-center ${
              selected === "nonveg" ? "border-white bg-white" : "border-red-500"
            }`}>
            <Triangle size={12} className={`${selected === "nonveg" ? "text-red-500" : "hidden"}`} />
          </span>
          Non Veg
        </button>
      </div>
    </div>
  );
}

import { useSelector } from "react-redux"
import { Link } from "react-router";
import { FaQuestionCircle, FaUser } from "react-icons/fa";

export default function CartHeader() {
    const counter = useSelector(state => state.cartslice.count);

    return (
        <div className=" w-full h-25 mx-auto  py-4 px-[10%] bg-white shadow-md text-xl flex justify-between items-center">
            
            {/* Swiggy Logo */}
          
            <div className="flex items-center gap-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-15 h-15 mr-2 fill-white bg-[#ff5200] rounded-2xl p-2"
                >
                    <path d="M256 0C167.64 0 96 71.64 96 160c0 70.69 128 352 160 352s160-281.31 160-352c0-88.36-71.64-160-160-160zM256 224c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64z" />
                </svg>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-[#ff5200]">
               <div className="text-lg font-bold   inline-block">Secure Checkout</div>
            </div>
            </div>
            <div className="flex items-center space-x-6 gap-[120px]">
            
            {/* Middle Menu Items */}
            <div className="flex items-center space-x-6 gap-[40px] text-lg font-bold text-gray-600">
                 
                <div className="flex items-center cursor-pointer  hover:text-[#ff5200]">
                    <FaQuestionCircle className="mr-1" /> Help
                </div>
                <div className="flex items-center cursor-pointer  hover:text-[#ff5200]">
                    <FaUser className="mr-1" /> Sign In
                </div>
            </div>

        </div>
         </div>   
    );
}

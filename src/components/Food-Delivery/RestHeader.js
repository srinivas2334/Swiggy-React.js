import { useSelector } from "react-redux"
import { Link } from "react-router";
import { FaSearch, FaGift, FaQuestionCircle, FaUser, FaShoppingBag } from "react-icons/fa";

export default function RestHeader() {
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
               <div className="text-lg font-bold border-b-2 border-black pb-1 inline-block">other</div>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
            </div>


            </div>
            <div className="flex items-center space-x-6 gap-[120px]">
            {/* Swiggy Corporate Bag Icon */}
            <div className="flex items-center cursor-pointer text-lg font-bold  hover:text-[#ff5200]">
                <FaShoppingBag className="text-2xl text-gray-600 mr-3" />
                <span>Swiggy Corporate</span>
            </div>

            {/* Middle Menu Items */}
            <div className="flex items-center space-x-6 gap-[40px] text-lg font-bold text-gray-600">
                <div className="flex items-center cursor-pointer  hover:text-[#ff5200]  px-5">
                    <FaSearch className="mr-1" /> Search
                </div>
                <div className="flex items-center cursor-pointer  hover:text-[#ff5200]">
                    <FaGift className="mr-1" /> Offers
                </div>
                <div className="flex items-center cursor-pointer  hover:text-[#ff5200]">
                    <FaQuestionCircle className="mr-1" /> Help
                </div>
                <div className="flex items-center cursor-pointer  hover:text-[#ff5200]">
                    <FaUser className="mr-1" /> Sign In
                </div>
            </div>

            {/* Cart Section */}
            <div className="flex items-center space-x-2  ">
                <Link to="/Checkout" className="flex items-center cursor-pointer  hover:text-[#ff5200] ">
                    <FaShoppingBag className="mr-1 text-2xl   " />
                    <p>Cart ({counter})</p>
                </Link>
            </div>
        </div>
         </div>   
    );
}

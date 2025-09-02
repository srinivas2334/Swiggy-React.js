import { useSelector, useDispatch } from "react-redux";
import CartHeader from "./CartHeader.js"; 
import { IncrementItems, DecrementItems } from "../../../Stored/CartSlicer.js"; 

export default function Checkout() {
  const items = useSelector(state => state.cartslice.items);
  const dispatch = useDispatch();

  const subtotal = items.reduce((acc, item) => acc +(Number(item.price) / 100) * item.quantity, 0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <CartHeader />
      {console.log(items)}
      <div className="flex bg-gray-50 min-h-screen p-10">
  {/* Left Sidebar - Steps */}
  <div className="w-1/2 flex flex-col gap-6 pr-10 ">
  {/* Account Box */}
  <div className="p-6 border flex justify-between items-center rounded-2xl shadow-sm hover:shadow-lg transition">
    <div>
    <h2 className="text-2xl font-bold text-black mb-4">🧑 Account</h2>
    <p className="text-gray-600   mb-6">
      To place your order now, log in to your existing account or sign up.
    </p>
    <div className="flex items-center gap-4">
      {/* Login Box */}
      <div className="p-4 border  rounded-xs text-center cursor-pointer text-green-700 shadow-md transition">
        <p className="font-medium ">Have an account?</p>
        <button className=" w-full rounded-lg ">
          Login
        </button>
      </div>

      {/* Signup Box */}
      <div className="p-4 border rounded-xs text-center cursor-pointer text-white  shadow-lg text-shadow-2xs bg-green-700 transition">
        <p className="font-medium ">New to Swiggy?</p>
        <button className=" w-full rounded-lg ">
          Sign Up
        </button>
      </div>
    </div>
    </div>
    <div>
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"/>
    </div>
  </div>

  {/* Address Box */}
  <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
    <h2 className="text-2xl font-bold text-black mb-4">📍 Address</h2>
    <p className="text-gray-600">Add or select a delivery address.</p>
  </div>

  {/* Payment Box */}
  <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
    <h2 className="text-2xl font-bold text-black mb-4">💳 Payment</h2>
    <p className="text-gray-600">Choose a payment method to continue.</p>
  </div>
 

  </div>

  {/* Right Side - Cart */}
  <div className="flex-1 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-3xl font-bold mb-6 border-b pb-4">Your Cart</h2>

    {items.length === 0 ? (
      <p className="text-gray-500 text-lg">Your cart is empty 🛒</p>
    ) : (
      <div className="flex flex-col gap-6">
        {items.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-4"
          >
            {/* Item Info */}
            <div className="flex gap-4 items-center">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208/${item.imageId}`}
                alt={item.name}
                className="w-20 h-20 rounded-xl object-cover shadow"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="text-green-600 font-medium">
                  {"₹" + ("defaultPrice" in item ? item.defaultPrice / 100 : item.price / 100)}
                </p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(DecrementItems({ id: item.id }))}
                className="px-3 py-1 bg-gray-200 rounded-lg text-lg hover:bg-gray-300 transition"
              >
                -
              </button>
              <span className="text-lg font-medium">{item.quantity}</span>
              <button
                onClick={() => dispatch(IncrementItems({ id: item.id }))}
                className="px-3 py-1 bg-green-500 text-white rounded-lg text-lg hover:bg-green-600 transition transform hover:scale-110"
              >
                +
              </button>
            </div>
          </div>
        ))}

        {/* Bill Details */}
        <div className="mt-6 border-t pt-4 text-lg">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>₹40</span>
          </div>
          <div className="flex justify-between font-bold text-xl text-gray-800">
            <span>Total</span>
            <span>₹{Number(subtotal) + 40}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <button
          className="mt-6 w-full bg-green-600 text-white py-4 rounded-2xl text-xl font-semibold shadow-md 
          hover:bg-green-700 hover:shadow-xl hover:scale-105 
          transform transition duration-300 ease-in-out"
        >
          Proceed to Checkout
        </button>
      </div>
    )}
  </div>
</div>

    </div>
  );
}

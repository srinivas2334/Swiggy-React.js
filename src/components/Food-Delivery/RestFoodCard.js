export default function RestFoodcard({ foodData }) {
  return (
    <div className= "flex-shrink-0">
      <a href={foodData?.action?.link}>
        <img
          className="w-50 h-60 object-cover rounded-xl"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}
          alt="Food"
        />
        {/* <div className="mt-2">
          <h3 className="text-lg font-semibold">{foodData?.action?.text}</h3>
        </div> */}
      </a>
    </div>
  );
}

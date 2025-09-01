export default function Grocerycard({foodData})
{

    return(
        <div className="min-w-[200px] flex flex-col items-center text-center">
        <a href={foodData?.action?.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
        <h2 className="text-xl font-bold w-full mt-2" >{foodData?.action?.text}</h2>
        </div>
    )
}
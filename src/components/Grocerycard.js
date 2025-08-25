export default function Grocerycard({foodData})
{

    return(
        <div className="min-w-[200px]">
        <a href={foodData?.action?.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
        <h2>{foodData?.action?.text}</h2>
        </div>
    )
}
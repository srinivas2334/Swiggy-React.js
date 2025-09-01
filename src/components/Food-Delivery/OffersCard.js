export default function OffersCard({ offerdata }){
    return (
        <div className="border border-gray-400 p-6 rounded-3xl flex gap-4 items-center w-[380px] h-[100px] flex-shrink-0 bg-white ">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${offerdata.offerLogo}`}
            alt={offerdata.header} className="w-16 h-16 object-contain" />
            <div className="flex flex-col flex-nowrap justify-center text-lg">
            <h2 className="font-extrabold">{offerdata?.header}</h2>
            <p>{offerdata?.couponCode? offerdata.couponCode:offerdata.description}</p>
            </div>
        </div>
    );
}
 
 
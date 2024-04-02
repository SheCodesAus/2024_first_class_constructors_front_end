import { useState } from "react";
import useGifts from "../hooks/use-gifts";
import GiftCard from "./GiftCard";
 

function PriceFilter() {
    const {gifts, isLoading, error} = useGifts();
    const [priceFilter, setPriceFilter] = useState(null);

    const togglePriceFilter = (filterValue) => {
        if (priceFilter !== null && priceFilter=== filterValue) {
            setPriceFilter(null);
        } else {
            setPriceFilter(filterValue);
        }
    };

    const filteredGifts = priceFilter
        ? gifts.filter(gift => gift.price <= priceFilter)
        : gifts;

    return (
        <div>
            <div>
                <div className="flex justify-center space-x-4 mt-4">
                    <button className={`${priceFilter === 20 ? "bg-blue-500" : "bg-gray-300"} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`} onClick={() => togglePriceFilter(20)}> Gifts below $20 </button>
                    <button className={`${priceFilter === 50 ? "bg-blue-500" : "bg-gray-300"} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`} onClick={() => togglePriceFilter(50)}> Gifts below $50 </button>
                    <button className={`${priceFilter === 100 ? "bg-blue-500" : "bg-gray-300"} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`} onClick={() => togglePriceFilter(100)}> Gifts below $100 </button>
                </div>
                <div className="flex flex-wrap md:mx-6 lg:mx-20">
                    {filteredGifts.map((giftData) => (
                    <div key={giftData.id} className="w-full sm:w-1/2 md:w-1/3">
                        <GiftCard giftData={giftData} />
                    </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default PriceFilter;
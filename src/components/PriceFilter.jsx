// PriceFilter.jsx
import React from "react";

function PriceFilter({ priceFilter, updatePriceFilter, clearPriceFilter }) {
    const togglePriceFilter = (filterValue) => {
        if (priceFilter === filterValue) {
            clearPriceFilter();
        } else {
            updatePriceFilter(filterValue);
        }
    };

    return (
        <div>
            <div>
                <div className="flex justify-center space-x-4 mt-4">
                    <button className={`${priceFilter === 20 ? "bg-primary-200" : "bg-gray-300"} hover:bg-primary-200 text-white font-bold py-2 px-4 rounded`} onClick={() => togglePriceFilter(20)}>Gifts below $20</button>
                    <button className={`${priceFilter === 50 ? "bg-primary-200" : "bg-gray-300"} hover:bg-primary-200 text-white font-bold py-2 px-4 rounded`} onClick={() => togglePriceFilter(50)}> Gifts below $50 </button>
                    <button className={`${priceFilter === 100 ? "bg-primary-200" : "bg-gray-300"} hover:bg-primary-200 text-white font-bold py-2 px-4 rounded`} onClick={() => togglePriceFilter(100)}> Gifts below $100 </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={clearPriceFilter}>Clear Filter</button>
                </div>
            </div>
        </div>
    );
}

export default PriceFilter;

import React from "react";

function PriceFilter({ priceFilter = { min: 0, max: 1000 }, updatePriceFilter, clearPriceFilter }) {
    console.log("priceFilter:", priceFilter);
    const togglePriceFilter = (filterRange) => {
        if (priceFilter && priceFilter.min === filterRange.min && priceFilter.max === filterRange.max) {
            clearPriceFilter();
        } else {
            updatePriceFilter(filterRange);
        }
    };
    
    const isFilterActive = (filterRange) => {
        return priceFilter && priceFilter.min === filterRange.min && priceFilter.max === filterRange.max;
    };
    

    return (
        <div>
            <div>
                <div className="flex justify-center space-x-4 mt-4">
                    <button
                        className={`${
                            isFilterActive({ min: 0, max: 49.99 })
                                ? "border rounded-md bg-primary-200 border-primary-200 text-white "
                                : "border rounded-md bg-white border-primary-200 text-primary-200 "
                        } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`}
                        onClick={() => togglePriceFilter({ min: 0, max: 49.99 })}
                    >
                        {" "}
                        Under $50{" "}
                    </button>
                    <button
                        className={`${
                            isFilterActive({ min: 50, max: 100 })
                                ? "border rounded-md bg-primary-200 border-primary-200 text-white "
                                : "border rounded-md bg-white border-primary-200 text-primary-200 "
                        } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`}
                        onClick={() => togglePriceFilter({ min: 50, max: 100 })}
                    >
                        {" "}
                        $50 - $100{" "}
                    </button>
                    <button
                        className={`${
                            isFilterActive({ min: 100, max: 250 })
                                ? "border rounded-md bg-primary-200 border-primary-200 text-white "
                                : "border rounded-md bg-white border-primary-200 text-primary-200 "
                        } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`}
                        onClick={() => togglePriceFilter({ min: 100, max: 250 })}
                    >
                        {" "}
                        $100 - $250{" "}
                    </button>
                    <button
                        className={`${
                            isFilterActive({ min: 250, max: 1000 })
                                ? "border rounded-md bg-primary-200 border-primary-200 text-white "
                                : "border rounded-md bg-white border-primary-200 text-primary-200 "
                        } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`}
                        onClick={() => togglePriceFilter({ min: 250, max: 1000 })}
                    >
                        {" "}
                        Above $250{" "}
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={clearPriceFilter}>Clear Filter</button>
                </div>
            </div>
        </div>
    );
}

export default PriceFilter;

import React from "react";

function PriceFilter({ priceFilter = { min: 0, max: 1000 }, updatePriceFilter, clearPriceFilter }) {
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
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center m-2 gap-1 border shadow rounded-md p-2">
                    <button
                        className={`${
                            isFilterActive({ min: 0, max: 49.99 })
                                ? "font-montserrat text-[14px] border rounded-md bg-primary-200 border-primary-200 text-white w-28"
                                : "font-montserrat text-[14px] border rounded-md bg-white border-primary-200 text-primary-200 w-28"
                        } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`}
                        onClick={() => togglePriceFilter({ min: 0, max: 49.99 })}
                    >
                        {" "}
                        Under $50{" "}
                    </button>
                    <button
                        className={`${
                            isFilterActive({ min: 50, max: 100 })
                                ? "font-montserrat text-[14px] border rounded-md bg-primary-200 border-primary-200 text-white w-28"
                                : "font-montserrat text-[14px] border rounded-md bg-white border-primary-200 text-primary-200 w-28"
                        } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`}
                        onClick={() => togglePriceFilter({ min: 50, max: 100 })}
                    >
                        {" "}
                        $50 - $100{" "}
                    </button>
                    <button
                        className={`${
                            isFilterActive({ min: 100, max: 250 })
                                ? "font-montserrat text-[14px] border rounded-md bg-primary-200 border-primary-200 text-white w-28"
                                : "font-montserrat text-[14px] border rounded-md bg-white border-primary-200 text-primary-200 w-28"
                        } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`}
                        onClick={() => togglePriceFilter({ min: 100, max: 250 })}
                    >
                        {" "}
                        $100 - $250{" "}
                    </button>
                    <button
                        className={`${
                            isFilterActive({ min: 250.01, max: 1000 })
                                ? "font-montserrat text-[14px] border rounded-md bg-primary-200 border-primary-200 text-white w-28"
                                : "font-montserrat text-[14px] border rounded-md bg-white border-primary-200 text-primary-200 w-28"
                        } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`}
                        onClick={() => togglePriceFilter({ min: 250.01, max: 1000 })}
                    >
                        {" "}
                        Above $250{" "}
                    </button>
                    <button className="font-montserrat text-[13px] border rounded-md bg-white border-primary-200 text-primary-200 py-2 px-4 hover:bg-primary-200 hover:text-white w-32 uppercase" onClick={clearPriceFilter}>Clear Filter</button>
                </div>
            </div>
        </div>
    );
}

export default PriceFilter;

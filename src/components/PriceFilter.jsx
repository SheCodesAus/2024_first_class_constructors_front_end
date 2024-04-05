import React, { useState } from "react";

function PriceFilter({ updatePriceFilter, clearPriceFilter }) {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const togglePriceFilter = (filterValue) => {
        const filterIndex = selectedFilters.findIndex(f => f.min === filterValue.min && f.max === filterValue.max);
        if (filterIndex !== -1) {
            setSelectedFilters(prevFilters => prevFilters.filter((_, index) => index !== filterIndex));
        } else {
            setSelectedFilters(prevFilters => [...prevFilters, filterValue]);
        }
    };

    const isFilterActive = (filterValue) => {
        return selectedFilters.some(f => f.min === filterValue.min && f.max === filterValue.max);
    };

    const applyFilters = () => {
        updatePriceFilter(selectedFilters);
    };

    const clearFilters = () => {
        setSelectedFilters([]);
        clearPriceFilter();
    };

    return (
        <div>
            <div className="flex justify-center space-x-4 mt-4">
                <button className={`${isFilterActive({ min: 0, max: 50 }) ? "bg-primary-200" : "bg-gray-300"} hover:bg-primary-200 text-white font-bold py-2 px-4 rounded`} onClick={() => togglePriceFilter({ min: 0, max: 50 })}> Under $50 </button>
                <button className={`${isFilterActive({ min: 50, max: 100 }) ? "bg-primary-200" : "bg-gray-300"} hover:bg-primary-200 text-white font-bold py-2 px-4 rounded`} onClick={() => togglePriceFilter({ min: 50, max: 100 })}> $50 - $100 </button>
                <button className={`${isFilterActive({ min: 100, max: 250 }) ? "bg-primary-200" : "bg-gray-300"} hover:bg-primary-200 text-white font-bold py-2 px-4 rounded`} onClick={() => togglePriceFilter({ min: 100, max: 250 })}> $100 - $250 </button>
                <button className={`${isFilterActive({ min: 250, max: 1000 }) ? "bg-primary-200" : "bg-gray-300"} hover:bg-primary-200 text-white font-bold py-2 px-4 rounded`} onClick={() => togglePriceFilter({ min: 250, max: 1000 })}> Above $250 </button>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
                <button className="bg-primary-200 hover:bg-primary-300 text-white font-bold py-2 px-4 rounded" onClick={applyFilters}>Apply Filters</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={clearFilters}>Clear Filters</button>
            </div>
        </div>
    );
}

export default PriceFilter;

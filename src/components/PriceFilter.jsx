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
                <button className={`${isFilterActive({ min: 0, max: 50 }) ? "border rounded-md bg-primary-200 border-primary-200 text-white " : "border rounded-md bg-white border-primary-200 text-primary-200 " } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`} onClick={() => togglePriceFilter({ min: 0, max: 50 })}> Under $50 </button>
                <button className={`${isFilterActive({ min: 50, max: 100 }) ? "border rounded-md bg-primary-200 border-primary-200 text-white " : "border rounded-md bg-white border-primary-200 text-primary-200 " } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`} onClick={() => togglePriceFilter({ min: 50, max: 100 })}> $50 - $100 </button>
                <button className={`${isFilterActive({ min: 100, max: 250 }) ? "border rounded-md bg-primary-200 border-primary-200 text-white " : "border rounded-md bg-white border-primary-200 text-primary-200 " } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`} onClick={() => togglePriceFilter({ min: 100, max: 250 })}> $100 - $250 </button>
                <button className={`${isFilterActive({ min: 250, max: 1000 }) ? "border rounded-md bg-primary-200 border-primary-200 text-white " : "border rounded-md bg-white border-primary-200 text-primary-200 " } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`} onClick={() => togglePriceFilter({ min: 250, max: 1000 })}> Above $250 </button>
                <button className={`${selectedFilters.length > 0 ? "border rounded-md bg-primary-500 text-white" : "border rounded-md bg-white border-primary-600 text-primary-600 " } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`} onClick={applyFilters}>Apply Filters</button>
                <button className={`${selectedFilters.length > 0 ? "border rounded-md bg-primary-500 text-white" : "border rounded-md bg-white border-primary-600 text-primary-600 " } hover:bg-primary-200 hover:text-white py-2 px-4 rounded`} onClick={clearFilters}>Clear Filters</button>
            </div>
        </div>
    );
}

export default PriceFilter;

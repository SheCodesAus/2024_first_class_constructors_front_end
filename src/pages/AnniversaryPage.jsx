import React from "react";
import { useState } from "react";
import useGifts from "../hooks/use-gifts";
import GiftCard from "../components/GiftCard";
import PriceFilter from "../components/PriceFilter";
import IsLoading from "../components/IsLoading";
import NotFoundMessage from "../components/NotFound";

function AnniversaryPage() {
  const { gifts, isLoading, error } = useGifts();
  const [priceFilter, setPriceFilter] = useState(null);

  const updatePriceFilter = (filterValue) => {
    setPriceFilter(filterValue);
  };

  const clearPriceFilter = () => {
    setPriceFilter(null);
  };

  const filteredGifts = gifts
    .filter(
      (gift) =>
        gift.categories.includes(2) &&
        (!priceFilter ||
          (gift.price >= priceFilter.min && gift.price <= priceFilter.max))
    )
    .sort((a, b) => a.price - b.price);

  if (isLoading) {
    return <IsLoading />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center">
        {" "}
        <NotFoundMessage />
        <p>{error.message}</p>{" "}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center align-center space-y-8 my-12 mx-8">
      <div className="bg-[url('/assets/Images/iStock-1825131978L.jpg')] bg-cover bg-center flex justify-center items-center h-full">
        <div className="bg-primary-600 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
          <h1 className="font-fredoka text-primary-200 text-h1 text-center tracking-wider uppercase px-1">
            Anniversary
          </h1>
        </div>
      </div>
      <PriceFilter
        priceFilter={priceFilter}
        updatePriceFilter={updatePriceFilter}
        clearPriceFilter={clearPriceFilter}
      />
      {filteredGifts.length === 0 && (
        <div className="text-primary-200 text-center">
          No gifts in this range.
        </div>
      )}
      <div className="flex flex-wrap mx-4 md:mx-8 lg:mx-20 xl:mx-44">
        {filteredGifts.map((giftData) => (
          <div key={giftData.id} className="w-full sm:w-1/2 md:w-1/3">
            <GiftCard giftData={giftData} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnniversaryPage;

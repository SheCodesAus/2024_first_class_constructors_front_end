import React from "react";
import useGifts from "../hooks/use-gifts";
import GiftCard from "../components/GiftCard";
import PriceFilter from "../components/PriceFilter";
import IsLoading from "../components/IsLoading";
import NotFoundMessage from "../components/NotFound";

function BirthdayPage() {
  const { gifts, isLoading, error } = useGifts();
  const [priceFilter, setPriceFilter] = useState([]);

  const updatePriceFilter = (filterValue) => {
    if (filterValue) {
      setPriceFilter([...priceFilter, filterValue]);
  }
  };

  const clearPriceFilter = () => {
      setPriceFilter([]);
  };

  const isGiftWithinPriceRange = (giftPrice, filters) => {
    return filters.some(filter => giftPrice >= filter.min && (!filter.max || giftPrice <= filter.max));
  };

  const filteredGifts = gifts.filter((gift) =>
      gift.categories.includes(1) && (!priceFilter.length || priceFilter.some(filter => isGiftWithinPriceRange(gift.price, filter)))
  );

  if (isLoading) {
    return <IsLoading />
  }
  if (error) {
    return (<div> <NotFoundMessage />
      <p>{error.message}</p> </div>)
  }
    
  return (
      <div className="flex flex-col justify-center align-center space-y-8 m-12">
          <div className="bg-[url('src/assets/Images/pexels-photo-796605.webp')] bg-cover bg-center flex justify-center items-center h-full">
              <div className="bg-primary-300 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
                  <h1 className="font-fredoka text-slate-100 text-h1 text-center tracking-wider uppercase px-1">
                      Birthday
                  </h1>
              </div>
          </div>
          <PriceFilter priceFilter={priceFilter} updatePriceFilter={updatePriceFilter} clearPriceFilter={clearPriceFilter} />
          <div className="flex flex-wrap md:mx-6 lg:mx-20">
              {filteredGifts.map((giftData) => (
                  <div key={giftData.id} className="w-full sm:w-1/2 md:w-1/3">
                      <GiftCard giftData={giftData} />
                  </div>
              ))}
          </div>
      </div>
  );
}

export default BirthdayPage;

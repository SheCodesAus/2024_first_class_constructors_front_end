import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import GiftComparisonCard from "./GiftComparisonCard";

function getGiftsFromLocalStorage() {
  const gifts = localStorage.getItem("gifts");

  if (gifts) {
    const parsedGifts = JSON.parse(gifts);
    if (parsedGifts.length >= 1) {
      return parsedGifts;
    }
  }

  return [];
}

function Comparison() {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    const giftsFromLocalStorage = getGiftsFromLocalStorage();
    setGifts(giftsFromLocalStorage);
  }, []);

  if (gifts.length >= 1) {
    return (
//    top banner
        <div className="flex flex-col justify-center align-center space-y-14 m-12 ">
        <div className="bg-[url('/assets/Images/pexels-ylanite-koppens-796607.jpg')] bg-cover bg-center flex justify-center items-center h-full">
          <div className="bg-primary-500 px-6 my-14 md:my-14 md:px-10 lg:px-20">
            <h1 className="font-fredoka text-slate-100 text-h1 text-center tracking-wider uppercase px-1">
              YOUR PICKS
            </h1>
          </div>
        </div>

        <div className="m-4  flex lg:mx-24 lg:px-20 lg:py-10 flex-col justify-center h-full bg-opacity-20 rounded-md overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 bg-white">
            {gifts.map((gift) => (
              <div key={gift.id}>
                <GiftComparisonCard giftData={gift} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center align-center space-y-14 m-12 ">
        <div className="bg-[url('/assets/Images/pexels-ylanite-koppens-796607.jpg')] bg-cover bg-center flex justify-center items-center h-full">
          <div className="bg-primary-500 px-6 my-14 md:my-14 md:px-10 lg:px-20">
            <h1 className="font-fredoka text-slate-100 text-h1 text-center tracking-wider uppercase">
              YOUR PICKS
            </h1>
          </div>
        </div>

        <div className="m-4 flex flex-col justify-center items-center h-full bg-opacity-20 rounded-md overflow-hidden mb-7 py-5 space-y-6">
          <h2 className="font-fredoka text-primary-500 text-h2 text-center font-semibold tracking-wider px-1">
            Oops! There's no gifts here!
          </h2>
          <NavLink to="/">
            <p className="sm:min-h-8 sm:min-w-20 font-montserrat text-center tracking-wider uppercase rounded-md border  bg-white border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white hover:font-medium p-4">
              Explore Gift Options
            </p>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Comparison;

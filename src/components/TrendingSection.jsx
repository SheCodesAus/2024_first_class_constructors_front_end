import React from "react";
import { useState, useEffect } from 'react';
import GiftCard from "./GiftCard";
import useFeaturedGifts from "../hooks/use-featured-gifts.js"
import IsLoading from "./IsLoading";
function TrendingSection() {
  const { featuredGifts, isLoading, error } = useFeaturedGifts();

  if (error) {
    return (<div> <NotFoundMessage />
      <p>{error.message}</p> </div>)
  }

  return (
    <div className="flex flex-col justify-center align-center space-y-10">
      <div className="bg-[url('src/assets/Images/photo-1513151233558-d860c5398176.jpeg')] bg-cover bg-center flex justify-center items-center h-full">
        <div className="bg-primary-300 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
          <h1 className="font-fredoka text-slate-100 text-h1 text-center tracking-wider uppercase px-1">
            Trending Gifts
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap md:mx-6 lg:mx-20">
        {isLoading ? (
          <IsLoading />
        ) : (featuredGifts.map((giftData) => (
          <div key={giftData.id} className="w-full sm:w-1/2 md:w-1/3">
            <GiftCard giftData={giftData} />
          </div>
        ))
        )}
      </div>
    </div>
  );
}

export default TrendingSection;

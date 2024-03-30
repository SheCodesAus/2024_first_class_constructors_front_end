import React from "react";
import { Link } from "react-router-dom";
import getFeaturedGifts from "../api/get-featured-gifts.js";
import { useState, useEffect } from 'react';
// import useGifts from "../hooks/use-gifts";
import { allGifts } from "../data";
import GiftCard from "./GiftCard";

function TrendingSection() {
  // const { gifts, isLoading, error } = useGifts();
  // const [errorMessage, setErrorMessage] = useState(null);
 
  
  const [TrendingGifts, setTrendingGifts] = useState([]);
  // Get the last 3 latest gifts as featured for now.
  getFeaturedGifts().then((featured) => setTrendingGifts(featured.slice(0,3)));

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
        {TrendingGifts.map((giftData) => (
          <div key={giftData.id} className="w-full sm:w-1/2 md:w-1/3">
            <GiftCard giftData={giftData} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingSection;

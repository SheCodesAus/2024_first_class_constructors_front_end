import React from "react";
// import { useState, useEffect } from 'react';
// import useGifts from "../hooks/use-gifts";

import { allGifts } from "../data";

import GiftCard from "../components/GiftCard";

function ChristmasPage() {
  // const { gifts, isLoading, error } = useGifts();
  // const [errorMessage, setErrorMessage] = useState(null);

  // Get the last 4 latest gifts as featured for now - TO BE UPDATED FEATURED TIME!
  const ChristmasGifts = allGifts.filter((gift) =>
    gift.categories.includes(5)
  );

  return (
    <div className="flex flex-col justify-center align-center space-y-8 m-12">
      <div className="bg-[url('src/assets/Images/pexels-photo-751373.jpeg')] bg-cover bg-center flex justify-center items-center h-full">
        <div className="bg-primary-500 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
          <h1 className="font-fredoka  text-slate-100 text-h1 text-center tracking-wider uppercase px-1">
            Christmas
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap md:mx-6 lg:mx-20">
        {ChristmasGifts.map((giftData) => (
          <div key={giftData.id} className="w-full sm:w-1/2 md:w-1/3">
            <GiftCard giftData={giftData} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChristmasPage;
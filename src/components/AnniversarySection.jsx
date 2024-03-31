import React from "react";
import { Link } from "react-router-dom";
// import { useState, useEffect } from 'react';
// import useGifts from "../hooks/use-gifts";

import { allGifts } from "../data";

import GiftCard from "./GiftCard";

function AnniversarySection() {
  // const { gifts, isLoading, error } = useGifts();
  // const [errorMessage, setErrorMessage] = useState(null);

  // using .concat to show images suited to category. CHANGE LATER
  const AnniversaryGifts = allGifts
    .filter((gift) => gift.categories.includes(2))
    .slice(1, 3)
    .concat(allGifts.filter((gift) => gift.categories.includes(2)).slice(4, 5));

  return (
    <div className="flex flex-col justify-center align-center space-y-10">
      <Link to="/AnniversaryPage">
        <div className="bg-[url('src/assets/Images/iStock-1825131978.jpg')] bg-cover bg-center flex justify-center items-center h-full">
          <div className="bg-primary-600 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
            <h1 className="font-fredoka text-primary-200 text-h1 text-center tracking-wider uppercase px-1">
              Anniversary
            </h1>
          </div>
        </div>
      </Link>
      <div className="flex flex-wrap md:mx-6 lg:mx-20">
        {AnniversaryGifts.map((giftData) => (
          <div key={giftData.id} className="w-full sm:w-1/2 md:w-1/3">
            <GiftCard giftData={giftData} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnniversarySection;

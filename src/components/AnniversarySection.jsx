import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import useGifts from "../hooks/use-gifts";
import IsLoading from "./IsLoading";
import GiftCard from "./GiftCard";
import NotFoundMessage from "./NotFound";

function AnniversarySection() {
  const { gifts, isLoading, error } = useGifts();
  // const [errorMessage, setErrorMessage] = useState(null);

  const AnniversaryGifts = gifts
    .filter((gift) => gift.categories.includes(2)).slice(0, 3)

  if (error) {
    return (<div className="flex flex-col items-center"> <NotFoundMessage />
      <p>{error.message}</p> </div>)
  }

  return (
    <div className="flex flex-col justify-center align-center space-y-8">
      <Link to="/AnniversaryPage">
        <div className="bg-[url('/assets/Images/iStock-1825131978L.jpg')] bg-cover bg-center flex justify-center items-center h-full">
          <div className="bg-primary-600 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
            <h1 className="font-fredoka text-primary-200 text-h1 text-center tracking-wider uppercase px-1">
              Anniversary
            </h1>
          </div>
        </div>
      </Link>
      <div className="flex flex-wrap mx-4 md:mx-8 lg:mx-20 xl:mx-44">
        {isLoading ? (
          <IsLoading />
        ) : (AnniversaryGifts.map((giftData) => (
          <div key={giftData.id} className="w-full sm:w-1/2 md:w-1/3">
            <GiftCard giftData={giftData} />
          </div>
        )))
        }
      </div>
    </div>
  );
}

export default AnniversarySection;

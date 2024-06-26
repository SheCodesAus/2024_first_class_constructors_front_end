import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import useGifts from "../hooks/use-gifts";
import IsLoading from "./IsLoading";
import GiftCard from "./GiftCard";
import NotFoundMessage from "./NotFound";

function BirthdaySection() {
  const { gifts, isLoading, error } = useGifts();
  // const [errorMessage, setErrorMessage] = useState(null);

  const BirthdayGifts = gifts
    .filter((gift) => gift.categories.includes(1)).slice(0, 3)

  if (error) {
    return (<div className="flex flex-col items-center"> <NotFoundMessage />
      <p>{error.message}</p> </div>)
  }

  return (
    <div className="flex flex-col justify-center align-center space-y-8">
      <Link to="/BirthdayPage">
        <div className="bg-[url('/assets/Images/pexels-photo-796605.webp')] bg-cover bg-center flex justify-center items-center h-full">
          <div className="bg-primary-300 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
            <h1 className="font-fredoka text-slate-100 text-h1 text-center tracking-wider uppercase px-1">
              Birthday
            </h1>
          </div>
        </div>
      </Link>
      <div className="flex flex-wrap mx-4 md:mx-8 lg:mx-20 xl:mx-44">
        {isLoading ? (
          <IsLoading />
        ) : (BirthdayGifts.map((giftData) => (
          <div key={giftData.id} className="w-full sm:w-1/2 md:w-1/3">
            <GiftCard giftData={giftData} />
          </div>
        )))
        }
      </div>
    </div>
  );
}

export default BirthdaySection;

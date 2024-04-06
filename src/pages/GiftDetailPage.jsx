import React from "react";
import useGift from "../hooks/use-gift";
import CompareButton from "../components/CompareButton.jsx";
import IsLoading from "../components/IsLoading";
import NotFoundMessage from "../components/NotFound";

import { Link, useParams } from "react-router-dom";

function GiftDetailPage() {
  const { id } = useParams();
  const { gift, isLoading, error } = useGift(id);

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

  //leaving in comments for this section for others to understand.
  const handleAddGift = () => {
    const existingGifts = JSON.parse(localStorage.getItem("gifts")) || []; // Retrieve existing gifts from localStorage or initialize as an empty array

    if (existingGifts.some((existingGift) => existingGift.id === gift.id)) {
      // Check if the gift already exists in the array
      alert("This gift is already in the compare list!");
      return;
    }

    if (existingGifts.length >= 4) {
      // Check if there are already 4 gifts in the array
      alert("You can only compare up to 4 gifts!");
      return;
    }

    const updatedGifts = [...existingGifts, gift]; // Add the current gift to the existing gifts array

    localStorage.setItem("gifts", JSON.stringify(updatedGifts)); // Save the updated gifts array to localStorage

    alert("Gift added to compare list!");
    console.log(updatedGifts);
  }; //AS: Can do more clean up on this function

  return (
    <div className="flex flex-col justify-center align-center space-y-14 m-12 ">
      <div className="bg-[url('/assets/Images/photo-1525351159099-81893194469e.avif')] bg-cover bg-center flex justify-center items-center h-full">
        <div className="bg-primary-300 px-6 my-14 md:my-14 md:px-10 lg:px-20">
          <h1 className="font-fredoka text-slate-100 text-h1 text-center tracking-wider uppercase px-1">
            HAPPY SHOPPING
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full m-12 p-10 border shadow rounded-md bg-primary-600/10 md:flex-row md:gap-6 lg:mx-40 xl:mx-80">
        {/* image */}
        <div className="w-full justify-center">
          <img
            src={gift.img}
            alt={gift.name}
            className="p-4 rounded-md shadow bg-white border border-primary-600/60 "
          />
        </div>

        <div className="w-full flex flex-col md:justify-between">
          {/* text */}
          <div className="space-y-3 my-4 md:my-0 md:mb-6">
            <h3 className="font-montserrat text-primary-100 text-h3 tracking-wider uppercase ">
              {gift.name}
            </h3>
            <h3 className="font-montserrat text-primary-100 text-[22px] tracking-wider">
              {gift.price}
            </h3>
            <p className="font-montserrat text-p text-primary-100 tracking-wider">
              {gift.description}
            </p>
            
          </div>

          {/* buttons */}

          <div className="flex flex-col space-y-4">
            <CompareButton onClick={handleAddGift} />

            <Link to={gift.source_url} target="_blank">
              <button className="flex justify-center bg-white border rounded-md border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white font-montserrat text-h4 uppercase text-center w-full p-4 backdrop:tracking-wider">
                BUY ITEM HERE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftDetailPage;

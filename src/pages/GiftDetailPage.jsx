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
    return <IsLoading />
  }

  if (error) {
    return (<div> <NotFoundMessage />
      <p>{error.message}</p> </div>)
  }

  //leaving in comments for this section for others to understand.
  const handleAddGift = () => {

    const existingGifts = JSON.parse(localStorage.getItem("gifts")) || []; // Retrieve existing gifts from localStorage or initialize as an empty array

    if (existingGifts.some(existingGift => existingGift.id === gift.id)) { // Check if the gift already exists in the array
      alert("This gift is already in the compare list!");
      return;
    }

    if (existingGifts.length >= 4) { // Check if there are already 4 gifts in the array
      alert("You can only compare up to 4 gifts!");
      return;
    }

    const updatedGifts = [...existingGifts, gift]; // Add the current gift to the existing gifts array

    localStorage.setItem("gifts", JSON.stringify(updatedGifts)); // Save the updated gifts array to localStorage

    alert("Gift added to compare list!");
    console.log(updatedGifts)
  }; //AS: Can do more clean up on this function

  return (
    <div className="flex flex-col justify-center align-center space-y-14 m-12 ">
      <div className="bg-[url('/assets/Images/photo-1623638308822-7529ea3cf094.jpeg')] bg-cover bg-center flex justify-center items-center h-full">
        <div className="bg-primary-300 px-6 my-14 md:my-14 md:px-10 lg:px-20">
          <h1 className="font-fredoka text-slate-100 text-h1 text-center tracking-wider uppercase px-1">
            HAPPY SHOPPING
          </h1>
        </div>
      </div>

      <div className="m-4 p-4 flex lg:mx-24 lg:py-10 lg:px-20 flex-col justify-center h-full bg-pink-400 bg-opacity-10 rounded-md overflow-hidden shadow-lg border border-primary-600 border-opacity-80">
        {/* image */}
        <div className="w-full p-4 md:p-10 flex flex-col justify-center">
          <img
            src={gift.img}
            alt={gift.name}

            className="lg:max-h-[60rem] md:max-h-[40rem] lg:p-18 md:p-14 p-10 object-cover rounded-md overflow-hidden shadow-lg  bg-slate-50 border border-primary-600 border-opacity-80"
          />
        </div>

        <div className="w-full flex flex-col justify-between p-4 md:p-10">
          {/* text */}
          <div className="space-y-6 mb-6">
            <h3 className="font-fredoka text-primary-100 text-h2 tracking-wider uppercase ">
              {gift.name}
            </h3>
            <p className="font-montserrat text-primary-100  text-p tracking-wider uppercase">
              {gift.description}
            </p>
            <h3 className="font-montserrat text-primary-100 text-[22px] tracking-wider">
              {gift.price}
            </h3>
          </div>

          {/* buttons */}

          <div>
            <CompareButton onClick={handleAddGift} />

            <Link to={gift.source_url}>

              <button className="flex justify-center bg-white border rounded-md border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white  font-montserrat text-h4 uppercase text-center my-5 w-full p-4 backdrop:tracking-wider">
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

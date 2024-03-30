import React from "react";
import { useParams } from "react-router-dom";
import useGift from "../hooks/use-gift";
import CompareButton from "../components/CompareButton.jsx";

function GiftDetailPage() {
  const { id } = useParams(); 
  const { gift, isLoading, error } = useGift(id);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error || !gift) {
    return <p>Sorry, we couldn't find the gift you're looking for </p>;
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
    <div className="flex justify-center items-center m-12">
      <div className="w-300">
        <div className="bg-[url('src/assets/Images/pexels-photo-6331088.jpeg')] bg-cover bg-center flex justify-center items-center h-full">
          <div className="bg-primary-500 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
            <h1 className="font-fredoka text-slate-100 text-h1 text-center tracking-wider uppercase px-1">
              HAPPY SHOPPING
            </h1>
          </div>
        </div>
        <div className="flex mt-20 max-w-[1000px]">
          <div className="p-20 mb-12 flex flex-row justify-start items-start w-full h-full bg-pink-400 bg-opacity-10 rounded-md overflow-hidden shadow-lg border border-primary-600 border-opacity-80">
            <div className="flex-shrink-0 w-2/5">
              <img
                src={gift.img}
                alt={gift.name}
                className="object-cover  rounded-md overflow-hidden shadow-lg border border-primary-600 border-opacity-80"
              />
            </div>

            <div className="w-full md:w-3/5 flex flex-col m-12 justify-between">
              <div>
                <h3 className="font-fredoka text-primary-100 text-h1 tracking-wider uppercase font-semibold mt-2">
                  {gift.name}
                </h3>
                <p className="font-montserrat text-primary-100 text-h2 tracking-wider uppercase  mt-2">
                  {gift.description}
                </p>
                <h3 className="font-montserrat text-primary-100 text-[22px] tracking-wider mt-3">
                  {gift.price}
                </h3>
              </div>

              <div className=" mt-auto">
                <div>
                  <CompareButton onClick={handleAddGift} />
                </div>
                <button className="flex justify-center border rounded-md bg-white border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white font-montserrat text-h3 uppercase text-center my-2 w-full p-4 backdrop:tracking-wider">
                  BUY ITEM HERE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftDetailPage;
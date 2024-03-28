import React from "react";
// import { useParams } from "react-router-dom";
// import useGift from "../hooks/use-gift";
import { oneGift } from "../data";
import CompareButton from "../components/CompareButton.jsx";

function GiftDetailPage() {
  // const { id } = useParams(); // Retrieve the id parameter from the URL
  // const { gift, isLoading, error } = useGift(id); // Fetch gift data based on the id

  // if (isLoading) {
  //   return <p>Loading...</p>; // Render loading state if data is being fetched
  // }

  // if (error || !gift) {
  //   return <p>Gift not found for ID: {id}</p>; // Render error message if gift data is not available
  // }

  // console.log("GIFT", oneGift.name)

  const handleAddGift = () => {
    // Retrieve existing gifts from localStorage or initialize as an empty array
    const existingGifts = JSON.parse(localStorage.getItem("gifts")) || [];
    
    // Add the current giftData to the existing gifts array
    const updatedGifts = [...existingGifts, giftData];
    
    // Save the updated gifts array to localStorage
    localStorage.setItem("gifts", JSON.stringify(updatedGifts));
    
    alert("Gift added to compare list!");
    console.log(updatedGifts)
  };

  return (
    
    
    <div className="flex justify-center items-start min-h-screen  w-300 ">

      <div className=" bg-pink-400 bg-opacity-10 rounded-md overflow-hidden shadow-lg p-20 border border-primary-600 border-opacity-80 flex justify-center items-center">
       
        <div className="w-2/5 flex flex-col justify-start">
          <img src={oneGift.img} alt={oneGift.name} className="object-cover w-full h-full rounded-md overflow-hidden shadow-lg  border border-primary-600 border-opacity-80" />
        </div>

        <div className="w-full md:w-3/5 p-20 flex flex-col m-10 justify-between ">
          <div>
            <h3 className="font-montserrat text-primary-100 text-h3 tracking-wider uppercase">
              {oneGift.name}
            </h3>
            <p className="font-montserrat text-primary-100 text-h3 tracking-wider uppercase">
              {oneGift.description}
            </p>
            <h3 className="font-montserrat text-primary-100 text-[22px] tracking-wider">
              {oneGift.price}
            </h3>
          </div>
           <div className="flex flex-col justify-end">
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
  );
}

export default GiftDetailPage;

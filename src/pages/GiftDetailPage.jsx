import React from "react";
import { useParams } from "react-router-dom";
import CompareButton from "../components/CompareButton.jsx";
import { Link } from "react-router-dom";
import { allGifts } from "../data";

function GiftDetailPage() {
  const { id } = useParams();
  const giftData = allGifts.find((g) => g.id === parseInt(id));

  if (!giftData) {
    return <p>Gift not found for ID: {id}</p>;
  }

  const handleAddGift = () => {
    const existingGifts = JSON.parse(localStorage.getItem("gifts")) || [];

    if (existingGifts.some((gift) => gift.id === giftData.id)) {
      alert("This gift is already in the compare list!");
      return;
    }

    if (existingGifts.length >= 4) {
      alert("You can only compare up to 4 gifts!");
      return;
    }

    const updatedGifts = [...existingGifts, giftData];
    localStorage.setItem("gifts", JSON.stringify(updatedGifts));
    alert("Gift added to compare list!");
    console.log(updatedGifts);
  };

  return (
    <div className="flex justify-center items-center m-4 md:m-12" >
      <div className="max-w-screen-md w-full">
        <div className="bg-[url('src/assets/Images/pexels-photo-6331088.jpeg')] bg-cover bg-center flex justify-center items-center h-full">
          <div className="bg-primary-500 px-6 my-8 md:my-14 md:px-10 lg:px-20">
            <h1 className="font-fredoka text-slate-100 text-2xl md:text-4xl text-center tracking-wider uppercase">
              HAPPY SHOPPING
            </h1>
          </div>
        </div>
    

        <div className="p-6 md:p-20 mb-12 mt-6 md:mt-12 flex flex-col md:flex-row  w-full h-full bg-pink-400 bg-opacity-10 rounded-md overflow-hidden shadow-lg border border-primary-600 border-opacity-80">
          {/* image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src={giftData.img}
              alt={giftData.name}
              className="object-cover rounded-md overflow-hidden shadow-lg border border-primary-600 border-opacity-80 w-full h-auto md:h-full md:w-auto"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between p-4 md:p-8">
            {/* text */}
            <div>
              <h3 className="font-fredoka text-primary-100 text-2xl md:text-3xl tracking-wider uppercase font-semibold mt-2">
                {giftData.name}
              </h3>
              <p className="font-montserrat text-primary-100 text-lg md:text-xl tracking-wider uppercase mt-4">
                {giftData.description}
              </p>
              <h3 className="font-montserrat text-primary-100 text-xl md:text-2xl tracking-wider mt-4">
                {giftData.price}
              </h3>
            </div>

            {/* buttons */}
           

             
                <CompareButton
                  onClick={handleAddGift}
                 
                />
             
           
              <Link to={giftData.source_url} className="mb-4 md:mb-0 md:mr-4">
                <button
                  className="flex justify-center bg-white border rounded-md border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white  font-montserrat text-h4 uppercase text-center my-2 w-full p-4 backdrop:tracking-wider">
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

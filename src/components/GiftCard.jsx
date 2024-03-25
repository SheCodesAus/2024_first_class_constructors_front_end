import React from "react";
import { Link } from "react-router-dom";
import CompareButton from "./CompareButton";

function GiftCard(props) {
  const { giftData } = props;

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
    <div className="w-auto mx-4 my-8 p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col">
      <div>
        <Link to="/GiftDetailPage">
          <div
            className="rounded-md relative overflow-hidden bg-white border-[1px]  border-primary-600 border-opacity-80"
            style={{ paddingBottom: "100%" }}
          >
            <img
              src={giftData.img}
              alt={giftData.name}
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </Link>
      </div>
      <div className="my-3 space-y-2">
        <h3 className="font-montserrat text-primary-100 text-h3 tracking-wider uppercase">
          {giftData.name}
        </h3>
        <h3 className="font-montserrat  text-primary-100  text-[22px] tracking-wider">
          {giftData.price}
        </h3>
      </div>
      <div>
        <CompareButton onClick={handleAddGift} />
      </div>
    </div>
  );
}

export default GiftCard;

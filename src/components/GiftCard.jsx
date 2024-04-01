import React from "react";
import { Link } from "react-router-dom";
import CompareButton from "./CompareButton";

function GiftCard(props) {
  const { giftData } = props;

  const handleAddGift = () => {
    // Retrieve existing gifts from localStorage or initialize as an empty array
    const existingGifts = JSON.parse(localStorage.getItem("gifts")) || [];

    // Check if the gift already exists in the array
    if (existingGifts.some((gift) => gift.id === giftData.id)) {
      alert("This gift is already in the compare list!");
      return;
    }

    // Check if there are already 4 gifts in the array
    if (existingGifts.length >= 4) {
      alert("You can only compare up to 4 gifts!");
      return;
    }
    // Add the current giftData to the existing gifts array
    const updatedGifts = [...existingGifts, giftData];

    // Save the updated gifts array to localStorage
    localStorage.setItem("gifts", JSON.stringify(updatedGifts));

    alert("Gift added to compare list!");
    console.log(updatedGifts);
  };

  return (
    <div className="w-full p-4 flex flex-col space-y-4">
      <div className="">
        <Link to={`/gift/${giftData.id}`}>
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

      <div className="my-3 space-y-2 min-h-14">
        <h3 className="font-montserrat text-primary-100 text-h3 tracking-wider uppercase line-clamp-2">
          {giftData.name}
        </h3>
      </div>
      <h3 className="font-montserrat  text-primary-100  text-[22px] tracking-wider">
        {giftData.price}
      </h3>

      <div>
        <CompareButton onClick={handleAddGift} />
      </div>
    </div>
  );
}

export default GiftCard;

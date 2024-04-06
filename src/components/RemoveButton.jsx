import { useState } from "react";
import React from "react";

function RemoveButton({ giftData }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleRemoveClick = () => {
    // Retrieve the existing gifts from localStorage
    const existingGifts = JSON.parse(localStorage.getItem("gifts")) || [];

    // Filter out the current gift
    const updatedGifts = existingGifts.filter(
      (gift) => gift.id !== giftData.id
    );

    // Save the updated gifts array to localStorage
    localStorage.setItem("gifts", JSON.stringify(updatedGifts));

    alert("Gift removed from compare list!");
    // Refresh the page
    window.location.reload();
  };

  return (
    <button
      onClick={handleRemoveClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex justify-center items-center bg-white border rounded-md border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white font-montserrat text-h4 uppercase text-center backdrop:tracking-wider my-2 w-full py-4 px-8 gap-3"
    >
      <div className="pt-[0.20rem]">
      REMOVE
      </div>
    
      {isHovered ? (
        <img
          src="/assets/Images/WHITEBINVector.svg"
          alt="White Bin Icon"
          className="w-max h-7 pb-1"
        />
      ) : (
        <img
          src="/assets/Images/BINVector.svg"
          alt="Bin Icon"
          className="w-max h-7 pb-1"
        />
      )}
    </button>
  );
}

export default RemoveButton;

import React from "react";
import { useState } from "react";

const CompareButton = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (

    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex justify-center items-center bg-white border rounded-md border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white font-montserrat text-h4 uppercase text-center my-2 w-full py-4 px-8 backdrop:tracking-wider gap-3"
    >
      add to compare&nbsp;list
      {isHovered ? (
        <img
          src="/assets/Images/WHITEGiftIconVector.svg"
          alt="White Gift Icon"
          className="w-max h-6"
        />
      ) : (
        <img
          src="/assets/Images/GiftIconVector.svg"
          alt="Gift Icon"
          className="w-max h-6"
        />
      )}
    </button>
  );
};

export default CompareButton;

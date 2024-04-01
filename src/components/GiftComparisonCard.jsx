import React from "react";
import { Link } from "react-router-dom";
import RemoveButton from "./RemoveButton";

function GiftComparisonCard(props) {
  const { giftData } = props;

  return (
    <div className=" border  border-primary-200  p-4 m-4 h-full flex flex-col">
      <div>
        <Link to={`/gift/${giftData.id}`}>
          {/* <div
            className="rounded-md relative overflow-hidden bg-white border-[1px]  border-primary-600 border-opacity-80"
            style={{ paddingBottom: "100%" }}
          > */}
          
          {/* Image */}
          <div className=" p-4 md:p-10 flex flex-col justify-center">
            <img
              src={giftData.img}
              alt={giftData.name}
              className="lg:max-h-[60rem] md:max-h-[40rem] lg:p-18 md:p-14 p-10 rounded-md overflow-hidden shadow-lg  bg-slate-50 border border-primary-600 border-opacity-80"
            />
          </div>
        </Link>
      </div>

      {/* Text */}
      <div className="w-full flex flex-col justify-between p-4 md:p-10">
        <div className="space-y-6 mb-6">
          <h3 className="font-montserrat text-primary-100 text-h2 tracking-wider uppercase min-h-20 ">
            {giftData.name}
          </h3>
          <h3 className="font-montserrat  text-primary-100  text-[22px] tracking-wider">
            {giftData.price}
          </h3>
          <p className="text-primary-100 text-p tracking-wider uppercase ">
            {giftData.description}
          </p>
        </div>
        {/* Button */}
        <button
          className="flex justify-center border rounded-md bg-white border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white font-montserrat text-h3 uppercase text-center my-2 w-full p-4 backdrop:tracking-wider"
          onClick={() => {
            alert("You will be redirected to the purchase page.");
            window.open(giftData.source_url, "_blank");
          }}
        >
          BUY ITEM HERE
        </button>

        <RemoveButton giftData={giftData} />
      </div>
    </div>
  );
}

export default GiftComparisonCard;

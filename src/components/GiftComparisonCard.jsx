import React from "react";
import { Link } from "react-router-dom";
import RemoveButton from "./RemoveButton";

function GiftComparisonCard(props) {
  const { giftData } = props;

  return (
    <div className="border border-primary-400 p-4 m-4 flex flex-col md:w-96">
      <div>
        <Link to={`/gift/${giftData.id}`}>
          <div className="p-4 flex justify-center ">
            <img
              src={giftData.img}
              alt={giftData.name}
              className="w-full rounded-md overflow-hidden shadow-lg bg-slate-50 border border-primary-600 border-opacity-80 md:min-h-32"
            />
          </div>
        </Link>
      </div>

      <div className="flex flex-col justify-between p-4 md:p-6">

        <div className="space-y-6 mb-6 flex-grow">
          <h3 className="font-montserrat text-primary-100 text-h2 tracking-wider uppercase md:min-h-20 ">
            {giftData.name}
          </h3>
          <h3 className="font-montserrat  text-primary-100  text-[22px] tracking-wider">
            {giftData.price}
          </h3>
          <p className="text-primary-100 text-p tracking-wider uppercase md:min-h-60">
            {giftData.description}
          </p>
       
        
        <button
          className="flex justify-center border rounded-md bg-white border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white font-montserrat text-base md:text-lg uppercase text-center my-2 w-full p-3 md:p-4 backdrop-filter backdrop-blur-sm"
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
    </div>
  );
}

export default GiftComparisonCard;

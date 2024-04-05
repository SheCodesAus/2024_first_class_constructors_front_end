import React from "react";
import { Link } from "react-router-dom";
import RemoveButton from "./RemoveButton";

function GiftComparisonCard(props) {
  const { giftData } = props;

  return (
    <div className="  m-4 flex flex-col md:w-70 md:border sm:border rounded-md border-primary-600 md:border-opacity-80">
      <div>
        <Link to={`/gift/${giftData.id}`}>
          <div className="p-4 flex justify-center ">
            <img
              src={giftData.img}
              alt={giftData.name}
              className="w-full rounded-md overflow-hidden shadow-lg lg:p-4 mt-6 bg-slate-50 border border-primary-600 border-opacity-80 md:h-64 lg:h-60 lg:w-60"
            />
          </div>
        </Link>
      </div>

      <div className="flex flex-col justify-between p-4 md:p-6 lg:p-6">
        <div className="space-y-6 mb-6 flex-grow">
          <h3 className="font-montserrat text-primary-100 text-h2 tracking-wider uppercase md:min-h-44 lg:min-h-28">
            {giftData.name}
          </h3>
          <h3 className="font-montserrat  text-primary-100  text-[22px] tracking-wider">
            ${giftData.price}
          </h3>
          <p className="text-primary-100 text-p tracking-wider uppercase md:min-h-96 lg:min-h-60 ">
            {giftData.description}
          </p>

          <Link to={giftData.source_url} target="_blank">
            <button className="flex justify-center bg-white border rounded-md border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white  font-montserrat text-h4 uppercase text-center my-5 w-full p-4 backdrop:tracking-wider">
              BUY ITEM HERE
            </button>
          </Link>

          <RemoveButton giftData={giftData} />
        </div>
      </div>
    </div>
  );
}

export default GiftComparisonCard;

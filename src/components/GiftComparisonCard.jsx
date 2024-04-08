import React from "react";
import { Link } from "react-router-dom";
import RemoveButton from "./RemoveButton";

function GiftComparisonCard(props) {
  const { giftData } = props;

  return (
    <div className="p-6 flex flex-col border">
      <div>
        <Link to={`/gift/${giftData.id}`}>
        <div
            className="rounded-md relative bg-white border-[1px] border-primary-600/60"
            style={{ paddingBottom: "100%" }}
          >
            <img
              src={giftData.img}
              alt={giftData.name}
              className="absolute inset-0 object-cover w-full h-full p-4"
            />
          </div>
        </Link>
      </div>

      <div className="flex flex-col justify-between my-3 space-y-2">
        <div className="space-y-4">
          <h3 className="font-montserrat text-primary-100 text-h3 tracking-wider uppercase line-clamp-3 min-h-20">
            {giftData.name}
          </h3>
          <h3 className="font-montserrat  text-primary-100  text-[22px] tracking-wider">
            ${giftData.price}
          </h3>
          <p className="font-montserrat text-primary-100 tracking-wider line-clamp-3">
            {giftData.description}
          </p>
          <div className="flex flex-col space-y-1">
          <Link to={giftData.source_url} target="_blank">
            <button className="flex justify-center bg-white border rounded-md border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white  font-montserrat text-h4 uppercase text-center my-5 w-full p-4">
              BUY ITEM HERE
            </button>
          </Link>

          <RemoveButton giftData={giftData} />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default GiftComparisonCard;

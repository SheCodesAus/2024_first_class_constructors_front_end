import React from "react";
import { Link } from "react-router-dom";
import CompareButton from "./CompareButton";

function GiftCard(props) {
  const { giftData } = props;

  return (
    <div className="w-full p-4 flex flex-col">
      <div>
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
      <div className="my-3 space-y-2">
        <h3 className="font-montserrat text-primary-100 text-h3 tracking-wider uppercase">
          {giftData.name}
        </h3>
        <h3 className="font-montserrat  text-primary-100  text-[22px] tracking-wider">
          {giftData.price}
        </h3>
      </div>
    </div>
  );
}


export default GiftCard;

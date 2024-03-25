import React from "react";
import { Link } from "react-router-dom";
// import { useState, useEffect } from 'react';
// import useGifts from "../hooks/use-gifts";

import { allGifts } from "../data";

import GiftCard from "./GiftCard";

function TrendingSection() {
    // const { gifts, isLoading, error } = useGifts();
    // const [errorMessage, setErrorMessage] = useState(null);


    // Get the last 4 latest gifts
    const latestGifts = allGifts.slice(1, 4); 

    return (
        <div className="">
          <h1>Trending Gifts</h1>
          {latestGifts.map((giftData, key) => (
            <div >
              <GiftCard key={key} giftData={giftData} />
            </div>
          ))}

        </div>
      );
}

export default TrendingSection;
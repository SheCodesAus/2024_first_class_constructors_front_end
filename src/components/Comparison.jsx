import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import GiftComparisonCard from "./GiftComparisonCard";

function getGiftsFromLocalStorage() {
    const gifts = localStorage.getItem('gifts');

    if (gifts) {
        const parsedGifts = JSON.parse(gifts);
        if (parsedGifts.length >= 2) {
            return parsedGifts;
        }
    }

    return [];
}


function Comparison() {
    const [gifts, setGifts] = useState([]);

    useEffect(() => {
        const giftsFromLocalStorage = getGiftsFromLocalStorage();
        setGifts(giftsFromLocalStorage);
    }, []);

    return (
//    top banner
        <div className="flex flex-col justify-center align-center space-y-14 m-12 ">

        <div className="bg-[url('src/assets/Images/photo-1513151233558-d860c5398176.jpeg')] bg-cover bg-center flex justify-center items-center h-full">
          <div className="bg-primary-300 px-6 my-14 md:my-14 md:px-10 lg:px-20">
            <h1 className="font-fredoka text-slate-100 text-h1 md:text-4xl text-center tracking-wider uppercase">
              YOUR PICKS
            </h1>
          </div>

        </div>

        <div className="m-4 p-4 flex lg:mx-24 lg:py-10 lg:px-20 flex-col justify-center h-full bg-primary-600 bg-opacity-20 rounded-md overflow-hidden shadow-lg border border-primary-600 border-opacity-80">
           
            <div className="  flex flex-col justify-center ">
                {gifts.length >= 2 ? (
                    gifts.map((gift) => <GiftComparisonCard giftData={gift} />)
                ) : (
                    <p>Add gifts to your comparsion list</p>
                )}
            </div>
        </div>
        </div>
    );
}

export default Comparison;
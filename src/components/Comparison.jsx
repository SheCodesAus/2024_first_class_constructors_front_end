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
        <div className="flex flex-col justify-center align-center space-y-10">
            <div className="bg-[url('src/assets/Images/photo-1513151233558-d860c5398176.jpeg')] bg-cover bg-center flex justify-center items-center h-full">
                <div className="bg-primary-300 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
                    <h1 className="font-fredoka text-slate-100 text-h1 text-center tracking-wider uppercase px-1">
                        Your picks
                    </h1>
                </div>
            </div>
            <div className=" bg-cover bg-center flex justify-center items-center h-full">
                {gifts.length >= 2 ? (
                    gifts.map((gift) => <GiftComparisonCard giftData={gift} />)
                ) : (
                    <p>Add gifts to your comparsion list</p>
                )}
            </div>
        </div>
    );
}

export default Comparison;
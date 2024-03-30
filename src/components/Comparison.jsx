import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import GiftCard from "./GiftCard";

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
        <div>
            {gifts.map((giftData) => (
                <div key={giftData.id} className="w-full sm:w-1/2 md:w-1/3">
                    <GiftCard giftData={giftData} />
                </div>
            ))}
        </div>
    );
}

export default Comparison;
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import GiftComparisonCard from "./GiftComparisonCard";

function getGiftsFromLocalStorage() {
  const gifts = localStorage.getItem("gifts");

  if (gifts) {
    const parsedGifts = JSON.parse(gifts);
    if (parsedGifts.length >= 1) {
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
    <div className="flex flex-col justify-center align-center space-y-14 m-12">
      <div className="bg-[url('/assets/Images/photo-1513151233558-d860c5398176.jpeg')] bg-cover bg-center flex justify-center items-center h-full">
        <div className="bg-primary-300 px-6 my-14 md:my-14 md:px-10 lg:px-20">
          <h1 className="font-fredoka text-slate-100 text-h1 md:text-4xl text-center tracking-wider uppercase">
            YOUR PICKS
          </h1>
        </div>
      </div>

      
      <div className="m-4  flex lg:mx-24 lg:px-20 lg:py-10 flex-col justify-center h-full bg-opacity-20 rounded-md overflow-hidden shadow-lg">
       
       {/* Add gifts to your comparison list - outsite of the grid, visible all the time */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 bg-white">
          {gifts.length >= 1 ? (
            gifts.map((gift) => (
              <div key={gift.id}>
                <GiftComparisonCard giftData={gift} />
              </div>
            ))
          ) : null}
        </div>
        
        <div className="flex justify-center mt-4">
          <NavLink to="/">
            <p className="text-p tracking-wider uppercase rounded-md border my-8 bg-white border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white p-4">
              Add gifts to your comparison list
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Comparison;




{/* Add gifts to your comparison list - within grid, visible only if there are no gifts*/}
{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 bg-white">
    {gifts.length >= 1 ? (
        gifts.map((gift) => (
            <div key={gift.id} >
                <GiftComparisonCard giftData={gift} />
            </div>
        ))
    ) : (
        <p  className="text-p lace-items-center tracking-wider uppercase rounded-md border my-8 bg-white border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white p-4">Add gifts to your comparison list</p>
    )}
</div>

        </div>
        </div>
    );
}

export default Comparison; */}
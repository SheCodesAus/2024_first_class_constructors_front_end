import { allGifts } from "../data"; //to remove when connecting to API


async function getFeaturedGifts() {

    return allGifts.filter(gift => gift.is_featured); //to remove when connecting to API


//to uncomment when connecting to API:
    //const url =`${import.meta.env.VITE_API_URL}/gifts/featured/`;

    //const response =await fetch(url,{method:"GET"});
    //
    //if (!response.ok) {
    //    const fallbackError =`Error fetching featured gifts`;

    //const data =await response.json().catch(() =>{
    //    throw new Error(fallbackError);
    //});

    //const errorMessage = data?.detail?? fallbackError;
    //throw new Error(errorMessage);
    //}

    //return await response.json();
}

export default getFeaturedGifts;
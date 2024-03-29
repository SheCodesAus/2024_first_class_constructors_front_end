import{ useState, useEffect }from"react";

import getGift from"../api/get-gift";

export default function useGift() {
    const [gift, setGift] =useState();
    const [isLoading, setIsLoading] =useState(true);
    const [error, setError] =useState();


    useEffect(() =>{
        getGift(gift.id)
        .then((gift) =>{
        setGift(gift);
        setIsLoading(false);
        })

        .catch((error) =>{
            setError(error);
            setIsLoading(false);
        });
    }, [gift.id]);
   

    return{ gift, isLoading, error };
}
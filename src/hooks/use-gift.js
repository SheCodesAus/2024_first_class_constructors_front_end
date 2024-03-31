import { useState, useEffect } from "react";

import getGift from "../api/get-gift";

export default function useGift(giftId) {
    const [gift, setGift] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        getGift(giftId)
            .then((gift) => {
                setGift(gift);
                setIsLoading(false);
            })

            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
        }, [giftId]);


    return { gift, isLoading, error };
}
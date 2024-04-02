import{ useState, useEffect } from "react";

import getGifts from "../api/get-gifts";

export default function useGifts() {
    const [gifts, setGifts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [filteredGifts, setFilteredGifts] = useState([]);


    useEffect(() =>{
        getGifts()
            .then((gifts) => {
                setGifts(gifts);
                setFilteredGifts(gifts);
                setIsLoading(false);
            })

            .catch((error) =>{
                setError(error);
                setIsLoading(false);
            });
    }, []);
   

    return { gifts, setGifts, isLoading, error, filteredGifts, setFilteredGifts};
}
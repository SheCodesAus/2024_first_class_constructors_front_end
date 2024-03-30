import { useState, useEffect } from "react";
import getFeaturedGifts from "../api/get-featured-gifts.js";

export default function useFeaturedGifts() {
    const [featuredGifts, setFeaturedGifts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();


    useEffect(() => {
        getFeaturedGifts()
            .then((featured) => {
                featured = featured.slice(0, 3);
                if (featuredGifts.length !== featured.length ||
                    featuredGifts.some((element, index) => element.id !== featured[index].id)) {
                    setFeaturedGifts(featured);
                }
            })
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }, [featuredGifts]);


    return { featuredGifts, isLoading, error };
}
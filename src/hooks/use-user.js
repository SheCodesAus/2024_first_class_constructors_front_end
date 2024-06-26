import { useState, useEffect } from "react";
import getUser from "../api/get-user";

export default function useUser(userId, token) {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        getUser(userId, token)
        .then((user) => {
            setUser(user);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        });

    }, [userId, token]);

    return { user, isLoading, error };
}
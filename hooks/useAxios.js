import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url, options) => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isFailure, setIsFailure] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(url, options);
                setResponse(result);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [url, options]);

    return { isLoading, isFailure, response };
}

export default useAxios;
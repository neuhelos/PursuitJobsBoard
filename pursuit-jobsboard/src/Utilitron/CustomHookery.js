import {useState, useEffect} from 'react'
import axios from 'axios'

export const useInput = (initialValue, validationType) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const clearinput = () => {
        setValue("")
    }

    return {value, validationType: validationType, onChange: handleChange, clearinput}
}

export const useSelect = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return {value, onChange: handleChange}
}

export const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(url);
            setResponse(res);
            setIsLoading(false)
        } catch (error) {
            setError(error);
        }
        };
        fetchData();
    }, [url, options]);
    return { response, error, isLoading };
};

//Modified useFetch Hook Originally Created by Chris Nwamba


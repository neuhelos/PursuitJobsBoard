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

export const useScript = (src) => {
    
    let cachedScripts = []
    
    // Keeping track of script loaded and error state
    const [state, setState] = useState({
    loaded: false,
    error: false
    });

    useEffect(
    () => {
        // If cachedScripts array already includes src that means another instance ...
        // ... of this hook already loaded this script, so no need to load again.
        if (cachedScripts.includes(src)) {
        setState({
            loaded: true,
            error: false
        });
        } else {
            cachedScripts.push(src);

        // Create script
            let script = document.createElement('script');
            script.src = src;
            script.async = true;

            // Script event listener callbacks for load and error
            const onScriptLoad = () => {
            setState({
                loaded: true,
                error: false
            });
        };

        const onScriptError = () => {
          // Remove from cachedScripts we can try loading again
            const index = cachedScripts.indexOf(src);
            if (index >= 0) cachedScripts.splice(index, 1);
            script.remove();

            setState({
            loaded: true,
            error: true
            });
        };

        script.addEventListener('load', onScriptLoad);
        script.addEventListener('error', onScriptError);

        // Add script to document body
        document.body.appendChild(script);

        // Remove event listeners on cleanup
        return () => {
            script.removeEventListener('load', onScriptLoad);
            script.removeEventListener('error', onScriptError);
        };
        }
    }
    ,[src]) // Only re-run effect if script src changes

    return [state.loaded, state.error];

}
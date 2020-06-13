import {useState, useEffect} from 'react'

export const useInput = (initialValue, type) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const clearinput = () => {
        setValue("")
    }

    return {value, type: type, onChange: handleChange, clearinput}
}


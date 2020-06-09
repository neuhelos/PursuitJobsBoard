import {useState, useEffect} from './node_modules/react'

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const clearInput = () => {
        setValue("")
    }

    return {value, onChange: handleChange, clearInput}
}


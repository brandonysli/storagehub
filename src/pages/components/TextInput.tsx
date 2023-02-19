//use Throttling and Debouncing
import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce';
const TextInput = () => {
    const [textInput, setTextInput] = useState('');
    const debouncedValue = useDebounce(textInput,200)
    return (
        <>
        <div>
        <input className = "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)} 
        />
        </div>
        <p>text: {textInput}</p>
        <p>debounced: {debouncedValue} </p>
        </>
    )
}

export default TextInput;
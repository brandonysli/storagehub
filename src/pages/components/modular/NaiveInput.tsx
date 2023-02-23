//use Throttling and Debouncing
//highlight around input box when selected.

import React, { useEffect, useState } from "react";

type inputInfo = {
  heading:string;
  inputType:"text"|"date"|"dropdown";
}

function useDebounce<T>(value:T,delay?:number){
    
  const[debouncedValue,setDebouncedValue] = useState<T>(value);

  useEffect(()=>{
      const timer = setTimeout( () => {
          setDebouncedValue(value);
      }, delay || 500);

      return () => {
          clearTimeout(timer);
      }
  },[value,delay]);

  return debouncedValue;
}

export default function NaiveInput(info:inputInfo) {
  const [textInput, setTextInput] = useState("");
  const debouncedValue = useDebounce(textInput, 200);
  return (
    <>
      <div>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-500"
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </div>
      <p>text: {textInput}</p>
      <p>debounced: {debouncedValue} </p>
    </>
  );
};

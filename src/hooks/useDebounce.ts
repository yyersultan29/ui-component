import { useEffect, useState } from "react"


export function useDebounce<T> (value: T)  {

    const[debounceValue,setDounceValue] = useState(value);
    
    useEffect(() => {
        const timerid= setTimeout(() => {
            setDounceValue(value);
        },300);

        return () => {
            clearTimeout(timerid)
        }
    },[value])

    return debounceValue
}
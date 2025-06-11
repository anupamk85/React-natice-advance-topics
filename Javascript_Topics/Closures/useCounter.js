import React,{useCallback, useState} from 'react'
// real life example of closures

const useCounter = (initailValue=0) => {
    const [count, setCount] = useState(initailValue);

    const incermentCounter = useCallback((prev) => setCount(prev+1), []);
    const decrementCounter = useCallback((prev) => setCount(prev-1),[])
    const resetCounter = useCallback(() => setCount(initailValue))

    return {count,incermentCounter,decrementCounter,resetCounter}


}

export default useCounter;


// Uses setCount(prev => prev + 1)
// The prev is the previous state — closure remembers it
// This is a closure:
// prev is not the current value of count, but the value at the moment the function is executed
// This ensures the latest value is always used, even if multiple calls happen quickly

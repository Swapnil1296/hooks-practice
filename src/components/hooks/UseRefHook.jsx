import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [counter, setCounter] = useState(0);
    const counterRef=useRef()

    const styleHeading = () => {
        if (counterRef.current) {
            counterRef.current.style.color= counter%2 ===0?"blue":"red"
        }
    }
    useEffect(() => {
        styleHeading();   
    },[counter])
 


    return (
      <>
            <div>UseRefHook</div>
            <h1 ref={counterRef}>{counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>increment </button>
            <button onClick={() => setCounter(counter>0? counter - 1 : 0)}> decrement </button>
            <button onClick={()=>setCounter(counter+15)}>incrementby 15 </button>
            <button onClick={() => setCounter(counter>15? counter - 15 : counter)}> decrement by 15 </button>
        </>
  )
}

export default UseRefHook
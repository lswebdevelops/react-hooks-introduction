import React, { useState } from "react";

const Counter = () => {
    const [count, setCount ] = useState(0);
    const upCounting = () => {
        setCount((setCount => (count + 1)))
    }
    const downCounting = () => {
        setCount((setCount => (count - 1)))
    }
    return( 
        <div 
        style={{
            display: "flex",
            gap: "15px",
            padding: "17px",
            backgroundColor: "firebrick",
            color: "white",
            

        }}>
        <button onClick={downCounting}>Count down</button>
          <div>{count}</div>
<button onClick={upCounting}>Count up</button>
        </div>
  )
}

export default Counter;
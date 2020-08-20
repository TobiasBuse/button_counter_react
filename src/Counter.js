// 1_1 Counter

import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>reset</button>
           
        </div>
    );
}

export default Counter;
import React, { useCallback, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Counter;
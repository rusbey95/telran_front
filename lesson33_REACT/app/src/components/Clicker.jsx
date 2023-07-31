import React, {useState} from 'react'

function Clicker() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((count) => count+1);
    }

    return (
        <div>
            <p>
                {count}
            </p>
            <button onClick={() => increment()}>Add + 1</button>
        </div>
    )
}

export default Clicker
import React, {useEffect, useState} from 'react'

function Test() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`Новое значение: ${count}`);
    }, [count])
    return (
        <>
            <p>
                {count}
            </p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Click on me
            </button>
        </>
    )
}

export default Test
import React, { useState, useEffect } from 'react';

function Timer() {
    const [num, setNum] = useState(0)

    useEffect((e) => {
        const timeout = setTimeout(() => {
            setNum((prevNum) => prevNum +1);
        }, 2000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);
    return (
        <div>{num}</div>
    )
}

export default Timer
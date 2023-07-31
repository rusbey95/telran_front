import React, { useState, useEffect} from "react"

function Local() {
    const [num, setNum] = useState(() => {
        return Number(localStorage.getItem('number')) ?? 0;
    });

    useEffect(() => {
        localStorage.setItem('number', num);
    }, [num]);
    
    return (
        <div>
            <p>{num}</p>
            <button onClick={() => setNum((prevNum) => prevNum + 1)}>Click on my</button>
        </div>
    )
}

export default Local
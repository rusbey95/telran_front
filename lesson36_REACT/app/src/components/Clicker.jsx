import React, { useState, useEffect } from 'react'

function Clicker() {
    const [num, setNum] = useState(0);

    const clickDoc = () => {
        setNum((prevNum) => prevNum + 1);
    }
    
    useEffect(() => {
        document.addEventListener('click', clickDoc);
        return () => {
            document.removeEventListener('click', clickDoc);
        };
    }, [num])


    return (
        <div>{num}</div>
    )
}

export default Clicker
import React, { useMemo } from 'react';

function ArraySum({listNumbers}) {
    const sum = useMemo(() => {
        return listNumbers.reduce((acc, cur) => acc + cur);
    }, [listNumbers]);
    
    // reference type
    // [1,2,3] !== [1,2,3]

    return (
        <div>{sum}</div>
    )
}

export default ArraySum;
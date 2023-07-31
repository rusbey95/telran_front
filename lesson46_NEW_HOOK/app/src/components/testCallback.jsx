import React, { useCallback } from 'react'

export function ParentComponent() {
    const handleClick = useCallback(() => {
        //logic
    }, [])
    return (
        <div>
            <ChildComp onClick={handleClick}/>
        </div>
    )
}

function ChildComp({ onClick }) {
    return <button onClick={onClick}></button>
}

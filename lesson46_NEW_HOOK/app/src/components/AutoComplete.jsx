import React, { useRef, useEffect } from 'react';

function AutoComplete() {
    const inputRef = useRef();
    const spanRef = useRef();

    const test = useRef([]);
    test.current.push('hello');
    console.log(test);

    useEffect(() => {
        const handleInputChange = () => {
            spanRef.current.innerText = inputRef.current.value;
        };
        inputRef.current.addEventListener('input', handleInputChange);

        return () => {
            inputRef.current.removeEventListener('input', handleInputChange);
        }
    }, []);
    return (
        <div>
            <input type="text" ref={inputRef} />
            <p>Value: <span ref={spanRef}></span></p>
        </div>
    )
}

export default AutoComplete;
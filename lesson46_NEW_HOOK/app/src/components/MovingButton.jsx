import React, { useRef } from 'react';

function MovingButton() {
    const buttonRef = useRef();
    //current
    // console.log(buttonRef);

    const handleMouseOver = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const btnWidth = buttonRef.current.offsetWidth;
        const btnHeight = buttonRef.current.offsetHeight;

        const maxX = windowWidth - btnWidth;
        const maxY = windowHeight - btnHeight;

        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);

        buttonRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
    }

    return (
        <button 
            ref={buttonRef} 
            onMouseOver={handleMouseOver} 
            style={{position: 'absolute', transition: 'all 0.4s'}}
        >
            Moving button
        </button>
    )
}

export default MovingButton;
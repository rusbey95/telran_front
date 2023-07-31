// hook useState => [state, setState]
import React, {useState} from 'react'

function Button() {
    const [color, setColor] = useState('yellow'); // useState('yellow') - initial state

    function randomColor() {
        // 16 777 215 - max color
        const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(newColor);
    }

    return (
        <button onClick={() => randomColor()} style={{backgroundColor: color, borderRadius: '10px', padding: '10px', cursor: 'pointer'}}>{color}</button>
    )
}

export default Button
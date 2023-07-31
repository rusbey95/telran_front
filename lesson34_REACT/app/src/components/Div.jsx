import React, {useState} from 'react'

function Div() {
    const [cordinates, setCoordinates] = useState({ x: 0, y: 0 });

    const hanldeMouseMove = (e) => {
        setCoordinates({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
        });
    };

    return (
        <div style={{
                width: '500px', 
                height: '500px',
                border: '1px solid red',
                marginTop: '40px',
                position: 'relative',
            }}
            onMouseMove={hanldeMouseMove}
        >

            <p>cordinates X - {cordinates.x}</p>
            <p>cordinates Y - {cordinates.y}</p>
        </div>
    )
}

export default Div;
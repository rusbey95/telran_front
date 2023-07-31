import React, { useRef } from 'react';
import './ProductDescr.css';

function ProductDescr() {
    const descriptionRef = useRef(null);

    const toggleDescription = () => {
        descriptionRef.current.classList.toggle('show');
    }

    return (
        <>
            <button onClick={toggleDescription}>Show description</button>
            <div ref={descriptionRef} className="description">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet placeat dolorem fuga voluptatibus dolores dicta nobis, doloribus rem harum veritatis sed minima voluptates labore fugit cumque qui, nostrum vel at!
                </p>
            </div>
        </>
    )
}

export default ProductDescr;
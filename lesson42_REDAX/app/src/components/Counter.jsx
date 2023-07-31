import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Counter() {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({
            type: 'INCREMENT'
        });
    }

    const dicrement = () => {
        dispatch({
            type: 'DECREMENT'
        });
    }

    return (
        <div>
            <button onClick={dicrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter
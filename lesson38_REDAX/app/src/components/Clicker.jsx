import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//useSelector, useDispath
import { incrementNum, decrementNum } from '../actions/number';

function Clicker() {
    const number = useSelector((state) => state.clicker);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementNum());
    };
    const handleDecrement = () => {
        dispatch(decrementNum());
    };

    return (
        <div>
            <p>Число: {number}</p>
            <button onClick={handleIncrement}>увеличить на 4</button>
        </div>
    )
}

export default Clicker
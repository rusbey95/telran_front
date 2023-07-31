import React, { useState } from 'react';

// - Задача: Создать компонент, в котором есть div с размерами 500X500. Когда мышь входит на территорию этого div и выходит из него цвет данного блока должен меняться на рандомный. 

// разбор задачи
//         - Создаем компонент и создаем блок с указанными размерами.
//         - Создаем функцию, которая возвращает случайный цвет.
//         - Создаем состояние, которое принимает в качестве начального значения случайный цвет
//         - Создаем обработчик событий и привязываем его на события onMouseOut, onMouseOver
function FixBox() {
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const [count, setCount] = useState(0);

    return (
        <div style={{
                width: '500px',
                height: '500px',
                backgroundColor: getRandomColor(),
            }}
            onMouseOut={() => setCount(count + 1)}
            onMouseOver={() => setCount(count + 1)}
        >
            {getRandomColor()}
        </div>
    )
}

export default FixBox
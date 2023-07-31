import React, { useState, useMemo } from 'react';

// function Factorial() {
//     const [num, setNum] = useState(1);

//     const handleChange = (e) => {
//         setNum(Number(e.target.value));
//     };
//     const factorial = () => {
//         let result = 1;
//         for (let i = 1; i <= num; i++) {
//             result *= i;
//         }
//         return result;
//     };


//     return (
//         <>
//             <h2>Factorial</h2>
//             <input type="number" value={num} onChange={handleChange} />
//             <p>
//                 Factorial {num} = {factorial()}
//             </p>
//         </>
//     )
// }
function Factorial() {
    const [num, setNum] = useState(1);

    const handleChange = (e) => {
        setNum(Number(e.target.value));
    };
    const factorial = useMemo(() => {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }, [num]);


    return (
        <>
            <h2>Factorial</h2>
            <input type="number" value={num} onChange={handleChange} />
            <p>
                Factorial {num} = {factorial}
            </p>
        </>
    )
}

export default Factorial;
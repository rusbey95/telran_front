// object style
const elem = document.getElementById('about');

// elem.style.color = 'red';
// elem.style.fontSize = '60px';

// console.log(elem.style);
const body = document.querySelector('body');

// const div = document.createElement('div');
// div.style.border = '1px solid #000';
// div.style.width = '100px';
// div.style.height = '100px';
// div.onmouseover.style.background = '#000';
// div.onmouseout.style.background = '#ddd';
// body.appendChild(div);


// div.onmouseover = () => {
//     div.style.backgroundColor = '#000';
// }
// div.onmouseout = () => {
//     div.style.backgroundColor = '#fff';
// }

// Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.
for (let i = 0; i <= 255; i+=5) {
    let divTest = document.createElement('div');
    divTest.style.width = '100px';
    divTest.style.height = '100px';
    divTest.style.margin = '10px';
    divTest.style.transition = 'all 0.1s';
    divTest.style.display = 'inline-block';
    divTest.style.border = '1px solid yellow';
    divTest.style.backgroundColor = `rgb(128, 128, ${i})`;
    
    divTest.innerText = i;
    divTest.onmouseover = () => {
        divTest.style.backgroundColor = `rgb(128, 128, ${i + 50})`;
    }
    divTest.onmouseout = () => {
        divTest.style.backgroundColor = `rgb(128, 128, ${i})`;
    }

    divTest.onclick = () => {
        if (divTest.style.width === '120px') {
            divTest.style.width = '100px';
            divTest.style.height = '100px';
            divTest.style.margin = '10px';
        } else {
            divTest.style.width = '120px';
            divTest.style.height = '120px';
            divTest.style.margin = '0px';
        }
    }
    // body.append(divTest);
} 

// classList

// classList.add('start');
// classList.remove('start');
// classList.replace('start', 'end');

let divP = document.createElement('div');
// body.append(divP);
for (let i = 0; i < 10; i++) {
    let p = document.createElement('p');
    p.innerText = i;
    divP.append(p);
    p.onclick = () => {
        p.classList.toggle('active');
        // if (p.classList[0] === 'active') {
        //     p.classList.remove('active');
        // } else {
        //     p.classList.add('active');
        // }
    }
}


const words = [
    {
        ru: "собака",
        en: "dog",
    },
    {
        ru: "кошка",
        en: "cat",
    },
    {
        ru: "стол",
        en: "table",
    },
    {
        ru: "телефон",
        en: "telephone",
    },
];

// for (let i = 0; i < words.length; i++) {
//     let div = document.createElement('div');
//     let p = document.createElement('p');

//     p.innerText = words[i].en;
//     div.appendChild(p);
//     body.appendChild(div);

//     div.onclick = () => {
//         if (p.innerText === words[i].en) {
//             p.innerText = words[i].ru;
//         } else {
//             p.innerText = words[i].en;
//         }
//     }
// }


for (let i = 0; i < words.length; i++) {
    let div = document.createElement('div');

    let pRu = document.createElement('p');
    pRu.innerText = words[i].ru;
    pRu.classList.add('hide');

    let pEn = document.createElement('p');
    pEn.innerText = words[i].en;
    pEn.classList.add('show');

    div.append(pEn, pRu);
    body.append(div);

    div.onclick = () => {
        if (pEn.classList[0] === 'show') {
            pEn.classList.replace('show', 'hide');
            pRu.classList.replace('hide', 'show');
        } else {
            pEn.classList.replace('hide', 'show');
            pRu.classList.replace('show', 'hide');
        }
    }
}
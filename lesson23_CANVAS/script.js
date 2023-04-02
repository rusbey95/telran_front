// const canvas = document.querySelector('#myCanvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// window.addEventListener('resize', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     draw();
// });

// // getContext - 2d (method of canvas)
// // WebGl - webgl2, webgl3

// // strokeRect - прямоугольник (контур)
// // strikeRect(x, y, width, height)

// // strikeStyle - добавляет цвет
// // strokeStyle = 'red';

// // fillRect - прямоугольник (заливка)
// // fillRect(x, y, width, height)

// function draw() {
//     // const rec = canvas.getContext('2d');
//     // const recWidth = 150;
//     // const recHeight = 150;
//     // const recPaddingX = 20;
//     // const recPaddingY = 20;

//     // rec.strokeStyle = 'red';
//     // rec.lineWidth = 10;
//     // rec.strokeRect(recPaddingX, recPaddingY, recWidth, recHeight);

//     // rec.fillStyle = 'orange';
//     // rec.fillRect(canvas.width - 150 - recPaddingX, recPaddingY, recWidth, recHeight);


//     // отрисовать прямоугольник, который занимает весь размер экрана с отступами по 10 единиц от каждой стороны.
//     // rec.strokeStyle = 'red';
//     // rec.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);



//     // const ctx = canvas.getContext('2d');
//     // const numOfRec = 10;
//     // const avgH = canvas.height / numOfRec;
//     // const avgW = canvas.width / numOfRec;

//     // for (i = 0; i < numOfRec; i++) {
//     //     let recH = avgH * (i + 1);
//     //     let recX = avgW * i;
//     //     let recY = canvas.height - recH;

//     //     ctx.fillStyle = 'orange';
//     //     ctx.fillRect(recX, recY, avgW, recH);
//     // }




//     // Написать цикл, который выводит 10 квадратов друг в друге.
//     // const square = canvas.getContext('2d');
//     // const numOfSq = 20;
//     // const gap = (canvas.width / numOfSq) / 2;
//     // let minWH = canvas.width / numOfSq;

//     // for (i = 0; i < numOfSq; i++) {
//     //     const squareX = canvas.width / 2 - minWH / 2;
//     //     const squareY = canvas.height / 2 - minWH / 2;

//     //     square.strokeRect(squareX, squareY, minWH, minWH);
//     //     minWH += gap;
//     // }



//     // Создание линий
//     // beginPath - начало пути
//     // moveTo(x, y) - 50, 50
//     // lineTo(x, y) - 200, 50
//     // const ctx = canvas.getContext('2d');
//     // ctx.beginPath();
//     // ctx.strokeStyle = 'blue';
//     // ctx.moveTo(50, 50);
//     // ctx.lineTo(250, 50);
//     // ctx.lineTo(450, 250);

//     // // ctx.stroke();
//     // ctx.fill();


//     // // треугольник
//     const triangle = canvas.getContext("2d");
//     triangle.beginPath();
//     triangle.moveTo(800, 40);
//     triangle.lineTo(1000, 40);
//     triangle.lineTo(800, 450);
//     triangle.closePath();


//     // triangle.fillStyle = 'red'

//     triangle.fill();

//     // triangle.strokeStyle = 'purple';
//     // triangle.lineWidth = 20;
//     // triangle.strokeRect(800, 40, 300, 400);

// }
// draw();


const canvas = document.querySelector('#myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    circle();
});


// arc(x, y, radius, startAngle, endAngle, clockwise) - создание круга
// clockwise by default - true / false
function circle() {
    const ctx = canvas.getContext('2d');
    // ctx.beginPath();
    // ctx.strokeStyle = "#ddd";
    // ctx.arc(160, 160, 100, 0, 2 * Math.PI, false);
    // ctx.stroke();
    // ctx.closePath();

    // const centerX = canvas.width / 2;
    // const centerY = canvas.height / 2;
    // let radius = 10;
    // for (let i = 0; i < 10; i++) {
    //     ctx.beginPath();
    //     ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    //     ctx.stroke();
    //     radius += 20;
    //     ctx.closePath();
    // }




    // let x = 200;
    // let y = 200;
    // for (let i = 0; i < 4; i++) {
    //     if (i == 1 || i == 2) {
    //         ctx.beginPath()
    //         ctx.arc(x, y, 100, 0, Math.PI)
    //         ctx.stroke()
    //          ctx.closePath();
    //     } else {
    //         ctx.beginPath()
    //         ctx.arc(x, y, 100, 0, 2 * Math.PI)
    //         ctx.stroke()
    //          ctx.closePath();
    //     }

    //     x += 200
    // }



    // ctx.beginPath()
    // ctx.arc(100, 100, 100, 0, 2 * Math.PI)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.arc(canvas.width - 100, 100, 100, 0, 2 * Math.PI)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.arc(100, canvas.height - 100, 100, 0, 2 * Math.PI)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.arc(canvas.width - 100, canvas.height - 100, 100, 0, 2 * Math.PI)
    // ctx.stroke()


    // const data = [
    //     {
    //         title: 'java',
    //         amount: 120000
    //     },
    //     {
    //         title: 'python',
    //         amount: 140000
    //     },
    //     {
    //         title: 'golang',
    //         amount: 130000
    //     },
    //     {
    //         title: 'javascript',
    //         amount: 150000
    //     },
    // ];

    // const gap = 20;
    // const height = 60;
    // const maxWidth = canvas.width - 2 * gap;
    // const maxAmount = data.reduce((acc, cur) => acc > cur.amount ? acc : cur.amount, 0);
    // let y = gap;
    // data.forEach((elem) => {
    //     const length = (elem.amount / maxAmount) * maxWidth;
    //     ctx.fillStyle = 'green';
    //     ctx.fillRect(gap, y, length, height);
    //     ctx.fillStyle = 'white';
    //     ctx.font = '16px Arial';
    //     ctx.fillText(`${elem.title} - ${elem.amount}`, gap * 2, y + height / 2);
    //     y += gap + height;
    // });

}
circle();

//fillText(text, x, y);


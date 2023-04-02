const canvas = document.querySelector('#myCanvas');
const rangeInput = document.querySelector('#plotSize');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

class Plot {
    static size = 50;
    static plots = [];
    static change_size(ctx, value = 1) {
        Plot.size = value;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Plot.plots.forEach(element => element.render(ctx));
    }

    constructor(arrX, func, lineColor) {
        this.arrX = arrX;
        this.func = func;
        this.lineColor = lineColor;
        Plot.plots.push(this);
    }

    render(ctx) {
        ctx.strokeStyle = this.lineColor;
        ctx.beginPath();
        this.arrX.forEach(element => {
            let y = this.func(element);
            ctx.lineTo(element * Plot.size + canvas.width / 2, y * Plot.size + canvas.height / 2);
        });
        ctx.stroke();
    }
}

const listX = [...new Array(10000)].map((value, index) => index * 0.01 - 50);  // оператор spread

const parabola = new Plot(listX, (x) => -(x ** 2), 'orange');
parabola.render(ctx);

const sin = new Plot(listX, Math.sin, 'red');
sin.render(ctx);

rangeInput.addEventListener('input', (e) => {
    const value = e.target.value;
    Plot.change_size(ctx, value);
});
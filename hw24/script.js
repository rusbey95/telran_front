const canvas = document.querySelector('#myCanvas')
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

class Circle {
    constructor(x = 0, y = 0, float = 1, colorStroke = 'black', colorFill = 'white') {
        this.x = x;
        this.y = y;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.float = float;
        this.colorStroke = colorStroke;
        this.colorFill = colorFill;
    }

    area() {
        console.log(Math.PI * Math.pow(this.float, 2));
    }

    render(ctx) {
        ctx.strokeStyle = this.colorStroke;
        ctx.fillStyle = this.colorFill;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.float, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.fill();
    }
}
const circleResult = new Circle(160, 160, 35, 'orange', 'yellow');
circleResult.render(ctx);
circleResult.area();
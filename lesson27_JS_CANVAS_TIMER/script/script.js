const canvas = document.querySelector('#watch');
canvas.width = 500;
canvas.height = 500;

const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#00ffff';
ctx.lineWidth = 17;
ctx.shadowColor = '#00ffff';
ctx.shadowBlur = 15;

function convertDegToRad(deg) {
    return (deg * Math.PI) / 180;
}

function render() {
    const now = new Date();
    const today = now.toDateString();
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ms = now.getMilliseconds();
    const slowS = seconds + ms / 1000;
    const slowM = minutes + slowS / 60;
    const gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);

    gradient.addColorStop(0, '#03303a');
    gradient.addColorStop(1, '#000000');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 200, convertDegToRad(270), convertDegToRad((hours * 30) - 90));
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 170, convertDegToRad(270), convertDegToRad((slowM * 6) - 90));
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 140, convertDegToRad(270), convertDegToRad((slowS * 6) - 90));
    ctx.stroke();

    ctx.font = '22px Helvetica';
    ctx.fillStyle = '#00ffff';
    ctx.fillText(today, 170, canvas.height / 2);

    ctx.font = '20px Helvetica';
    ctx.fillStyle = '#00ffff';
    ctx.fillText(`${time} : ${ms}`, 170, canvas.height / 2 + 30);
}

setInterval(render, 50);

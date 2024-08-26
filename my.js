// ve tren canvas

let ball = new Ball(300, 300, 20, "red", 2);
ball.draw();

let ball2 = new Ball(200, 100, 20, "green", 4);
ball2.draw();

setInterval(() => {
    clearScreen();
    ball.move();
    ball2.move();
}, 10)

function  clearScreen() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
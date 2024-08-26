class Ball {
    x;
    y;
    radius;
    color;
    flag;
    speed;

    constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.flag = "top";
        this.speed = speed;
    }

    draw() {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // ctx.fillStyle = this.color;
        // ctx.fill();
        // ctx.closePath();
        const image = new Image();
        image.src = "soccer_ball2.svg";
        ctx.drawImage(image, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);

    }

    moveTop() {
        this.y -= this.speed;
    }

    moveBottom() {
        this.y += this.speed;
    }

    move() {

        if (this.y <= this.radius) {
            this.flag = "down"
        } else if (this.y + this.radius >= 500){
            this.flag = "top"
        }

        switch (this.flag) {
            case "top":
                this.moveTop();
                break;
           case "down":
               this.moveBottom();
               break;
        }

        this.draw();
    }


}
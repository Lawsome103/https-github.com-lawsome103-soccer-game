export class Ball {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    radius: number;

    constructor(x: number = 400, y: number = 300, radius: number = 8) {
        this.position = { x, y };
        this.velocity = { x: 0, y: 0 };
        this.radius = radius;
    }

    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = "white";
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }

    resetPosition(x: number, y: number) {
        this.position = { x, y };
        this.velocity = { x: 0, y: 0 };
    }

    checkCollision(other: { position: { x: number; y: number }; radius: number }): boolean {
        const dx = this.position.x - other.position.x;
        const dy = this.position.y - other.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.radius + other.radius;
    }
}

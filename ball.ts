export class Ball {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    radius: number;

    constructor(x: number, y: number, radius: number) {
        this.position = { x, y };
        this.velocity = { x: 0, y: 0 };
        this.radius = radius;
    }

    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
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
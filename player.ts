export class Player {
    name: string;
    position: { x: number; y: number };
    score: number;
    radius: number;

    constructor(name: string, position: { x: number; y: number }) {
        this.name = name;
        this.position = position;
        this.score = 0;
        this.radius = 10;
    }

    move(newPosition?: { x: number; y: number }) {
        if (newPosition) {
            this.position = newPosition;
        }
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = "blue";
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }

    kickBall() {
        // Logic for kicking the ball
    }

    updateScore(points: number) {
        this.score += points;
    }
}

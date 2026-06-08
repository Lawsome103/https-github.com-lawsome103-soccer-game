class Player {
    name: string;
    position: { x: number; y: number };
    score: number;

    constructor(name: string, position: { x: number; y: number }) {
        this.name = name;
        this.position = position;
        this.score = 0;
    }

    move(newPosition: { x: number; y: number }) {
        this.position = newPosition;
    }

    kickBall() {
        // Logic for kicking the ball
    }

    updateScore(points: number) {
        this.score += points;
    }
}
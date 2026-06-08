export class Field {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    drawField(context: CanvasRenderingContext2D) {
        context.fillStyle = "green";
        context.fillRect(0, 0, this.width, this.height);
        context.strokeStyle = "white";
        context.strokeRect(0, 0, this.width, this.height);
        // Additional field markings can be drawn here
    }

    checkGoal(ballPosition: { x: number; y: number }, goalWidth: number): boolean {
        const goalArea = {
            left: (this.width - goalWidth) / 2,
            right: (this.width + goalWidth) / 2,
            top: 0,
            bottom: 10 // Assuming the goal is at the top of the field
        };

        return ballPosition.y <= goalArea.bottom && 
               ballPosition.x >= goalArea.left && 
               ballPosition.x <= goalArea.right;
    }
}
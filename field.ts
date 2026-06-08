export class Field {
    width: number;
    height: number;

    constructor(width: number = 800, height: number = 600) {
        this.width = width;
        this.height = height;
    }

    drawField(context: CanvasRenderingContext2D) {
        context.fillStyle = "green";
        context.fillRect(0, 0, this.width, this.height);
        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.strokeRect(0, 0, this.width, this.height);
        
        // Draw center line
        context.beginPath();
        context.moveTo(this.width / 2, 0);
        context.lineTo(this.width / 2, this.height);
        context.stroke();
        
        // Draw center circle
        context.beginPath();
        context.arc(this.width / 2, this.height / 2, 50, 0, Math.PI * 2);
        context.stroke();
    }

    checkGoal(ballPosition: { x: number; y: number }, goalWidth: number = 100): boolean {
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

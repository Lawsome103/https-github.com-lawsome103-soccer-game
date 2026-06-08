export function displayScore(score: number): void {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `Score: ${score}`;
    }
}

export function showGameOver(winner: string): void {
    const gameOverElement = document.getElementById('game-over');
    if (gameOverElement) {
        gameOverElement.innerText = `${winner} wins! Game Over!`;
        gameOverElement.style.display = 'block';
    }
}

export function updateUI(playerScore: number, opponentScore: number): void {
    displayScore(playerScore);
    displayScore(opponentScore);
}
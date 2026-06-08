import { Player } from './player';

export function displayScore(players: Player[]): void {
    const scoreElement = document.getElementById('score');
    if (scoreElement && players.length > 0) {
        scoreElement.innerText = `Score - ${players[0].name}: ${players[0].score} | ${players[1]?.name || 'Player 2'}: ${players[1]?.score || 0}`;
    }
}

export function showGameOver(winner: string): void {
    const gameOverElement = document.getElementById('game-over');
    if (gameOverElement) {
        gameOverElement.innerText = `${winner} wins! Game Over!`;
        gameOverElement.style.display = 'block';
    }
}

export function updateUI(players: Player[]): void {
    displayScore(players);
}

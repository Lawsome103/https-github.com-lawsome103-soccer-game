// This file serves as the main entry point for the soccer game. It initializes the game loop, manages game states, and coordinates interactions between players, the ball, and the field.

import { Player } from './player';
import { Ball } from './ball';
import { Field } from './field';
import { displayScore, showGameOver } from './ui';

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const field = new Field();
const players: Player[] = [
    new Player('Player 1', { x: 50, y: 100 }),
    new Player('Player 2', { x: 150, y: 100 })
];
const ball = new Ball();

let gameRunning = true;

function gameLoop() {
    if (!gameRunning) return;

    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function update() {
    players.forEach(player => player.move());
    ball.move();
    field.checkGoal(ball);
}

function draw() {
    field.drawField(ctx);
    players.forEach(player => player.draw(ctx));
    ball.draw(ctx);
    displayScore(players);
}

function startGame() {
    gameRunning = true;
    gameLoop();
}

function endGame() {
    gameRunning = false;
    showGameOver();
}

// Start the game when the window loads
window.onload = startGame;
# Soccer Game

Welcome to the Soccer Game project! This document provides an overview of the project, setup instructions, and gameplay details.

## Project Overview

This project is a simple soccer game built using TypeScript. The game features players, a ball, and a field, allowing users to experience the excitement of soccer. The main components of the game include:

- **Players**: Each player has a name, position, and score. Players can move, kick the ball, and update their scores.
- **Ball**: The ball has properties such as position, velocity, and radius. It can move, reset its position, and check for collisions.
- **Field**: The soccer field defines the dimensions and boundaries of the game. It can render the field and check if a goal has been scored.
- **User Interface**: The UI displays the score and game status, providing feedback to the players.

## Setup Instructions

To get started with the Soccer Game project, follow these steps:

1. **Clone the Repository**:
   ```
   git clone https://github.com/yourusername/soccer-game.git
   cd soccer-game
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed. Then, run the following command to install the necessary packages:
   ```
   npm install
   ```

3. **Compile TypeScript**:
   Use the TypeScript compiler to compile the TypeScript files:
   ```
   npx tsc
   ```

4. **Run the Game**:
   Open the `public/index.html` file in your web browser to start playing the game.

## Gameplay

- Use the arrow keys to move your player.
- Press the spacebar to kick the ball.
- The game keeps track of scores, and the first player to reach a certain score wins.

## Contributing

If you would like to contribute to the project, feel free to submit a pull request or open an issue for discussion.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
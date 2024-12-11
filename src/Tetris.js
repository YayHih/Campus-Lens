import React, { useState, useEffect, useRef } from 'react';
import './Tetris.css';

// Define the shapes of the Tetriminos
const TETROMINOS = [
  { shape: [[1, 1, 1], [0, 1, 0]], color: 'cyan' }, // T
  { shape: [[1, 1, 1, 1]], color: 'yellow' }, // O
  { shape: [[1, 1], [1, 1]], color: 'green' }, // Square
  { shape: [[1, 1, 0], [0, 1, 1]], color: 'red' }, // S
  { shape: [[0, 1, 1], [1, 1, 0]], color: 'purple' }, // Z
  { shape: [[1, 1, 0], [1, 0, 0]], color: 'blue' }, // L
  { shape: [[0, 1, 1], [1, 0, 0]], color: 'orange' }, // J
];

function Tetris() {
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentTetro, setCurrentTetro] = useState(generateTetro());
  const [position, setPosition] = useState({ x: 4, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const gameIntervalRef = useRef(null); // For game loop control
  const lastUpdateTimeRef = useRef(0); // Track time for block descent

  // Handle key press events
  useEffect(() => {
    if (gameOver) return;

    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        moveBlockLeft();
      } else if (e.key === 'ArrowRight') {
        moveBlockRight();
      } else if (e.key === 'ArrowDown') {
        moveBlockDown();
      } else if (e.key === 'ArrowUp') {
        rotateBlock();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gameOver, position, currentTetro]);

  // Function to create an empty Tetris board
  function createEmptyBoard() {
    return Array.from({ length: 20 }, () => Array(10).fill(null)); // 20 rows, 10 columns
  }

  // Generate a random tetromino
  function generateTetro() {
    const randomIndex = Math.floor(Math.random() * TETROMINOS.length);
    return TETROMINOS[randomIndex];
  }

  // Start the game loop with smoother animation using requestAnimationFrame
  useEffect(() => {
    if (gameOver) return;

    const gameLoop = (timestamp) => {
      if (timestamp - lastUpdateTimeRef.current > 500) { // Every 500ms
        moveBlockDown();
        lastUpdateTimeRef.current = timestamp;
      }
      gameIntervalRef.current = requestAnimationFrame(gameLoop);
    };

    gameIntervalRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(gameIntervalRef.current);
  }, [gameOver, position, currentTetro]);

  // Move the block down by 1 row
  function moveBlockDown() {
    const newPosition = { x: position.x, y: position.y + 1 };
    if (!checkCollision(newPosition, currentTetro)) {
      setPosition(newPosition);
    } else {
      placeTetro();
      setCurrentTetro(generateTetro());
      setPosition({ x: 4, y: 0 }); // Reset position for new Tetrimino
    }
  }

  // Move the block to the left
  function moveBlockLeft() {
    const newPosition = { x: position.x - 1, y: position.y };
    if (!checkCollision(newPosition, currentTetro)) {
      setPosition(newPosition);
    }
  }

  // Move the block to the right
  function moveBlockRight() {
    const newPosition = { x: position.x + 1, y: position.y };
    if (!checkCollision(newPosition, currentTetro)) {
      setPosition(newPosition);
    }
  }

  // Rotate the block (clockwise)
  function rotateBlock() {
    const rotatedTetro = rotate(currentTetro);
    if (!checkCollision(position, rotatedTetro)) {
      setCurrentTetro(rotatedTetro);
    }
  }

  // Rotate the Tetrimino matrix (clockwise)
  function rotate(tetro) {
    return {
      ...tetro,
      shape: tetro.shape[0].map((_, index) => tetro.shape.map(row => row[index])).reverse(),
    };
  }

  // Check if the current block collides with the board or other blocks
  function checkCollision(newPosition, tetro) {
    const { x, y } = newPosition;
    for (let row = 0; row < tetro.shape.length; row++) {
      for (let col = 0; col < tetro.shape[row].length; col++) {
        if (tetro.shape[row][col]) {
          const newX = x + col;
          const newY = y + row;
          if (newX < 0 || newX >= 10 || newY >= 20 || (newY >= 0 && board[newY][newX])) {
            return true;
          }
        }
      }
    }
    return false;
  }

  // Place the Tetrimino on the board
  function placeTetro() {
    const newBoard = board.map(row => row.slice());
    for (let row = 0; row < currentTetro.shape.length; row++) {
      for (let col = 0; col < currentTetro.shape[row].length; col++) {
        if (currentTetro.shape[row][col]) {
          const newX = position.x + col;
          const newY = position.y + row;
          if (newY >= 0) newBoard[newY][newX] = currentTetro.color;
        }
      }
    }

    // Check for full lines
    const newBoardWithClearedLines = newBoard.filter(row => row.some(cell => cell === null));
    while (newBoardWithClearedLines.length < 20) {
      newBoardWithClearedLines.unshift(Array(10).fill(null)); // Add empty rows at the top
    }

    setBoard(newBoardWithClearedLines);
    if (position.y === 0 && checkCollision(position, currentTetro)) {
      setGameOver(true);
    }
  }

  // Render the game board
  function renderBoard() {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, colIndex) => (
          <div key={colIndex} className={`cell ${cell ? 'filled' : ''}`}></div>
        ))}
      </div>
    ));
  }

  return (
    <div className="tetris-container">
      <h1>Tetris Game</h1>
      <div className="instructions">
        <h3>Instructions</h3>
        <ul>
          <li>Use the arrow keys to move and rotate the Tetriminos:</li>
          <li><strong>Left Arrow</strong>: Move left</li>
          <li><strong>Right Arrow</strong>: Move right</li>
          <li><strong>Down Arrow</strong>: Move down faster</li>
          <li><strong>Up Arrow</strong>: Rotate the block</li>
        </ul>
      </div>
      <div className="game-board">
        {renderBoard()}
      </div>
      {gameOver && <div className="game-over">Game Over!</div>}
    </div>
  );
}

export default Tetris;

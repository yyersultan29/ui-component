import React, { useState, useEffect, useCallback } from 'react';

import './styles.css';
import { GameStatus, MazeCell, MazeConfig, MazeGrid, Position } from './types';
import { findPath, generateMaze } from './utils';

// Компонент лабиринта с полной типизацией
const MazeGame: React.FC = () => {
  const [maze, setMaze] = useState<MazeGrid>([]);
  const [botPath, setBotPath] = useState<Position[]>([]);
  const [botPosition, setBotPosition] = useState<Position>([0, 0]);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);

  // Инициализация лабиринта с мемоизацией
  const initializeMaze = useCallback(() => {
    const config: MazeConfig = {
      width: 10,
      height: 10,
      wallProbability: 0.3,
    };

    const newMaze = generateMaze(config);
    setMaze(newMaze);

    const path = findPath(newMaze);
    if (path) {
      setBotPath(path.slice(1)); // Исключаем стартовую позицию
      setBotPosition([0, 0]);
      setGameStatus(GameStatus.Playing);
    } else {
      initializeMaze(); // Пересоздаем если путь не найден
    }
  }, []);

  // Движение бота с эффектом
  useEffect(() => {
    if (botPath.length === 0) {
      setGameStatus(GameStatus.Completed);
      return;
    }

    const timer = setTimeout(() => {
      const [nextX, nextY] = botPath[0];
      setBotPosition([nextX, nextY]);
      setBotPath((prev) => prev.slice(1));
    }, 500);

    return () => clearTimeout(timer);
  }, [botPath]);

  // Инициализация при монтировании
  useEffect(() => {
    initializeMaze();
  }, [initializeMaze]);

  // Рендеринг лабиринта
  const renderMazeCell = (
    cell: MazeCell,
    rowIndex: number,
    cellIndex: number,
  ): JSX.Element => {
    const isBot = botPosition[0] === rowIndex && botPosition[1] === cellIndex;
    const isStart = rowIndex === 0 && cellIndex === 0;
    const isEnd =
      rowIndex === maze.length - 1 && cellIndex === maze[0].length - 1;

    return (
      <div
        key={cellIndex}
        className={`maze-cell ${
          cell === 1
            ? 'wall'
            : isBot
              ? 'bot'
              : isStart
                ? 'start'
                : isEnd
                  ? 'end'
                  : ''
        }`}
      />
    );
  };

  return (
    <div className="maze-game">
      <h1>Лабиринт: Найди выход!</h1>
      <div className="maze-container">
        {maze.map((row, rowIndex) => (
          <div key={rowIndex} className="maze-row">
            {row.map((cell, cellIndex) =>
              renderMazeCell(cell, rowIndex, cellIndex),
            )}
          </div>
        ))}
      </div>
      {gameStatus === GameStatus.Completed && (
        <div className="game-complete">
          <h2>🎉 Бот нашел выход! 🎉</h2>
          <button onClick={initializeMaze}>Новый лабиринт</button>
        </div>
      )}
    </div>
  );
};

export default MazeGame;

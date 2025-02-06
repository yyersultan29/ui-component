// Типы для поиска пути
export interface PathNode {
  position: Position;
  cost: number;
  heuristic: number;
}

// Типы для лабиринта и игры
export type MazeCell = 0 | 1; // 0 - проход, 1 - стена
export type MazeGrid = MazeCell[][];
export type Position = [number, number];

// Интерфейс для параметров лабиринта
export interface MazeConfig {
  width: number;
  height: number;
  wallProbability?: number;
}

// Перечисление для статусов игры
export enum GameStatus {
  Playing = 'playing',
  Completed = 'completed',
}

import { MazeConfig, MazeGrid, PathNode, Position } from './types';

// Генерация лабиринта с типизацией
export const generateMaze = ({
  width,
  height,
  wallProbability = 0.3,
}: MazeConfig): MazeGrid => {
  const maze: MazeGrid = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => 0),
  );

  // Случайные препятствия
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (Math.random() < wallProbability) {
        maze[i][j] = 1; // Стена
      }
    }
  }

  // Очистка начала и конца
  maze[0][0] = 0; // Старт
  maze[height - 1][width - 1] = 0; // Выход

  return maze;
};

// Алгоритм поиска пути (A*) с типизацией
export const findPath = (maze: MazeGrid): Position[] | null => {
  const height = maze.length;
  const width = maze[0].length;
  const start: Position = [0, 0];
  const end: Position = [height - 1, width - 1];

  const directions: Position[] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const isValid = (x: number, y: number): boolean =>
    x >= 0 && x < height && y >= 0 && y < width && maze[x][y] === 0;

  const heuristic = (a: Position, b: Position): number =>
    Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

  const openSet: PathNode[] = [
    {
      position: start,
      cost: 0,
      heuristic: heuristic(start, end),
    },
  ];
  const closedSet = new Set<string>();
  const cameFrom = new Map<string, Position>();

  while (openSet.length > 0) {
    // Сортировка по общей стоимости
    openSet.sort((a, b) => a.cost + a.heuristic - (b.cost + b.heuristic));

    const currentNode = openSet.shift()!;
    const current = currentNode.position;

    if (current[0] === end[0] && current[1] === end[1]) {
      const path: Position[] = [current];
      let temp: Position = current;

      while (cameFrom.has(temp.join(','))) {
        temp = cameFrom.get(temp.join(','))!;
        path.unshift(temp);
      }
      return path;
    }

    closedSet.add(current.join(','));

    for (const [dx, dy] of directions) {
      const next: Position = [current[0] + dx, current[1] + dy];
      const nextKey = next.join(',');

      if (!isValid(next[0], next[1]) || closedSet.has(nextKey)) continue;

      const newCost = currentNode.cost + 1;
      const totalHeuristic = heuristic(next, end);

      const existingNodeIndex = openSet.findIndex(
        (item) => item.position[0] === next[0] && item.position[1] === next[1],
      );

      if (existingNodeIndex === -1) {
        openSet.push({
          position: next,
          cost: newCost,
          heuristic: totalHeuristic,
        });
        cameFrom.set(nextKey, current);
      } else if (newCost < openSet[existingNodeIndex].cost) {
        openSet[existingNodeIndex] = {
          position: next,
          cost: newCost,
          heuristic: totalHeuristic,
        };
        cameFrom.set(nextKey, current);
      }
    }
  }

  return null;
};

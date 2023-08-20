type Size = {
  rows: number;
  cols: number;
};

type Position = {
  row: number;
  col: number;
};

export default class Shape {
  start: Position;
  end: Position;
  size: Size;

  lastPosition: {
    start: Position;
    end: Position;
  };
  shape: Array<Array<number>>;

  constructor() {
    this.shape = getShape();

    this.size = {
      rows: this.shape.length,
      cols: this.shape[0].length,
    };
    this.start = {
      row: 0,
      col: 0,
    };
    this.end = {
      row: this.shape.length,
      col: this.shape[0].length,
    };
  }

  getByPosition(row: number, col: number) {
    return this.shape[row - this.start.row][col - this.start.col];
  }

  shiftRight() {
    this.start.col++;
    this.end.col++;
  }
  shiftLeft() {
    this.start.col--;
    this.end.col--;
  }
  shiftBottom() {
    this.start.row++;
    this.end.row++;
  }
}

export function getShape() {
  const shapes = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  return shapes[Math.floor(Math.random() * shapes.length)];
}
export const SHAPES = [
  [[[1], [1], [1], [1]], [[1, 1, 1, 1]]],
  [
    [
      [-1, 1],
      [-1, 1],
      [1, 1],
    ],
    [
      [1, -1],
      [1, -1],
      [1, 1],
    ],
    [
      [1, -1, -1],
      [1, 1, 1],
    ],
    [
      [1, 1, 1],
      [-1, -1, 1],
    ],
  ],
  [
    [
      [1, 1],
      [1, 1],
    ],
  ],
  [
    [
      [1, 1, -1],
      [-1, 1, 1],
    ],
    [
      [-1, 1, 1],
      [1, 1, -1],
    ],
    [
      [1, -1],
      [1, 1],
      [-1, 1],
    ],
    [
      [-1, 1],
      [1, 1],
      [1, -1],
    ],
  ],
  [
    [
      [-1, 1, -1],
      [1, 1, 1],
    ],
    [
      [1, 1, 1],
      [-1, 1, -1],
    ],
    [
      [1, -1],
      [1, 1],
      [1, -1],
    ],
    [
      [-1, 1],
      [1, 1],
      [-1, 1],
    ],
  ],
];

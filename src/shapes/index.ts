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
  shape: Array<Array<number>>;

  constructor(shape: Array<Array<number>>) {
    this.shape = shape;
    this.size = {
      rows: shape.length - 1,
      cols: shape[0].length - 1,
    };
    this.start = {
      row: 0,
      col: 0,
    };
    this.end = {
      row: shape.length - 1,
      col: shape[0].length - 1,
    };
  }

  getOnGrid(row: number, col: number) {
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

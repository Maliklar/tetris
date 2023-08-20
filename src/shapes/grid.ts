import Shape, { getShape } from "./index";

const SHAPE = [
  [0, 1, 0],
  [1, 1, 1],
];
export class Grid {
  element: HTMLDivElement;
  rows: Row[] = new Array(20).fill(null);
  shape?: Shape;
  private ROWS = 20;
  private COLS = 10;

  constructor() {
    this.element = document.createElement("div");
    this.element.setAttribute("class", "container");
    this.element.setAttribute("id", "container");

    for (let i = 0; i < this.ROWS; i++) {
      const ceils: Ceil[] = new Array(this.COLS).fill(0);
      for (let j = 0; j < this.COLS; j++) ceils[j] = new Ceil(i, j);
      this.rows[i] = new Row(ceils, i);
      this.element.appendChild(this.rows[i].element);
    }

    document.body.appendChild(this.element);
  }

  addShape(shape: Shape) {
    this.shape = shape;
    this.updateCeils();
  }

  updateCeils() {
    if (!this.shape) return;
    for (let i = this.shape.start.row; i <= this.shape.end.row; i++) {
      for (let j = this.shape.start.col; j <= this.shape.end.col; j++) {
        const ceil = this.rows[i].ceils[j];
        if (this.shape.getOnGrid(i, j) === -1) continue;
        ceil.active = this.shape.getOnGrid(i, j) === 1;
        ceil.element.setAttribute("data-active", ceil.active + "");
      }
    }
  }

  shiftBottom() {
    if (this.isColliding()) {
      this.addShape(new Shape(getShape()));
    }
    this.clearLastPosition();
    this.shape.shiftBottom();
    this.updateCeils();
  }

  shiftLeft() {
    if (this.shape.start.col <= 0) return;
    this.clearLastPosition();

    this.shape.shiftLeft();
    this.updateCeils();
  }

  shiftRight() {
    if (this.shape.end.col >= this.COLS - 1) return;
    this.clearLastPosition();
    this.shape.shiftRight();
    this.updateCeils();
  }

  isColliding() {
    if (this.shape.end.row >= this.ROWS - 1) return true;
    if (this.shape.end.row + 1 < this.ROWS)
      for (let i = this.shape.start.col; i < this.shape.end.col + 1; i++) {
        if (this.rows[this.shape.end.row].ceils[i].active) {
          if (this.rows[this.shape.end.row + 1].ceils[i].active) return true;
        }
      }

    for (let i = this.shape.start.row; i < this.shape.end.row + 1; i++) {
      for (let j = this.shape.start.col; j < this.shape.end.col + 1; j++) {
        if (this.checkBelow(i, j)) {
          return true;
        }
      }
    }
    return false;
  }

  checkBelow(row: number, col: number) {
    for (let i = row; i < this.shape.end.row + 1; i++) {
      if (this.shape.getOnGrid(i, col) === -1)
        return this.rows[i].ceils[col].active;
      else if (i === this.shape.end.row) {
        // this.rows[i + 1].ceils[col].active;
        return this.rows[i + 1].ceils[col].active;
      }
    }
  }

  private clearLastPosition() {
    for (let i = this.shape.start.row; i <= this.shape.end.row; i++) {
      for (let j = this.shape.start.col; j <= this.shape.end.col; j++) {
        const ceil = this.rows[i].ceils[j];
        ceil.active = false;
        ceil.element.setAttribute("data-active", "false");
      }
    }
  }
}

export class Row {
  element: HTMLDivElement;
  ceils: Ceil[];
  constructor(ceils: Ceil[], index: number) {
    this.ceils = ceils;
    this.element = document.createElement("div");
    this.element.setAttribute("class", "row");
    this.element.setAttribute("id", index.toString());
    this.ceils.forEach((ceil) => this.element.appendChild(ceil.element));
  }
}

export class Ceil {
  element: HTMLDivElement;
  active: boolean = false;
  private color: string;
  constructor(row: number, col: number) {
    this.element = document.createElement("div");
    this.element.setAttribute("class", "ceil");
    this.element.setAttribute("id", `${row}-${col}`);
    this.color = "black";
  }
}

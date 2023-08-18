import Shape from "./index";
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
        ceil.active = this.shape.getOnGrid(i, j) === 1;
        ceil.element.setAttribute("data-active", ceil.active + "");
      }
    }
  }

  shiftBottom() {
    // Clean last position
    for (let i = this.shape.start.row; i <= this.shape.end.row; i++) {
      for (let j = this.shape.start.col; j <= this.shape.end.col; j++) {
        const ceil = this.rows[i].ceils[j];
        ceil.element.setAttribute("data-active", "false");
      }
    }
    this.shape.shiftBottom();
    this.updateCeils();
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

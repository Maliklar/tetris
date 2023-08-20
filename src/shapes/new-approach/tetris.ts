import Shape from "./shape";

export default class Tetris {
  e: HTMLDivElement = document.createElement("div");
  private ROWS = 20;
  private COLS = 10;
  rows: Row[] = new Array(20).fill(null);
  shape: Shape;

  constructor() {
    this.e.setAttribute("class", "container");
    this.e.setAttribute("id", "container");
    for (let i = 0; i < this.ROWS; i++) {
      const ceils: Ceil[] = new Array(this.COLS).fill(0);
      for (let j = 0; j < this.COLS; j++) ceils[j] = new Ceil(i, j);
      this.rows[i] = new Row(ceils, i);
      this.e.appendChild(this.rows[i].e);
    }
    document.body.appendChild(this.e);
  }

  private addShape() {
    this.shape = new Shape();
    return this;
  }

  private update() {
    for (let i = this.shape.start.row; i < this.shape.end.row; i++) {
      for (let j = this.shape.start.col; j < this.shape.end.col; j++) {
        if (this.shape.getByPosition(i, j) === 1)
          this.rows[i].ceils[j].activate();
      }
    }
    return this;
  }

  private updateLastPosition() {
    const getLastPosition = (row: number, col: number) => {
      for (let i = row + 1; i < this.ROWS; i++) {
        if (this.rows[i].ceils[col].isActive()) {
          return i;
        }
        if (i === this.ROWS - 1) {
          return i + 1;
        }
      }
    };
    let highest = {
      value: 10000,
      row: 0,
      col: 0,
    };

    for (let i = this.shape.start.col; i < this.shape.end.col; i++) {
      for (let j = this.shape.end.row - 1; j >= this.shape.start.row; j--) {
        if (this.shape.getByPosition(j, i) === 1) {
          let v = getLastPosition(j, i);
          if (highest.value > v) {
            highest.value = v;
            highest.row = highest.value + this.shape.start.row - j - 1;
            highest.col = i;
          }
          break;
        }
      }
    }

    console.log(highest);

    const finalRowStart = this.shape.start.row - highest.row + highest.value;
    const lastPosition = {
      start: {
        row: highest.row,
        col: this.shape.start.col,
      },
      end: {
        row: this.shape.size.rows + highest.row,
        col: this.shape.end.col,
      },
    };

    console.log("LAST POSITION: ", lastPosition);

    this.shape.lastPosition = lastPosition;
  }

  private clearLastPosition() {
    for (let i = this.shape.start.row; i <= this.shape.end.row; i++) {
      for (let j = this.shape.start.col; j <= this.shape.end.col; j++) {
        try {
          const ceil = this.rows[i].ceils[j];
          ceil.active = false;
          ceil.e.setAttribute("data-active", "false");
        } catch (error) {}
      }
    }
  }

  public right() {
    if (this.shape.end.col >= this.COLS) return;
    else if (this.shape.end.col < this.COLS - 1)
      for (let i = this.shape.start.row; i < this.shape.end.row; i++) {
        if (this.rows[i].ceils[this.shape.end.col + 1].isActive()) return;
      }
    if (this.rows[this.shape.end.row + 1].ceils[this.shape.end.col].isActive())
      return;

    this.clearLastPosition();
    this.shape.start.col++;
    this.shape.end.col++;
    this.update();
    this.updateLastPosition();
  }
  public left() {
    if (this.shape.start.col <= 0) return;
    else if (this.shape.start.col > 1)
      for (let i = this.shape.start.row; i < this.shape.end.row; i++) {
        if (this.rows[i].ceils[this.shape.start.col - 1].isActive()) return;
      }
    if (this.rows[this.shape.end.row + 1].ceils[this.shape.end.col].isActive())
      return;

    this.clearLastPosition();
    this.shape.start.col--;
    this.shape.end.col--;
    this.update();
    this.updateLastPosition();
  }

  public down() {
    this.clearLastPosition();
    this.shape.start.row++;
    this.shape.end.row++;
  }

  public start() {
    this.addShape().update();
    this.updateLastPosition();

    const ii = setInterval(() => {
      if (
        this.shape.start.row === this.shape.lastPosition.start.row ||
        this.shape.end.row >= this.ROWS
      ) {
        this.addShape();
        this.updateLastPosition();
      }

      for (let i = this.shape.start.row; i < this.shape.end.row; i++) {
        for (let j = this.shape.start.col; j < this.shape.end.col; j++) {
          if (this.shape.getByPosition(i, j) === 1)
            this.rows[i].ceils[j].deactivate();
        }
      }
      this.shape.start.row++;
      this.shape.end.row++;

      this.update();
    }, 200);
  }
}

export class Row {
  e: HTMLDivElement = document.createElement("div");
  ceils: Ceil[];
  constructor(ceils: Ceil[], index: number) {
    this.ceils = ceils;
    this.e.setAttribute("class", "row");
    this.e.setAttribute("id", index.toString());
    this.ceils.forEach((ceil) => this.e.appendChild(ceil.e));
  }
}

export class Ceil {
  e: HTMLDivElement = document.createElement("div");
  active = false;
  constructor(row: number, col: number) {
    this.e.setAttribute("class", "ceil");
    this.e.setAttribute("id", `${row}-${col}`);
  }

  isActive() {
    return this.active;
  }
  activate() {
    this.active = true;
    this.e.setAttribute("data-active", "true");
    return this;
  }
  deactivate() {
    this.active = false;
    this.e.setAttribute("data-active", "false");
    return this;
  }
}

const container = document.getElementById("container");

let grid = [];
renderPage();

this.shape = getShape();
addShape(shape);
function addShape(shape) {
  for (let i = 0; i < shape.rows; i++)
    for (let j = 3; j < shape.cols + 3; j++) {
      grid[i][j].setAttribute("data-active", shape.shape[i][j - 3] === 1);
      grid[i][j].value = 1;
    }

  shape.rStart = 0;
  shape.cStart = 3;
  shape.rEnd = shape.rows;
  shape.cEnd = shape.cols + 3;
}

function drawShapeAtPosition(shape, row, col) {
  for (let i = row; i < shape.rows + row; i++)
    for (let j = col; j < shape.cols + col; j++) {
      grid[i][j].setAttribute(
        "data-active",
        shape.shape[i - row][j - col] === 1
      );
      grid[i][j].value = 1;
    }

  shape.rStart = row;
  shape.cStart = col;
  shape.rEnd = shape.rows + row;
  shape.cEnd = shape.cols + col;
}

setInterval(() => {
  console.log("HERE");
  move(shape);
}, 500);

window.onkeydown = (e) => {
  if (e.code === "ArrowRight") {
    move(shape, "RIGHT");
  }
  if (e.code === "ArrowLeft") {
    move(shape, "LEFT");
  }
};

function move(shape, direction = "BOTTOM") {
  const ROW_START = shape.rStart;
  const COL_START = shape.cStart;
  const ROW_END = shape.rEnd + 1;
  const COL_END = shape.cEnd;

  const collision = isColliding(this.shape);

  if (collision.bottom) {
    this.shape = getShape();
    addShape(this.shape);
  }

  for (let i = ROW_START; i < ROW_END; i++)
    for (let j = COL_START; j < COL_END; j++) {
      grid[i][j].setAttribute("data-active", "false");
      grid[i][j].value = 0;
    }

  switch (direction) {
    case "BOTTOM":
      drawShapeAtPosition(shape, ROW_START + 1, COL_START);
      break;
    case "LEFT":
      drawShapeAtPosition(shape, ROW_START, COL_START - 1);
      break;
    case "RIGHT":
      drawShapeAtPosition(shape, ROW_START, COL_START + 1);
      break;
    default:
      throw Error("ERROR");
  }
}

function isColliding(shape) {
  const ROW_START = shape.rStart;
  const COL_START = shape.cStart;
  const ROW_END = shape.rEnd + 1;
  const COL_END = shape.cEnd + 1;
  let left = false,
    right = false,
    bottom = false;

  for (let i = COL_START; i < COL_END - 1; i++) {
    if (ROW_END > grid.length - 1 || grid[ROW_END][i].value === 1) {
      bottom = true;
      break;
    }
  }

  //   for (let i = ROW_START; i < ROW_END - 1; i++) {
  //     if (grid[i]?.[COL_START - 1]?.value === 1) {
  //       left = true;
  //       break;
  //     }
  //   }

  //   for (let i = ROW_START; i < ROW_END - 1; i++) {
  //     if (grid[i]?.[COL_END + COL_START + 1]?.value === 1) {
  //       right = true;
  //       break;
  //     }
  //   }

  return {
    left,
    right,
    bottom,
  };
}
function getShape() {
  return {
    rows: 2,
    cols: 3,
    position: null,
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
  };
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
function renderPage() {
  for (let i = 0; i < 20; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      const ceil = document.createElement("div");
      ceil.value = 0;
      ceil.setAttribute("id", "ceil");
      row.push(ceil);
    }
    grid.push(row);
  }

  grid.forEach((r) => {
    const row = document.createElement("div");
    row.setAttribute("id", "row");
    r.forEach((ceil) => row.append(ceil));
    container.append(row);
  });
}

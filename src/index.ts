// import { Grid } from "./shapes/grid";
// import Shape, { getShape } from "./shapes/index";
import "../styles.css";

// const SHAPE = [
//   [0, 1, 0],
//   [1, 1, 1],
// ];
// const grid = new Grid();
// // console.log(grid);
// let shape = new Shape(getShape());

// grid.addShape(shape);

// // grid.shape.shiftBottom();

// grid.updateCeils();
// // grid.updateCeils();
// // grid.updateCeils();
// // grid.updateCeils();
// // grid.shape.shiftBottom();

import Tetris from "./shapes/new-approach/tetris";

const tetris = new Tetris();

tetris.start();

addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    tetris.right();
  }
  if (e.key === "ArrowLeft") {
    tetris.left();
  }
});

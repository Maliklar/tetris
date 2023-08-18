(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["my-library"] = factory();
	else
		root["my-library"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/shapes/grid.ts":
/*!****************************!*\
  !*** ./src/shapes/grid.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ceil: () => (/* binding */ Ceil),
/* harmony export */   Grid: () => (/* binding */ Grid),
/* harmony export */   Row: () => (/* binding */ Row)
/* harmony export */ });
var Grid = /** @class */ (function () {
    function Grid() {
        this.rows = [];
        this.ROWS = 20;
        this.COLS = 10;
        this.element = document.createElement("div");
        this.element.setAttribute("class", "container");
        this.element.setAttribute("id", "container");
        for (var i = 0; i < this.ROWS; i++) {
            var ceils = [];
            for (var j = 0; j < this.COLS; j++) {
                ceils.push(new Ceil(i, j));
            }
            this.rows.push(new Row(ceils, i));
            ceils.length = 0;
        }
    }
    Grid.prototype.addShape = function (shape) {
        this.shape = shape;
        this.updateCeils();
    };
    Grid.prototype.updateCeils = function () {
        if (!this.shape)
            return;
        for (var i = this.shape.start.row; i < this.shape.end.row; i++) {
            for (var j = this.shape.start.col; j < this.shape.end.col; j++) {
                var ceil = this.rows[i].ceils[j];
                ceil.active = this.shape.shape[i][j] === 1;
            }
        }
    };
    return Grid;
}());

var Row = /** @class */ (function () {
    function Row(ceils, index) {
        this.ceils = ceils;
        this.element = document.createElement("div");
        this.element.setAttribute("class", "row");
        this.element.setAttribute("id", index.toString());
    }
    return Row;
}());

var Ceil = /** @class */ (function () {
    function Ceil(row, col) {
        this.active = false;
        this.element = document.createElement("div");
        this.element.setAttribute("class", "ceil");
        this.element.setAttribute("id", "".concat(row, "-").concat(col));
        this.color = "black";
    }
    return Ceil;
}());



/***/ }),

/***/ "./src/shapes/index.ts":
/*!*****************************!*\
  !*** ./src/shapes/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Shape = /** @class */ (function () {
    function Shape(shape) {
        this.shape = shape;
        this.size = {
            rows: shape.length,
            cols: shape[0].length,
        };
        this.start = {
            row: 0,
            col: 0,
        };
        this.end = {
            row: shape.length,
            col: shape[0].length,
        };
    }
    Shape.prototype.shitRight = function () {
        this.start.col = this.start.col + 1;
        this.end.col = this.end.col + 1;
    };
    Shape.prototype.shiftLeft = function () {
        this.start.col = this.start.col - 1;
        this.end.col = this.end.col - 1;
    };
    Shape.prototype.shiftBottom = function () {
        this.start.row = this.start.row + 1;
        this.end.row = this.end.row + 1;
    };
    return Shape;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shape);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shapes_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes/grid */ "./src/shapes/grid.ts");
/* harmony import */ var _shapes_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapes/index */ "./src/shapes/index.ts");


var SHAPE = [
    [0, 1, 0],
    [1, 1, 1],
];
var grid = new _shapes_grid__WEBPACK_IMPORTED_MODULE_0__.Grid();
function start() {
    var shape = new _shapes_index__WEBPACK_IMPORTED_MODULE_1__["default"](SHAPE);
    setInterval(function () {
        if (!grid.shape) {
            shape = new _shapes_index__WEBPACK_IMPORTED_MODULE_1__["default"](SHAPE);
            grid.addShape(shape);
            return;
        }
        grid.shape.shiftBottom();
        grid.updateCeils();
    }, 1000);
}
start();

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0EsNEJBQTRCLGVBQWU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsd0JBQXdCO0FBQ25FLCtDQUErQyx3QkFBd0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNlO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2M7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2U7Ozs7Ozs7Ozs7Ozs7OztBQ3REaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7VUM5QnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0Y7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhDQUFJO0FBQ25CO0FBQ0Esb0JBQW9CLHFEQUFLO0FBQ3pCO0FBQ0E7QUFDQSx3QkFBd0IscURBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbGlicmFyeS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbXktbGlicmFyeS8uL3NyYy9zaGFwZXMvZ3JpZC50cyIsIndlYnBhY2s6Ly9teS1saWJyYXJ5Ly4vc3JjL3NoYXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9teS1saWJyYXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktbGlicmFyeS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJteS1saWJyYXJ5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm15LWxpYnJhcnlcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwidmFyIEdyaWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR3JpZCgpIHtcbiAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgICAgIHRoaXMuUk9XUyA9IDIwO1xuICAgICAgICB0aGlzLkNPTFMgPSAxMDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWluZXJcIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ST1dTOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjZWlscyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLkNPTFM7IGorKykge1xuICAgICAgICAgICAgICAgIGNlaWxzLnB1c2gobmV3IENlaWwoaSwgaikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yb3dzLnB1c2gobmV3IFJvdyhjZWlscywgaSkpO1xuICAgICAgICAgICAgY2VpbHMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBHcmlkLnByb3RvdHlwZS5hZGRTaGFwZSA9IGZ1bmN0aW9uIChzaGFwZSkge1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgICAgIHRoaXMudXBkYXRlQ2VpbHMoKTtcbiAgICB9O1xuICAgIEdyaWQucHJvdG90eXBlLnVwZGF0ZUNlaWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2hhcGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnNoYXBlLnN0YXJ0LnJvdzsgaSA8IHRoaXMuc2hhcGUuZW5kLnJvdzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gdGhpcy5zaGFwZS5zdGFydC5jb2w7IGogPCB0aGlzLnNoYXBlLmVuZC5jb2w7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBjZWlsID0gdGhpcy5yb3dzW2ldLmNlaWxzW2pdO1xuICAgICAgICAgICAgICAgIGNlaWwuYWN0aXZlID0gdGhpcy5zaGFwZS5zaGFwZVtpXVtqXSA9PT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEdyaWQ7XG59KCkpO1xuZXhwb3J0IHsgR3JpZCB9O1xudmFyIFJvdyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSb3coY2VpbHMsIGluZGV4KSB7XG4gICAgICAgIHRoaXMuY2VpbHMgPSBjZWlscztcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicm93XCIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiBSb3c7XG59KCkpO1xuZXhwb3J0IHsgUm93IH07XG52YXIgQ2VpbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDZWlsKHJvdywgY29sKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNlaWxcIik7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlwiLmNvbmNhdChyb3csIFwiLVwiKS5jb25jYXQoY29sKSk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgfVxuICAgIHJldHVybiBDZWlsO1xufSgpKTtcbmV4cG9ydCB7IENlaWwgfTtcbiIsInZhciBTaGFwZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTaGFwZShzaGFwZSkge1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHtcbiAgICAgICAgICAgIHJvd3M6IHNoYXBlLmxlbmd0aCxcbiAgICAgICAgICAgIGNvbHM6IHNoYXBlWzBdLmxlbmd0aCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHtcbiAgICAgICAgICAgIHJvdzogMCxcbiAgICAgICAgICAgIGNvbDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbmQgPSB7XG4gICAgICAgICAgICByb3c6IHNoYXBlLmxlbmd0aCxcbiAgICAgICAgICAgIGNvbDogc2hhcGVbMF0ubGVuZ3RoLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBTaGFwZS5wcm90b3R5cGUuc2hpdFJpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YXJ0LmNvbCA9IHRoaXMuc3RhcnQuY29sICsgMTtcbiAgICAgICAgdGhpcy5lbmQuY29sID0gdGhpcy5lbmQuY29sICsgMTtcbiAgICB9O1xuICAgIFNoYXBlLnByb3RvdHlwZS5zaGlmdExlZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQuY29sID0gdGhpcy5zdGFydC5jb2wgLSAxO1xuICAgICAgICB0aGlzLmVuZC5jb2wgPSB0aGlzLmVuZC5jb2wgLSAxO1xuICAgIH07XG4gICAgU2hhcGUucHJvdG90eXBlLnNoaWZ0Qm90dG9tID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YXJ0LnJvdyA9IHRoaXMuc3RhcnQucm93ICsgMTtcbiAgICAgICAgdGhpcy5lbmQucm93ID0gdGhpcy5lbmQucm93ICsgMTtcbiAgICB9O1xuICAgIHJldHVybiBTaGFwZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL3NoYXBlcy9ncmlkXCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vc2hhcGVzL2luZGV4XCI7XG52YXIgU0hBUEUgPSBbXG4gICAgWzAsIDEsIDBdLFxuICAgIFsxLCAxLCAxXSxcbl07XG52YXIgZ3JpZCA9IG5ldyBHcmlkKCk7XG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICB2YXIgc2hhcGUgPSBuZXcgU2hhcGUoU0hBUEUpO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFncmlkLnNoYXBlKSB7XG4gICAgICAgICAgICBzaGFwZSA9IG5ldyBTaGFwZShTSEFQRSk7XG4gICAgICAgICAgICBncmlkLmFkZFNoYXBlKHNoYXBlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBncmlkLnNoYXBlLnNoaWZ0Qm90dG9tKCk7XG4gICAgICAgIGdyaWQudXBkYXRlQ2VpbHMoKTtcbiAgICB9LCAxMDAwKTtcbn1cbnN0YXJ0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
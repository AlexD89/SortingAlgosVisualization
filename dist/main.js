/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/utils.js */ \"./src/scripts/utils.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var data = _scripts_utils_js__WEBPACK_IMPORTED_MODULE_0__.generateRandomArray(10, 30);\n  var width = \"500px\";\n  var height = \"300px\";\n  var svg = d3.select(\"#graph1\").append(\"svg\").attr(\"height\", height).attr(\"width\", width).attr(\"style\", \"border: 1px solid black\");\n  var bars = svg.selectAll(\"rect\").data(data).enter().append(\"rect\").attr(\"class\", function (d, i) {\n    return \"bars bar-\".concat(i);\n  }).attr(\"height\", function (d, i) {\n    return d * 6;\n  }).attr(\"width\", function () {\n    return 500 / data.length - 1;\n  }).attr(\"x\", function (d, i) {\n    return i * (500 / data.length);\n  }).attr(\"y\", function (d, i) {\n    return 300 - d * 6;\n  });\n  var bar1 = svg.select(\".bar-1\");\n  var bar2 = svg.select(\".bar-2\");\n  var bar3 = svg.select(\".bar-3\");\n  var bar4 = svg.select(\".bar-4\");\n\n  function swapper(bar1, bar2) {\n    bar1.transition().duration(2000).attr(\"x\", \"\".concat(bar2.attr(\"x\")));\n    bar2.transition().duration(2000).attr(\"x\", \"\".concat(bar1.attr(\"x\"))); // function(d,i)\n    // console.log(`b1 x: ${bar1.attr(\"x\")} b2 x: ${bar2.attr(\"x\")}`);     \n  } // let currentBar, nextBar;\n  // for (let i = 0; i < data.length-1; i++){\n  //     currentBar = svg.select(`.bar-${i}`);\n  //     nextBar = svg.select(`.bar-${i+1}`);\n  // }\n\n\n  swapper(bar1, bar2);\n  swapper(bar3, bar4);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRWhELE1BQU1DLElBQUksR0FBR0gsa0VBQUEsQ0FBMEIsRUFBMUIsRUFBNkIsRUFBN0IsQ0FBYjtBQUVBLE1BQU1LLEtBQUssR0FBRyxPQUFkO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLE9BQWY7QUFFQSxNQUFNQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLFNBQVYsRUFBcUJDLE1BQXJCLENBQTRCLEtBQTVCLEVBQ0NDLElBREQsQ0FDTSxRQUROLEVBQ2dCTCxNQURoQixFQUVDSyxJQUZELENBRU0sT0FGTixFQUVlTixLQUZmLEVBR0NNLElBSEQsQ0FHTSxPQUhOLEVBR2UseUJBSGYsQ0FBWjtBQUtBLE1BQU1DLElBQUksR0FBR0wsR0FBRyxDQUFDTSxTQUFKLENBQWMsTUFBZCxFQUNSVixJQURRLENBQ0hBLElBREcsRUFFUlcsS0FGUSxHQUVBSixNQUZBLENBRU8sTUFGUCxFQUdKQyxJQUhJLENBR0MsT0FIRCxFQUdVLFVBQVNJLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsOEJBQW1CQSxDQUFuQjtBQUF1QixHQUgvQyxFQUlKTCxJQUpJLENBSUMsUUFKRCxFQUlXLFVBQVNJLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsV0FBUUQsQ0FBQyxHQUFDLENBQVY7QUFBYSxHQUp0QyxFQUtKSixJQUxJLENBS0MsT0FMRCxFQUtVLFlBQVU7QUFBQyxXQUFPLE1BQUlSLElBQUksQ0FBQ2MsTUFBVCxHQUFrQixDQUF6QjtBQUEyQixHQUxoRCxFQU1KTixJQU5JLENBTUMsR0FORCxFQU1LLFVBQVNJLENBQVQsRUFBV0MsQ0FBWCxFQUFjO0FBQUMsV0FBUUEsQ0FBQyxJQUFJLE1BQU1iLElBQUksQ0FBQ2MsTUFBZixDQUFUO0FBQWlDLEdBTnJELEVBT0pOLElBUEksQ0FPQyxHQVBELEVBT00sVUFBU0ksQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFBQyxXQUFPLE1BQU9ELENBQUMsR0FBQyxDQUFoQjtBQUFtQixHQVB6QyxDQUFiO0FBU0EsTUFBTUcsSUFBSSxHQUFHWCxHQUFHLENBQUNFLE1BQUosQ0FBVyxRQUFYLENBQWI7QUFDQSxNQUFNVSxJQUFJLEdBQUdaLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLFFBQVgsQ0FBYjtBQUNBLE1BQU1XLElBQUksR0FBR2IsR0FBRyxDQUFDRSxNQUFKLENBQVcsUUFBWCxDQUFiO0FBQ0EsTUFBTVksSUFBSSxHQUFHZCxHQUFHLENBQUNFLE1BQUosQ0FBVyxRQUFYLENBQWI7O0FBRUEsV0FBU2EsT0FBVCxDQUFpQkosSUFBakIsRUFBc0JDLElBQXRCLEVBQTJCO0FBQ3ZCRCxJQUFBQSxJQUFJLENBQUNLLFVBQUwsR0FDS0MsUUFETCxDQUNjLElBRGQsRUFFS2IsSUFGTCxDQUVVLEdBRlYsWUFFa0JRLElBQUksQ0FBQ1IsSUFBTCxDQUFVLEdBQVYsQ0FGbEI7QUFJQVEsSUFBQUEsSUFBSSxDQUFDSSxVQUFMLEdBQ0tDLFFBREwsQ0FDYyxJQURkLEVBRUtiLElBRkwsQ0FFVSxHQUZWLFlBRWtCTyxJQUFJLENBQUNQLElBQUwsQ0FBVSxHQUFWLENBRmxCLEdBTHVCLENBUXZCO0FBQ0E7QUFDSCxHQXBDK0MsQ0FzQzVDO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7OztBQUVBVyxFQUFBQSxPQUFPLENBQUNKLElBQUQsRUFBTUMsSUFBTixDQUFQO0FBQ0FHLEVBQUFBLE9BQU8sQ0FBQ0YsSUFBRCxFQUFNQyxJQUFOLENBQVA7QUFHWCxDQWhERCIsInNvdXJjZXMiOlsid2VicGFjazovL3NvcnRpbmdfYWxnb3NfdmlzdWFsaXphdGlvbi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3NjcmlwdHMvdXRpbHMuanNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgY29uc3QgZGF0YSA9IHV0aWxzLmdlbmVyYXRlUmFuZG9tQXJyYXkoMTAsMzApO1xuXG4gICAgY29uc3Qgd2lkdGggPSBcIjUwMHB4XCI7XG4gICAgY29uc3QgaGVpZ2h0ID0gXCIzMDBweFwiO1xuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI2dyYXBoMVwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgICAgICAgICAuYXR0cihcInN0eWxlXCIsIFwiYm9yZGVyOiAxcHggc29saWQgYmxhY2tcIik7XG5cbiAgICBjb25zdCBiYXJzID0gc3ZnLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkLGkpe3JldHVybiBgYmFycyBiYXItJHtpfWB9KVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24oZCxpKXtyZXR1cm4gKGQqNil9KVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbigpe3JldHVybiA1MDAvZGF0YS5sZW5ndGggLSAxfSlcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLGZ1bmN0aW9uKGQsaSkge3JldHVybiAoaSAqICg1MDAgLyBkYXRhLmxlbmd0aCkpfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkLCBpICl7cmV0dXJuIDMwMCAtIChkKjYpfSk7XG5cbiAgICBjb25zdCBiYXIxID0gc3ZnLnNlbGVjdChcIi5iYXItMVwiKTtcbiAgICBjb25zdCBiYXIyID0gc3ZnLnNlbGVjdChcIi5iYXItMlwiKTtcbiAgICBjb25zdCBiYXIzID0gc3ZnLnNlbGVjdChcIi5iYXItM1wiKTtcbiAgICBjb25zdCBiYXI0ID0gc3ZnLnNlbGVjdChcIi5iYXItNFwiKTtcblxuICAgIGZ1bmN0aW9uIHN3YXBwZXIoYmFyMSxiYXIyKXtcbiAgICAgICAgYmFyMS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGAke2JhcjIuYXR0cihcInhcIil9YClcbiAgICAgICAgICAgIFxuICAgICAgICBiYXIyLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgYCR7YmFyMS5hdHRyKFwieFwiKX1gKVxuICAgICAgICAvLyBmdW5jdGlvbihkLGkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBiMSB4OiAke2JhcjEuYXR0cihcInhcIil9IGIyIHg6ICR7YmFyMi5hdHRyKFwieFwiKX1gKTsgICAgIFxuICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgLy8gbGV0IGN1cnJlbnRCYXIsIG5leHRCYXI7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGgtMTsgaSsrKXtcbiAgICAgICAgICAgIC8vICAgICBjdXJyZW50QmFyID0gc3ZnLnNlbGVjdChgLmJhci0ke2l9YCk7XG4gICAgICAgICAgICAvLyAgICAgbmV4dEJhciA9IHN2Zy5zZWxlY3QoYC5iYXItJHtpKzF9YCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN3YXBwZXIoYmFyMSxiYXIyKTtcbiAgICAgICAgICAgIHN3YXBwZXIoYmFyMyxiYXI0KTtcblxuICAgICAgICAgICAgXG59KTsiXSwibmFtZXMiOlsidXRpbHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhIiwiZ2VuZXJhdGVSYW5kb21BcnJheSIsIndpZHRoIiwiaGVpZ2h0Iiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwiYmFycyIsInNlbGVjdEFsbCIsImVudGVyIiwiZCIsImkiLCJsZW5ndGgiLCJiYXIxIiwiYmFyMiIsImJhcjMiLCJiYXI0Iiwic3dhcHBlciIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRandomArray\": function() { return /* binding */ generateRandomArray; }\n/* harmony export */ });\nvar generateRandomArray = function generateRandomArray(size, max) {\n  var array = [];\n\n  for (var i = 0; i < size; i++) {\n    var randomNum = Math.floor(Math.random() * max);\n    if (randomNum === 0) randomNum++;\n    array.push(randomNum);\n  }\n\n  return array;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUN2QyxNQUFNQyxLQUFLLEdBQUcsRUFBZDs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILElBQXBCLEVBQTBCRyxDQUFDLEVBQTNCLEVBQThCO0FBQzFCLFFBQUlDLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQk4sR0FBM0IsQ0FBaEI7QUFDQSxRQUFJRyxTQUFTLEtBQUssQ0FBbEIsRUFBcUJBLFNBQVM7QUFDOUJGLElBQUFBLEtBQUssQ0FBQ00sSUFBTixDQUFXSixTQUFYO0FBQ0g7O0FBQ0QsU0FBT0YsS0FBUDtBQUNILENBUkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3J0aW5nX2FsZ29zX3Zpc3VhbGl6YXRpb24vLi9zcmMvc2NyaXB0cy91dGlscy5qcz9kYjEzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZ2VuZXJhdGVSYW5kb21BcnJheSA9IChzaXplLCBtYXgpID0+IHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKXtcbiAgICAgICAgbGV0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gICAgICAgIGlmIChyYW5kb21OdW0gPT09IDApIHJhbmRvbU51bSsrO1xuICAgICAgICBhcnJheS5wdXNoKHJhbmRvbU51bSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVSYW5kb21BcnJheSB9Il0sIm5hbWVzIjpbImdlbmVyYXRlUmFuZG9tQXJyYXkiLCJzaXplIiwibWF4IiwiYXJyYXkiLCJpIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/utils.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3J0aW5nX2FsZ29zX3Zpc3VhbGl6YXRpb24vLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
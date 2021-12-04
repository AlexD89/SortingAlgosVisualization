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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/utils.js */ \"./src/scripts/utils.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var data = _scripts_utils_js__WEBPACK_IMPORTED_MODULE_0__.generateRandomArray(25, 45);\n  var width = \"500px\";\n  var height = \"300px\";\n  var graph1 = d3.select(\"#graph1\").append(\"svg\").attr(\"height\", height).attr(\"width\", width).attr(\"style\", \"border: 1px solid black\");\n  var graph2 = d3.select(\"#graph1\").append(\"svg\").attr(\"height\", height).attr(\"width\", width).attr(\"style\", \"border: 1px solid black\");\n  _scripts_utils_js__WEBPACK_IMPORTED_MODULE_0__.renderGraph(graph1, data);\n  _scripts_utils_js__WEBPACK_IMPORTED_MODULE_0__.renderGraph(graph2, data);\n  var bar1 = graph1.select(\".bar-1\");\n  var bar2 = graph1.select(\".bar-2\");\n  var bar3 = graph1.select(\".bar-3\");\n  var bar4 = graph1.select(\".bar-4\");\n\n  function swapper(bar1, bar2) {\n    bar1.transition().delay(1000).duration(2000).attr(\"x\", \"\".concat(bar2.attr(\"x\")));\n    bar2.transition().delay(1000).duration(2000).attr(\"x\", \"\".concat(bar1.attr(\"x\")));\n  }\n\n  swapper(bar1, bar2);\n  swapper(bar3, bar4);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRWhELE1BQU1DLElBQUksR0FBR0gsa0VBQUEsQ0FBMEIsRUFBMUIsRUFBNkIsRUFBN0IsQ0FBYjtBQUVBLE1BQU1LLEtBQUssR0FBRyxPQUFkO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLE9BQWY7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLFNBQVYsRUFBcUJDLE1BQXJCLENBQTRCLEtBQTVCLEVBQ0ZDLElBREUsQ0FDRyxRQURILEVBQ2FMLE1BRGIsRUFFRkssSUFGRSxDQUVHLE9BRkgsRUFFWU4sS0FGWixFQUdGTSxJQUhFLENBR0csT0FISCxFQUdZLHlCQUhaLENBQWY7QUFLQSxNQUFNQyxNQUFNLEdBQUdKLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLFNBQVYsRUFBcUJDLE1BQXJCLENBQTRCLEtBQTVCLEVBQ0ZDLElBREUsQ0FDRyxRQURILEVBQ2FMLE1BRGIsRUFFRkssSUFGRSxDQUVHLE9BRkgsRUFFWU4sS0FGWixFQUdGTSxJQUhFLENBR0csT0FISCxFQUdZLHlCQUhaLENBQWY7QUFLQVgsRUFBQUEsMERBQUEsQ0FBa0JPLE1BQWxCLEVBQTBCSixJQUExQjtBQUNBSCxFQUFBQSwwREFBQSxDQUFrQlksTUFBbEIsRUFBMEJULElBQTFCO0FBRUEsTUFBTVcsSUFBSSxHQUFHUCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxRQUFkLENBQWI7QUFDQSxNQUFNTSxJQUFJLEdBQUdSLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFFBQWQsQ0FBYjtBQUNBLE1BQU1PLElBQUksR0FBR1QsTUFBTSxDQUFDRSxNQUFQLENBQWMsUUFBZCxDQUFiO0FBQ0EsTUFBTVEsSUFBSSxHQUFHVixNQUFNLENBQUNFLE1BQVAsQ0FBYyxRQUFkLENBQWI7O0FBRUEsV0FBU1MsT0FBVCxDQUFpQkosSUFBakIsRUFBc0JDLElBQXRCLEVBQTJCO0FBQ3ZCRCxJQUFBQSxJQUFJLENBQUNLLFVBQUwsR0FDS0MsS0FETCxDQUNXLElBRFgsRUFFS0MsUUFGTCxDQUVjLElBRmQsRUFHS1YsSUFITCxDQUdVLEdBSFYsWUFHa0JJLElBQUksQ0FBQ0osSUFBTCxDQUFVLEdBQVYsQ0FIbEI7QUFLQUksSUFBQUEsSUFBSSxDQUFDSSxVQUFMLEdBQ0tDLEtBREwsQ0FDVyxJQURYLEVBRUtDLFFBRkwsQ0FFYyxJQUZkLEVBR0tWLElBSEwsQ0FHVSxHQUhWLFlBR2tCRyxJQUFJLENBQUNILElBQUwsQ0FBVSxHQUFWLENBSGxCO0FBSUg7O0FBRURPLEVBQUFBLE9BQU8sQ0FBQ0osSUFBRCxFQUFNQyxJQUFOLENBQVA7QUFDQUcsRUFBQUEsT0FBTyxDQUFDRixJQUFELEVBQU1DLElBQU4sQ0FBUDtBQUdILENBekNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29ydGluZ19hbGdvc192aXN1YWxpemF0aW9uLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4vc2NyaXB0cy91dGlscy5qc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICBjb25zdCBkYXRhID0gdXRpbHMuZ2VuZXJhdGVSYW5kb21BcnJheSgyNSw0NSk7XG5cbiAgICBjb25zdCB3aWR0aCA9IFwiNTAwcHhcIjtcbiAgICBjb25zdCBoZWlnaHQgPSBcIjMwMHB4XCI7XG5cbiAgICBjb25zdCBncmFwaDEgPSBkMy5zZWxlY3QoXCIjZ3JhcGgxXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3R5bGVcIiwgXCJib3JkZXI6IDFweCBzb2xpZCBibGFja1wiKTtcblxuICAgIGNvbnN0IGdyYXBoMiA9IGQzLnNlbGVjdChcIiNncmFwaDFcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzdHlsZVwiLCBcImJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXCIpO1xuXG4gICAgdXRpbHMucmVuZGVyR3JhcGgoZ3JhcGgxLCBkYXRhKTtcbiAgICB1dGlscy5yZW5kZXJHcmFwaChncmFwaDIsIGRhdGEpXG5cbiAgICBjb25zdCBiYXIxID0gZ3JhcGgxLnNlbGVjdChcIi5iYXItMVwiKTtcbiAgICBjb25zdCBiYXIyID0gZ3JhcGgxLnNlbGVjdChcIi5iYXItMlwiKTtcbiAgICBjb25zdCBiYXIzID0gZ3JhcGgxLnNlbGVjdChcIi5iYXItM1wiKTtcbiAgICBjb25zdCBiYXI0ID0gZ3JhcGgxLnNlbGVjdChcIi5iYXItNFwiKTtcblxuICAgIGZ1bmN0aW9uIHN3YXBwZXIoYmFyMSxiYXIyKXtcbiAgICAgICAgYmFyMS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kZWxheSgxMDAwKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgYCR7YmFyMi5hdHRyKFwieFwiKX1gKVxuICAgICAgICAgICAgXG4gICAgICAgIGJhcjIudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZGVsYXkoMTAwMClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGAke2JhcjEuYXR0cihcInhcIil9YClcbiAgICB9XG4gICAgXG4gICAgc3dhcHBlcihiYXIxLGJhcjIpO1xuICAgIHN3YXBwZXIoYmFyMyxiYXI0KTtcblxuICAgICAgICAgICAgXG59KTsiXSwibmFtZXMiOlsidXRpbHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhIiwiZ2VuZXJhdGVSYW5kb21BcnJheSIsIndpZHRoIiwiaGVpZ2h0IiwiZ3JhcGgxIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwiZ3JhcGgyIiwicmVuZGVyR3JhcGgiLCJiYXIxIiwiYmFyMiIsImJhcjMiLCJiYXI0Iiwic3dhcHBlciIsInRyYW5zaXRpb24iLCJkZWxheSIsImR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRandomArray\": function() { return /* binding */ generateRandomArray; },\n/* harmony export */   \"renderGraph\": function() { return /* binding */ renderGraph; }\n/* harmony export */ });\nvar generateRandomArray = function generateRandomArray(size, max) {\n  var array = [];\n\n  for (var i = 0; i < size; i++) {\n    var randomNum = Math.floor(Math.random() * max);\n    if (randomNum === 0) randomNum++;\n    array.push(randomNum);\n  }\n\n  return array;\n};\n\nvar renderGraph = function renderGraph(svg, data) {\n  svg.selectAll(\"rect\").data(data).enter().append(\"rect\").attr(\"class\", function (d, i) {\n    return \"bars bar-\".concat(i);\n  }).attr(\"height\", function (d, i) {\n    return d * 6;\n  }).attr(\"width\", function () {\n    return 500 / data.length - 1;\n  }).attr(\"x\", function (d, i) {\n    return i * (500 / data.length);\n  }).attr(\"y\", function (d, i) {\n    return 300 - d * 6;\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDdkMsTUFBTUMsS0FBSyxHQUFHLEVBQWQ7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxJQUFwQixFQUEwQkcsQ0FBQyxFQUEzQixFQUE4QjtBQUMxQixRQUFJQyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JOLEdBQTNCLENBQWhCO0FBQ0EsUUFBSUcsU0FBUyxLQUFLLENBQWxCLEVBQXFCQSxTQUFTO0FBQzlCRixJQUFBQSxLQUFLLENBQUNNLElBQU4sQ0FBV0osU0FBWDtBQUNIOztBQUNELFNBQU9GLEtBQVA7QUFDSCxDQVJEOztBQVVBLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQy9CRCxFQUFBQSxHQUFHLENBQUNFLFNBQUosQ0FBYyxNQUFkLEVBQ0tELElBREwsQ0FDVUEsSUFEVixFQUVLRSxLQUZMLEdBRWFDLE1BRmIsQ0FFb0IsTUFGcEIsRUFHS0MsSUFITCxDQUdVLE9BSFYsRUFHbUIsVUFBVUMsQ0FBVixFQUFhYixDQUFiLEVBQWdCO0FBQUUsOEJBQW1CQSxDQUFuQjtBQUF3QixHQUg3RCxFQUlLWSxJQUpMLENBSVUsUUFKVixFQUlvQixVQUFVQyxDQUFWLEVBQWFiLENBQWIsRUFBZ0I7QUFBRSxXQUFRYSxDQUFDLEdBQUcsQ0FBWjtBQUFnQixHQUp0RCxFQUtLRCxJQUxMLENBS1UsT0FMVixFQUttQixZQUFZO0FBQUUsV0FBTyxNQUFNSixJQUFJLENBQUNNLE1BQVgsR0FBb0IsQ0FBM0I7QUFBOEIsR0FML0QsRUFNS0YsSUFOTCxDQU1VLEdBTlYsRUFNZSxVQUFVQyxDQUFWLEVBQWFiLENBQWIsRUFBZ0I7QUFBRSxXQUFRQSxDQUFDLElBQUksTUFBTVEsSUFBSSxDQUFDTSxNQUFmLENBQVQ7QUFBa0MsR0FObkUsRUFPS0YsSUFQTCxDQU9VLEdBUFYsRUFPZSxVQUFVQyxDQUFWLEVBQWFiLENBQWIsRUFBZ0I7QUFBRSxXQUFPLE1BQU9hLENBQUMsR0FBRyxDQUFsQjtBQUFzQixHQVB2RDtBQVFILENBVEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3J0aW5nX2FsZ29zX3Zpc3VhbGl6YXRpb24vLi9zcmMvc2NyaXB0cy91dGlscy5qcz9kYjEzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZ2VuZXJhdGVSYW5kb21BcnJheSA9IChzaXplLCBtYXgpID0+IHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKXtcbiAgICAgICAgbGV0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gICAgICAgIGlmIChyYW5kb21OdW0gPT09IDApIHJhbmRvbU51bSsrO1xuICAgICAgICBhcnJheS5wdXNoKHJhbmRvbU51bSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cblxuY29uc3QgcmVuZGVyR3JhcGggPSAoc3ZnLCBkYXRhKSA9PiB7XG4gICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkLCBpKSB7IHJldHVybiBgYmFycyBiYXItJHtpfWAgfSlcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQsIGkpIHsgcmV0dXJuIChkICogNikgfSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiA1MDAgLyBkYXRhLmxlbmd0aCAtIDEgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkLCBpKSB7IHJldHVybiAoaSAqICg1MDAgLyBkYXRhLmxlbmd0aCkpIH0pXG4gICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCwgaSkgeyByZXR1cm4gMzAwIC0gKGQgKiA2KSB9KTtcbn1cblxuZXhwb3J0IHsgZ2VuZXJhdGVSYW5kb21BcnJheSwgcmVuZGVyR3JhcGggfSJdLCJuYW1lcyI6WyJnZW5lcmF0ZVJhbmRvbUFycmF5Iiwic2l6ZSIsIm1heCIsImFycmF5IiwiaSIsInJhbmRvbU51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJyZW5kZXJHcmFwaCIsInN2ZyIsImRhdGEiLCJzZWxlY3RBbGwiLCJlbnRlciIsImFwcGVuZCIsImF0dHIiLCJkIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/utils.js\n");

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
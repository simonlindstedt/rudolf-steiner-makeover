/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, __webpack_exports__) {

"use strict";
eval("/* alert(\"this is a test\"); */\n\nwp.blocks.registerBlockType(\"cgb/block-gildas-block\", {\n  title: \"Gildas Block\",\n  icon: \"smiley\",\n  category: \"common\",\n  attributes: {\n    content: { type: \"string\" }\n  },\n\n  edit: function edit(props) {\n    function updateContent(event) {\n      props.setAttributes({ content: event.target.value });\n    }\n    return wp.element.createElement(\"div\", null, wp.element.createElement(\"h3\", null, \"test block\"), wp.element.createElement(\"textarea\", {\n      type: \"text\",\n      value: props.attributes.content,\n      onChange: updateContent\n    }));\n  },\n\n  save: function save(props) {\n    return wp.element.createElement(\"h1\", null, props.attributes.content);\n  }\n});\n\n/* wp.blocks.registerBlockType(\"cgb/block-gildas-block\", {\n  title: \"Gildas Block\",\n  icon: \"smiley\",\n  category: \"common\",\n  attributes: {\n    heading: { type: \"string\" },\n    content: { type: \"string\" },\n  },\n\n  edit: function (props) {\n    function updateHeading(event) {\n      props.setAttributes({ heading: event.target.value });\n    }\n    function updateContent(event) {\n      props.setAttributes({ content: event.target.value });\n    }\n    return wp.element.createElement(\n      \"div\",\n      null,\n      wp.element.createElement(\"input\", {\n        type: \"text\",\n        value: props.attributes.heading,\n        onChange: updateHeading,\n      }),\n      wp.element.createElement(\"textarea\", {\n        type: \"text\",\n        value: props.attributes.content,\n        onChange: updateContent,\n      })\n    );\n  },\n\n  save: function (props) {\n    return (\n      wp.element.createElement(\"h1\", null, props.attributes.heading),\n      wp.element.createElement(\"p\", null, props.attributes.content)\n    );\n  },\n}); *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGFsZXJ0KFwidGhpcyBpcyBhIHRlc3RcIik7ICovXG5cbndwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZShcImNnYi9ibG9jay1naWxkYXMtYmxvY2tcIiwge1xuICB0aXRsZTogXCJHaWxkYXMgQmxvY2tcIixcbiAgaWNvbjogXCJzbWlsZXlcIixcbiAgY2F0ZWdvcnk6IFwiY29tbW9uXCIsXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBjb250ZW50OiB7IHR5cGU6IFwic3RyaW5nXCIgfVxuICB9LFxuXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICBmdW5jdGlvbiB1cGRhdGVDb250ZW50KGV2ZW50KSB7XG4gICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgY29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIFwidGVzdCBibG9ja1wiKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwge1xuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5jb250ZW50LFxuICAgICAgb25DaGFuZ2U6IHVwZGF0ZUNvbnRlbnRcbiAgICB9KSk7XG4gIH0sXG5cbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBwcm9wcy5hdHRyaWJ1dGVzLmNvbnRlbnQpO1xuICB9XG59KTtcblxuLyogd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlKFwiY2diL2Jsb2NrLWdpbGRhcy1ibG9ja1wiLCB7XG4gIHRpdGxlOiBcIkdpbGRhcyBCbG9ja1wiLFxuICBpY29uOiBcInNtaWxleVwiLFxuICBjYXRlZ29yeTogXCJjb21tb25cIixcbiAgYXR0cmlidXRlczoge1xuICAgIGhlYWRpbmc6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgIGNvbnRlbnQ6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICB9LFxuXG4gIGVkaXQ6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUhlYWRpbmcoZXZlbnQpIHtcbiAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBoZWFkaW5nOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnQoZXZlbnQpIHtcbiAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgbnVsbCxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmhlYWRpbmcsXG4gICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVIZWFkaW5nLFxuICAgICAgfSksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5jb250ZW50LFxuICAgICAgICBvbkNoYW5nZTogdXBkYXRlQ29udGVudCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSxcblxuICBzYXZlOiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgcHJvcHMuYXR0cmlidXRlcy5oZWFkaW5nKSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgcHJvcHMuYXR0cmlidXRlcy5jb250ZW50KVxuICAgICk7XG4gIH0sXG59KTsgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
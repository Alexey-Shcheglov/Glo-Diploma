/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_serviceSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/serviceSlider */ \"./modules/serviceSlider.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_serviceSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\n\tconst accordeonItem = document.querySelectorAll('.accordeon-item');\r\n\tconst elementContent = document.querySelectorAll('.current');\r\n\r\n\tconst removeActive = () => {\r\n\t\tfor (let item of accordeonItem) {\r\n\t\t\titem.classList.remove('active');\r\n\t\t}\r\n\t};\r\n\t\r\n\tconst addRemoveDesc = () => {\r\n\t\tfor (let i = 0; i < accordeonItem.length; i++) {\r\n\t\t\tif (accordeonItem[i].classList.contains('active')) {\r\n\t\t\t\telementContent[i].style.display = 'block';\r\n\t\t\t} else {\r\n\t\t\t\telementContent[i].style.display = 'none';\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\r\n\taccordeonItem.forEach((item) => {\r\n\t\taddRemoveDesc();\r\n\t\titem.addEventListener('click', () => {\r\n\t\t\tif (item.classList.contains('active')) {\r\n\t\t\t\titem.classList.remove('active');\r\n\t\t\t\taddRemoveDesc();\r\n\t\t\t} else {\r\n\t\t\t\tremoveActive();\r\n\t\t\t\titem.classList.add('active');\r\n\t\t\t\taddRemoveDesc();\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\tconst toggleMenu = (e) => {\r\n\t\tif (e.target.closest('.top-menu')) {\r\n\t\t\tif (e.target.matches('ul>li>a')) {\r\n\t\t\t\te.preventDefault();\r\n\t\t\t\tconst href = e.target.getAttribute('href');\r\n\t\t\t\tdocument.querySelector(href).scrollIntoView({\r\n\t\t\t\t\tbehavior: 'smooth',\r\n\t\t\t\t\tblock: 'start'\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\tdocument.addEventListener(\"click\", (e) => toggleMenu(e));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n\r\n\tconst modalCallback = document.querySelector('.modal-callback');\r\n\tconst modalOverlay = document.querySelector('.modal-overlay');\r\n\r\n\tconst toggleModal = (e) => {\r\n\t\te.preventDefault();\r\n\t\tif (e.target.closest('.callback-btn') || e.target.closest('.button-services') || e.target.closest('.service-slider')) {\r\n\t\t\t\r\n\t\t\tmodalCallback.style.display = 'block';\r\n\t\t\tmodalOverlay.style.display = 'block';\r\n\t\t}\r\n\t\tif (e.target.closest('.modal-close') || e.target.closest('.modal-overlay')) {\r\n\t\t\tmodalCallback.style.display = 'none';\r\n\t\t\tmodalOverlay.style.display = 'none';\r\n\t\t}\r\n\t};\r\n\tdocument.addEventListener('click', (e) => toggleModal(e));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/serviceSlider.js":
/*!**********************************!*\
  !*** ./modules/serviceSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst serviceSlider = () => {\r\n\tconst serviceItem = document.querySelectorAll('.services-item');\r\n\tconst arrowLeft = document.querySelector('.arrow-left');\r\n\tconst arrowRight = document.querySelector('.arrow-right');\r\n\t\r\n\tlet position = 3;\r\n\tlet start = 0;\r\n\r\n\tserviceItem.forEach(item => {\r\n\t\tif (start < position) {\r\n\t\t\tstart++;\r\n\t\t} else {\r\n\t\t\titem.style.display = 'none';\r\n\t\t}\r\n\t});\r\n\tstart = 0; \r\n\tif (start === 0) {\r\n\t\tarrowLeft.style.opacity = 0.3;\r\n\t}\r\n\tarrowLeft.addEventListener('click', () => {\r\n\t\tif (start > 0) {\r\n\t\t\tstart = start - 1;\r\n\t\t\tposition = position - 1;\r\n\t\t\tserviceItem[start].style.display = 'block';\r\n\t\t\tserviceItem[position].style.display = 'none';\r\n\t\t\tarrowRight.style.opacity = 1;\r\n\t\t\tif (start === 0) {\r\n\t\t\t\tarrowLeft.style.opacity = 0.3;\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n\tarrowRight.addEventListener('click', () => {\r\n\t\tif (position < serviceItem.length) {\r\n\t\t\tserviceItem[start++].style.display = 'none';\r\n\t\t\tserviceItem[position++].style.display = 'block';\r\n\t\t\tif (position === serviceItem.length) {\r\n\t\t\t\tarrowRight.style.opacity = 0.3;\r\n\t\t\t}\r\n\t\t\tarrowLeft.style.opacity = 1;\r\n\t\t}\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serviceSlider);\n\n//# sourceURL=webpack:///./modules/serviceSlider.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n\tconst currentSection = document.querySelector('.services-section');\r\n\tconst up = document.querySelector('.up');\r\n\tconst upToTop = document.querySelector('.up_to_top');\r\n\r\n\tup.style.display = 'none';\r\n\r\n\twindow.addEventListener('scroll', () => {\r\n\t\tconst top = document.documentElement.scrollTop;\r\n\t\tif (top < currentSection.offsetTop) {\r\n\t\t\tup.style.display = 'none';\r\n\t\t} else if (top > currentSection.offsetTop) {\r\n\t\t\tup.style.display = 'block';\r\n\t\t}\r\n\t});\r\n\tupToTop.addEventListener('click', (e) => {\r\n\t\te.preventDefault();\r\n\t\tconst idTop = upToTop.getAttribute('href');\r\n\t\tconsole.log(idTop);\r\n\r\n\t\tdocument.querySelector(idTop).scrollIntoView({\r\n\t\t\tbehavior: 'smooth',\r\n\t\t\tblock: 'start'\r\n\t\t});\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
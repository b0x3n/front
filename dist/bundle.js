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

/***/ "./source/js/App.js":
/*!**************************!*\
  !*** ./source/js/App.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_Err_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Err.js */ \"./source/js/core/Err.js\");\n\r\n/**********************************************************\r\n * Importing all core modules.\r\n * \r\n */\r\n    \r\n\r\n\r\n    const   App = () =>\r\n    {\r\n\r\n        let     __err;\r\n\r\n\r\n        let     __init = () =>\r\n        {\r\n            __err = (0,_core_Err_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        };\r\n\r\n\r\n        __init();\r\n\r\n\r\n        return {\r\n            isErr:              __err.isError\r\n        };\r\n\r\n    };\r\n\r\n\r\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\r\n\n\n//# sourceURL=webpack://front/./source/js/App.js?");

/***/ }),

/***/ "./source/js/Bootstrap.js":
/*!********************************!*\
  !*** ./source/js/Bootstrap.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ \"./source/js/App.js\");\n/**********************************************************\r\n * front/modules/Bootstrap.js\r\n *\r\n * Here, we import the App.js module, this will import\r\n * all of the core modules and initialise the system.\r\n *  \r\n */\r\n\r\n    \r\n\r\n    let     Main = () =>\r\n    {\r\n        let     app = (0,_App_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    /******************************************************\r\n     * Error check - app.isErr() will return true if\r\n     * any errors were recorded.\r\n     * \r\n     */\r\n        if (app.isErr()) {\r\n            app.isErr(true);\r\n            return;\r\n        }\r\n    \r\n    /******************************************************\r\n     * All good, no errors.\r\n     */\r\n        console.log('Ready!');\r\n    };\r\n\r\n\r\n    Main();\r\n\n\n//# sourceURL=webpack://front/./source/js/Bootstrap.js?");

/***/ }),

/***/ "./source/js/core/Err.js":
/*!*******************************!*\
  !*** ./source/js/core/Err.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**********************************************************\r\n * front/Modules/core/Err.js\r\n * \r\n * Basic error handler.\r\n * \r\n */\r\n\r\n    const   Err = () =>\r\n    {\r\n\r\n        let     __error_msg;\r\n\r\n\r\n    /******************************************************\r\n     * __init()\r\n     * \r\n     * Called when the module is initialised, initialises\r\n     * the __error_message (false = no errors, yet!).\r\n     * \r\n     */\r\n        let     __init = () =>\r\n        {\r\n\r\n            __error_msg = false;\r\n\r\n        };\r\n\r\n\r\n    /******************************************************\r\n     * _setError()\r\n     * \r\n     * Record an error message in the __error_msg buffer,\r\n     * we can add multiple errors which will be sepatated\r\n     * by a \\n character.\r\n     * \r\n     * If the passed error_msg is false, the __error_msg\r\n     * is reset (set to false = no errors).\r\n     * \r\n     */\r\n        let     _setError = (error_msg = false) =>\r\n        {\r\n            if (! error_msg) \r\n                __error_msg = false;\r\n            else\r\n            {\r\n                if (__error_msg)\r\n                    __error_msg += `\\n${error_msg}`;\r\n                else\r\n                    __error_msg = error_msg;\r\n            }\r\n\r\n            return __error_msg;\r\n        };\r\n\r\n\r\n    /******************************************************\r\n     * _isError()\r\n     * \r\n     * Will return __error_msg, which will be false if\r\n     * there are no errors.\r\n     * \r\n     * If there are errors are reportError is not false,\r\n     * then reportError is assumed to be a callback that\r\n     * will be called and receive __error_msg as a\r\n     * paramter.\r\n     * \r\n     */\r\n        let     _isError = (\r\n            reportError = false\r\n        ) =>\r\n        {\r\n            if (__error_msg) {\r\n                if (reportError) {\r\n                    __error_msg.split('\\n').forEach(msg => {\r\n                        console.error(msg);\r\n                    });\r\n                }\r\n            }\r\n\r\n            return __error_msg;\r\n        };\r\n\r\n\r\n        __init();\r\n\r\n\r\n        return {\r\n            setError:           _setError,\r\n            isError:            _isError\r\n        };\r\n\r\n    };\r\n\r\n\r\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Err);\r\n\n\n//# sourceURL=webpack://front/./source/js/core/Err.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./source/js/Bootstrap.js");
/******/ 	
/******/ })()
;
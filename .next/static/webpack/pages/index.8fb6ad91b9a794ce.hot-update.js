"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ui/common/card.js":
/*!**************************************!*\
  !*** ./components/ui/common/card.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_ui_common_card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ui/common/card.module.css */ \"./components/ui/common/card.module.css\");\n/* harmony import */ var components_ui_common_card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(components_ui_common_card_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Card = (param)=>{\n    let { data  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (components_ui_common_card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                onDrag: (e)=>console.log(e),\n                src: data.image,\n                className: (components_ui_common_card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card__image)\n            }, void 0, false, {\n                fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/common/card.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: data.name\n            }, void 0, false, {\n                fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/common/card.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.address\n            }, void 0, false, {\n                fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/common/card.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Details\"\n            }, void 0, false, {\n                fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/common/card.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/common/card.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL2NvbW1vbi9jYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyRDtBQUUzRCxNQUFNQyxPQUFPLFNBQVk7UUFBWCxFQUFDQyxLQUFJLEVBQUM7SUFDbEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdKLGtGQUFZOzswQkFDMUIsOERBQUNNO2dCQUFJQyxRQUFRLENBQUNDLElBQU1DLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBQUlHLEtBQUtULEtBQUtVLEtBQUs7Z0JBQUVSLFdBQVdKLHlGQUFtQjs7Ozs7OzBCQUNuRiw4REFBQ2M7MEJBQUlaLEtBQUthLElBQUk7Ozs7OzswQkFDZCw4REFBQ0M7MEJBQUdkLEtBQUtlLE9BQU87Ozs7OzswQkFDaEIsOERBQUNDOzBCQUFPOzs7Ozs7Ozs7Ozs7QUFHZDtLQVRNakI7QUFXTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL2NvbW1vbi9jYXJkLmpzPzc1OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnY29tcG9uZW50cy91aS9jb21tb24vY2FyZC5tb2R1bGUuY3NzJztcblxuY29uc3QgQ2FyZCA9ICh7ZGF0YX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgIDxpbWcgb25EcmFnPXsoZSkgPT4gY29uc29sZS5sb2coZSl9IHNyYz17ZGF0YS5pbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRfX2ltYWdlfS8+XG4gICAgICA8aDI+e2RhdGEubmFtZX08L2gyPlxuICAgICAgPHA+e2RhdGEuYWRkcmVzc308L3A+XG4gICAgICA8YnV0dG9uPkRldGFpbHM8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJDYXJkIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJpbWciLCJvbkRyYWciLCJlIiwiY29uc29sZSIsImxvZyIsInNyYyIsImltYWdlIiwiY2FyZF9faW1hZ2UiLCJoMiIsIm5hbWUiLCJwIiwiYWRkcmVzcyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/common/card.js\n"));

/***/ })

});
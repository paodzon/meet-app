"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/new-meetup",{

/***/ "./components/ui/meetup/AddForm.js":
/*!*****************************************!*\
  !*** ./components/ui/meetup/AddForm.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_LabeledTextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/LabeledTextField */ \"./components/ui/common/LabeledTextField.js\");\n/* harmony import */ var _AddForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddForm.module.css */ \"./components/ui/meetup/AddForm.module.css\");\n/* harmony import */ var _AddForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AddForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddForm = ()=>{\n    _s();\n    const titleInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        console.log(titleInputRef.current.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_AddForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().addForm__container),\n        children: [\n            \"Add New Meetup\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AddForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().addForm__input),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_LabeledTextField__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        label: \"Title\",\n                        inputRef: titleInputRef\n                    }, void 0, false, {\n                        fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/meetup/AddForm.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_LabeledTextField__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        label: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/meetup/AddForm.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/meetup/AddForm.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onSubmit,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/meetup/AddForm.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/meetup/AddForm.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AddForm, \"+6zqG/+0Uo7xdn5W2JH9OTF5JNQ=\");\n_c = AddForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddForm);\nvar _c;\n$RefreshReg$(_c, \"AddForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL21lZXR1cC9BZGRGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDMkI7QUFDZjtBQUUzQyxNQUFNRyxVQUFVLElBQU07O0lBQ2xCLE1BQU1DLGdCQUFnQkosNkNBQU1BO0lBRTVCLE1BQU1LLFdBQVcsQ0FBQ0MsSUFBSztRQUNuQkEsRUFBRUMsY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDTCxjQUFjTSxPQUFPLENBQUNDLEtBQUs7SUFDM0M7SUFFQSxxQkFDSSw4REFBQ0M7UUFBS0MsV0FBV1gsK0VBQTBCOztZQUFFOzBCQUV6Qyw4REFBQ2E7Z0JBQUlGLFdBQVdYLDJFQUFzQjs7a0NBQ2xDLDhEQUFDRCxnRUFBZ0JBO3dCQUFDZ0IsT0FBTTt3QkFBUUMsVUFBVWQ7Ozs7OztrQ0FDMUMsOERBQUNILGdFQUFnQkE7d0JBQUNnQixPQUFNOzs7Ozs7Ozs7Ozs7MEJBRTVCLDhEQUFDRTtnQkFBT0MsU0FBU2Y7MEJBQVU7Ozs7Ozs7Ozs7OztBQUd2QztHQWxCTUY7S0FBQUE7QUFvQk4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9tZWV0dXAvQWRkRm9ybS5qcz8yOWI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYWJlbGVkVGV4dEZpZWxkIGZyb20gJy4uL2NvbW1vbi9MYWJlbGVkVGV4dEZpZWxkJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vQWRkRm9ybS5tb2R1bGUuY3NzJztcblxuY29uc3QgQWRkRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZUlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aXRsZUlucHV0UmVmLmN1cnJlbnQudmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRGb3JtX19jb250YWluZXJ9PlxuICAgICAgICAgICAgQWRkIE5ldyBNZWV0dXBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFkZEZvcm1fX2lucHV0fT5cbiAgICAgICAgICAgICAgICA8TGFiZWxlZFRleHRGaWVsZCBsYWJlbD0nVGl0bGUnIGlucHV0UmVmPXt0aXRsZUlucHV0UmVmfS8+XG4gICAgICAgICAgICAgICAgPExhYmVsZWRUZXh0RmllbGQgbGFiZWw9J0FkZHJlc3MnLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEZvcm0iXSwibmFtZXMiOlsidXNlUmVmIiwiTGFiZWxlZFRleHRGaWVsZCIsImNsYXNzZXMiLCJBZGRGb3JtIiwidGl0bGVJbnB1dFJlZiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJ2YWx1ZSIsImZvcm0iLCJjbGFzc05hbWUiLCJhZGRGb3JtX19jb250YWluZXIiLCJkaXYiLCJhZGRGb3JtX19pbnB1dCIsImxhYmVsIiwiaW5wdXRSZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/meetup/AddForm.js\n"));

/***/ })

});
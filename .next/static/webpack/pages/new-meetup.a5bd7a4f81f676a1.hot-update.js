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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_LabeledTextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/LabeledTextField */ \"./components/ui/common/LabeledTextField.js\");\n/* harmony import */ var _AddForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddForm.module.css */ \"./components/ui/meetup/AddForm.module.css\");\n/* harmony import */ var _AddForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AddForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddForm = ()=>{\n    _s();\n    const titleInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const addressInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const imageInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        console.log({\n            title: titleInputRef.current.value,\n            address: addressInputRef.current.value,\n            image: imageInputRef.current.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_AddForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().addForm__container),\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Add New Meetup\"\n            }, void 0, false, {\n                fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/meetup/AddForm.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AddForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().addForm__input),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_LabeledTextField__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        label: \"Title\",\n                        inputRef: titleInputRef,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/meetup/AddForm.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_LabeledTextField__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        label: \"Address\",\n                        inputRef: addressInputRef\n                    }, void 0, false, {\n                        fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/meetup/AddForm.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_LabeledTextField__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        label: \"Image\",\n                        inputRef: imageInputRef\n                    }, void 0, false, {\n                        fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/meetup/AddForm.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/meetup/AddForm.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/meetup/AddForm.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paolodizon/Documents/Projects/meet-app/components/ui/meetup/AddForm.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AddForm, \"rSEP2/xPWzvTthDRSozZGMum0G8=\");\n_c = AddForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddForm);\nvar _c;\n$RefreshReg$(_c, \"AddForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL21lZXR1cC9BZGRGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDMkI7QUFDZjtBQUUzQyxNQUFNRyxVQUFVLElBQU07O0lBQ2xCLE1BQU1DLGdCQUFnQkosNkNBQU1BO0lBQzVCLE1BQU1LLGtCQUFrQkwsNkNBQU1BO0lBQzlCLE1BQU1NLGdCQUFnQk4sNkNBQU1BO0lBRTVCLE1BQU1PLFdBQVcsQ0FBQ0MsSUFBTTtRQUNwQkEsRUFBRUMsY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDO1lBQUVDLE9BQU9SLGNBQWNTLE9BQU8sQ0FBQ0MsS0FBSztZQUFFQyxTQUFTVixnQkFBZ0JRLE9BQU8sQ0FBQ0MsS0FBSztZQUFFRSxPQUFPVixjQUFjTyxPQUFPLENBQUNDLEtBQUs7UUFBQztJQUNqSTtJQUVBLHFCQUNJLDhEQUFDRztRQUFLQyxXQUFXaEIsK0VBQTBCO1FBQUVLLFVBQVVBOzswQkFDbkQsOERBQUNhOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFJSCxXQUFXaEIsMkVBQXNCOztrQ0FDbEMsOERBQUNELGdFQUFnQkE7d0JBQUNzQixPQUFNO3dCQUFRQyxVQUFVcEI7d0JBQWVxQixVQUFVLElBQUk7Ozs7OztrQ0FDdkUsOERBQUN4QixnRUFBZ0JBO3dCQUFDc0IsT0FBTTt3QkFBVUMsVUFBVW5COzs7Ozs7a0NBQzVDLDhEQUFDSixnRUFBZ0JBO3dCQUFDc0IsT0FBTTt3QkFBUUMsVUFBVWxCOzs7Ozs7Ozs7Ozs7MEJBRTlDLDhEQUFDb0I7MEJBQU87Ozs7Ozs7Ozs7OztBQUdwQjtHQXJCTXZCO0tBQUFBO0FBdUJOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvbWVldHVwL0FkZEZvcm0uanM/MjliNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGFiZWxlZFRleHRGaWVsZCBmcm9tICcuLi9jb21tb24vTGFiZWxlZFRleHRGaWVsZCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0FkZEZvcm0ubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEFkZEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGVJbnB1dFJlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGFkZHJlc3NJbnB1dFJlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGltYWdlSW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh7IHRpdGxlOiB0aXRsZUlucHV0UmVmLmN1cnJlbnQudmFsdWUsIGFkZHJlc3M6IGFkZHJlc3NJbnB1dFJlZi5jdXJyZW50LnZhbHVlLCBpbWFnZTogaW1hZ2VJbnB1dFJlZi5jdXJyZW50LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRGb3JtX19jb250YWluZXJ9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgICA8aDE+QWRkIE5ldyBNZWV0dXA8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkRm9ybV9faW5wdXR9PlxuICAgICAgICAgICAgICAgIDxMYWJlbGVkVGV4dEZpZWxkIGxhYmVsPSdUaXRsZScgaW5wdXRSZWY9e3RpdGxlSW5wdXRSZWZ9IHJlcXVpcmVkPXt0cnVlfS8+XG4gICAgICAgICAgICAgICAgPExhYmVsZWRUZXh0RmllbGQgbGFiZWw9J0FkZHJlc3MnIGlucHV0UmVmPXthZGRyZXNzSW5wdXRSZWZ9IC8+XG4gICAgICAgICAgICAgICAgPExhYmVsZWRUZXh0RmllbGQgbGFiZWw9J0ltYWdlJyBpbnB1dFJlZj17aW1hZ2VJbnB1dFJlZn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkRm9ybSJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJMYWJlbGVkVGV4dEZpZWxkIiwiY2xhc3NlcyIsIkFkZEZvcm0iLCJ0aXRsZUlucHV0UmVmIiwiYWRkcmVzc0lucHV0UmVmIiwiaW1hZ2VJbnB1dFJlZiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiY3VycmVudCIsInZhbHVlIiwiYWRkcmVzcyIsImltYWdlIiwiZm9ybSIsImNsYXNzTmFtZSIsImFkZEZvcm1fX2NvbnRhaW5lciIsImgxIiwiZGl2IiwiYWRkRm9ybV9faW5wdXQiLCJsYWJlbCIsImlucHV0UmVmIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/meetup/AddForm.js\n"));

/***/ })

});
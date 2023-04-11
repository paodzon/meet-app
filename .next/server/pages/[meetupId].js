/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[meetupId]";
exports.ids = ["pages/[meetupId]"];
exports.modules = {

/***/ "./pages/[meetupId]/index.module.css":
/*!*******************************************!*\
  !*** ./pages/[meetupId]/index.module.css ***!
  \*******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"meetup\": \"_meetupId__meetup__R80R5\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4Lm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0LWFwcC8uL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXgubW9kdWxlLmNzcz8yODkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1lZXR1cFwiOiBcIl9tZWV0dXBJZF9fbWVldHVwX19SODBSNVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _meetupId_index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../[meetupId]/index.module.css */ \"./pages/[meetupId]/index.module.css\");\n/* harmony import */ var _meetupId_index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_meetupId_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction MeetUpPage(props) {\n    const { meetup  } = props;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_meetupId_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().meetup),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: meetup.image,\n                width: 450\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\meet-app\\\\pages\\\\[meetupId]\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: meetup.title\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\meet-app\\\\pages\\\\[meetupId]\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: meetup.address\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\meet-app\\\\pages\\\\[meetupId]\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: router.back,\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\meet-app\\\\pages\\\\[meetupId]\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\meet-app\\\\pages\\\\[meetupId]\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const meetupId = context.params.meetupId;\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__.MongoClient.connect(\"mongodb+srv://paodzon:pawpaw@cluster0.a4zpiwo.mongodb.net/meetups?retryWrites=true&w=majority\");\n    const db = client.db();\n    const meetupsCollection = db.collection(\"meetups\");\n    const selectedMeetup = await meetupsCollection.findOne({\n        _id: new mongodb__WEBPACK_IMPORTED_MODULE_3__.ObjectId(meetupId)\n    });\n    client.close();\n    return {\n        props: {\n            meetup: {\n                title: selectedMeetup.title,\n                address: selectedMeetup.address,\n                image: selectedMeetup.image,\n                id: selectedMeetup._id.toString()\n            }\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetUpPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUNhO0FBQ0w7QUFFaEQsU0FBU0ssV0FBV0MsS0FBSyxFQUFFO0lBQ3pCLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdEO0lBQ25CLE1BQU1FLFNBQVNQLHNEQUFTQTtJQUN4QixxQkFDRSw4REFBQ1E7UUFBSUMsV0FBV1IsMEVBQWM7OzBCQUM1Qiw4REFBQ1M7Z0JBQUlDLEtBQUtMLE9BQU9NLEtBQUs7Z0JBQUVDLE9BQU87Ozs7OzswQkFDL0IsOERBQUNDOzBCQUFJUixPQUFPUyxLQUFLOzs7Ozs7MEJBQ2pCLDhEQUFDQzswQkFBSVYsT0FBT1csT0FBTzs7Ozs7OzBCQUNuQiw4REFBQ0M7Z0JBQU9DLFNBQVNaLE9BQU9hLElBQUk7MEJBQUU7Ozs7Ozs7Ozs7OztBQUdwQztBQUVPLGVBQWVDLG1CQUFtQkMsT0FBTyxFQUFFO0lBQ2hELE1BQU1DLFdBQVdELFFBQVFFLE1BQU0sQ0FBQ0QsUUFBUTtJQUV4QyxNQUFNRSxTQUFTLE1BQU12Qix3REFBbUIsQ0FDdEM7SUFFRixNQUFNeUIsS0FBS0YsT0FBT0UsRUFBRTtJQUVwQixNQUFNQyxvQkFBb0JELEdBQUdFLFVBQVUsQ0FBQztJQUN4QyxNQUFNQyxpQkFBaUIsTUFBTUYsa0JBQWtCRyxPQUFPLENBQUM7UUFDckRDLEtBQUssSUFBSTdCLDZDQUFRQSxDQUFDb0I7SUFDcEI7SUFDQUUsT0FBT1EsS0FBSztJQUNaLE9BQU87UUFDTDVCLE9BQU87WUFDTEMsUUFBUTtnQkFDTlMsT0FBT2UsZUFBZWYsS0FBSztnQkFDM0JFLFNBQVNhLGVBQWViLE9BQU87Z0JBQy9CTCxPQUFPa0IsZUFBZWxCLEtBQUs7Z0JBQzNCc0IsSUFBSUosZUFBZUUsR0FBRyxDQUFDRyxRQUFRO1lBQ2pDO1FBQ0Y7SUFDRjtBQUNGLENBQUM7QUFFRCxpRUFBZS9CLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0LWFwcC8uL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanM/OGZmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi9bbWVldHVwSWRdL2luZGV4Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuZnVuY3Rpb24gTWVldFVwUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IHsgbWVldHVwIH0gPSBwcm9wcztcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVldHVwfT5cclxuICAgICAgPGltZyBzcmM9e21lZXR1cC5pbWFnZX0gd2lkdGg9ezQ1MH0gLz5cclxuICAgICAgPGgxPnttZWV0dXAudGl0bGV9PC9oMT5cclxuICAgICAgPGg0PnttZWV0dXAuYWRkcmVzc308L2g0PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JvdXRlci5iYWNrfT5HbyBCYWNrPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL3Bhb2R6b246cGF3cGF3QGNsdXN0ZXIwLmE0enBpd28ubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe1xyXG4gICAgX2lkOiBuZXcgT2JqZWN0SWQobWVldHVwSWQpLFxyXG4gIH0pO1xyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXA6IHtcclxuICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgaWQ6IHNlbGVjdGVkTWVldHVwLl9pZC50b1N0cmluZygpXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXRVcFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsImNsYXNzZXMiLCJNb25nb0NsaWVudCIsIk9iamVjdElkIiwiTWVldFVwUGFnZSIsInByb3BzIiwibWVldHVwIiwicm91dGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsImgxIiwidGl0bGUiLCJoNCIsImFkZHJlc3MiLCJidXR0b24iLCJvbkNsaWNrIiwiYmFjayIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJtZWV0dXBJZCIsInBhcmFtcyIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInNlbGVjdGVkTWVldHVwIiwiZmluZE9uZSIsIl9pZCIsImNsb3NlIiwiaWQiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[meetupId]/index.js"));
module.exports = __webpack_exports__;

})();
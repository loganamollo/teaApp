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
exports.id = "pages/auction";
exports.ids = ["pages/auction"];
exports.modules = {

/***/ "./pages/auction.js":
/*!**************************!*\
  !*** ./pages/auction.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Auction)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Auction_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Auction.module.css */ \"./styles/Auction.module.css\");\n/* harmony import */ var _styles_Auction_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Auction_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/logan/development/js/express/tea-app/frontend/pages/auction.js\";\n\n\n\n\n\nfunction Auction() {\n  const {\n    0: teas,\n    1: setTeas\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n  const {\n    0: userId,\n    1: setUserId\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n  const {\n    0: userName,\n    1: setUserName\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n  const {\n    0: error,\n    1: setError\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    if (!teas) {\n      axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://localhost:9090/teas/').then(({\n        data\n      }) => setTeas(data)).catch(err => console.log(err.message));\n    }\n\n    if (!userId) {\n      setUserId(router.query.userId);\n    }\n  });\n\n  const buyTea = id => {\n    // axios.patch(\n    //     `http:localhost:9090/teas/${id}`,\n    //     {\n    //         buyer: userId\n    //     },\n    //     { headers: { 'Content-Type': 'application/json' }}\n    // )\n    let username;\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://localhost/users/${userId}`).then(response => {\n      console.log(response.data);\n\n      if (!userName) {\n        setUserName(response.data['name']);\n      }\n    }).catch(err => {\n      console.log(err);\n      setError(err.message + 'slow network. RequestTimeOUt 403');\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: \"Tea Auction\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: teas && teas.map(tea => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: (_styles_Auction_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Quantity: \", tea['quantity'], \" Kgs\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Report : \", tea['report'] ? tea['report'] : 'Pending', \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Harvest Details : \", tea['harvestDetails'] ? tea['harvestDetails'] : 'Pending', \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Type: \", tea['type'] ? tea['type'] : 'Not set']\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Buyer : \", tea['buyer'] ? userName : 'Not bought yet', \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Price : \", tea['price'] ? tea['price'] : 'Not set', \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 29\n          }, this), tea['price'] && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n            className: (_styles_Auction_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n            onClick: tea => buyTea(tea['_id']),\n            children: \"Buy\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 33\n          }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            className: (_styles_Auction_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n            children: error\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 42\n          }, this)]\n        }, tea['_id'], true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 25\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBRCxDQUFILEdBQWVBLEdBQUcsQ0FBQyxPQUFELENBQWxCLEdBQThCLFNBQTNDO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQU5KLEVBUVFBLEdBQUcsQ0FBQyxPQUFELENBQUgsaUJBQ0E7WUFBUSxTQUFTLEVBQUV6QiwwRUFBbkI7WUFBa0MsT0FBTyxFQUFJeUIsR0FBRCxJQUFTTCxNQUFNLENBQUNLLEdBQUcsQ0FBQyxLQUFELENBQUosQ0FBM0Q7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFUUixFQVlRakIsS0FBSyxpQkFBSTtZQUFHLFNBQVMsRUFBRVIseUVBQWQ7WUFBQSxVQUE4QlE7VUFBOUI7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQVpqQjtRQUFBLEdBQVVpQixHQUFHLENBQUMsS0FBRCxDQUFiO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFEQTtNQWlCSCxDQWxCRDtJQUhSO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQTZCSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXVjdGlvbi5qcz83NTg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9BdWN0aW9uLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1Y3Rpb24gKCkge1xuICAgIGNvbnN0IFt0ZWFzLCBzZXRUZWFzXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgaWYoIXRlYXMpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo5MDkwL3RlYXMvJylcbiAgICAgICAgICAgIC50aGVuKCAoe2RhdGF9KSA9PiBzZXRUZWFzKGRhdGEpIClcbiAgICAgICAgICAgIC5jYXRjaCggZXJyID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHNldFVzZXJJZChyb3V0ZXIucXVlcnkudXNlcklkKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGJ1eVRlYSA9IChpZCkgPT4ge1xuICAgICAgICAvLyBheGlvcy5wYXRjaChcbiAgICAgICAgLy8gICAgIGBodHRwOmxvY2FsaG9zdDo5MDkwL3RlYXMvJHtpZH1gLFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGJ1eWVyOiB1c2VySWRcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICB7IGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9fVxuICAgICAgICAvLyApXG4gICAgICAgIGxldCB1c2VybmFtZVxuICAgICAgICBheGlvcy5nZXQoXG4gICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdC91c2Vycy8ke3VzZXJJZH1gXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICBpZiAoIXVzZXJOYW1lKSB7IHNldFVzZXJOYW1lKHJlc3BvbnNlLmRhdGFbJ25hbWUnXSkgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goIGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSArICdzbG93IG5ldHdvcmsuIFJlcXVlc3RUaW1lT1V0IDQwMycpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDE+VGVhIEF1Y3Rpb248L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRlYXMgJiZcbiAgICAgICAgICAgICAgICAgICAgdGVhcy5tYXAoIHRlYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3RlYVsnX2lkJ119IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5RdWFudGl0eTogeyB0ZWFbJ3F1YW50aXR5J10gfSBLZ3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmVwb3J0IDogeyB0ZWFbJ3JlcG9ydCddID8gdGVhWydyZXBvcnQnXSA6ICdQZW5kaW5nJyB9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IYXJ2ZXN0IERldGFpbHMgOiB7IHRlYVsnaGFydmVzdERldGFpbHMnXSA/IHRlYVsnaGFydmVzdERldGFpbHMnXSA6ICdQZW5kaW5nJyB9IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UeXBlOiB7IHRlYVsndHlwZSddID8gdGVhWyd0eXBlJ10gOiAnTm90IHNldCcgfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5CdXllciA6IHsgdGVhWydidXllciddID8gdXNlck5hbWUgOiAnTm90IGJvdWdodCB5ZXQnIH0gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByaWNlIDogeyB0ZWFbJ3ByaWNlJ10gPyB0ZWFbJ3ByaWNlJ10gOiAnTm90IHNldCcgfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFbJ3ByaWNlJ10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eyAodGVhKSA9PiBidXlUZWEodGVhWydfaWQnXSkgfSA+QnV5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9ID57ZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJheGlvcyIsIlJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQXVjdGlvbiIsInRlYXMiLCJzZXRUZWFzIiwidXNlcklkIiwic2V0VXNlcklkIiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJxdWVyeSIsImJ1eVRlYSIsImlkIiwidXNlcm5hbWUiLCJyZXNwb25zZSIsIm1hcCIsInRlYSIsImNhcmQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auction.js\n");

/***/ }),

/***/ "./styles/Auction.module.css":
/*!***********************************!*\
  !*** ./styles/Auction.module.css ***!
  \***********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"Auction_card__UR7Xk\",\n\t\"text\": \"Auction_text__5SvTO\",\n\t\"button\": \"Auction_button__W9oIQ\",\n\t\"error\": \"Auction_error__OoV15\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQXVjdGlvbi5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zdHlsZXMvQXVjdGlvbi5tb2R1bGUuY3NzP2NlNzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkF1Y3Rpb25fY2FyZF9fVVI3WGtcIixcblx0XCJ0ZXh0XCI6IFwiQXVjdGlvbl90ZXh0X181U3ZUT1wiLFxuXHRcImJ1dHRvblwiOiBcIkF1Y3Rpb25fYnV0dG9uX19XOW9JUVwiLFxuXHRcImVycm9yXCI6IFwiQXVjdGlvbl9lcnJvcl9fT29WMTVcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Auction.module.css\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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
var __webpack_exports__ = (__webpack_exec__("./pages/auction.js"));
module.exports = __webpack_exports__;

})();
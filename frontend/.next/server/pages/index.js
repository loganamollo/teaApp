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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/logan/development/js/express/tea-app/frontend/pages/index.js\";\n\n\n\n\n\nfunction Home() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n  const {\n    0: teas,\n    1: setTeas\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n  const baseUrl = 'http://localhost:9090/';\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    let userId;\n    userId = router.query.userId;\n\n    if (!userId) {\n      router.push('/login');\n    }\n\n    if (user) {\n      if (!teas) {\n        axios__WEBPACK_IMPORTED_MODULE_0___default().get(baseUrl + 'teas/').then(response => {\n          let loadedTeas = [];\n          response.data.forEach(item => {\n            if (item.farmer === user['_id']) {\n              loadedTeas.push(item);\n            }\n\n            setTeas(loadedTeas);\n          });\n        }).catch(err => console.log(err.message));\n      }\n    } else {\n      axios__WEBPACK_IMPORTED_MODULE_0___default().get(baseUrl + `users/${userId}`).then(response => setUser(response.data)).catch(err => console.log(err.message));\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    styles: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),\n      children: [\"Welcome \", user['name']]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }, this), teas && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().teas),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),\n        children: \"Your Tea Harvests\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), teas.map(tea => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().teaCard),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Quantity: \", tea['quantity'], \" Kgs\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Report : \", tea['report'] ? tea['report'] : 'Pending', \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Harvest Details : \", tea['harvestDetails'] ? tea['harvestDetails'] : 'Pending', \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Price : \", tea['price'] ? tea['price'] : 'Not set', \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Buyer : \", tea['report'] ? tea['report'] : 'Pending', \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [\"Report : \", tea['buyer'] ? tea['buyer'] : 'Not bought yet', \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 15\n        }, this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQUEsdUJBQWFBLEdBQUcsQ0FBQyxRQUFELENBQUgsR0FBZ0JBLEdBQUcsQ0FBQyxRQUFELENBQW5CLEdBQWdDLFNBQTdDO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQUxGLGVBTUU7WUFBQSx3QkFBY0EsR0FBRyxDQUFDLE9BQUQsQ0FBSCxHQUFlQSxHQUFHLENBQUMsT0FBRCxDQUFsQixHQUE4QixnQkFBNUM7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBTkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBREY7TUFVRCxDQVhELENBSEY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBSko7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUF5QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW3RlYXMsIHNldFRlYXNdID0gdXNlU3RhdGUoKVxuICBjb25zdCBiYXNlVXJsPSdodHRwOi8vbG9jYWxob3N0OjkwOTAvJ1xuICBcbiAgXG4gIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgIGxldCB1c2VySWRcbiAgICB1c2VySWQgPSByb3V0ZXIucXVlcnkudXNlcklkXG4gICAgaWYgKCF1c2VySWQpe1xuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgfVxuICAgIGlmICh1c2VyKSB7XG4gICAgICBpZiAoIXRlYXMpIHtcbiAgICAgICAgYXhpb3MuZ2V0KGJhc2VVcmwgKyAndGVhcy8nKVxuICAgICAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGxldCBsb2FkZWRUZWFzID0gW11cbiAgICAgICAgICByZXNwb25zZS5kYXRhLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uZmFybWVyID09PSB1c2VyWydfaWQnXSl7XG4gICAgICAgICAgICAgIGxvYWRlZFRlYXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGVhcyhsb2FkZWRUZWFzKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCggZXJyID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSApXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF4aW9zLmdldChiYXNlVXJsICsgYHVzZXJzLyR7dXNlcklkfWApXG4gICAgICAudGhlbiggcmVzcG9uc2UgPT4gc2V0VXNlcihyZXNwb25zZS5kYXRhKSApXG4gICAgICAuY2F0Y2goIGVyciA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkgKVxuICAgIH1cbiAgfSlcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9ID5cbiAgICAgIHsgdXNlciAmJiA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+V2VsY29tZSB7dXNlclsnbmFtZSddfTwvaDE+IH1cbiAgICAgIHtcbiAgICAgICAgdGVhcyAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlYXN9ID5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PllvdXIgVGVhIEhhcnZlc3RzPC9oMj5cbiAgICAgICAge1xuICAgICAgICAgIHRlYXMubWFwKCB0ZWEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWFDYXJkfT5cbiAgICAgICAgICAgICAgICA8cD5RdWFudGl0eTogeyB0ZWFbJ3F1YW50aXR5J10gfSBLZ3M8L3A+XG4gICAgICAgICAgICAgICAgPHA+UmVwb3J0IDogeyB0ZWFbJ3JlcG9ydCddID8gdGVhWydyZXBvcnQnXSA6ICdQZW5kaW5nJyB9IDwvcD5cbiAgICAgICAgICAgICAgICA8cD5IYXJ2ZXN0IERldGFpbHMgOiB7IHRlYVsnaGFydmVzdERldGFpbHMnXSA/IHRlYVsnaGFydmVzdERldGFpbHMnXSA6ICdQZW5kaW5nJyB9IDwvcD5cbiAgICAgICAgICAgICAgICA8cD5QcmljZSA6IHsgdGVhWydwcmljZSddID8gdGVhWydwcmljZSddIDogJ05vdCBzZXQnIH0gPC9wPlxuICAgICAgICAgICAgICAgIDxwPkJ1eWVyIDogeyB0ZWFbJ3JlcG9ydCddID8gdGVhWydyZXBvcnQnXSA6ICdQZW5kaW5nJyB9IDwvcD5cbiAgICAgICAgICAgICAgICA8cD5SZXBvcnQgOiB7IHRlYVsnYnV5ZXInXSA/IHRlYVsnYnV5ZXInXSA6ICdOb3QgYm91Z2h0IHlldCcgfSA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsInRlYXMiLCJzZXRUZWFzIiwiYmFzZVVybCIsInVzZXJJZCIsInF1ZXJ5IiwicHVzaCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImxvYWRlZFRlYXMiLCJkYXRhIiwiZm9yRWFjaCIsIml0ZW0iLCJmYXJtZXIiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiY29udGFpbmVyIiwidGV4dCIsIm1hcCIsInRlYSIsInRlYUNhcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"loginButtonGroup\": \"Home_loginButtonGroup__V_3ZG\",\n\t\"teaCard\": \"Home_teaCard__eAncG\",\n\t\"text\": \"Home_text__upzyl\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzcxMjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCIsXG5cdFwibG9naW5CdXR0b25Hcm91cFwiOiBcIkhvbWVfbG9naW5CdXR0b25Hcm91cF9fVl8zWkdcIixcblx0XCJ0ZWFDYXJkXCI6IFwiSG9tZV90ZWFDYXJkX19lQW5jR1wiLFxuXHRcInRleHRcIjogXCJIb21lX3RleHRfX3VwenlsXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
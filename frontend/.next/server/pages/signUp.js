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
exports.id = "pages/signUp";
exports.ids = ["pages/signUp"];
exports.modules = {

/***/ "./pages/signUp.js":
/*!*************************!*\
  !*** ./pages/signUp.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignUp)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/SignUp.module.css */ \"./styles/SignUp.module.css\");\n/* harmony import */ var _styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/logan/development/js/express/tea-app/frontend/pages/signUp.js\";\n\n\n\n\n\nfunction SignUp() {\n  const {\n    0: name,\n    1: setName\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n  const {\n    0: password,\n    1: setPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n  const {\n    0: error,\n    1: setError\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n  const {\n    0: role,\n    1: setRole\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n  const {\n    0: id,\n    1: setId\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const baseUrl = 'http://localhost:9090/users/';\n\n  const handleSubmit = async e => {\n    e.preventDefault();\n\n    if (role == 'farmer' || role == 'buyer') {\n      axios__WEBPACK_IMPORTED_MODULE_0___default().post(baseUrl, {\n        name: name,\n        password: password,\n        role: role\n      }, {\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(response => console.log(response.data)).catch(err => {\n        console.log(err);\n        setError(err.message);\n      });\n    } else {\n      setError('role must be farmer or buyer');\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n      className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().login),\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n      onSubmit: e => handleSubmit(e),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        onChange: e => setName(e.target.value),\n        type: \"text\",\n        placeholder: \"username\",\n        value: name,\n        required: \"required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        onChange: e => setPassword(e.target.value),\n        type: \"password\",\n        placeholder: \"password\",\n        value: password,\n        required: \"required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        onChange: e => setRole(e.target.value),\n        type: \"text\",\n        placeholder: \"role: farmer or buyer\",\n        value: role,\n        required: \"required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().complete),\n        type: \"submit\",\n        value: \"Submit\",\n        children: \"Sign up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 26\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsdUJBQTFFO1FBQWtHLEtBQUssRUFBRXZCLElBQXpHO1FBQStHLFFBQVEsRUFBQztNQUF4SDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBSEosZUFJSTtRQUFRLFNBQVMsRUFBRVIsMkVBQW5CO1FBQW9DLElBQUksRUFBQyxRQUF6QztRQUFrRCxLQUFLLEVBQUMsUUFBeEQ7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFKSjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFMSixFQVlRTSxLQUFLLGlCQUFJO01BQUcsU0FBUyxFQUFFTix3RUFBZDtNQUFBLFVBQThCTTtJQUE5QjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBWmpCO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURKO0FBaUJIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9zaWduVXAuanM/MzJmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9TaWduVXAubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwICgpIHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjkwOTAvdXNlcnMvJ1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmIChyb2xlID09ICdmYXJtZXInIHx8IHJvbGUgPT0gJ2J1eWVyJykge1xuICAgICAgICAgICAgYXhpb3MucG9zdChcbiAgICAgICAgICAgICAgICBiYXNlVXJsLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICByb2xlOiByb2xlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7aGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKCByZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKSApXG4gICAgICAgICAgICAuY2F0Y2goIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEVycm9yKCdyb2xlIG11c3QgYmUgZmFybWVyIG9yIGJ1eWVyJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSA+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Hcm91cH0gPlxuICAgICAgICAgICAgICAgIDxidXR0b24gPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn0gPlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsgKGUpID0+IGhhbmRsZVN1Ym1pdChlKSB9ID5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyAoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSd1c2VybmFtZScgdmFsdWU9e25hbWV9IHJlcXVpcmVkPSdyZXF1aXJlZCcgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyAoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9J3Bhc3N3b3JkJyB2YWx1ZT17cGFzc3dvcmR9IHJlcXVpcmVkPSdyZXF1aXJlZCcgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyAoZSkgPT4gc2V0Um9sZShlLnRhcmdldC52YWx1ZSl9IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdyb2xlOiBmYXJtZXIgb3IgYnV5ZXInIHZhbHVlPXtyb2xlfSByZXF1aXJlZD0ncmVxdWlyZWQnIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wbGV0ZX0gdHlwZT0nc3VibWl0JyB2YWx1ZT0nU3VibWl0Jz5TaWduIHVwPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZXJyb3IgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9ID57ZXJyb3J9PC9wPlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTaWduVXAiLCJuYW1lIiwic2V0TmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwicm9sZSIsInNldFJvbGUiLCJpZCIsInNldElkIiwicm91dGVyIiwiYmFzZVVybCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJjb250YWluZXIiLCJidXR0b25Hcm91cCIsImxvZ2luIiwidGFyZ2V0IiwidmFsdWUiLCJjb21wbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signUp.js\n");

/***/ }),

/***/ "./styles/SignUp.module.css":
/*!**********************************!*\
  !*** ./styles/SignUp.module.css ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"SignUp_container__Q_hkt\",\n\t\"buttonGroup\": \"SignUp_buttonGroup__795cW\",\n\t\"complete\": \"SignUp_complete__X0XjU\",\n\t\"login\": \"SignUp_login__hf9f0\",\n\t\"error\": \"SignUp_error__Lajo0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvU2lnblVwLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3R5bGVzL1NpZ25VcC5tb2R1bGUuY3NzP2FiMTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU2lnblVwX2NvbnRhaW5lcl9fUV9oa3RcIixcblx0XCJidXR0b25Hcm91cFwiOiBcIlNpZ25VcF9idXR0b25Hcm91cF9fNzk1Y1dcIixcblx0XCJjb21wbGV0ZVwiOiBcIlNpZ25VcF9jb21wbGV0ZV9fWDBYalVcIixcblx0XCJsb2dpblwiOiBcIlNpZ25VcF9sb2dpbl9faGY5ZjBcIixcblx0XCJlcnJvclwiOiBcIlNpZ25VcF9lcnJvcl9fTGFqbzBcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/SignUp.module.css\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/signUp.js"));
module.exports = __webpack_exports__;

})();
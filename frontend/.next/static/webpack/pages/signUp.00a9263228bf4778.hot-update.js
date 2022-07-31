"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signUp",{

/***/ "./pages/signUp.js":
/*!*************************!*\
  !*** ./pages/signUp.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/SignUp.module.css */ \"./styles/SignUp.module.css\");\n/* harmony import */ var _styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/logan/development/js/express/tea-app/frontend/pages/signUp.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SignUp() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      role = _useState4[0],\n      setRole = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      id = _useState5[0],\n      setId = _useState5[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var baseUrl = 'http://localhost:9090/users/';\n\n  var handleSubmit = function handleSubmit() {\n    if (role == 'farmer') {} else {\n      setError('role must be farmer or buyer');\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"section\", {\n      className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonGroup),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().login),\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setName(e.target.value);\n        },\n        type: \"text\",\n        placeholder: \"username\",\n        value: name,\n        required: \"required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setPassword(e.target.value);\n        },\n        type: \"password\",\n        placeholder: \"password\",\n        value: password,\n        required: \"required\",\n        autoComplete: \"current-password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        onChange: function onChange(e) {\n          return setRole(e.target.value);\n        },\n        type: \"text\",\n        placeholder: \"role: farmer or buyer\",\n        value: role,\n        required: \"required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().complete),\n        type: \"submit\",\n        value: \"Submit\",\n        children: \"Sign up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      className: (_styles_SignUp_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 26\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, this);\n}\n\n_s(SignUp, \"bLgDnev4aejN9O1pRPl7m2MYeGg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = SignUp;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignUp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnblVwLmpzPzMyZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvU2lnblVwLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCAoKSB7XG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjkwOTAvdXNlcnMvJ1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBpZiAocm9sZSA9PSAnZmFybWVyJykge1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvcigncm9sZSBtdXN0IGJlIGZhcm1lciBvciBidXllcicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9ID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uID5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubG9naW59ID5TaWduIFVwPC9idXR0b24+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSA+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsgKGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0ndXNlcm5hbWUnIHZhbHVlPXtuYW1lfSByZXF1aXJlZD0ncmVxdWlyZWQnIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsgKGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPSdwYXNzd29yZCcgdmFsdWU9e3Bhc3N3b3JkfSByZXF1aXJlZD0ncmVxdWlyZWQnIGF1dG9Db21wbGV0ZT0nY3VycmVudC1wYXNzd29yZCcgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyAoZSkgPT4gc2V0Um9sZShlLnRhcmdldC52YWx1ZSl9IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdyb2xlOiBmYXJtZXIgb3IgYnV5ZXInIHZhbHVlPXtyb2xlfSByZXF1aXJlZD0ncmVxdWlyZWQnIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wbGV0ZX0gdHlwZT0nc3VibWl0JyB2YWx1ZT0nU3VibWl0Jz5TaWduIHVwPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZXJyb3IgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9ID57ZXJyb3J9PC9wPlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTaWduVXAiLCJuYW1lIiwic2V0TmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwicm9sZSIsInNldFJvbGUiLCJpZCIsInNldElkIiwicm91dGVyIiwiYmFzZVVybCIsImhhbmRsZVN1Ym1pdCIsImNvbnRhaW5lciIsImJ1dHRvbkdyb3VwIiwibG9naW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb21wbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signUp.js\n"));

/***/ })

});
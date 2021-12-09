(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
/*** IMPORTS FROM imports-loader ***/

var define = false;

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/runtime-config.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/runtime-config.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*** IMPORTS FROM imports-loader ***/
var define = false;
"use strict";

exports.__esModule = true;
exports.setConfig = setConfig;
exports["default"] = void 0;
var runtimeConfig;

var _default = function _default() {
  return runtimeConfig;
};

exports["default"] = _default;

function setConfig(configValue) {
  runtimeConfig = configValue;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/Components/PageLoading/index.jsx":
/*!**********************************************!*\
  !*** ./src/Components/PageLoading/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants */ "./src/Constants/index.jsx");
var _s=$RefreshSig$();var _jsxFileName="D:\\C\xD4NG VI\u1EC6C\\iBe_LandingPage1.1\\src\\Components\\PageLoading\\index.jsx";var __jsx=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;var PageLoading=function PageLoading(_ref){_s();Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);var _refElement={};Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"page_loading",__source:{fileName:_jsxFileName,lineNumber:13,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{className:"logo_loading heartbeat",src:Object(_Constants__WEBPACK_IMPORTED_MODULE_2__["assets"])("logo.png"),alt:"ibe",__source:{fileName:_jsxFileName,lineNumber:14,columnNumber:9}})));};_s(PageLoading,"OD7bBpZva5O2jO+Puf00hKivP7c=");_c=PageLoading;/* harmony default export */ __webpack_exports__["default"] = (PageLoading);var _c;$RefreshReg$(_c,"PageLoading");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/Constants/index.jsx":
/*!*********************************!*\
  !*** ./src/Constants/index.jsx ***!
  \*********************************/
/*! exports provided: assets, assetsPage1, assetsFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assets", function() { return assets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assetsPage1", function() { return assetsPage1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assetsFooter", function() { return assetsFooter; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
var assets=function assets(img){return "http://localhost:3000"+"/static/images/"+img;};var assetsPage1=function assetsPage1(img){return "http://localhost:3000"+"/static/images/desktop/"+img;};var assetsFooter=function assetsFooter(img){return "http://localhost:3000"+"/static/images/desktop/footer/"+img;};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdERlc3RydWN0dXJpbmdFbXB0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9ydW50aW1lLWNvbmZpZy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUGFnZUxvYWRpbmcvaW5kZXguanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvQ29uc3RhbnRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJQYWdlTG9hZGluZyIsIl9yZWZFbGVtZW50IiwidXNlRWZmZWN0IiwiYXNzZXRzIiwicHJvY2VzcyIsImFzc2V0c1BhZ2UxIiwiYXNzZXRzRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOztBQUVBOztBQUVlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lNQ0dBLEdBQU1BLFlBQVcsQ0FBWEEscUJBQWMsSUFBZEEsQ0FBc0IsZ0hBQzFCLEdBQU1DLFlBQVcsQ0FBakIsR0FFQUMsdURBQVMsQ0FBQyxVQUFNLENBQWhCQSxDQUFTLENBQVRBLENBSUEsTUFDRSx1SEFDRSxrRUFBSyxFQUFFLENBQVAsOEVBQ0Usa0VBQ0UsU0FBUyxDQURYLHlCQUVFLEdBQUcsQ0FBRUMseURBQU0sQ0FGYixVQUVhLENBRmIsQ0FHRSxHQUFHLENBSEwsaUVBSE4sQ0FHTSxHQURGLENBREYsQ0FERixDQVBGLEUsR0FBTUgsVyxvQ0FBQUEsVyxDQW9CTiw0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLEdBQU1HLE9BQU0sQ0FBTkEsZ0JBQVMsR0FBVEEsQ0FBZ0IsQ0FDM0IsTUFBVUMseUJBQVYsaUJBQVVBLENBQVYsSUFESyxFQUdBLEdBQU1DLFlBQVcsQ0FBWEEscUJBQWMsR0FBZEEsQ0FBcUIsQ0FDaEMsTUFBVUQseUJBQVYseUJBQVVBLENBQVYsSUFESyxFQUdBLEdBQU1FLGFBQVksQ0FBWkEsc0JBQWEsR0FBYkEsQ0FBa0IsQ0FDN0IsTUFBVUYseUJBQVYsZ0NBQVVBLENBQVYsSUFESyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG5cbnZhciBkZWZpbmUgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdERlc3RydWN0dXJpbmdFbXB0eShvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGRlc3RydWN0dXJlIHVuZGVmaW5lZFwiKTtcbn0iLCJsZXQgcnVudGltZUNvbmZpZzogYW55XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIHJ1bnRpbWVDb25maWdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbmZpZyhjb25maWdWYWx1ZTogYW55KTogdm9pZCB7XG4gIHJ1bnRpbWVDb25maWcgPSBjb25maWdWYWx1ZVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhc3NldHMgfSBmcm9tIFwiQENvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgUGFnZUxvYWRpbmcgPSAoe30pID0+IHtcclxuICBjb25zdCBfcmVmRWxlbWVudCA9IHt9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgaWQ9XCJwYWdlX2xvYWRpbmdcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvX2xvYWRpbmcgaGVhcnRiZWF0XCJcclxuICAgICAgICAgIHNyYz17YXNzZXRzKFwibG9nby5wbmdcIil9XHJcbiAgICAgICAgICBhbHQ9XCJpYmVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VMb2FkaW5nO1xyXG4iLCJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFzc2V0cyA9IGltZyA9PiB7XHJcbiAgcmV0dXJuIGAke3Byb2Nlc3MuZW52LkhPU1R9L3N0YXRpYy9pbWFnZXMvJHtpbWd9YDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFzc2V0c1BhZ2UxID0gaW1nID0+IHtcclxuICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuSE9TVH0vc3RhdGljL2ltYWdlcy9kZXNrdG9wLyR7aW1nfWA7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBhc3NldHNGb290ZXI9aW1nPT57XHJcbiAgcmV0dXJuIGAke3Byb2Nlc3MuZW52LkhPU1R9L3N0YXRpYy9pbWFnZXMvZGVza3RvcC9mb290ZXIvJHtpbWd9YDtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9
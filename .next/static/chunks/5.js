(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[5],{

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

/***/ "./src/Components/Desktop/Footer/index.jsx":
/*!*************************************************!*\
  !*** ./src/Components/Desktop/Footer/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Constants */ "./src/Constants/index.jsx");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer.css */ "./src/Components/Desktop/Footer/footer.css");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName="D:\\C\xD4NG VI\u1EC6C\\iBe_LandingPage1.1\\src\\Components\\Desktop\\Footer\\index.jsx";var __jsx=react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var Footer=function(_Component){Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Footer,_Component);var _super=_createSuper(Footer);function Footer(){Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,Footer);return _super.apply(this,arguments);}Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"footer",__source:{fileName:_jsxFileName,lineNumber:9,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"container footer_content1",__source:{fileName:_jsxFileName,lineNumber:10,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"row",__source:{fileName:_jsxFileName,lineNumber:11,columnNumber:11}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-6 footer_col1",__source:{fileName:_jsxFileName,lineNumber:13,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col1_img_logo",__source:{fileName:_jsxFileName,lineNumber:14,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_6__["assetsFooter"])("brand.png"),alt:"ibe brand",__source:{fileName:_jsxFileName,lineNumber:15,columnNumber:17}})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul",{__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_6__["assetsFooter"])("iconaddress.png"),alt:"ibe icon address",__source:{fileName:_jsxFileName,lineNumber:19,columnNumber:19}}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"/#",__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:19}},"47 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, \u0110a Kao,",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br",{__source:{fileName:_jsxFileName,lineNumber:25,columnNumber:21}})," Qu\u1EADn 1, Th\xE0nh ph\u1ED1 H\u1ED3 Ch\xED Minh")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:28,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_6__["assetsFooter"])("iconemail.png"),alt:"ibe icon email",__source:{fileName:_jsxFileName,lineNumber:29,columnNumber:19}}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"/#",__source:{fileName:_jsxFileName,lineNumber:33,columnNumber:19}},"Hr@iBenefit.vn")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:35,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_6__["assetsFooter"])("iconweb.png"),alt:"ibe icon web",__source:{fileName:_jsxFileName,lineNumber:36,columnNumber:19}}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"/#",__source:{fileName:_jsxFileName,lineNumber:37,columnNumber:19}},"ibenefit.vn")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:39,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_6__["assetsFooter"])("iconcall.png"),alt:"ibe icon call",__source:{fileName:_jsxFileName,lineNumber:40,columnNumber:19}}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"/#",__source:{fileName:_jsxFileName,lineNumber:41,columnNumber:19}},"091 333 0804")))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col-6 footer_col3",__source:{fileName:_jsxFileName,lineNumber:45,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col3_imglogo",__source:{fileName:_jsxFileName,lineNumber:46,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_6__["assetsFooter"])("logo.png"),alt:"ibe brand",__source:{fileName:_jsxFileName,lineNumber:47,columnNumber:17}}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i",{className:"col3_content",__source:{fileName:_jsxFileName,lineNumber:48,columnNumber:17}},"\"L\u1EE3i \xEDch th\xF4ng minh,",react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br",{__source:{fileName:_jsxFileName,lineNumber:50,columnNumber:19}}),"k\u1EBFt n\u1ED1i c\u1ED9ng \u0111\u1ED3ng\"")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col3_imgapp",__source:{fileName:_jsxFileName,lineNumber:54,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"https://apps.apple.com/us/app/ibenefit/id1475237080",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:55,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_6__["assetsFooter"])("appStore.png"),alt:"download ibe app",__source:{fileName:_jsxFileName,lineNumber:59,columnNumber:19}})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:64,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.ibenefitvn.wpp&hl=vi",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:65,columnNumber:19}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_6__["assetsFooter"])("googlePlay.png"),alt:"download ibe app",__source:{fileName:_jsxFileName,lineNumber:69,columnNumber:21}})))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"col3_iconsocial",__source:{fileName:_jsxFileName,lineNumber:76,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"https://www.facebook.com/ibenefit.vn/",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:77,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_6__["assetsFooter"])("iFB.png"),alt:"ibe icon facebook",__source:{fileName:_jsxFileName,lineNumber:78,columnNumber:19}})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"https://www.instagram.com/ibe.app/",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:80,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_6__["assetsFooter"])("iIS.png"),alt:"ibe icon instagram",__source:{fileName:_jsxFileName,lineNumber:81,columnNumber:19}})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"https://www.youtube.com/channel/UCLUynRGmkqK76-8EvYU6ZYw",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:83,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_6__["assetsFooter"])("iYT.png"),alt:"ibe brand youtube",__source:{fileName:_jsxFileName,lineNumber:87,columnNumber:19}})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a",{href:"https://vt.tiktok.com/ZSaMQBWw/",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:89,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_6__["assetsFooter"])("iTT.png"),alt:"ibe brand titok",className:"icon_tittok",__source:{fileName:_jsxFileName,lineNumber:93,columnNumber:19}})))))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:" footer_content2",__source:{fileName:_jsxFileName,lineNumber:99,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5",{__source:{fileName:_jsxFileName,lineNumber:100,columnNumber:11}},"iBenefit \xA9 2020")));}}]);return Footer;}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (Footer);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9ydW50aW1lLWNvbmZpZy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRGVza3RvcC9Gb290ZXIvaW5kZXguanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvQ29uc3RhbnRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJGb290ZXIiLCJhc3NldHNGb290ZXIiLCJDb21wb25lbnQiLCJhc3NldHMiLCJwcm9jZXNzIiwiYXNzZXRzUGFnZTEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lqQ0NDQSxDQUlNQSxVLCtiQUNLLENBQ1AsTUFDRSxtRUFBSyxTQUFTLENBQWQsdUVBQ0Usa0VBQUssU0FBUyxDQUFkLDJGQUNFLGtFQUFLLFNBQVMsQ0FBZCxzRUFFRSxrRUFBSyxTQUFTLENBQWQsb0ZBQ0Usa0VBQUssU0FBUyxDQUFkLGdGQUNFLGtFQUFLLEdBQUcsQ0FBRUMsK0RBQVksQ0FBdEIsV0FBc0IsQ0FBdEIsQ0FBcUMsR0FBRyxDQUF4Qyx1RUFGSixFQUVJLEdBREYsQ0FERixDQUlFLGlJQUNFLGlJQUNFLGtFQUNFLEdBQUcsQ0FBRUEsK0RBQVksQ0FEbkIsaUJBQ21CLENBRG5CLENBRUUsR0FBRyxDQUZMLDhFQURGLEVBQ0UsR0FERixDQUtFLGdFQUFHLElBQUksQ0FBUCx3SEFFRSw0SEFGRixFQUVFLEdBRkYsQ0FOSixxREFNSSxDQUxGLENBREYsQ0FXRSxpSUFDRSxrRUFDRSxHQUFHLENBQUVBLCtEQUFZLENBRG5CLGVBQ21CLENBRG5CLENBRUUsR0FBRyxDQUZMLDRFQURGLEVBQ0UsR0FERixDQUtFLGdFQUFHLElBQUksQ0FBUCxxRUFoQkosZ0JBZ0JJLENBTEYsQ0FYRixDQWtCRSxpSUFDRSxrRUFBSyxHQUFHLENBQUVBLCtEQUFZLENBQXRCLGFBQXNCLENBQXRCLENBQXVDLEdBQUcsQ0FBMUMsMEVBREYsRUFDRSxHQURGLENBRUUsZ0VBQUcsSUFBSSxDQUFQLHFFQXBCSixhQW9CSSxDQUZGLENBbEJGLENBc0JFLGlJQUNFLGtFQUFLLEdBQUcsQ0FBRUEsK0RBQVksQ0FBdEIsY0FBc0IsQ0FBdEIsQ0FBd0MsR0FBRyxDQUEzQywyRUFERixFQUNFLEdBREYsQ0FFRSxnRUFBRyxJQUFJLENBQVAscUVBOUJSLGNBOEJRLENBRkYsQ0F0QkYsQ0FKRixDQUZGLENBa0NFLGtFQUFLLFNBQVMsQ0FBZCxvRkFDRSxrRUFBSyxTQUFTLENBQWQsK0VBQ0Usa0VBQUssR0FBRyxDQUFFQSwrREFBWSxDQUF0QixVQUFzQixDQUF0QixDQUFvQyxHQUFHLENBQXZDLHVFQURGLEVBQ0UsR0FERixDQUVFLGdFQUFHLFNBQVMsQ0FBWixrSEFFRSw0SEFGRixFQUVFLEdBRkYsQ0FISiw4Q0FHSSxDQUZGLENBREYsQ0FTRSxrRUFBSyxTQUFTLENBQWQsOEVBQ0UsZ0VBQ0UsSUFBSSxDQUROLHNEQUVFLE1BQU0sQ0FGUix5RUFJRSxrRUFDRSxHQUFHLENBQUVBLCtEQUFZLENBRG5CLGNBQ21CLENBRG5CLENBRUUsR0FBRyxDQUZMLDhFQUxKLEVBS0ksR0FKRixDQURGLENBVUUsa0lBQ0UsZ0VBQ0UsSUFBSSxDQUROLHlFQUVFLE1BQU0sQ0FGUix5RUFJRSxrRUFDRSxHQUFHLENBQUVBLCtEQUFZLENBRG5CLGdCQUNtQixDQURuQixDQUVFLEdBQUcsQ0FGTCw4RUF4QlIsRUF3QlEsR0FKRixDQURGLENBVkYsQ0FURixDQStCRSxrRUFBSyxTQUFTLENBQWQsa0ZBQ0UsZ0VBQUcsSUFBSSxDQUFQLHdDQUFnRCxNQUFNLENBQXRELHlFQUNFLGtFQUFLLEdBQUcsQ0FBRUEsK0RBQVksQ0FBdEIsU0FBc0IsQ0FBdEIsQ0FBbUMsR0FBRyxDQUF0QywrRUFGSixFQUVJLEdBREYsQ0FERixDQUlFLGdFQUFHLElBQUksQ0FBUCxxQ0FBNkMsTUFBTSxDQUFuRCx5RUFDRSxrRUFBSyxHQUFHLENBQUVBLCtEQUFZLENBQXRCLFNBQXNCLENBQXRCLENBQW1DLEdBQUcsQ0FBdEMsZ0ZBTEosRUFLSSxHQURGLENBSkYsQ0FPRSxnRUFDRSxJQUFJLENBRE4sMkRBRUUsTUFBTSxDQUZSLHlFQUlFLGtFQUFLLEdBQUcsQ0FBRUEsK0RBQVksQ0FBdEIsU0FBc0IsQ0FBdEIsQ0FBbUMsR0FBRyxDQUF0QywrRUFYSixFQVdJLEdBSkYsQ0FQRixDQWFFLGdFQUNFLElBQUksQ0FETixrQ0FFRSxNQUFNLENBRlIseUVBSUUsa0VBQUssR0FBRyxDQUFFQSwrREFBWSxDQUF0QixTQUFzQixDQUF0QixDQUFtQyxHQUFHLENBQXRDLGtCQUF5RCxTQUFTLENBQWxFLHlFQXBGWixFQW9GWSxHQUpGLENBYkYsQ0EvQkYsQ0FsQ0YsQ0FERixDQURGLENBMEZFLGtFQUFLLFNBQVMsQ0FBZCxrRkFDRSxrSUE1Rk4sb0JBNEZNLENBREYsQ0ExRkYsQ0FERixDLHFCQUZpQkMsK0MsQ0FBZkYsQ0FvR047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxHQUFNRyxPQUFNLENBQU5BLGdCQUFTLEdBQVRBLENBQWdCLENBQzNCLE1BQVVDLHlCQUFWLGlCQUFVQSxDQUFWLElBREssRUFHQSxHQUFNQyxZQUFXLENBQVhBLHFCQUFjLEdBQWRBLENBQXFCLENBQ2hDLE1BQVVELHlCQUFWLHlCQUFVQSxDQUFWLElBREssRUFHQSxHQUFNSCxhQUFZLENBQVpBLHNCQUFhLEdBQWJBLENBQWtCLENBQzdCLE1BQVVHLHlCQUFWLGdDQUFVQSxDQUFWLElBREsiLCJmaWxlIjoic3RhdGljL2NodW5rcy81LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHJ1bnRpbWVDb25maWc6IGFueVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiBydW50aW1lQ29uZmlnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb25maWcoY29uZmlnVmFsdWU6IGFueSk6IHZvaWQge1xuICBydW50aW1lQ29uZmlnID0gY29uZmlnVmFsdWVcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1uby10YXJnZXQtYmxhbmsgKi9cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhc3NldHNGb290ZXIgfSBmcm9tIFwiQENvbnN0YW50c1wiO1xyXG5pbXBvcnQgXCIuL2Zvb3Rlci5jc3NcIjtcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmb290ZXJfY29udGVudDFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIHsvKiBjb2wgMSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBmb290ZXJfY29sMVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sMV9pbWdfbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Fzc2V0c0Zvb3RlcihcImJyYW5kLnBuZ1wiKX0gYWx0PVwiaWJlIGJyYW5kXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Fzc2V0c0Zvb3RlcihcImljb25hZGRyZXNzLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpYmUgaWNvbiBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgNDcgxJBp4buHbiBCacOqbiBQaOG7pywgxJBhIEthbyxcclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz4gUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXthc3NldHNGb290ZXIoXCJpY29uZW1haWwucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImliZSBpY29uIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCI+SHJAaUJlbmVmaXQudm48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXNzZXRzRm9vdGVyKFwiaWNvbndlYi5wbmdcIil9IGFsdD1cImliZSBpY29uIHdlYlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiPmliZW5lZml0LnZuPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Fzc2V0c0Zvb3RlcihcImljb25jYWxsLnBuZ1wiKX0gYWx0PVwiaWJlIGljb24gY2FsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiPjA5MSAzMzMgMDgwNDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgZm9vdGVyX2NvbDNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDNfaW1nbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Fzc2V0c0Zvb3RlcihcImxvZ28ucG5nXCIpfSBhbHQ9XCJpYmUgYnJhbmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY29sM19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIFwiTOG7o2kgw61jaCB0aMO0bmcgbWluaCxcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIGvhur90IG7hu5FpIGPhu5luZyDEkeG7k25nXCJcclxuICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDNfaW1nYXBwXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS91cy9hcHAvaWJlbmVmaXQvaWQxNDc1MjM3MDgwXCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YXNzZXRzRm9vdGVyKFwiYXBwU3RvcmUucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImRvd25sb2FkIGliZSBhcHBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5pYmVuZWZpdHZuLndwcCZobD12aVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXNzZXRzRm9vdGVyKFwiZ29vZ2xlUGxheS5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJkb3dubG9hZCBpYmUgYXBwXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDNfaWNvbnNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9pYmVuZWZpdC52bi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Fzc2V0c0Zvb3RlcihcImlGQi5wbmdcIil9IGFsdD1cImliZSBpY29uIGZhY2Vib29rXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2liZS5hcHAvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthc3NldHNGb290ZXIoXCJpSVMucG5nXCIpfSBhbHQ9XCJpYmUgaWNvbiBpbnN0YWdyYW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNMVXluUkdta3FLNzYtOEV2WVU2Wll3XCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Fzc2V0c0Zvb3RlcihcImlZVC5wbmdcIil9IGFsdD1cImliZSBicmFuZCB5b3V0dWJlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3Z0LnRpa3Rvay5jb20vWlNhTVFCV3cvXCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthc3NldHNGb290ZXIoXCJpVFQucG5nXCIpfSBhbHQ9XCJpYmUgYnJhbmQgdGl0b2tcIiBjbGFzc05hbWU9XCJpY29uX3RpdHRva1wiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj4gICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmb290ZXJfY29udGVudDJcIj5cclxuICAgICAgICAgIDxoNT5pQmVuZWZpdCDCqSAyMDIwPC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXNzZXRzID0gaW1nID0+IHtcclxuICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuSE9TVH0vc3RhdGljL2ltYWdlcy8ke2ltZ31gO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYXNzZXRzUGFnZTEgPSBpbWcgPT4ge1xyXG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5IT1NUfS9zdGF0aWMvaW1hZ2VzL2Rlc2t0b3AvJHtpbWd9YDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFzc2V0c0Zvb3Rlcj1pbWc9PntcclxuICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuSE9TVH0vc3RhdGljL2ltYWdlcy9kZXNrdG9wL2Zvb3Rlci8ke2ltZ31gO1xyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[12],{

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

/***/ "./src/Components/PageFooter/index.jsx":
/*!*********************************************!*\
  !*** ./src/Components/PageFooter/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/dist/gsap */ "./node_modules/gsap/dist/gsap.js");
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Constants */ "./src/Constants/index.jsx");
var _s=$RefreshSig$();var _jsxFileName="D:\\C\xD4NG VI\u1EC6C\\iBe_LandingPage1.1\\src\\Components\\PageFooter\\index.jsx";var __jsx=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var PageFooter=function PageFooter(_ref){_s();var ref_loading=_ref.ref_loading,pageWidth=_ref.pageWidth,pageHeight=_ref.pageHeight;var _refElement={};var beginPage=0;var marker=false;var config={scrub:1,markers:marker};Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.section10,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+14000),id:"begin_section10"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));if(progress>0){_refElement.footer.style.display="block";}else{_refElement.footer.style.display="none";}var posY=pageHeight*(1-progress);_refElement.footer.style.top=posY+"px";}})});});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer",{id:"footer",ref:function ref(ele){if(ele){_refElement.footer=ele;}},style:{display:"none",top:pageHeight},__source:{fileName:_jsxFileName,lineNumber:42,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"footer_inner",__source:{fileName:_jsxFileName,lineNumber:54,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"col1",__source:{fileName:_jsxFileName,lineNumber:55,columnNumber:11}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"logo_footer",__source:{fileName:_jsxFileName,lineNumber:56,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("logo2.png"),alt:"ibe",__source:{fileName:_jsxFileName,lineNumber:57,columnNumber:15}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",{className:"list_content",__source:{fileName:_jsxFileName,lineNumber:59,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:60,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i",{className:"icon fi-location",__source:{fileName:_jsxFileName,lineNumber:61,columnNumber:17}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:62,columnNumber:17}},"47 \u0110i\u1EC7n Bi\xEAn Ph\u1EE7, P. \u0110aKao, Q.1, TP.HCM")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:64,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i",{className:"icon fi-email",__source:{fileName:_jsxFileName,lineNumber:65,columnNumber:17}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:66,columnNumber:17}},"HR@ibenefit.vn")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:68,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i",{className:"icon fi-company",__source:{fileName:_jsxFileName,lineNumber:69,columnNumber:17}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:17}},"ibenefit.vn")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:72,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i",{className:"icon fi-phone",__source:{fileName:_jsxFileName,lineNumber:73,columnNumber:17}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:17}},"091 333 0804")))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"col3",__source:{fileName:_jsxFileName,lineNumber:78,columnNumber:11}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"logo_stt",__source:{fileName:_jsxFileName,lineNumber:79,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{className:"logo_stt",src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("logo_black.png"),alt:"ibe",__source:{fileName:_jsxFileName,lineNumber:80,columnNumber:15}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:85,columnNumber:15}},"\u201CL\u1EE3i \xEDch th\xF4ng minh, k\u1EBFt n\u1ED1i c\u1ED9ng \u0111\u1ED3ng\u201D")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"download_app",__source:{fileName:_jsxFileName,lineNumber:87,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://apps.apple.com/us/app/ibenefit/id1475237080",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:88,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("download_ios.png"),alt:"ibe",__source:{fileName:_jsxFileName,lineNumber:92,columnNumber:17}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.ibenefitvn.wpp&hl=vi",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:94,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("download_android.png"),alt:"ibe",__source:{fileName:_jsxFileName,lineNumber:98,columnNumber:17}}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"social",__source:{fileName:_jsxFileName,lineNumber:101,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:102,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://www.facebook.com/ibenefit.vn/",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:103,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i",{className:"fi-fb",__source:{fileName:_jsxFileName,lineNumber:104,columnNumber:19}}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://www.instagram.com/ibe.app/",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:109,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i",{className:"fi-insta",__source:{fileName:_jsxFileName,lineNumber:110,columnNumber:19}}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:114,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://www.youtube.com/channel/UCLUynRGmkqK76-8EvYU6ZYw",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:115,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i",{className:"fi-play-circle",__source:{fileName:_jsxFileName,lineNumber:119,columnNumber:19}}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:122,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://vt.tiktok.com/ZSaMQBWw/",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:123,columnNumber:17}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("desktop/footer/iTT.png"),alt:"ibe brand titok",className:"icon_tittok",style:{width:30,height:"auto"},__source:{fileName:_jsxFileName,lineNumber:124,columnNumber:19}})))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"copying",__source:{fileName:_jsxFileName,lineNumber:138,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:139,columnNumber:11}},"iBenefit \xA9 2020"))));};_s(PageFooter,"OD7bBpZva5O2jO+Puf00hKivP7c=");_c=PageFooter;/* harmony default export */ __webpack_exports__["default"] = (PageFooter);var _c;$RefreshReg$(_c,"PageFooter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9ydW50aW1lLWNvbmZpZy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUGFnZUZvb3Rlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db25zdGFudHMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlBhZ2VGb290ZXIiLCJyZWZfbG9hZGluZyIsInBhZ2VXaWR0aCIsInBhZ2VIZWlnaHQiLCJfcmVmRWxlbWVudCIsImJlZ2luUGFnZSIsIm1hcmtlciIsImNvbmZpZyIsInNjcnViIiwibWFya2VycyIsInVzZUVmZmVjdCIsImdzYXAiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiaWQiLCJvblVwZGF0ZSIsInByb2dyZXNzIiwiTnVtYmVyIiwic2VsZiIsInBvc1kiLCJkaXNwbGF5IiwidG9wIiwiYXNzZXRzIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9jZXNzIiwiYXNzZXRzUGFnZTEiLCJhc3NldHNGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cWlDQ0VBLENBS0EsR0FBTUEsV0FBVSxDQUFWQSxvQkFBYSxJQUFiQSxDQUF5RCxNQUF6Q0MsZUFBeUMsTUFBekNBLFlBQWFDLFNBQTRCLE1BQTVCQSxTQUFiRCxDQUF3QkUsVUFBaUIsTUFBakJBLFVBQXhCRixDQUNwQixHQUFNRyxZQUFXLENBQWpCLEdBQ0EsR0FBTUMsVUFBUyxDQUFmLEVBQ0EsR0FBTUMsT0FBTSxDQUFaLE1BQ0EsR0FBTUMsT0FBTSxDQUFHLENBQ2JDLEtBQUssQ0FEUSxFQUViQyxPQUFPLENBRlQsTUFBZSxDQUFmLENBS0FDLHVEQUFTLENBQUMsVUFBTSxDQUNkQyxtREFBSSxDQUFKQSxHQUFR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MEVBQ0Usa0VBQ0UsR0FBRyxDQUFFQSx5REFBTSxDQURiLHdCQUNhLENBRGIsQ0FFRSxHQUFHLENBRkwsa0JBR0UsU0FBUyxDQUhYLGNBSUUsS0FBSyxDQUFFLENBQ0xDLEtBQUssQ0FEQSxHQUVMQyxNQUFNLENBTlYsTUFJUyxDQUpULDZEQWxGWixFQWtGWSxHQURGLENBREYsQ0FyQkYsQ0F2QkYsQ0F4QkYsQ0FaRixDQWdHRSxrRUFBSyxTQUFTLENBQWQsMEVBQ0UsaUlBbkdSLG9CQW1HUSxDQURGLENBaEdGLENBREYsQ0FERixDQWhDRixFLEdBQU16QixVLG9DQUFBQSxVLENBMElOLDJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sR0FBTXVCLE9BQU0sQ0FBTkEsZ0JBQVMsR0FBVEEsQ0FBZ0IsQ0FDM0IsTUFBVUcseUJBQVYsaUJBQVVBLENBQVYsSUFESyxFQUdBLEdBQU1DLFlBQVcsQ0FBWEEscUJBQWMsR0FBZEEsQ0FBcUIsQ0FDaEMsTUFBVUQseUJBQVYseUJBQVVBLENBQVYsSUFESyxFQUdBLEdBQU1FLGFBQVksQ0FBWkEsc0JBQWEsR0FBYkEsQ0FBa0IsQ0FDN0IsTUFBVUYseUJBQVYsZ0NBQVVBLENBQVYsSUFESyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHJ1bnRpbWVDb25maWc6IGFueVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiBydW50aW1lQ29uZmlnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb25maWcoY29uZmlnVmFsdWU6IGFueSk6IHZvaWQge1xuICBydW50aW1lQ29uZmlnID0gY29uZmlnVmFsdWVcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1uby10YXJnZXQtYmxhbmsgKi9cclxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvaWZyYW1lLWhhcy10aXRsZSAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXAvZGlzdC9nc2FwXCI7XHJcblxyXG5pbXBvcnQgeyBhc3NldHMgfSBmcm9tIFwiQENvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgUGFnZUZvb3RlciA9ICh7IHJlZl9sb2FkaW5nLCBwYWdlV2lkdGgsIHBhZ2VIZWlnaHQgfSkgPT4ge1xyXG4gIGNvbnN0IF9yZWZFbGVtZW50ID0ge307XHJcbiAgY29uc3QgYmVnaW5QYWdlID0gMDtcclxuICBjb25zdCBtYXJrZXIgPSBmYWxzZTtcclxuICBjb25zdCBjb25maWcgPSB7XHJcbiAgICBzY3J1YjogMSxcclxuICAgIG1hcmtlcnM6IG1hcmtlcixcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ3NhcC50byhfcmVmRWxlbWVudC5zZWN0aW9uMTAsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IHJlZl9sb2FkaW5nLFxyXG4gICAgICAgIHN0YXJ0OiBgJHtwYWdlSGVpZ2h0IC8gMiArIDE0MDAwfWAsXHJcbiAgICAgICAgaWQ6IFwiYmVnaW5fc2VjdGlvbjEwXCIsXHJcbiAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgIG9uVXBkYXRlOiBzZWxmID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKHNlbGYucHJvZ3Jlc3MudG9GaXhlZCgzKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHByb2dyZXNzID4gMCkge1xyXG4gICAgICAgICAgICBfcmVmRWxlbWVudC5mb290ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9yZWZFbGVtZW50LmZvb3Rlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBwb3NZID0gcGFnZUhlaWdodCAqICgxIC0gcHJvZ3Jlc3MpO1xyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50LmZvb3Rlci5zdHlsZS50b3AgPSBgJHtwb3NZfXB4YDtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9vdGVyXHJcbiAgICAgICAgaWQ9XCJmb290ZXJcIlxyXG4gICAgICAgIHJlZj17ZWxlID0+IHtcclxuICAgICAgICAgIGlmIChlbGUpIHtcclxuICAgICAgICAgICAgX3JlZkVsZW1lbnQuZm9vdGVyID0gZWxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgdG9wOiBwYWdlSGVpZ2h0LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9pbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wxXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb19mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YXNzZXRzKFwibG9nbzIucG5nXCIpfSBhbHQ9XCJpYmVcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gZmktbG9jYXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+NDcgxJBp4buHbiBCacOqbiBQaOG7pywgUC4gxJBhS2FvLCBRLjEsIFRQLkhDTTwvcD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gZmktZW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+SFJAaWJlbmVmaXQudm48L3A+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGZpLWNvbXBhbnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+aWJlbmVmaXQudm48L3A+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGZpLXBob25lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwPjA5MSAzMzMgMDgwNDwvcD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbDNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvX3N0dFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29fc3R0XCJcclxuICAgICAgICAgICAgICAgIHNyYz17YXNzZXRzKFwibG9nb19ibGFjay5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJpYmVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHA+4oCcTOG7o2kgw61jaCB0aMO0bmcgbWluaCwga+G6v3QgbuG7kWkgY+G7mW5nIMSR4buTbmfigJ08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25sb2FkX2FwcFwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS91cy9hcHAvaWJlbmVmaXQvaWQxNDc1MjM3MDgwXCJcclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Fzc2V0cyhcImRvd25sb2FkX2lvcy5wbmdcIil9IGFsdD1cImliZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5pYmVuZWZpdHZuLndwcCZobD12aVwiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthc3NldHMoXCJkb3dubG9hZF9hbmRyb2lkLnBuZ1wiKX0gYWx0PVwiaWJlXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaWJlbmVmaXQudm4vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZpLWZiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9pYmUuYXBwL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmaS1pbnN0YVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNMVXluUkdta3FLNzYtOEV2WVU2Wll3XCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmktcGxheS1jaXJjbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdnQudGlrdG9rLmNvbS9aU2FNUUJXdy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YXNzZXRzKFwiZGVza3RvcC9mb290ZXIvaVRULnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpYmUgYnJhbmQgdGl0b2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25fdGl0dG9rXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlpbmdcIj5cclxuICAgICAgICAgIDxwPmlCZW5lZml0IMKpIDIwMjA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VGb290ZXI7XHJcbiIsImltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXNzZXRzID0gaW1nID0+IHtcclxuICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuSE9TVH0vc3RhdGljL2ltYWdlcy8ke2ltZ31gO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYXNzZXRzUGFnZTEgPSBpbWcgPT4ge1xyXG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5IT1NUfS9zdGF0aWMvaW1hZ2VzL2Rlc2t0b3AvJHtpbWd9YDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFzc2V0c0Zvb3Rlcj1pbWc9PntcclxuICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuSE9TVH0vc3RhdGljL2ltYWdlcy9kZXNrdG9wL2Zvb3Rlci8ke2ltZ31gO1xyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=
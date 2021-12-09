(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[8],{

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

/***/ "./src/Components/Page3/index.jsx":
/*!****************************************!*\
  !*** ./src/Components/Page3/index.jsx ***!
  \****************************************/
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
var _s=$RefreshSig$();var _jsxFileName="D:\\C\xD4NG VI\u1EC6C\\iBe_LandingPage1.1\\src\\Components\\Page3\\index.jsx";var __jsx=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Page3=function Page3(_ref){_s();var ref_loading=_ref.ref_loading,pageWidth=_ref.pageWidth,pageHeight=_ref.pageHeight;var _refElement={};var beginPage=0;var marker=false;var config={scrub:1,markers:marker};var page3={};Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.end_section_2,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+3100),end:"+="+200,id:"end_section_2"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));if(progress>0){_refElement.section3.style.display="block";_refElement.title_footer_section2.style.display="block";}else{_refElement.section3.style.display="none";_refElement.title_footer_section2.style.display="none";}_refElement.section_inner.style.opacity=progress;_refElement.title_footer_section2.style.opacity=progress;}})});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.slide_1,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+3600),end:"+="+500,id:"slide_1"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));_refElement.slide_1.style.opacity=progress;}})});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.slide_2,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+4500),end:"+="+500,id:"slide_2"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));_refElement.slide_1.style.left=-pageWidth*progress+"px";_refElement.slide_2.style.left=pageWidth*2*(1-progress)+"px";_refElement.slide_2.style.opacity=progress;}})});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.slide_3,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+5500),end:"+="+500,id:"slide_3"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));_refElement.slide_2.style.left=-pageWidth*progress+"px";_refElement.slide_3.style.left=pageWidth*3*(1-progress)+"px";_refElement.slide_3.style.opacity=progress;}})});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.slide_4,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+6500),end:"+="+500,id:"slide_4"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));_refElement.slide_3.style.left=-pageWidth*progress+"px";_refElement.slide_4.style.left=pageWidth*4*(1-progress)+"px";_refElement.slide_4.style.opacity=progress;}})});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.slide_4,{scrollTrigger:_objectSpread(_objectSpread({trigger:_refElement.loading,start:""+(pageHeight/2+7500),end:"+="+1000,scrub:1,id:"end_section3"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));_refElement.slide_4.style.top=pageHeight/2-pageHeight*progress+"px";_refElement.slide_4.style.opacity=1-progress;_refElement.title_footer_section2.style.opacity=1-progress;}})});});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"page3",__source:{fileName:_jsxFileName,lineNumber:146,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"section3",ref:function ref(ele){if(ele){_refElement.section3=ele;}},__source:{fileName:_jsxFileName,lineNumber:147,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"section_inner",ref:function ref(ele){if(ele){_refElement.section_inner=ele;}},__source:{fileName:_jsxFileName,lineNumber:155,columnNumber:11}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"title_footer_section2",id:"title_footer_section2",style:{left:0,top:50,display:"none"},ref:function ref(ele){if(ele){_refElement.title_footer_section2=ele;}},__source:{fileName:_jsxFileName,lineNumber:163,columnNumber:11}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",{__source:{fileName:_jsxFileName,lineNumber:177,columnNumber:13}},"\u01AFu \u0111\xE3i ch\u1EC9 d\xE0nh cho sinh vi\xEAn."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",{__source:{fileName:_jsxFileName,lineNumber:178,columnNumber:13}},"B\u1EA1n c\u1EA7n cung c\u1EA5p")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"slide_inner",ref:function ref(ele){if(ele){_refElement.slide_inner=ele;}},__source:{fileName:_jsxFileName,lineNumber:181,columnNumber:11}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"slide",id:"slide_1",ref:function ref(ele){if(ele){_refElement.slide_1=ele;}},style:{top:pageHeight/2,left:0,opacity:0},__source:{fileName:_jsxFileName,lineNumber:189,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{className:"img-sm",src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("icon/TenDangNhap.png"),alt:"ibe",__source:{fileName:_jsxFileName,lineNumber:203,columnNumber:15}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5",{__source:{fileName:_jsxFileName,lineNumber:208,columnNumber:15}},"T\xEAn \u0111\u0103ng nh\u1EADp, m\u1EADt kh\u1EA9u, b\u1EA3ng \u0111i\u1EC3m \u0111\u1EC3 ch\u1EE9ng minh b\u1EA1n l\xE0 sinh vi\xEAn")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"slide",id:"slide_2",ref:function ref(ele){if(ele){_refElement.slide_2=ele;}},style:{top:pageHeight/2,left:pageWidth*2,opacity:0},__source:{fileName:_jsxFileName,lineNumber:213,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{className:"img-sm",src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("icon/CMND.png"),alt:"ibe",__source:{fileName:_jsxFileName,lineNumber:227,columnNumber:15}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5",{__source:{fileName:_jsxFileName,lineNumber:228,columnNumber:15}},"CMND/CCCD")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"slide",id:"slide_3",ref:function ref(ele){if(ele){_refElement.slide_3=ele;}},style:{top:pageHeight/2,left:pageWidth*3,opacity:0},__source:{fileName:_jsxFileName,lineNumber:230,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{className:"img-sm",src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("icon/TheSV.png"),alt:"ibe",__source:{fileName:_jsxFileName,lineNumber:244,columnNumber:15}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5",{__source:{fileName:_jsxFileName,lineNumber:249,columnNumber:15}},"Th\u1EBB sinh vi\xEAn")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"slide",id:"slide_4",ref:function ref(ele){if(ele){_refElement.slide_4=ele;}},style:{top:pageHeight/2,left:pageWidth*4,opacity:0},__source:{fileName:_jsxFileName,lineNumber:251,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{className:"img-sm",src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("icon/canhan.png"),alt:"ibe",__source:{fileName:_jsxFileName,lineNumber:265,columnNumber:15}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5",{__source:{fileName:_jsxFileName,lineNumber:270,columnNumber:15}},"Th\xF4ng tin c\xE1 nh\xE2n"))))));};_s(Page3,"OD7bBpZva5O2jO+Puf00hKivP7c=");_c=Page3;/* harmony default export */ __webpack_exports__["default"] = (Page3);var _c;$RefreshReg$(_c,"Page3");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9ydW50aW1lLWNvbmZpZy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUGFnZTMvaW5kZXguanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvQ29uc3RhbnRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJQYWdlMyIsInJlZl9sb2FkaW5nIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsIl9yZWZFbGVtZW50IiwiYmVnaW5QYWdlIiwibWFya2VyIiwiY29uZmlnIiwic2NydWIiLCJtYXJrZXJzIiwicGFnZTMiLCJ1c2VFZmZlY3QiLCJnc2FwIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsImVuZCIsImlkIiwib25VcGRhdGUiLCJwcm9ncmVzcyIsIk51bWJlciIsInNlbGYiLCJsZWZ0IiwidG9wIiwiZGlzcGxheSIsIm9wYWNpdHkiLCJhc3NldHMiLCJwcm9jZXNzIiwiYXNzZXRzUGFnZTEiLCJhc3NldHNGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z2lDQ0FBLENBSUEsR0FBTUEsTUFBSyxDQUFMQSxlQUFRLElBQVJBLENBQW9ELE1BQXpDQyxlQUF5QyxNQUF6Q0EsWUFBYUMsU0FBNEIsTUFBNUJBLFNBQWJELENBQXdCRSxVQUFpQixNQUFqQkEsVUFBeEJGLENBQ2YsR0FBTUcsWUFBVyxDQUFqQixHQUdBLEdBQU1DLFVBQVMsQ0FBZixFQUNBLEdBQU1DLE9BQU0sQ0FBWixNQUNBLEdBQU1DLE9BQU0sQ0FBRyxDQUNiQyxLQUFLLENBRFEsRUFFYkMsT0FBTyxDQUZULE1BQWUsQ0FBZixDQUtBLEdBQU1DLE1BQUssQ0FBWCxHQUVBQyx1REFBUyxDQUFDLFVBQU0sQ0FFZEMs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bGV0IHJ1bnRpbWVDb25maWc6IGFueVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiBydW50aW1lQ29uZmlnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb25maWcoY29uZmlnVmFsdWU6IGFueSk6IHZvaWQge1xuICBydW50aW1lQ29uZmlnID0gY29uZmlnVmFsdWVcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcC9kaXN0L2dzYXBcIjtcclxuaW1wb3J0IHsgYXNzZXRzIH0gZnJvbSBcIkBDb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IFBhZ2UzID0gKHsgcmVmX2xvYWRpbmcsIHBhZ2VXaWR0aCwgcGFnZUhlaWdodCB9KSA9PiB7XHJcbiAgY29uc3QgX3JlZkVsZW1lbnQgPSB7fTtcclxuICAvLyBjb25zdCBwYWdlSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gIC8vIGNvbnN0IHBhZ2VXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIGNvbnN0IGJlZ2luUGFnZSA9IDA7XHJcbiAgY29uc3QgbWFya2VyID0gZmFsc2U7XHJcbiAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgc2NydWI6IDEsXHJcbiAgICBtYXJrZXJzOiBtYXJrZXIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFnZTMgPSB7fTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGJlZ2luIHNlY3Rpb24gM1xyXG4gICAgZ3NhcC50byhfcmVmRWxlbWVudC5lbmRfc2VjdGlvbl8yLCB7XHJcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICB0cmlnZ2VyOiByZWZfbG9hZGluZyxcclxuICAgICAgICBzdGFydDogYCR7cGFnZUhlaWdodCAvIDIgKyAzMTAwfWAsXHJcbiAgICAgICAgZW5kOiBgKz0kezIwMH1gLFxyXG4gICAgICAgIGlkOiBcImVuZF9zZWN0aW9uXzJcIixcclxuICAgICAgICAuLi5jb25maWcsXHJcbiAgICAgICAgb25VcGRhdGU6IHNlbGYgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoc2VsZi5wcm9ncmVzcy50b0ZpeGVkKDMpKTtcclxuXHJcbiAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAwKSB7XHJcbiAgICAgICAgICAgIF9yZWZFbGVtZW50LnNlY3Rpb24zLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIF9yZWZFbGVtZW50LnRpdGxlX2Zvb3Rlcl9zZWN0aW9uMi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3JlZkVsZW1lbnQuc2VjdGlvbjMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBfcmVmRWxlbWVudC50aXRsZV9mb290ZXJfc2VjdGlvbjIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50LnNlY3Rpb25faW5uZXIuc3R5bGUub3BhY2l0eSA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgX3JlZkVsZW1lbnQudGl0bGVfZm9vdGVyX3NlY3Rpb24yLnN0eWxlLm9wYWNpdHkgPSBwcm9ncmVzcztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc2xpZGUgMSBzZWN0aW9uIDNcclxuICAgIGdzYXAudG8oX3JlZkVsZW1lbnQuc2xpZGVfMSwge1xyXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgdHJpZ2dlcjogcmVmX2xvYWRpbmcsXHJcbiAgICAgICAgc3RhcnQ6IGAke3BhZ2VIZWlnaHQgLyAyICsgMzYwMH1gLFxyXG4gICAgICAgIGVuZDogYCs9JHs1MDB9YCxcclxuICAgICAgICBpZDogXCJzbGlkZV8xXCIsXHJcbiAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgIG9uVXBkYXRlOiBzZWxmID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKHNlbGYucHJvZ3Jlc3MudG9GaXhlZCgzKSk7XHJcblxyXG4gICAgICAgICAgX3JlZkVsZW1lbnQuc2xpZGVfMS5zdHlsZS5vcGFjaXR5ID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNsaWRlIDIgc2VjdGlvbiAzXHJcbiAgICBnc2FwLnRvKF9yZWZFbGVtZW50LnNsaWRlXzIsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IHJlZl9sb2FkaW5nLFxyXG4gICAgICAgIHN0YXJ0OiBgJHtwYWdlSGVpZ2h0IC8gMiArIDQ1MDB9YCxcclxuICAgICAgICBlbmQ6IGArPSR7NTAwfWAsXHJcbiAgICAgICAgaWQ6IFwic2xpZGVfMlwiLFxyXG4gICAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgICBvblVwZGF0ZTogc2VsZiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihzZWxmLnByb2dyZXNzLnRvRml4ZWQoMykpO1xyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50LnNsaWRlXzEuc3R5bGUubGVmdCA9IGAkey1wYWdlV2lkdGggKiBwcm9ncmVzc31weGA7XHJcbiAgICAgICAgICBfcmVmRWxlbWVudC5zbGlkZV8yLnN0eWxlLmxlZnQgPSBgJHtwYWdlV2lkdGggKlxyXG4gICAgICAgICAgICAyICpcclxuICAgICAgICAgICAgKDEgLSBwcm9ncmVzcyl9cHhgO1xyXG4gICAgICAgICAgX3JlZkVsZW1lbnQuc2xpZGVfMi5zdHlsZS5vcGFjaXR5ID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNsaWRlIDMgc2VjdGlvbiAzXHJcbiAgICBnc2FwLnRvKF9yZWZFbGVtZW50LnNsaWRlXzMsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IHJlZl9sb2FkaW5nLFxyXG4gICAgICAgIHN0YXJ0OiBgJHtwYWdlSGVpZ2h0IC8gMiArIDU1MDB9YCxcclxuICAgICAgICBlbmQ6IGArPSR7NTAwfWAsXHJcbiAgICAgICAgaWQ6IFwic2xpZGVfM1wiLFxyXG4gICAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgICBvblVwZGF0ZTogc2VsZiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihzZWxmLnByb2dyZXNzLnRvRml4ZWQoMykpO1xyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50LnNsaWRlXzIuc3R5bGUubGVmdCA9IGAkey1wYWdlV2lkdGggKiBwcm9ncmVzc31weGA7XHJcbiAgICAgICAgICBfcmVmRWxlbWVudC5zbGlkZV8zLnN0eWxlLmxlZnQgPSBgJHtwYWdlV2lkdGggKlxyXG4gICAgICAgICAgICAzICpcclxuICAgICAgICAgICAgKDEgLSBwcm9ncmVzcyl9cHhgO1xyXG4gICAgICAgICAgX3JlZkVsZW1lbnQuc2xpZGVfMy5zdHlsZS5vcGFjaXR5ID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNsaWRlIDQgc2VjdGlvbiAzXHJcbiAgICBnc2FwLnRvKF9yZWZFbGVtZW50LnNsaWRlXzQsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IHJlZl9sb2FkaW5nLFxyXG4gICAgICAgIHN0YXJ0OiBgJHtwYWdlSGVpZ2h0IC8gMiArIDY1MDB9YCxcclxuICAgICAgICBlbmQ6IGArPSR7NTAwfWAsXHJcbiAgICAgICAgaWQ6IFwic2xpZGVfNFwiLFxyXG4gICAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgICBvblVwZGF0ZTogc2VsZiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihzZWxmLnByb2dyZXNzLnRvRml4ZWQoMykpO1xyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50LnNsaWRlXzMuc3R5bGUubGVmdCA9IGAkey1wYWdlV2lkdGggKiBwcm9ncmVzc31weGA7XHJcblxyXG4gICAgICAgICAgX3JlZkVsZW1lbnQuc2xpZGVfNC5zdHlsZS5sZWZ0ID0gYCR7cGFnZVdpZHRoICpcclxuICAgICAgICAgICAgNCAqXHJcbiAgICAgICAgICAgICgxIC0gcHJvZ3Jlc3MpfXB4YDtcclxuXHJcbiAgICAgICAgICBfcmVmRWxlbWVudC5zbGlkZV80LnN0eWxlLm9wYWNpdHkgPSBwcm9ncmVzcztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZW5kIHNlY3Rpb24gM1xyXG4gICAgZ3NhcC50byhfcmVmRWxlbWVudC5zbGlkZV80LCB7XHJcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICB0cmlnZ2VyOiBfcmVmRWxlbWVudC5sb2FkaW5nLFxyXG4gICAgICAgIHN0YXJ0OiBgJHtwYWdlSGVpZ2h0IC8gMiArIDc1MDB9YCxcclxuICAgICAgICBlbmQ6IGArPSR7MTAwMH1gLFxyXG4gICAgICAgIHNjcnViOiAxLFxyXG4gICAgICAgIGlkOiBcImVuZF9zZWN0aW9uM1wiLFxyXG4gICAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgICBvblVwZGF0ZTogc2VsZiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihzZWxmLnByb2dyZXNzLnRvRml4ZWQoMykpO1xyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50LnNsaWRlXzQuc3R5bGUudG9wID0gYCR7cGFnZUhlaWdodCAvIDIgLVxyXG4gICAgICAgICAgICBwYWdlSGVpZ2h0ICogcHJvZ3Jlc3N9cHhgO1xyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50LnNsaWRlXzQuc3R5bGUub3BhY2l0eSA9IDEgLSBwcm9ncmVzcztcclxuICAgICAgICAgIF9yZWZFbGVtZW50LnRpdGxlX2Zvb3Rlcl9zZWN0aW9uMi5zdHlsZS5vcGFjaXR5ID0gMSAtIHByb2dyZXNzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgaWQ9XCJwYWdlM1wiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlY3Rpb24zXCJcclxuICAgICAgICAgIHJlZj17ZWxlID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZSkge1xyXG4gICAgICAgICAgICAgIF9yZWZFbGVtZW50LnNlY3Rpb24zID0gZWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VjdGlvbl9pbm5lclwiXHJcbiAgICAgICAgICAgIHJlZj17ZWxlID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZWxlKSB7XHJcbiAgICAgICAgICAgICAgICBfcmVmRWxlbWVudC5zZWN0aW9uX2lubmVyID0gZWxlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdGxlX2Zvb3Rlcl9zZWN0aW9uMlwiXHJcbiAgICAgICAgICAgIGlkPVwidGl0bGVfZm9vdGVyX3NlY3Rpb24yXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgIHRvcDogNTAsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHJlZj17ZWxlID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZWxlKSB7XHJcbiAgICAgICAgICAgICAgICBfcmVmRWxlbWVudC50aXRsZV9mb290ZXJfc2VjdGlvbjIgPSBlbGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDM+xq91IMSRw6NpIGNo4buJIGTDoG5oIGNobyBzaW5oIHZpw6puLjwvaDM+XHJcbiAgICAgICAgICAgIDxoMz5C4bqhbiBj4bqnbiBjdW5nIGPhuqVwPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVfaW5uZXJcIlxyXG4gICAgICAgICAgICByZWY9e2VsZSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGVsZSkge1xyXG4gICAgICAgICAgICAgICAgX3JlZkVsZW1lbnQuc2xpZGVfaW5uZXIgPSBlbGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgIGlkPVwic2xpZGVfMVwiXHJcbiAgICAgICAgICAgICAgcmVmPXtlbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZSkge1xyXG4gICAgICAgICAgICAgICAgICBfcmVmRWxlbWVudC5zbGlkZV8xID0gZWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRvcDogcGFnZUhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXNtXCJcclxuICAgICAgICAgICAgICAgIHNyYz17YXNzZXRzKFwiaWNvbi9UZW5EYW5nTmhhcC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJpYmVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgVMOqbiDEkcSDbmcgbmjhuq1wLCBt4bqtdCBraOG6qXUsIGLhuqNuZyDEkWnhu4NtIMSR4buDIGNo4bupbmcgbWluaCBi4bqhbiBsw6Agc2luaFxyXG4gICAgICAgICAgICAgICAgdmnDqm5cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlXCJcclxuICAgICAgICAgICAgICBpZD1cInNsaWRlXzJcIlxyXG4gICAgICAgICAgICAgIHJlZj17ZWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGUpIHtcclxuICAgICAgICAgICAgICAgICAgX3JlZkVsZW1lbnQuc2xpZGVfMiA9IGVsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHBhZ2VIZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogcGFnZVdpZHRoICogMixcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLXNtXCIgc3JjPXthc3NldHMoXCJpY29uL0NNTkQucG5nXCIpfSBhbHQ9XCJpYmVcIiAvPlxyXG4gICAgICAgICAgICAgIDxoNT5DTU5EL0NDQ0Q8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlXCJcclxuICAgICAgICAgICAgICBpZD1cInNsaWRlXzNcIlxyXG4gICAgICAgICAgICAgIHJlZj17ZWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGUpIHtcclxuICAgICAgICAgICAgICAgICAgX3JlZkVsZW1lbnQuc2xpZGVfMyA9IGVsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHBhZ2VIZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogcGFnZVdpZHRoICogMyxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1zbVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fzc2V0cyhcImljb24vVGhlU1YucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiaWJlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxoNT5UaOG6uyBzaW5oIHZpw6puPC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJzbGlkZV80XCJcclxuICAgICAgICAgICAgICByZWY9e2VsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgIF9yZWZFbGVtZW50LnNsaWRlXzQgPSBlbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdG9wOiBwYWdlSGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHBhZ2VXaWR0aCAqIDQsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctc21cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXthc3NldHMoXCJpY29uL2Nhbmhhbi5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJpYmVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGg1PlRow7RuZyB0aW4gY8OhIG5ow6JuPC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTM7XHJcbiIsImltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXNzZXRzID0gaW1nID0+IHtcclxuICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuSE9TVH0vc3RhdGljL2ltYWdlcy8ke2ltZ31gO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYXNzZXRzUGFnZTEgPSBpbWcgPT4ge1xyXG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5IT1NUfS9zdGF0aWMvaW1hZ2VzL2Rlc2t0b3AvJHtpbWd9YDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFzc2V0c0Zvb3Rlcj1pbWc9PntcclxuICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuSE9TVH0vc3RhdGljL2ltYWdlcy9kZXNrdG9wL2Zvb3Rlci8ke2ltZ31gO1xyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=
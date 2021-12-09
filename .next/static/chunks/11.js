(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[11],{

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

/***/ "./src/Components/Page6/index.jsx":
/*!****************************************!*\
  !*** ./src/Components/Page6/index.jsx ***!
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
var _s=$RefreshSig$();var _jsxFileName="D:\\C\xD4NG VI\u1EC6C\\iBe_LandingPage1.1\\src\\Components\\Page6\\index.jsx";var __jsx=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Page6=function Page6(_ref){_s();var ref_loading=_ref.ref_loading,pageWidth=_ref.pageWidth,pageHeight=_ref.pageHeight;var _refElement={};var beginPage=0;var marker=false;var config={scrub:1,markers:marker};Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.section6_title,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+12000),end:"+="+500,id:"video"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));if(progress>0){_refElement.section6_title.style.display="block";}else{_refElement.section6_title.style.display="none";}_refElement.section6_title.style.opacity=progress;}})});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.download_app,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+12500),end:"+="+300,id:"section5_title"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));if(progress>0){_refElement.download_app.style.display="block";}else{_refElement.download_app.style.display="none";}_refElement.download_app.style.opacity=progress;}})});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.icon_phone,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+13000),end:"+="+300,id:"icon_phone"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));if(progress>0){_refElement.icon_phone.style.display="block";_refElement.section6.style.display="block";}else{_refElement.icon_phone.style.display="none";_refElement.section6.style.display="none";}_refElement.icon_phone.style.opacity=progress;}})});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.section6,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+14000),id:"begin_section10"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));var winScrollY=window.scrollY;var beginScroll=pageHeight/2+14000;var posY=beginScroll-winScrollY;_refElement.section6.style.top=posY+"px";}})});});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"page6",__source:{fileName:_jsxFileName,lineNumber:106,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"section6",ref:function ref(ele){if(ele){_refElement.section6=ele;}},style:{display:"none"},__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"section_title",ref:function ref(ele){if(ele){_refElement.section6_title=ele;}},style:{display:"none",opacity:0},__source:{fileName:_jsxFileName,lineNumber:118,columnNumber:11}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",{__source:{fileName:_jsxFileName,lineNumber:130,columnNumber:13}},"UEF \u0110\xC3 CH\u1ECCN IBE"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",{__source:{fileName:_jsxFileName,lineNumber:131,columnNumber:13}},"C\xD2N B\u1EA0N TH\xCC SAO?")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"download_app",ref:function ref(ele){if(ele){_refElement.download_app=ele;}},style:{display:"none",opacity:0},__source:{fileName:_jsxFileName,lineNumber:133,columnNumber:11}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://apps.apple.com/us/app/ibenefit/id1475237080",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:145,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("download_ios.png"),alt:"ibe",__source:{fileName:_jsxFileName,lineNumber:149,columnNumber:15}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.ibenefitvn.wpp&hl=vi",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:151,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("download_android.png"),alt:"ibe",__source:{fileName:_jsxFileName,lineNumber:155,columnNumber:15}}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:158,columnNumber:11}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"tel:091 333 0804",__source:{fileName:_jsxFileName,lineNumber:159,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{ref:function ref(ele){if(ele){_refElement.icon_phone=ele;}},style:{display:"none",opacity:0},alt:"ibe",className:"icon_phone",src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("icon_phone.png"),__source:{fileName:_jsxFileName,lineNumber:160,columnNumber:15}}))))));};_s(Page6,"OD7bBpZva5O2jO+Puf00hKivP7c=");_c=Page6;/* harmony default export */ __webpack_exports__["default"] = (Page6);var _c;$RefreshReg$(_c,"Page6");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9ydW50aW1lLWNvbmZpZy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUGFnZTYvaW5kZXguanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvQ29uc3RhbnRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJQYWdlNiIsInJlZl9sb2FkaW5nIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsIl9yZWZFbGVtZW50IiwiYmVnaW5QYWdlIiwibWFya2VyIiwiY29uZmlnIiwic2NydWIiLCJtYXJrZXJzIiwidXNlRWZmZWN0IiwiZ3NhcCIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJpZCIsIm9uVXBkYXRlIiwicHJvZ3Jlc3MiLCJOdW1iZXIiLCJzZWxmIiwid2luU2Nyb2xsWSIsIndpbmRvdyIsImJlZ2luU2Nyb2xsIiwicG9zWSIsImRpc3BsYXkiLCJvcGFjaXR5IiwiYXNzZXRzIiwicHJvY2VzcyIsImFzc2V0c1BhZ2UxIiwiYXNzZXRzRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dpQ0NDQSxDQUlBLEdBQU1BLE1BQUssQ0FBTEEsZUFBUSxJQUFSQSxDQUFvRCxNQUF6Q0MsZUFBeUMsTUFBekNBLFlBQWFDLFNBQTRCLE1BQTVCQSxTQUFiRCxDQUF3QkUsVUFBaUIsTUFBakJBLFVBQXhCRixDQUNmLEdBQU1HLFlBQVcsQ0FBakIsR0FHQSxHQUFNQyxVQUFTLENBQWYsRUFDQSxHQUFNQyxPQUFNLENBQVosTUFDQSxHQUFNQyxPQUFNLENBQUcsQ0FDYkMsS0FBSyxDQURRLEVBRWJDLE9BQU8sQ0FGVCxNQUFlLENBQWYsQ0FLQUMsdURBQVMsQ0FBQyxVQUFNLENBRWRD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QUFVQyx5QkFBVixpQkFBVUEsQ0FBVixJQURLLEVBR0EsR0FBTUMsWUFBVyxDQUFYQSxxQkFBYyxHQUFkQSxDQUFxQixDQUNoQyxNQUFVRCx5QkFBVix5QkFBVUEsQ0FBVixJQURLLEVBR0EsR0FBTUUsYUFBWSxDQUFaQSxzQkFBYSxHQUFiQSxDQUFrQixDQUM3QixNQUFVRix5QkFBVixnQ0FBVUEsQ0FBVixJQURLIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcnVudGltZUNvbmZpZzogYW55XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIHJ1bnRpbWVDb25maWdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbmZpZyhjb25maWdWYWx1ZTogYW55KTogdm9pZCB7XG4gIHJ1bnRpbWVDb25maWcgPSBjb25maWdWYWx1ZVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LW5vLXRhcmdldC1ibGFuayAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXAvZGlzdC9nc2FwXCI7XHJcbmltcG9ydCB7IGFzc2V0cyB9IGZyb20gXCJAQ29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBQYWdlNiA9ICh7IHJlZl9sb2FkaW5nLCBwYWdlV2lkdGgsIHBhZ2VIZWlnaHQgfSkgPT4ge1xyXG4gIGNvbnN0IF9yZWZFbGVtZW50ID0ge307XHJcbiAgLy8gY29uc3QgcGFnZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAvLyBjb25zdCBwYWdlV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjb25zdCBiZWdpblBhZ2UgPSAwO1xyXG4gIGNvbnN0IG1hcmtlciA9IGZhbHNlO1xyXG4gIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIHNjcnViOiAxLFxyXG4gICAgbWFya2VyczogbWFya2VyLFxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBiZWdpbiBzZWN0aW9uIDZcclxuICAgIGdzYXAudG8oX3JlZkVsZW1lbnQuc2VjdGlvbjZfdGl0bGUsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IHJlZl9sb2FkaW5nLFxyXG4gICAgICAgIHN0YXJ0OiBgJHtwYWdlSGVpZ2h0IC8gMiArIDEyMDAwfWAsXHJcbiAgICAgICAgZW5kOiBgKz0kezUwMH1gLFxyXG4gICAgICAgIGlkOiBcInZpZGVvXCIsXHJcbiAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgIG9uVXBkYXRlOiBzZWxmID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKHNlbGYucHJvZ3Jlc3MudG9GaXhlZCgzKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHByb2dyZXNzID4gMCkge1xyXG4gICAgICAgICAgICBfcmVmRWxlbWVudC5zZWN0aW9uNl90aXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3JlZkVsZW1lbnQuc2VjdGlvbjZfdGl0bGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgX3JlZkVsZW1lbnQuc2VjdGlvbjZfdGl0bGUuc3R5bGUub3BhY2l0eSA9IHByb2dyZXNzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBkb3dubG9hZCBidXR0b25cclxuICAgIGdzYXAudG8oX3JlZkVsZW1lbnQuZG93bmxvYWRfYXBwLCB7XHJcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICB0cmlnZ2VyOiByZWZfbG9hZGluZyxcclxuICAgICAgICBzdGFydDogYCR7cGFnZUhlaWdodCAvIDIgKyAxMjUwMH1gLFxyXG4gICAgICAgIGVuZDogYCs9JHszMDB9YCxcclxuICAgICAgICBpZDogXCJzZWN0aW9uNV90aXRsZVwiLFxyXG4gICAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgICBvblVwZGF0ZTogc2VsZiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihzZWxmLnByb2dyZXNzLnRvRml4ZWQoMykpO1xyXG5cclxuICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDApIHtcclxuICAgICAgICAgICAgX3JlZkVsZW1lbnQuZG93bmxvYWRfYXBwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfcmVmRWxlbWVudC5kb3dubG9hZF9hcHAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50LmRvd25sb2FkX2FwcC5zdHlsZS5vcGFjaXR5ID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGVmZmVjdCBhcHBlbmQgdGV4dFxyXG4gICAgZ3NhcC50byhfcmVmRWxlbWVudC5pY29uX3Bob25lLCB7XHJcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICB0cmlnZ2VyOiByZWZfbG9hZGluZyxcclxuICAgICAgICBzdGFydDogYCR7cGFnZUhlaWdodCAvIDIgKyAxMzAwMH1gLFxyXG4gICAgICAgIGVuZDogYCs9JHszMDB9YCxcclxuICAgICAgICBpZDogXCJpY29uX3Bob25lXCIsXHJcbiAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgIG9uVXBkYXRlOiBzZWxmID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKHNlbGYucHJvZ3Jlc3MudG9GaXhlZCgzKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHByb2dyZXNzID4gMCkge1xyXG4gICAgICAgICAgICBfcmVmRWxlbWVudC5pY29uX3Bob25lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIF9yZWZFbGVtZW50LnNlY3Rpb242LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfcmVmRWxlbWVudC5pY29uX3Bob25lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgX3JlZkVsZW1lbnQuc2VjdGlvbjYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50Lmljb25fcGhvbmUuc3R5bGUub3BhY2l0eSA9IHByb2dyZXNzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBnc2FwLnRvKF9yZWZFbGVtZW50LnNlY3Rpb242LCB7XHJcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICB0cmlnZ2VyOiByZWZfbG9hZGluZyxcclxuICAgICAgICBzdGFydDogYCR7cGFnZUhlaWdodCAvIDIgKyAxNDAwMH1gLFxyXG4gICAgICAgIGlkOiBcImJlZ2luX3NlY3Rpb24xMFwiLFxyXG4gICAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgICBvblVwZGF0ZTogc2VsZiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihzZWxmLnByb2dyZXNzLnRvRml4ZWQoMykpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHdpblNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICAgIGNvbnN0IGJlZ2luU2Nyb2xsID0gcGFnZUhlaWdodCAvIDIgKyAxNDAwMDtcclxuICAgICAgICAgIGNvbnN0IHBvc1kgPSBiZWdpblNjcm9sbCAtIHdpblNjcm9sbFk7XHJcblxyXG4gICAgICAgICAgX3JlZkVsZW1lbnQuc2VjdGlvbjYuc3R5bGUudG9wID0gYCR7cG9zWX1weGA7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBpZD1cInBhZ2U2XCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VjdGlvbjZcIlxyXG4gICAgICAgICAgcmVmPXtlbGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlKSB7XHJcbiAgICAgICAgICAgICAgX3JlZkVsZW1lbnQuc2VjdGlvbjYgPSBlbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWN0aW9uX3RpdGxlXCJcclxuICAgICAgICAgICAgcmVmPXtlbGUgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChlbGUpIHtcclxuICAgICAgICAgICAgICAgIF9yZWZFbGVtZW50LnNlY3Rpb242X3RpdGxlID0gZWxlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDE+VUVGIMSQw4MgQ0jhu4xOIElCRTwvaDE+XHJcbiAgICAgICAgICAgIDxoMT5Dw5JOIELhuqBOIFRIw4wgU0FPPzwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG93bmxvYWRfYXBwXCJcclxuICAgICAgICAgICAgcmVmPXtlbGUgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChlbGUpIHtcclxuICAgICAgICAgICAgICAgIF9yZWZFbGVtZW50LmRvd25sb2FkX2FwcCA9IGVsZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS91cy9hcHAvaWJlbmVmaXQvaWQxNDc1MjM3MDgwXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2Fzc2V0cyhcImRvd25sb2FkX2lvcy5wbmdcIil9IGFsdD1cImliZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5pYmVuZWZpdHZuLndwcCZobD12aVwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXthc3NldHMoXCJkb3dubG9hZF9hbmRyb2lkLnBuZ1wiKX0gYWx0PVwiaWJlXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOjA5MSAzMzMgMDgwNFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHJlZj17ZWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9yZWZFbGVtZW50Lmljb25fcGhvbmUgPSBlbGU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJpYmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbl9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Fzc2V0cyhcImljb25fcGhvbmUucG5nXCIpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlNjtcclxuIiwiaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhc3NldHMgPSBpbWcgPT4ge1xyXG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5IT1NUfS9zdGF0aWMvaW1hZ2VzLyR7aW1nfWA7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBhc3NldHNQYWdlMSA9IGltZyA9PiB7XHJcbiAgcmV0dXJuIGAke3Byb2Nlc3MuZW52LkhPU1R9L3N0YXRpYy9pbWFnZXMvZGVza3RvcC8ke2ltZ31gO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYXNzZXRzRm9vdGVyPWltZz0+e1xyXG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5IT1NUfS9zdGF0aWMvaW1hZ2VzL2Rlc2t0b3AvZm9vdGVyLyR7aW1nfWA7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
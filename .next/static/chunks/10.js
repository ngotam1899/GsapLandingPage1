(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[10],{

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

/***/ "./src/Components/Page5/index.jsx":
/*!****************************************!*\
  !*** ./src/Components/Page5/index.jsx ***!
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
var _s=$RefreshSig$();var _jsxFileName="D:\\C\xD4NG VI\u1EC6C\\iBe_LandingPage1.1\\src\\Components\\Page5\\index.jsx";var __jsx=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Page5=function Page5(_ref){_s();var ref_loading=_ref.ref_loading,pageWidth=_ref.pageWidth,pageHeight=_ref.pageHeight;var _refElement={};var beginPage=0;var marker=false;var config={scrub:1,markers:marker};var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("intro_mobile.mp4"),link_video=_useState[0],setLink=_useState[1];Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){if(pageWidth>768){setLink("intro_desktop.mp4");}},[pageWidth]);Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.section5,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+10500),end:"+="+400,id:"begin_section_5"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));if(progress>0){_refElement.section5.style.display="block";_refElement.video.style.display="block";_refElement.clip_path.style.display="block";}else{_refElement.section5.style.display="none";_refElement.video.style.display="none";_refElement.clip_path.style.display="none";}_refElement.section5.style.opacity=progress;}})});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.text_ibe_video,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+11000),end:"+="+500,id:"text_ibe_video"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));var beginX=pageWidth/2-pageWidth*0.4/2;var beginY=pageHeight/2;_refElement.text_ibe_video.setAttribute("x",beginX-pageWidth*1.5*progress);_refElement.text_ibe_video.setAttribute("y",beginY+pageHeight/2*progress);_refElement.text_ibe_video.style.fontSize=30+260*progress+"vw";_refElement.clip_path.style.opacity=1-progress;}})});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.text_ibe_video,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+11500),end:"+="+500,id:"text_ibe_video"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));if(progress>0){_refElement.clip_path.style.display="none";}else{_refElement.clip_path.style.display="block";}}})});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.video,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+12000),end:"+="+500,id:"video"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));_refElement.video.style.opacity=1-progress;}})});});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"page5",__source:{fileName:_jsxFileName,lineNumber:121,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"section5",ref:function ref(ele){if(ele){_refElement.section5=ele;}},style:{display:"none",opacity:0},__source:{fileName:_jsxFileName,lineNumber:122,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video",{muted:true,playsInline:true,loop:true,"aria-hidden":true,autoPlay:true,className:"svg-video-text",style:{zIndex:40,display:"none",opacity:1,width:"100%",height:"100%"},ref:function ref(ele){if(ele){_refElement.video=ele;}},__source:{fileName:_jsxFileName,lineNumber:134,columnNumber:11}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source",{src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("intro_mobile.mp4"),type:"video/mp4",__source:{fileName:_jsxFileName,lineNumber:154,columnNumber:13}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg",{height:"0",width:"0",__source:{fileName:_jsxFileName,lineNumber:156,columnNumber:11}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath",{id:"SVGID_2_",style:{display:"none"},ref:function ref(ele){if(ele){_refElement.clip_path=ele;}},__source:{fileName:_jsxFileName,lineNumber:157,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text",{x:pageWidth/2-pageWidth*0.4/2,y:pageHeight/2,className:"text_video",fill:"red",ref:function ref(ele){if(ele){_refElement.text_ibe_video=ele;}},__source:{fileName:_jsxFileName,lineNumber:168,columnNumber:15}},"iBe"))))));};_s(Page5,"lIMEtS+pcqnoxj4m9Y3Tajulr4I=");_c=Page5;/* harmony default export */ __webpack_exports__["default"] = (Page5);var _c;$RefreshReg$(_c,"Page5");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9ydW50aW1lLWNvbmZpZy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUGFnZTUvaW5kZXguanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvQ29uc3RhbnRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJQYWdlNSIsInJlZl9sb2FkaW5nIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsIl9yZWZFbGVtZW50IiwiYmVnaW5QYWdlIiwibWFya2VyIiwiY29uZmlnIiwic2NydWIiLCJtYXJrZXJzIiwidXNlU3RhdGUiLCJsaW5rX3ZpZGVvIiwic2V0TGluayIsInVzZUVmZmVjdCIsImdzYXAiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwiaWQiLCJvblVwZGF0ZSIsInByb2dyZXNzIiwiTnVtYmVyIiwic2VsZiIsImJlZ2luWCIsImJlZ2luWSIsImRpc3BsYXkiLCJvcGFjaXR5IiwiekluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJhc3NldHMiLCJwcm9jZXNzIiwiYXNzZXRzUGFnZTEiLCJhc3NldHNGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z2lDQ0FBLENBSUEsR0FBTUEsTUFBSyxDQUFMQSxlQUFRLElBQVJBLENBQW9ELE1BQXpDQyxlQUF5QyxNQUF6Q0EsWUFBYUMsU0FBNEIsTUFBNUJBLFNBQWJELENBQXdCRSxVQUFpQixNQUFqQkEsVUFBeEJGLENBQ2YsR0FBTUcsWUFBVyxDQUFqQixHQUdBLEdBQU1DLFVBQVMsQ0FBZixFQUNBLEdBQU1DLE9BQU0sQ0FBWixNQUNBLEdBQU1DLE9BQU0sQ0FBRyxDQUNiQyxLQUFLLENBRFEsRUFFYkMsT0FBTyxDQUZULE1BQWUsQ0FBZixDQU53RCxjQVcxQkMsc0RBQVEsQ0FYa0Isa0JBV2xCLENBWGtCLENBV2pEQyxVQVhpRCxjQVdyQ0MsT0FYcUMsY0FheERDLHVEQUFTLENBQUMsVUFBTSxDQUNkLEdBQUlYLFNBQVMsQ0FBYixJQUFxQixDQUNuQlUsT0FBTyxDQUFQQSxtQkFBTyxDQUFQQSxDQUVILENBSlEsRUFJTixDQUpIQyxTQUlHLENBSk0sQ0FBVEEsQ0FNQUEsdURBQVMsQ0FBQyxVQUFNLENBRWRDLG1EQUFJLENBQUpBLEdBQVFWLFdBQVcsQ0FBbkJVLFNBQThCLENBQzVCQyxhQUFhLDhCQUNYQyxPQUFPLENBREksWUFFWEMsS0FBSyxLQUFLZCxVQUFVLENBQVZBLEVBRkMsS0FFTixDQUZNLENBR1hlLEdBQUcsTUFIUSxJQUlYQyxFQUFFLENBSlMsK0JBTVhDLFFBQVEsQ0FBRSx1QkFBUSxDQUNoQixHQUFNQyxTQUFRLENBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFKQSxpQkFBeEIsQ0FBd0JBLENBQUQsQ0FBdkIsQ0FFQSxHQUFJRixRQUFRLENBQVosRUFBa0IsQ0FDaEJqQixXQUFXLENBQVhBLCtCQUNBQSxXQUFXLENBQVhBLDRCQUNBQSxXQUFXLENBQVhBLGdDQUhGLEtBSU8sQ0FDTEEsV0FBVyxDQUFYQSw4QkFDQUEsV0FBVyxDQUFYQSwyQkFDQUEsV0FBVyxDQUFYQSwrQkFHRkEsWUFBVyxDQUFYQSxnQ0FwQk5VLENBQ2UsRUFEZSxDQUE5QkEsRUEwQkFBLG1EQUFJLENBQUpBLEdBQVFWLFdBQVcsQ0FBbkJVLGVBQW9DLENBQ2xDQyxhQUFhLDhCQUNYQyxPQUFPLENBREksWUFFWEMsS0FBSyxLQUFLZCxVQUFVLENBQVZBLEVBRkMsS0FFTixDQUZNLENBR1hlLEdBQUcsTUFIUSxJQUlYQyxFQUFFLENBSlMsOEJBTVhDLFFBQVEsQ0FBRSx1QkFBUSxDQUNoQixHQUFNQyxTQUFRLENBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFKQSxpQkFBeEIsQ0FBd0JBLENBQUQsQ0FBdkIsQ0FFQSxHQUFNQyxPQUFNLENBQUd0QixTQUFTLENBQVRBLEVBQWlCQSxTQUFTLENBQVYsR0FBQ0EsQ0FBaEMsRUFDQSxHQUFNdUIsT0FBTSxDQUFHdEIsVUFBVSxDQUF6QixFQUVBQyxXQUFXLENBQVhBLGdDQUVFb0IsTUFBTSxDQUFHdEIsU0FBUyxDQUFUQSxJQUZYRSxVQUlBQSxXQUFXLENBQVhBLGdDQUVFcUIsTUFBTSxDQUFJdEIsVUFBVSxDQUFYLENBQUNBLENBRlpDLFVBS0FBLFdBQVcsQ0FBWEEsOEJBQStDLEdBQzdDLElBREZBLFFBQStDLENBQS9DQSxLQUdBQSxXQUFXLENBQVhBLHdCQUFzQyxFQUF0Q0EsU0F6Qk5VLENBQ2UsRUFEcUIsQ0FBcENBLEVBK0JBQSxtREFBSSxDQUFKQSxHQUFRVixXQUFXLENBQW5CVSxlQUFvQyxDQUNsQ0MsYUFBYSw4QkFDWEMsT0FBTyxDQURJLFlBRVhDLEtBQUssS0FBS2QsVUFBVSxDQUFWQSxFQUZDLEtBRU4sQ0FGTSxDQUdYZSxHQUFHLE1BSFEsSUFJWEMsRUFBRSxDQUpTLDhCQU1YQyxRQUFRLENBQUUsdUJBQVEsQ0FDaEIsR0FBTUMsU0FBUSxDQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBSkEsaUJBQXhCLENBQXdCQSxDQUFELENBQXZCLENBRUEsR0FBSUYsUUFBUSxDQUFaLEVBQWtCLENBQ2hCakIsV0FBVyxDQUFYQSwrQkFERixLQUVPLENBQ0xBLFdBQVcsQ0FBWEEsZ0NBRUgsQ0FmTFUsQ0FDZSxFQURxQixDQUFwQ0EsRUFvQkFBLG1EQUFJLENBQUpBLEdBQVFWLFdBQVcsQ0FBbkJVLE1BQTJCLENBQ3pCQyxhQUFhLDhCQUNYQyxPQUFPLENBREksWUFFWEMsS0FBSyxLQUFLZCxVQUFVLENBQVZBLEVBRkMsS0FFTixDQUZNLENBR1hlLEdBQUcsTUFIUSxJQUlYQyxFQUFFLENBSlMscUJBTVhDLFFBQVEsQ0FBRSx1QkFBUSxDQUNoQixHQUFNQyxTQUFRLENBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFKQSxpQkFBeEIsQ0FBd0JBLENBQUQsQ0FBdkIsQ0FFQW5CLFdBQVcsQ0FBWEEsb0JBQWtDLEVBQWxDQSxTQVZOVSxDQUNlLEVBRFksQ0FBM0JBLEVBL0VGRCxDQUFTLENBQVRBLENBK0ZBLE1BQ0UsdUhBQ0Usa0VBQUssRUFBRSxDQUFQLHdFQUNFLGtFQUNFLFNBQVMsQ0FEWCxXQUVFLEdBQUcsQ0FBRSxpQkFBTyxDQUNWLE9BQVMsQ0FDUFQsV0FBVyxDQUFYQSxhQUVILENBTkgsRUFPRSxLQUFLLENBQUUsQ0FDTHNCLE9BQU8sQ0FERixPQUVMQyxPQUFPLENBVFgsQ0FPUyxDQVBULGlFQVlFLG9FQUNFLEtBQUssQ0FEUCxLQUVFLFdBQVcsQ0FGYixLQUdFLElBQUksQ0FITixLQUlFLGNBSkYsS0FLRSxRQUFRLENBTFYsS0FNRSxTQUFTLENBTlgsaUJBT0UsS0FBSyxDQUFFLENBQ0xDLE1BQU0sQ0FERCxHQUVMRixPQUFPLENBRkYsT0FHTEMsT0FBTyxDQUhGLEVBSUxFLEtBQUssQ0FKQSxPQUtMQyxNQUFNLENBWlYsTUFPUyxDQVBULENBY0UsR0FBRyxDQUFFLGlCQUFPLENBQ1YsT0FBUyxDQUNQMUIsV0FBVyxDQUFYQSxVQUVILENBbEJILG1FQW9CRSxxRUFBUSxHQUFHLENBQUUyQix5REFBTSxDQUFuQixrQkFBbUIsQ0FBbkIsQ0FBeUMsSUFBSSxDQUE3Qyx3RUFoQ0osRUFnQ0ksR0FwQkYsQ0FaRixDQWtDRSxrRUFBSyxNQUFNLENBQVgsSUFBZ0IsS0FBSyxDQUFyQixxRUFDRSx1RUFDRSxFQUFFLENBREosV0FFRSxLQUFLLENBQUUsQ0FDTEwsT0FBTyxDQUhYLE1BRVMsQ0FGVCxDQUtFLEdBQUcsQ0FBRSxpQkFBTyxDQUNWLE9BQVMsQ0FDUHRCLFdBQVcsQ0FBWEEsY0FFSCxDQVRILG1FQVdFLG1FQUNFLENBQUMsQ0FBRUYsU0FBUyxDQUFUQSxFQUFpQkEsU0FBUyxDQUFWLEdBQUNBLENBRHRCLEVBRUUsQ0FBQyxDQUFFQyxVQUFVLENBRmYsRUFHRSxTQUFTLENBSFgsYUFJRSxJQUFJLENBSk4sTUFLRSxHQUFHLENBQUUsaUJBQU8sQ0FDVixPQUFTLENBQ1BDLFdBQVcsQ0FBWEEsbUJBRUgsQ0FUSCxtRUFqRFosS0FpRFksQ0FYRixDQURGLENBbENGLENBREYsQ0FERixDQURGLENBbEhGLEUsR0FBTUosSyxvQ0FBQUEsSyxDQXdMTixzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLEdBQU0rQixPQUFNLENBQU5BLGdCQUFTLEdBQVRBLENBQWdCLENBQzNCLE1BQVVDLHlCQUFWLGlCQUFVQSxDQUFWLElBREssRUFHQSxHQUFNQyxZQUFXLENBQVhBLHFCQUFjLEdBQWRBLENBQXFCLENBQ2hDLE1BQVVELHlCQUFWLHlCQUFVQSxDQUFWLElBREssRUFHQSxHQUFNRSxhQUFZLENBQVpBLHNCQUFhLEdBQWJBLENBQWtCLENBQzdCLE1BQVVGLHlCQUFWLGdDQUFVQSxDQUFWLElBREsiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBydW50aW1lQ29uZmlnOiBhbnlcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gcnVudGltZUNvbmZpZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29uZmlnKGNvbmZpZ1ZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgcnVudGltZUNvbmZpZyA9IGNvbmZpZ1ZhbHVlXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXAvZGlzdC9nc2FwXCI7XHJcbmltcG9ydCB7IGFzc2V0cyB9IGZyb20gXCJAQ29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBQYWdlNSA9ICh7IHJlZl9sb2FkaW5nLCBwYWdlV2lkdGgsIHBhZ2VIZWlnaHQgfSkgPT4ge1xyXG4gIGNvbnN0IF9yZWZFbGVtZW50ID0ge307XHJcbiAgLy8gY29uc3QgcGFnZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAvLyBjb25zdCBwYWdlV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjb25zdCBiZWdpblBhZ2UgPSAwO1xyXG4gIGNvbnN0IG1hcmtlciA9IGZhbHNlO1xyXG4gIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIHNjcnViOiAxLFxyXG4gICAgbWFya2VyczogbWFya2VyLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtsaW5rX3ZpZGVvLCBzZXRMaW5rXSA9IHVzZVN0YXRlKFwiaW50cm9fbW9iaWxlLm1wNFwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwYWdlV2lkdGggPiA3NjgpIHtcclxuICAgICAgc2V0TGluayhcImludHJvX2Rlc2t0b3AubXA0XCIpO1xyXG4gICAgfVxyXG4gIH0sIFtwYWdlV2lkdGhdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGJlZ2luIHNlY3Rpb24gNVxyXG4gICAgZ3NhcC50byhfcmVmRWxlbWVudC5zZWN0aW9uNSwge1xyXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgdHJpZ2dlcjogcmVmX2xvYWRpbmcsXHJcbiAgICAgICAgc3RhcnQ6IGAke3BhZ2VIZWlnaHQgLyAyICsgMTA1MDB9YCxcclxuICAgICAgICBlbmQ6IGArPSR7NDAwfWAsXHJcbiAgICAgICAgaWQ6IFwiYmVnaW5fc2VjdGlvbl81XCIsXHJcbiAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgIG9uVXBkYXRlOiBzZWxmID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKHNlbGYucHJvZ3Jlc3MudG9GaXhlZCgzKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHByb2dyZXNzID4gMCkge1xyXG4gICAgICAgICAgICBfcmVmRWxlbWVudC5zZWN0aW9uNS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBfcmVmRWxlbWVudC52aWRlby5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBfcmVmRWxlbWVudC5jbGlwX3BhdGguc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9yZWZFbGVtZW50LnNlY3Rpb241LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgX3JlZkVsZW1lbnQudmlkZW8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBfcmVmRWxlbWVudC5jbGlwX3BhdGguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50LnNlY3Rpb241LnN0eWxlLm9wYWNpdHkgPSBwcm9ncmVzcztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gem9vbSB0ZXh0XHJcbiAgICBnc2FwLnRvKF9yZWZFbGVtZW50LnRleHRfaWJlX3ZpZGVvLCB7XHJcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICB0cmlnZ2VyOiByZWZfbG9hZGluZyxcclxuICAgICAgICBzdGFydDogYCR7cGFnZUhlaWdodCAvIDIgKyAxMTAwMH1gLFxyXG4gICAgICAgIGVuZDogYCs9JHs1MDB9YCxcclxuICAgICAgICBpZDogXCJ0ZXh0X2liZV92aWRlb1wiLFxyXG4gICAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgICBvblVwZGF0ZTogc2VsZiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihzZWxmLnByb2dyZXNzLnRvRml4ZWQoMykpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGJlZ2luWCA9IHBhZ2VXaWR0aCAvIDIgLSAocGFnZVdpZHRoICogMC40KSAvIDI7XHJcbiAgICAgICAgICBjb25zdCBiZWdpblkgPSBwYWdlSGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgICBfcmVmRWxlbWVudC50ZXh0X2liZV92aWRlby5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIFwieFwiLFxyXG4gICAgICAgICAgICBiZWdpblggLSBwYWdlV2lkdGggKiAxLjUgKiBwcm9ncmVzc1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIF9yZWZFbGVtZW50LnRleHRfaWJlX3ZpZGVvLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgXCJ5XCIsXHJcbiAgICAgICAgICAgIGJlZ2luWSArIChwYWdlSGVpZ2h0IC8gMikgKiBwcm9ncmVzc1xyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBfcmVmRWxlbWVudC50ZXh0X2liZV92aWRlby5zdHlsZS5mb250U2l6ZSA9IGAkezMwICtcclxuICAgICAgICAgICAgMjYwICogcHJvZ3Jlc3N9dndgO1xyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50LmNsaXBfcGF0aC5zdHlsZS5vcGFjaXR5ID0gMSAtIHByb2dyZXNzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZW1vdmUgdGV4dCBtYXJrIGFuZCBvcGVuIGZ1bGwgdmlkZW9cclxuICAgIGdzYXAudG8oX3JlZkVsZW1lbnQudGV4dF9pYmVfdmlkZW8sIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IHJlZl9sb2FkaW5nLFxyXG4gICAgICAgIHN0YXJ0OiBgJHtwYWdlSGVpZ2h0IC8gMiArIDExNTAwfWAsXHJcbiAgICAgICAgZW5kOiBgKz0kezUwMH1gLFxyXG4gICAgICAgIGlkOiBcInRleHRfaWJlX3ZpZGVvXCIsXHJcbiAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgIG9uVXBkYXRlOiBzZWxmID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKHNlbGYucHJvZ3Jlc3MudG9GaXhlZCgzKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHByb2dyZXNzID4gMCkge1xyXG4gICAgICAgICAgICBfcmVmRWxlbWVudC5jbGlwX3BhdGguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3JlZkVsZW1lbnQuY2xpcF9wYXRoLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGVuZCBzZWN0aW9uIDVcclxuICAgIGdzYXAudG8oX3JlZkVsZW1lbnQudmlkZW8sIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IHJlZl9sb2FkaW5nLFxyXG4gICAgICAgIHN0YXJ0OiBgJHtwYWdlSGVpZ2h0IC8gMiArIDEyMDAwfWAsXHJcbiAgICAgICAgZW5kOiBgKz0kezUwMH1gLFxyXG4gICAgICAgIGlkOiBcInZpZGVvXCIsXHJcbiAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgIG9uVXBkYXRlOiBzZWxmID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKHNlbGYucHJvZ3Jlc3MudG9GaXhlZCgzKSk7XHJcblxyXG4gICAgICAgICAgX3JlZkVsZW1lbnQudmlkZW8uc3R5bGUub3BhY2l0eSA9IDEgLSBwcm9ncmVzcztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGlkPVwicGFnZTVcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWN0aW9uNVwiXHJcbiAgICAgICAgICByZWY9e2VsZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGUpIHtcclxuICAgICAgICAgICAgICBfcmVmRWxlbWVudC5zZWN0aW9uNSA9IGVsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dmlkZW9cclxuICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgcGxheXNJbmxpbmVcclxuICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICBhcmlhLWhpZGRlblxyXG4gICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzdmctdmlkZW8tdGV4dFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgekluZGV4OiA0MCxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICByZWY9e2VsZSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGVsZSkge1xyXG4gICAgICAgICAgICAgICAgX3JlZkVsZW1lbnQudmlkZW8gPSBlbGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c291cmNlIHNyYz17YXNzZXRzKFwiaW50cm9fbW9iaWxlLm1wNFwiKX0gdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcbiAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgPHN2ZyBoZWlnaHQ9XCIwXCIgd2lkdGg9XCIwXCI+XHJcbiAgICAgICAgICAgIDxjbGlwUGF0aFxyXG4gICAgICAgICAgICAgIGlkPVwiU1ZHSURfMl9cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHJlZj17ZWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGUpIHtcclxuICAgICAgICAgICAgICAgICAgX3JlZkVsZW1lbnQuY2xpcF9wYXRoID0gZWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8dGV4dFxyXG4gICAgICAgICAgICAgICAgeD17cGFnZVdpZHRoIC8gMiAtIChwYWdlV2lkdGggKiAwLjQpIC8gMn1cclxuICAgICAgICAgICAgICAgIHk9e3BhZ2VIZWlnaHQgLyAyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dF92aWRlb1wiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwicmVkXCJcclxuICAgICAgICAgICAgICAgIHJlZj17ZWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9yZWZFbGVtZW50LnRleHRfaWJlX3ZpZGVvID0gZWxlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIGlCZVxyXG4gICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlNTtcclxuIiwiaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhc3NldHMgPSBpbWcgPT4ge1xyXG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5IT1NUfS9zdGF0aWMvaW1hZ2VzLyR7aW1nfWA7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBhc3NldHNQYWdlMSA9IGltZyA9PiB7XHJcbiAgcmV0dXJuIGAke3Byb2Nlc3MuZW52LkhPU1R9L3N0YXRpYy9pbWFnZXMvZGVza3RvcC8ke2ltZ31gO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYXNzZXRzRm9vdGVyPWltZz0+e1xyXG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5IT1NUfS9zdGF0aWMvaW1hZ2VzL2Rlc2t0b3AvZm9vdGVyLyR7aW1nfWA7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
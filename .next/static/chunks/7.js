(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[7],{

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

/***/ "./src/Components/Page2/index.jsx":
/*!****************************************!*\
  !*** ./src/Components/Page2/index.jsx ***!
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
var _s=$RefreshSig$();var _jsxFileName="D:\\C\xD4NG VI\u1EC6C\\iBe_LandingPage1.1\\src\\Components\\Page2\\index.jsx";var __jsx=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Page2=function Page2(_ref){_s();var ref_loading=_ref.ref_loading,pageWidth=_ref.pageWidth,pageHeight=_ref.pageHeight;var _refElement={};var beginPage=0;var marker=false;var config={scrub:1,markers:marker};var betaHeight=pageHeight/812;var page2={intro_phone1:{right:-window.innerWidth,top:160*betaHeight,opacity:0},intro_phone2:{right:-window.innerWidth,top:260*betaHeight,opacity:0},intro_phone3:{right:-window.innerWidth,top:390*betaHeight,opacity:0}};Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function(){gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.phone_feature_1,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+1600),end:"+="+200,id:"phone_feature_1"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));if(progress>0){_refElement.title_section_2.style.position="fixed";_refElement.download_app.style.display="block";}else{_refElement.title_section_2.style.position="absolute";_refElement.download_app.style.display="none";}_refElement.download_app.style.opacity=progress;_refElement.title_section_2.style.opacity=progress;_refElement.phone_feature_1.style.right=-pageWidth+pageWidth*progress+"px";var opacity=progress+0.5*(1-progress);_refElement.phone_feature_1.style.opacity=opacity;var posY=gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].getProperty("#phone_feature_1","top");_refElement.phone_feature_1.setAttribute("data-y",posY);}}),ease:"bounce"});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.phone_feature_2,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+2000),end:"+="+200,id:"phone_feature_2"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));_refElement.phone_feature_2.style.right=-pageWidth+pageWidth*progress+"px";var opacity=progress+0.5*(1-progress);_refElement.phone_feature_2.style.opacity=opacity;var posY=gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].getProperty("#phone_feature_2","top");_refElement.phone_feature_2.setAttribute("data-y",posY);}})});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.phone_feature_3,{scrollTrigger:_objectSpread(_objectSpread({trigger:ref_loading,start:""+(pageHeight/2+2400),end:"+="+200,id:"phone_feature_3"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));_refElement.phone_feature_3.style.right=-pageWidth+pageWidth*progress+"px";var opacity=progress+0.5*(1-progress);_refElement.phone_feature_3.style.opacity=opacity;var posY=gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].getProperty("#phone_feature_3","top");_refElement.phone_feature_3.setAttribute("data-y",posY);}})});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(_refElement.end_section_2,{scrollTrigger:_objectSpread(_objectSpread({trigger:_refElement.loading,start:""+(pageHeight/2+3000),end:"+="+200,id:"end_section_2"},config),{},{onUpdate:function onUpdate(self){var progress=Number(self.progress.toFixed(3));_refElement.phone_feature_1.style.opacity=1-progress;_refElement.phone_feature_2.style.opacity=1-progress;_refElement.phone_feature_3.style.opacity=1-progress;if(progress>0){_refElement.download_app.style.display="none";}else{_refElement.download_app.style.display="block";}}})});});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"page2",__source:{fileName:_jsxFileName,lineNumber:159,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"section2",className:"intro_feature",ref:function ref(ele){if(ele){_refElement.section2=ele;}},__source:{fileName:_jsxFileName,lineNumber:160,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"title",ref:function ref(ele){if(ele){_refElement.title_section_2=ele;}},style:{position:"absolute",opacity:0},__source:{fileName:_jsxFileName,lineNumber:169,columnNumber:11}},"B\u1EA1n \u0111\u01B0\u1EE3c"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"text_intro_phone",__source:{fileName:_jsxFileName,lineNumber:183,columnNumber:11}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"line",id:"phone_feature_1",ref:function ref(ele){if(ele){_refElement.phone_feature_1=ele;}},style:{right:page2.intro_phone1.right,top:page2.intro_phone1.top,opacity:page2.intro_phone1.top},__source:{fileName:_jsxFileName,lineNumber:184,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:198,columnNumber:15}},"\u1EE8ng ti\u1EC1n"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4",{__source:{fileName:_jsxFileName,lineNumber:199,columnNumber:15}},"500.000\u0111 - 1.000.000 \u0111"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:200,columnNumber:15}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"line",ref:function ref(ele){if(ele){_refElement.phone_feature_2=ele;}},id:"phone_feature_2",style:{right:page2.intro_phone2.right,top:page2.intro_phone2.top,opacity:page2.intro_phone2.top},__source:{fileName:_jsxFileName,lineNumber:203,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:217,columnNumber:15}},"T\u1EEB",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b",{__source:{fileName:_jsxFileName,lineNumber:218,columnNumber:19}},"1 - 7 ng\xE0y")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:220,columnNumber:15}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"line",ref:function ref(ele){if(ele){_refElement.phone_feature_3=ele;}},id:"phone_feature_3",style:{right:page2.intro_phone3.right,top:page2.intro_phone3.top,opacity:page2.intro_phone3.top},__source:{fileName:_jsxFileName,lineNumber:223,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:237,columnNumber:15}},"Tip t\u1EEB",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b",{__source:{fileName:_jsxFileName,lineNumber:238,columnNumber:23}},"5K - 70K")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:240,columnNumber:15}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"diver",__source:{fileName:_jsxFileName,lineNumber:241,columnNumber:15}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:242,columnNumber:15}},"T\xF9y thu\u1ED9c b\u1EA3ng \u0111i\u1EC3m"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:243,columnNumber:15}},"h\u1ECDc t\u1EADp & s\u1ED1 l\u01B0\u1EE3ng"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:244,columnNumber:15}},"ng\u01B0\u1EDDi \u1EE9ng")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"download_button",ref:function ref(ele){if(ele){_refElement.download_app=ele;}},style:{display:"none",bottom:70,opacity:0,left:20,width:pageWidth/2},__source:{fileName:_jsxFileName,lineNumber:246,columnNumber:13}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://apps.apple.com/us/app/ibenefit/id1475237080",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:261,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{alt:"ibe",src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("download_ios.png"),__source:{fileName:_jsxFileName,lineNumber:265,columnNumber:17}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.ibenefitvn.wpp&hl=vi",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:267,columnNumber:15}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{alt:"ibe",src:Object(_Constants__WEBPACK_IMPORTED_MODULE_3__["assets"])("download_android.png"),__source:{fileName:_jsxFileName,lineNumber:271,columnNumber:17}}))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{ref:function ref(ele){if(ele){_refElement.end_section_2=ele;}},__source:{fileName:_jsxFileName,lineNumber:276,columnNumber:9}})));};_s(Page2,"OD7bBpZva5O2jO+Puf00hKivP7c=");_c=Page2;/* harmony default export */ __webpack_exports__["default"] = (Page2);var _c;$RefreshReg$(_c,"Page2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9ydW50aW1lLWNvbmZpZy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUGFnZTIvaW5kZXguanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvQ29uc3RhbnRzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJQYWdlMiIsInJlZl9sb2FkaW5nIiwicGFnZVdpZHRoIiwicGFnZUhlaWdodCIsIl9yZWZFbGVtZW50IiwiYmVnaW5QYWdlIiwibWFya2VyIiwiY29uZmlnIiwic2NydWIiLCJtYXJrZXJzIiwiYmV0YUhlaWdodCIsInBhZ2UyIiwiaW50cm9fcGhvbmUxIiwicmlnaHQiLCJ3aW5kb3ciLCJ0b3AiLCJvcGFjaXR5IiwiaW50cm9fcGhvbmUyIiwiaW50cm9fcGhvbmUzIiwidXNlRWZmZWN0IiwiZ3NhcCIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJpZCIsIm9uVXBkYXRlIiwicHJvZ3Jlc3MiLCJOdW1iZXIiLCJzZWxmIiwicG9zWSIsImVhc2UiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJhc3NldHMiLCJwcm9jZXNzIiwiYXNzZXRzUGFnZTEiLCJhc3NldHNGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z2lDQ0NBLENBS0EsR0FBTUEsTUFBSyxDQUFMQSxlQUFRLElBQVJBLENBQW9ELE1BQXpDQyxlQUF5QyxNQUF6Q0EsWUFBYUMsU0FBNEIsTUFBNUJBLFNBQWJELENBQXdCRSxVQUFpQixNQUFqQkEsVUFBeEJGLENBQ2YsR0FBTUcsWUFBVyxDQUFqQixHQUdBLEdBQU1DLFVBQVMsQ0FBZixFQUNBLEdBQU1DLE9BQU0s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TXFDLE9BQU0sQ0FBTkEsZ0JBQVMsR0FBVEEsQ0FBZ0IsQ0FDM0IsTUFBVUMseUJBQVYsaUJBQVVBLENBQVYsSUFESyxFQUdBLEdBQU1DLFlBQVcsQ0FBWEEscUJBQWMsR0FBZEEsQ0FBcUIsQ0FDaEMsTUFBVUQseUJBQVYseUJBQVVBLENBQVYsSUFESyxFQUdBLEdBQU1FLGFBQVksQ0FBWkEsc0JBQWEsR0FBYkEsQ0FBa0IsQ0FDN0IsTUFBVUYseUJBQVYsZ0NBQVVBLENBQVYsSUFESyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcnVudGltZUNvbmZpZzogYW55XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIHJ1bnRpbWVDb25maWdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbmZpZyhjb25maWdWYWx1ZTogYW55KTogdm9pZCB7XG4gIHJ1bnRpbWVDb25maWcgPSBjb25maWdWYWx1ZVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LW5vLXRhcmdldC1ibGFuayAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXAvZGlzdC9nc2FwXCI7XHJcblxyXG5pbXBvcnQgeyBhc3NldHMgfSBmcm9tIFwiQENvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgUGFnZTIgPSAoeyByZWZfbG9hZGluZywgcGFnZVdpZHRoLCBwYWdlSGVpZ2h0IH0pID0+IHtcclxuICBjb25zdCBfcmVmRWxlbWVudCA9IHt9O1xyXG4gIC8vIGNvbnN0IHBhZ2VIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgLy8gY29uc3QgcGFnZVdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY29uc3QgYmVnaW5QYWdlID0gMDtcclxuICBjb25zdCBtYXJrZXIgPSBmYWxzZTtcclxuICBjb25zdCBjb25maWcgPSB7XHJcbiAgICBzY3J1YjogMSxcclxuICAgIG1hcmtlcnM6IG1hcmtlcixcclxuICB9O1xyXG5cclxuICBjb25zdCBiZXRhSGVpZ2h0ID0gcGFnZUhlaWdodCAvIDgxMjtcclxuXHJcbiAgY29uc3QgcGFnZTIgPSB7XHJcbiAgICBpbnRyb19waG9uZTE6IHtcclxuICAgICAgcmlnaHQ6IC13aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgdG9wOiAxNjAgKiBiZXRhSGVpZ2h0LFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgfSxcclxuICAgIGludHJvX3Bob25lMjoge1xyXG4gICAgICByaWdodDogLXdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICB0b3A6IDI2MCAqIGJldGFIZWlnaHQsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICB9LFxyXG4gICAgaW50cm9fcGhvbmUzOiB7XHJcbiAgICAgIHJpZ2h0OiAtd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgIHRvcDogMzkwICogYmV0YUhlaWdodCxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHRleHQgaW50cm8gcGhvbmUgMVxyXG4gICAgZ3NhcC50byhfcmVmRWxlbWVudC5waG9uZV9mZWF0dXJlXzEsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IHJlZl9sb2FkaW5nLFxyXG4gICAgICAgIHN0YXJ0OiBgJHtwYWdlSGVpZ2h0IC8gMiArIDE2MDB9YCxcclxuICAgICAgICBlbmQ6IGArPSR7MjAwfWAsXHJcbiAgICAgICAgaWQ6IFwicGhvbmVfZmVhdHVyZV8xXCIsXHJcbiAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgIG9uVXBkYXRlOiBzZWxmID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKHNlbGYucHJvZ3Jlc3MudG9GaXhlZCgzKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHByb2dyZXNzID4gMCkge1xyXG4gICAgICAgICAgICBfcmVmRWxlbWVudC50aXRsZV9zZWN0aW9uXzIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgICAgIF9yZWZFbGVtZW50LmRvd25sb2FkX2FwcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9yZWZFbGVtZW50LnRpdGxlX3NlY3Rpb25fMi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgX3JlZkVsZW1lbnQuZG93bmxvYWRfYXBwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgX3JlZkVsZW1lbnQuZG93bmxvYWRfYXBwLnN0eWxlLm9wYWNpdHkgPSBwcm9ncmVzcztcclxuICAgICAgICAgIF9yZWZFbGVtZW50LnRpdGxlX3NlY3Rpb25fMi5zdHlsZS5vcGFjaXR5ID0gcHJvZ3Jlc3M7XHJcblxyXG4gICAgICAgICAgX3JlZkVsZW1lbnQucGhvbmVfZmVhdHVyZV8xLnN0eWxlLnJpZ2h0ID0gYCR7LXBhZ2VXaWR0aCArXHJcbiAgICAgICAgICAgIHBhZ2VXaWR0aCAqIHByb2dyZXNzfXB4YDtcclxuXHJcbiAgICAgICAgICBjb25zdCBvcGFjaXR5ID0gcHJvZ3Jlc3MgKyAwLjUgKiAoMSAtIHByb2dyZXNzKTtcclxuXHJcbiAgICAgICAgICBfcmVmRWxlbWVudC5waG9uZV9mZWF0dXJlXzEuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcG9zWSA9IGdzYXAuZ2V0UHJvcGVydHkoXCIjcGhvbmVfZmVhdHVyZV8xXCIsIFwidG9wXCIpO1xyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50LnBob25lX2ZlYXR1cmVfMS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgcG9zWSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgZWFzZTogXCJib3VuY2VcIixcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRleHQgaW50cm8gcGhvbmUgMlxyXG4gICAgZ3NhcC50byhfcmVmRWxlbWVudC5waG9uZV9mZWF0dXJlXzIsIHtcclxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgIHRyaWdnZXI6IHJlZl9sb2FkaW5nLFxyXG4gICAgICAgIHN0YXJ0OiBgJHtwYWdlSGVpZ2h0IC8gMiArIDIwMDB9YCxcclxuICAgICAgICBlbmQ6IGArPSR7MjAwfWAsXHJcbiAgICAgICAgaWQ6IFwicGhvbmVfZmVhdHVyZV8yXCIsXHJcbiAgICAgICAgLi4uY29uZmlnLFxyXG4gICAgICAgIG9uVXBkYXRlOiBzZWxmID0+IHtcclxuICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTnVtYmVyKHNlbGYucHJvZ3Jlc3MudG9GaXhlZCgzKSk7XHJcblxyXG4gICAgICAgICAgX3JlZkVsZW1lbnQucGhvbmVfZmVhdHVyZV8yLnN0eWxlLnJpZ2h0ID0gYCR7LXBhZ2VXaWR0aCArXHJcbiAgICAgICAgICAgIHBhZ2VXaWR0aCAqIHByb2dyZXNzfXB4YDtcclxuXHJcbiAgICAgICAgICBjb25zdCBvcGFjaXR5ID0gcHJvZ3Jlc3MgKyAwLjUgKiAoMSAtIHByb2dyZXNzKTtcclxuXHJcbiAgICAgICAgICBfcmVmRWxlbWVudC5waG9uZV9mZWF0dXJlXzIuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcG9zWSA9IGdzYXAuZ2V0UHJvcGVydHkoXCIjcGhvbmVfZmVhdHVyZV8yXCIsIFwidG9wXCIpO1xyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50LnBob25lX2ZlYXR1cmVfMi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgcG9zWSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRleHQgaW50cm8gcGhvbmUzXHJcbiAgICBnc2FwLnRvKF9yZWZFbGVtZW50LnBob25lX2ZlYXR1cmVfMywge1xyXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgdHJpZ2dlcjogcmVmX2xvYWRpbmcsXHJcbiAgICAgICAgc3RhcnQ6IGAke3BhZ2VIZWlnaHQgLyAyICsgMjQwMH1gLFxyXG4gICAgICAgIGVuZDogYCs9JHsyMDB9YCxcclxuICAgICAgICBpZDogXCJwaG9uZV9mZWF0dXJlXzNcIixcclxuICAgICAgICAuLi5jb25maWcsXHJcbiAgICAgICAgb25VcGRhdGU6IHNlbGYgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBOdW1iZXIoc2VsZi5wcm9ncmVzcy50b0ZpeGVkKDMpKTtcclxuXHJcbiAgICAgICAgICBfcmVmRWxlbWVudC5waG9uZV9mZWF0dXJlXzMuc3R5bGUucmlnaHQgPSBgJHstcGFnZVdpZHRoICtcclxuICAgICAgICAgICAgcGFnZVdpZHRoICogcHJvZ3Jlc3N9cHhgO1xyXG5cclxuICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSBwcm9ncmVzcyArIDAuNSAqICgxIC0gcHJvZ3Jlc3MpO1xyXG5cclxuICAgICAgICAgIF9yZWZFbGVtZW50LnBob25lX2ZlYXR1cmVfMy5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHJcbiAgICAgICAgICBjb25zdCBwb3NZID0gZ3NhcC5nZXRQcm9wZXJ0eShcIiNwaG9uZV9mZWF0dXJlXzNcIiwgXCJ0b3BcIik7XHJcblxyXG4gICAgICAgICAgX3JlZkVsZW1lbnQucGhvbmVfZmVhdHVyZV8zLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBwb3NZKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZW5kIHNlY3Rpb24gMlxyXG4gICAgZ3NhcC50byhfcmVmRWxlbWVudC5lbmRfc2VjdGlvbl8yLCB7XHJcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICB0cmlnZ2VyOiBfcmVmRWxlbWVudC5sb2FkaW5nLFxyXG4gICAgICAgIHN0YXJ0OiBgJHtwYWdlSGVpZ2h0IC8gMiArIDMwMDB9YCxcclxuICAgICAgICBlbmQ6IGArPSR7MjAwfWAsXHJcbiAgICAgICAgaWQ6IFwiZW5kX3NlY3Rpb25fMlwiLFxyXG4gICAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgICBvblVwZGF0ZTogc2VsZiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IE51bWJlcihzZWxmLnByb2dyZXNzLnRvRml4ZWQoMykpO1xyXG4gICAgICAgICAgLy8gcGhvbmUgdGV4dCAxXHJcbiAgICAgICAgICBfcmVmRWxlbWVudC5waG9uZV9mZWF0dXJlXzEuc3R5bGUub3BhY2l0eSA9IDEgLSBwcm9ncmVzcztcclxuXHJcbiAgICAgICAgICAvLyBwaG9uZSB0ZXh0IDJcclxuICAgICAgICAgIF9yZWZFbGVtZW50LnBob25lX2ZlYXR1cmVfMi5zdHlsZS5vcGFjaXR5ID0gMSAtIHByb2dyZXNzO1xyXG5cclxuICAgICAgICAgIC8vIHBob25lIHRleHQgM1xyXG4gICAgICAgICAgX3JlZkVsZW1lbnQucGhvbmVfZmVhdHVyZV8zLnN0eWxlLm9wYWNpdHkgPSAxIC0gcHJvZ3Jlc3M7XHJcblxyXG4gICAgICAgICAgaWYgKHByb2dyZXNzID4gMCkge1xyXG4gICAgICAgICAgICBfcmVmRWxlbWVudC5kb3dubG9hZF9hcHAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3JlZkVsZW1lbnQuZG93bmxvYWRfYXBwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgaWQ9XCJwYWdlMlwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGlkPVwic2VjdGlvbjJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW50cm9fZmVhdHVyZVwiXHJcbiAgICAgICAgICByZWY9e2VsZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGUpIHtcclxuICAgICAgICAgICAgICBfcmVmRWxlbWVudC5zZWN0aW9uMiA9IGVsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIHJlZj17ZWxlID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZWxlKSB7XHJcbiAgICAgICAgICAgICAgICBfcmVmRWxlbWVudC50aXRsZV9zZWN0aW9uXzIgPSBlbGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQuG6oW4gxJHGsOG7o2NcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dF9pbnRyb19waG9uZVwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJwaG9uZV9mZWF0dXJlXzFcIlxyXG4gICAgICAgICAgICAgIHJlZj17ZWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGUpIHtcclxuICAgICAgICAgICAgICAgICAgX3JlZkVsZW1lbnQucGhvbmVfZmVhdHVyZV8xID0gZWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBwYWdlMi5pbnRyb19waG9uZTEucmlnaHQsXHJcbiAgICAgICAgICAgICAgICB0b3A6IHBhZ2UyLmludHJvX3Bob25lMS50b3AsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBwYWdlMi5pbnRyb19waG9uZTEudG9wLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cD7hu6huZyB0aeG7gW48L3A+XHJcbiAgICAgICAgICAgICAgPGg0PjUwMC4wMDDEkSAtIDEuMDAwLjAwMCDEkTwvaDQ+XHJcbiAgICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZVwiXHJcbiAgICAgICAgICAgICAgcmVmPXtlbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZSkge1xyXG4gICAgICAgICAgICAgICAgICBfcmVmRWxlbWVudC5waG9uZV9mZWF0dXJlXzIgPSBlbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBpZD1cInBob25lX2ZlYXR1cmVfMlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBwYWdlMi5pbnRyb19waG9uZTIucmlnaHQsXHJcbiAgICAgICAgICAgICAgICB0b3A6IHBhZ2UyLmludHJvX3Bob25lMi50b3AsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBwYWdlMi5pbnRyb19waG9uZTIudG9wLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFThu6s8Yj4xIC0gNyBuZ8OgeTwvYj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZVwiXHJcbiAgICAgICAgICAgICAgcmVmPXtlbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZSkge1xyXG4gICAgICAgICAgICAgICAgICBfcmVmRWxlbWVudC5waG9uZV9mZWF0dXJlXzMgPSBlbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBpZD1cInBob25lX2ZlYXR1cmVfM1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBwYWdlMi5pbnRyb19waG9uZTMucmlnaHQsXHJcbiAgICAgICAgICAgICAgICB0b3A6IHBhZ2UyLmludHJvX3Bob25lMy50b3AsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBwYWdlMi5pbnRyb19waG9uZTMudG9wLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFRpcCB04burPGI+NUsgLSA3MEs8L2I+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZlclwiIC8+XHJcbiAgICAgICAgICAgICAgPHA+VMO5eSB0aHXhu5ljIGLhuqNuZyDEkWnhu4NtPC9wPlxyXG4gICAgICAgICAgICAgIDxwPmjhu41jIHThuq1wICYgc+G7kSBsxrDhu6NuZzwvcD5cclxuICAgICAgICAgICAgICA8cD5uZ8aw4budaSDhu6luZzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb3dubG9hZF9idXR0b25cIlxyXG4gICAgICAgICAgICAgIHJlZj17ZWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGUpIHtcclxuICAgICAgICAgICAgICAgICAgX3JlZkVsZW1lbnQuZG93bmxvYWRfYXBwID0gZWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA3MCxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBwYWdlV2lkdGggLyAyXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcHBzLmFwcGxlLmNvbS91cy9hcHAvaWJlbmVmaXQvaWQxNDc1MjM3MDgwXCJcclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJpYmVcIiBzcmM9e2Fzc2V0cyhcImRvd25sb2FkX2lvcy5wbmdcIil9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5pYmVuZWZpdHZuLndwcCZobD12aVwiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiaWJlXCIgc3JjPXthc3NldHMoXCJkb3dubG9hZF9hbmRyb2lkLnBuZ1wiKX0gLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtlbGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlKSB7XHJcbiAgICAgICAgICAgICAgX3JlZkVsZW1lbnQuZW5kX3NlY3Rpb25fMiA9IGVsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlMjtcclxuIiwiaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhc3NldHMgPSBpbWcgPT4ge1xyXG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5IT1NUfS9zdGF0aWMvaW1hZ2VzLyR7aW1nfWA7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBhc3NldHNQYWdlMSA9IGltZyA9PiB7XHJcbiAgcmV0dXJuIGAke3Byb2Nlc3MuZW52LkhPU1R9L3N0YXRpYy9pbWFnZXMvZGVza3RvcC8ke2ltZ31gO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYXNzZXRzRm9vdGVyPWltZz0+e1xyXG4gIHJldHVybiBgJHtwcm9jZXNzLmVudi5IT1NUfS9zdGF0aWMvaW1hZ2VzL2Rlc2t0b3AvZm9vdGVyLyR7aW1nfWA7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
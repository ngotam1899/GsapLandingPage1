module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/home": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
/*** IMPORTS FROM imports-loader ***/

var define = false;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
/*** IMPORTS FROM imports-loader ***/

var define = false;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/*** IMPORTS FROM imports-loader ***/

var define = false;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/*** IMPORTS FROM imports-loader ***/

var define = false;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/*** IMPORTS FROM imports-loader ***/

var define = false;

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/*** IMPORTS FROM imports-loader ***/

var define = false;


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/*** IMPORTS FROM imports-loader ***/

var define = false;



function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/*** IMPORTS FROM imports-loader ***/

var define = false;

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/*** IMPORTS FROM imports-loader ***/

var define = false;

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/home/index.jsx":
/*!******************************!*\
  !*** ./pages/home/index.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap/dist/gsap */ "gsap/dist/gsap");
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ "gsap/dist/ScrollTrigger");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gsap/dist/ScrollToPlugin */ "gsap/dist/ScrollToPlugin");
/* harmony import */ var gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-messenger-customer-chat */ "react-messenger-customer-chat");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName="D:\\C\xD4NG VI\u1EC6C\\iBe_LandingPage1.1\\pages\\home\\index.jsx";var __jsx=react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var enableSSR=false;var LoadingPageComponent=next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function(){return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../../src/Components/PageLoading/index */ "./src/Components/PageLoading/index.jsx"));},{ssr:enableSSR,loadableGenerated:{webpack:function webpack(){return[/*require.resolve*/(/*! ../../src/Components/PageLoading/index */ "./src/Components/PageLoading/index.jsx")];},modules:["../../src/Components/PageLoading/index"]}});var Page1Component=next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function(){return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../src/Components/Page1/index */ "./src/Components/Page1/index.jsx"));},{ssr:enableSSR,loadableGenerated:{webpack:function webpack(){return[/*require.resolve*/(/*! ../../src/Components/Page1/index */ "./src/Components/Page1/index.jsx")];},modules:["../../src/Components/Page1/index"]}});var Page2Component=next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function(){return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../../src/Components/Page2/index */ "./src/Components/Page2/index.jsx"));},{ssr:enableSSR,loadableGenerated:{webpack:function webpack(){return[/*require.resolve*/(/*! ../../src/Components/Page2/index */ "./src/Components/Page2/index.jsx")];},modules:["../../src/Components/Page2/index"]}});var Page3Component=next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function(){return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../../src/Components/Page3/index */ "./src/Components/Page3/index.jsx"));},{ssr:enableSSR,loadableGenerated:{webpack:function webpack(){return[/*require.resolve*/(/*! ../../src/Components/Page3/index */ "./src/Components/Page3/index.jsx")];},modules:["../../src/Components/Page3/index"]}});var Page4Component=next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function(){return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ../../src/Components/Page4/index */ "./src/Components/Page4/index.jsx"));},{ssr:enableSSR,loadableGenerated:{webpack:function webpack(){return[/*require.resolve*/(/*! ../../src/Components/Page4/index */ "./src/Components/Page4/index.jsx")];},modules:["../../src/Components/Page4/index"]}});var Page5Component=next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function(){return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../../src/Components/Page5/index */ "./src/Components/Page5/index.jsx"));},{ssr:enableSSR,loadableGenerated:{webpack:function webpack(){return[/*require.resolve*/(/*! ../../src/Components/Page5/index */ "./src/Components/Page5/index.jsx")];},modules:["../../src/Components/Page5/index"]}});var Page6Component=next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function(){return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ../../src/Components/Page6/index */ "./src/Components/Page6/index.jsx"));},{ssr:enableSSR,loadableGenerated:{webpack:function webpack(){return[/*require.resolve*/(/*! ../../src/Components/Page6/index */ "./src/Components/Page6/index.jsx")];},modules:["../../src/Components/Page6/index"]}});var PageBotComponent=next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function(){return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../src/Components/PageBot/index */ "./src/Components/PageBot/index.jsx"));},{ssr:enableSSR,loadableGenerated:{webpack:function webpack(){return[/*require.resolve*/(/*! ../../src/Components/PageBot/index */ "./src/Components/PageBot/index.jsx")];},modules:["../../src/Components/PageBot/index"]}});var Page1Desktop=next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function(){return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../../src/Components/Desktop/Page1 */ "./src/Components/Desktop/Page1/index.jsx"));},{ssr:enableSSR,loadableGenerated:{webpack:function webpack(){return[/*require.resolve*/(/*! ../../src/Components/Desktop/Page1 */ "./src/Components/Desktop/Page1/index.jsx")];},modules:["../../src/Components/Desktop/Page1"]}});var Page2Desktop=next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function(){return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../../src/Components/Desktop/Page2 */ "./src/Components/Desktop/Page2/index.jsx"));},{ssr:enableSSR,loadableGenerated:{webpack:function webpack(){return[/*require.resolve*/(/*! ../../src/Components/Desktop/Page2 */ "./src/Components/Desktop/Page2/index.jsx")];},modules:["../../src/Components/Desktop/Page2"]}});var PageFooter=next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function(){return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ../../src/Components/PageFooter/index */ "./src/Components/PageFooter/index.jsx"));},{ssr:enableSSR,loadableGenerated:{webpack:function webpack(){return[/*require.resolve*/(/*! ../../src/Components/PageFooter/index */ "./src/Components/PageFooter/index.jsx")];},modules:["../../src/Components/PageFooter/index"]}});var FooterDesktop=next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function(){return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../src/Components/Desktop/Footer */ "./src/Components/Desktop/Footer/index.jsx"));},{ssr:enableSSR,loadableGenerated:{webpack:function webpack(){return[/*require.resolve*/(/*! ../../src/Components/Desktop/Footer */ "./src/Components/Desktop/Footer/index.jsx")];},modules:["../../src/Components/Desktop/Footer"]}});var Home=function(_React$Component){Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Home,_React$Component);var _super=_createSuper(Home);function Home(props){var _this;Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,Home);_this=_super.call(this,props);Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),"_handleScroll",function(){var posY=window.scrollY;if(posY===0&&_this.state.loading!==false){setTimeout(function(){_this.setState({loading:false});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_11__["gsap"].to(window,{scrollTo:window.innerHeight/2+1000,duration:1.5});},_this.pageWaiting);}});Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),"_handleResize",function(){_this.setState({pageWidth:window.innerWidth,desktop:window.innerWidth>=768});});Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),"_renderLoadingPage",function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section",{id:"loading",className:"sticky loading",style:{zIndex:1},__source:{fileName:_jsxFileName,lineNumber:196,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"content",style:{height:"100vh",overflow:"hidden"},__source:{fileName:_jsxFileName,lineNumber:197,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LoadingPageComponent,{__source:{fileName:_jsxFileName,lineNumber:204,columnNumber:11}}),";"));});Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),"_renderMainPage",function(){var _this$state=_this.state,pageWidth=_this$state.pageWidth,pageHeight=_this$state.pageHeight;var beginPage=pageHeight/2+16500;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section",{id:"loading",className:"sticky loading",style:{zIndex:1},ref:function ref(ele){if(ele){_this._refElement.loading=ele;}},__source:{fileName:_jsxFileName,lineNumber:215,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"content",style:{height:beginPage+"px",overflow:"hidden"},__source:{fileName:_jsxFileName,lineNumber:225,columnNumber:11}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Page1Component,{ref_loading:_this._refElement.loading,pageWidth:pageWidth,pageHeight:pageHeight,__source:{fileName:_jsxFileName,lineNumber:232,columnNumber:13}}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Page2Component,{ref_loading:_this._refElement.loading,pageWidth:pageWidth,pageHeight:pageHeight,__source:{fileName:_jsxFileName,lineNumber:237,columnNumber:13}}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Page3Component,{ref_loading:_this._refElement.loading,pageWidth:pageWidth,pageHeight:pageHeight,__source:{fileName:_jsxFileName,lineNumber:242,columnNumber:13}}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Page4Component,{ref_loading:_this._refElement.loading,pageWidth:pageWidth,pageHeight:pageHeight,__source:{fileName:_jsxFileName,lineNumber:247,columnNumber:13}}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Page5Component,{ref_loading:_this._refElement.loading,pageWidth:pageWidth,pageHeight:pageHeight,__source:{fileName:_jsxFileName,lineNumber:252,columnNumber:13}}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Page6Component,{ref_loading:_this._refElement.loading,pageWidth:pageWidth,pageHeight:pageHeight,__source:{fileName:_jsxFileName,lineNumber:257,columnNumber:13}}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PageFooter,{ref_loading:_this._refElement.loading,pageWidth:pageWidth,pageHeight:pageHeight,__source:{fileName:_jsxFileName,lineNumber:262,columnNumber:13}}))));});Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),"_renderMainDesktopPage",function(){var _this$state2=_this.state,pageWidth=_this$state2.pageWidth,pageHeight=_this$state2.pageHeight;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section",{id:"loading",className:"sticky loading",style:{zIndex:1},ref:function ref(ele){if(ele){_this._refElement.loading=ele;}},__source:{fileName:_jsxFileName,lineNumber:277,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"content",style:{height:"5100vh",overflow:"hidden"},__source:{fileName:_jsxFileName,lineNumber:287,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Page1Desktop,{__source:{fileName:_jsxFileName,lineNumber:294,columnNumber:11}}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Page2Desktop,{__source:{fileName:_jsxFileName,lineNumber:295,columnNumber:11}})),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FooterDesktop,{__source:{fileName:_jsxFileName,lineNumber:297,columnNumber:9}}));});Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),"_renderBotPage",function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PageBotComponent,{__source:{fileName:_jsxFileName,lineNumber:303,columnNumber:12}});});_this.state={pageHeight:0,pageWidth:0,loading:true,desktop:false};_this._refElement={loading:null,phone:null};_this.pageWaiting=2500;_this.refTrigger=null;_this._isBot=false;if(props.isBot===true){_this._isBot=true;_this.state.loading=false;}else{gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_11__["gsap"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_12__["ScrollTrigger"],gsap_dist_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_13__["ScrollToPlugin"]);}return _this;}Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;if(this._isBot===false){gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_11__["gsap"].to(window,{scrollTo:0});var posY=window.scrollY;if(posY===0){requestAnimationFrame(function(){try{_this2.setState({pageHeight:window.innerHeight,pageWidth:window.innerWidth,desktop:window.innerWidth>=768});setTimeout(function(){_this2.setState({loading:false});gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_11__["gsap"].to(window,{scrollTo:window.innerHeight/2+1000,duration:1.5});},_this2.pageWaiting);}catch(err){}});}window.addEventListener("resize",this._handleResize);window.addEventListener("scroll",this._handleScroll);}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this._isBot===false){window.removeEventListener("resize",this._handleResize);window.removeEventListener("scroll",this._handleScroll);}}},{key:"render",value:function render(){var _this$state3=this.state,loading=_this$state3.loading,desktop=_this$state3.desktop;console.log("loading",loading);console.log("is_bot",this._isBot);console.log("desktop screen",desktop);var layoutHtml=this._renderLoadingPage();if(loading===false&&this._isBot===false){if(desktop===true){layoutHtml=this._renderMainDesktopPage();}else{layoutHtml=this._renderMainPage();}}if(this._isBot===true){layoutHtml=this._renderBotPage();}return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:327,columnNumber:7}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a,{__source:{fileName:_jsxFileName,lineNumber:328,columnNumber:9}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title",{__source:{fileName:_jsxFileName,lineNumber:329,columnNumber:11}},"Ibenefit Nh\u1EADn \u01AFu \u0110\xE3i"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link",{rel:"icon",href:"/favicon.ico",__source:{fileName:_jsxFileName,lineNumber:330,columnNumber:11}}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, \r maximum-scale=1.0, user-scalable=no, shrink-to-fit=no",__source:{fileName:_jsxFileName,lineNumber:331,columnNumber:11}}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta",{name:"HandheldFriendly",content:"true",__source:{fileName:_jsxFileName,lineNumber:336,columnNumber:11}})),layoutHtml,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_14___default.a,{pageId:"1409344332677753",appId:"323747138851500",__source:{fileName:_jsxFileName,lineNumber:339,columnNumber:9}}));}}]);return Home;}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "gsap/dist/ScrollToPlugin":
/*!*******************************************!*\
  !*** external "gsap/dist/ScrollToPlugin" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap/dist/ScrollToPlugin");

/***/ }),

/***/ "gsap/dist/ScrollTrigger":
/*!******************************************!*\
  !*** external "gsap/dist/ScrollTrigger" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ "gsap/dist/gsap":
/*!*********************************!*\
  !*** external "gsap/dist/gsap" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap/dist/gsap");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-messenger-customer-chat":
/*!************************************************!*\
  !*** external "react-messenger-customer-chat" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-messenger-customer-chat");

/***/ }),

/***/ "scrollmagic":
/*!******************************!*\
  !*** external "scrollmagic" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("scrollmagic");

/***/ }),

/***/ "scrollmagic-plugin-gsap":
/*!******************************************!*\
  !*** external "scrollmagic-plugin-gsap" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("scrollmagic-plugin-gsap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWUvaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImdzYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwL2Rpc3QvU2Nyb2xsVG9QbHVnaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwL2Rpc3QvU2Nyb2xsVHJpZ2dlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdzYXAvZGlzdC9nc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2Nyb2xsbWFnaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzY3JvbGxtYWdpYy1wbHVnaW4tZ3NhcFwiIl0sIm5hbWVzIjpbImVuYWJsZVNTUiIsIkxvYWRpbmdQYWdlQ29tcG9uZW50IiwiZHluYW1pYyIsInNzciIsIlBhZ2UxQ29tcG9uZW50IiwiUGFnZTJDb21wb25lbnQiLCJQYWdlM0NvbXBvbmVudCIsIlBhZ2U0Q29tcG9uZW50IiwiUGFnZTVDb21wb25lbnQiLCJQYWdlNkNvbXBvbmVudCIsIlBhZ2VCb3RDb21wb25lbnQiLCJQYWdlMURlc2t0b3AiLCJQYWdlMkRlc2t0b3AiLCJQYWdlRm9vdGVyIiwiRm9vdGVyRGVza3RvcCIsIkhvbWUiLCJwb3NZIiwid2luZG93Iiwic2V0VGltZW91dCIsImxvYWRpbmciLCJnc2FwIiwic2Nyb2xsVG8iLCJkdXJhdGlvbiIsInBhZ2VXaWR0aCIsImRlc2t0b3AiLCJ6SW5kZXgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsInBhZ2VIZWlnaHQiLCJiZWdpblBhZ2UiLCJwaG9uZSIsInByb3BzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29uc29sZSIsImxheW91dEh0bWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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InBhZ2VzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9ob21lXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2hvbWUvaW5kZXguanN4XCIpO1xuIiwiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xuXG52YXIgZGVmaW5lID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xuXG52YXIgZGVmaW5lID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xuXG52YXIgZGVmaW5lID0gZmFsc2U7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG5cbnZhciBkZWZpbmUgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xuXG52YXIgZGVmaW5lID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG5cbnZhciBkZWZpbmUgPSBmYWxzZTtcblxuaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xuXG52YXIgZGVmaW5lID0gZmFsc2U7XG5cbmltcG9ydCBfdHlwZW9mIGZyb20gXCIuLi8uLi9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsIi8qKiogSU1QT1JUUyBGUk9NIGltcG9ydHMtbG9hZGVyICoqKi9cblxudmFyIGRlZmluZSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG5cbnZhciBkZWZpbmUgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRpbnVlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgeyBnZXQsIGNsb25lRGVlcCB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcC9kaXN0L2dzYXBcIjtcclxuXHJcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIjtcclxuXHJcbmltcG9ydCB7IFNjcm9sbFRvUGx1Z2luIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUb1BsdWdpblwiO1xyXG5pbXBvcnQgTWVzc2VuZ2VyQ3VzdG9tZXJDaGF0IGZyb20gXCJyZWFjdC1tZXNzZW5nZXItY3VzdG9tZXItY2hhdFwiO1xyXG5cclxuLy8gY29uc3QgZW5hYmxlU1NSID0gcHJvY2Vzcy5lbnYuU1NSIHx8IGZhbHNlO1xyXG5jb25zdCBlbmFibGVTU1IgPSBmYWxzZTtcclxuXHJcbmNvbnN0IExvYWRpbmdQYWdlQ29tcG9uZW50ID0gZHluYW1pYyhcclxuICAoKSA9PiBpbXBvcnQoXCIuLi8uLi9zcmMvQ29tcG9uZW50cy9QYWdlTG9hZGluZy9pbmRleFwiKSxcclxuICB7XHJcbiAgICBzc3I6IGVuYWJsZVNTUixcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBQYWdlMUNvbXBvbmVudCA9IGR5bmFtaWMoXHJcbiAgKCkgPT4gaW1wb3J0KFwiLi4vLi4vc3JjL0NvbXBvbmVudHMvUGFnZTEvaW5kZXhcIiksXHJcbiAge1xyXG4gICAgc3NyOiBlbmFibGVTU1IsXHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgUGFnZTJDb21wb25lbnQgPSBkeW5hbWljKFxyXG4gICgpID0+IGltcG9ydChcIi4uLy4uL3NyYy9Db21wb25lbnRzL1BhZ2UyL2luZGV4XCIpLFxyXG4gIHtcclxuICAgIHNzcjogZW5hYmxlU1NSLFxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IFBhZ2UzQ29tcG9uZW50ID0gZHluYW1pYyhcclxuICAoKSA9PiBpbXBvcnQoXCIuLi8uLi9zcmMvQ29tcG9uZW50cy9QYWdlMy9pbmRleFwiKSxcclxuICB7XHJcbiAgICBzc3I6IGVuYWJsZVNTUixcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBQYWdlNENvbXBvbmVudCA9IGR5bmFtaWMoXHJcbiAgKCkgPT4gaW1wb3J0KFwiLi4vLi4vc3JjL0NvbXBvbmVudHMvUGFnZTQvaW5kZXhcIiksXHJcbiAge1xyXG4gICAgc3NyOiBlbmFibGVTU1IsXHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgUGFnZTVDb21wb25lbnQgPSBkeW5hbWljKFxyXG4gICgpID0+IGltcG9ydChcIi4uLy4uL3NyYy9Db21wb25lbnRzL1BhZ2U1L2luZGV4XCIpLFxyXG4gIHtcclxuICAgIHNzcjogZW5hYmxlU1NSLFxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IFBhZ2U2Q29tcG9uZW50ID0gZHluYW1pYyhcclxuICAoKSA9PiBpbXBvcnQoXCIuLi8uLi9zcmMvQ29tcG9uZW50cy9QYWdlNi9pbmRleFwiKSxcclxuICB7XHJcbiAgICBzc3I6IGVuYWJsZVNTUixcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBQYWdlQm90Q29tcG9uZW50ID0gZHluYW1pYyhcclxuICAoKSA9PiBpbXBvcnQoXCIuLi8uLi9zcmMvQ29tcG9uZW50cy9QYWdlQm90L2luZGV4XCIpLFxyXG4gIHtcclxuICAgIHNzcjogZW5hYmxlU1NSLFxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IFBhZ2UxRGVza3RvcCA9IGR5bmFtaWMoXHJcbiAgKCkgPT4gaW1wb3J0KFwiLi4vLi4vc3JjL0NvbXBvbmVudHMvRGVza3RvcC9QYWdlMVwiKSxcclxuICB7XHJcbiAgICBzc3I6IGVuYWJsZVNTUixcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBQYWdlMkRlc2t0b3AgPSBkeW5hbWljKFxyXG4gICgpID0+IGltcG9ydChcIi4uLy4uL3NyYy9Db21wb25lbnRzL0Rlc2t0b3AvUGFnZTJcIiksXHJcbiAge1xyXG4gICAgc3NyOiBlbmFibGVTU1IsXHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgUGFnZUZvb3RlciA9IGR5bmFtaWMoXHJcbiAgKCkgPT4gaW1wb3J0KFwiLi4vLi4vc3JjL0NvbXBvbmVudHMvUGFnZUZvb3Rlci9pbmRleFwiKSxcclxuICB7XHJcbiAgICBzc3I6IGVuYWJsZVNTUixcclxuICB9XHJcbik7XHJcbmNvbnN0IEZvb3RlckRlc2t0b3AgPSBkeW5hbWljKFxyXG4gICgpID0+IGltcG9ydChcIi4uLy4uL3NyYy9Db21wb25lbnRzL0Rlc2t0b3AvRm9vdGVyXCIpLFxyXG4gIHtcclxuICAgIHNzcjogZW5hYmxlU1NSLFxyXG4gIH1cclxuKTtcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwYWdlSGVpZ2h0OiAwLFxyXG4gICAgICBwYWdlV2lkdGg6IDAsXHJcbiAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgIGRlc2t0b3A6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHRoaXMuX3JlZkVsZW1lbnQgPSB7XHJcbiAgICAgIGxvYWRpbmc6IG51bGwsXHJcbiAgICAgIHBob25lOiBudWxsLFxyXG4gICAgfTtcclxuICAgIHRoaXMucGFnZVdhaXRpbmcgPSAyNTAwO1xyXG4gICAgdGhpcy5yZWZUcmlnZ2VyID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLl9pc0JvdCA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChwcm9wcy5pc0JvdCA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLl9pc0JvdCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc3RhdGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyLCBTY3JvbGxUb1BsdWdpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGlmICh0aGlzLl9pc0JvdCA9PT0gZmFsc2UpIHtcclxuICAgICAgZ3NhcC50byh3aW5kb3csIHsgc2Nyb2xsVG86IDAgfSk7XHJcbiAgICAgIGNvbnN0IHBvc1kgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgICAgIGlmIChwb3NZID09PSAwKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHBhZ2VIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgICBwYWdlV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICAgIGRlc2t0b3A6IHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICBnc2FwLnRvKHdpbmRvdywge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG86IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgKyAxMDAwLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgdGhpcy5wYWdlV2FpdGluZyk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9oYW5kbGVSZXNpemUpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLl9oYW5kbGVTY3JvbGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBpZiAodGhpcy5faXNCb3QgPT09IGZhbHNlKSB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuX2hhbmRsZVNjcm9sbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgLy8gY29uc29sZS5sb2cocG9zWSk7XHJcbiAgICBpZiAocG9zWSA9PT0gMCAmJiB0aGlzLnN0YXRlLmxvYWRpbmcgIT09IGZhbHNlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdzYXAudG8od2luZG93LCB7XHJcbiAgICAgICAgICBzY3JvbGxUbzogd2luZG93LmlubmVySGVpZ2h0IC8gMiArIDEwMDAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMS41LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCB0aGlzLnBhZ2VXYWl0aW5nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2VXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgIGRlc2t0b3A6IHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCxcclxuICAgICAgLy8gcGFnZUhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgX3JlbmRlckxvYWRpbmdQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24gaWQ9XCJsb2FkaW5nXCIgY2xhc3NOYW1lPVwic3RpY2t5IGxvYWRpbmdcIiBzdHlsZT17eyB6SW5kZXg6IDEgfX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudFwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMb2FkaW5nUGFnZUNvbXBvbmVudCAvPjtcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBfcmVuZGVyTWFpblBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHBhZ2VXaWR0aCwgcGFnZUhlaWdodCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGJlZ2luUGFnZSA9IHBhZ2VIZWlnaHQgLyAyICsgMTY1MDA7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICBpZD1cImxvYWRpbmdcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3RpY2t5IGxvYWRpbmdcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxIH19XHJcbiAgICAgICAgICByZWY9e2VsZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGUpIHtcclxuICAgICAgICAgICAgICB0aGlzLl9yZWZFbGVtZW50LmxvYWRpbmcgPSBlbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGAke2JlZ2luUGFnZX1weGAsXHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQYWdlMUNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIHJlZl9sb2FkaW5nPXt0aGlzLl9yZWZFbGVtZW50LmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgcGFnZVdpZHRoPXtwYWdlV2lkdGh9XHJcbiAgICAgICAgICAgICAgcGFnZUhlaWdodD17cGFnZUhlaWdodH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFBhZ2UyQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgcmVmX2xvYWRpbmc9e3RoaXMuX3JlZkVsZW1lbnQubG9hZGluZ31cclxuICAgICAgICAgICAgICBwYWdlV2lkdGg9e3BhZ2VXaWR0aH1cclxuICAgICAgICAgICAgICBwYWdlSGVpZ2h0PXtwYWdlSGVpZ2h0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UGFnZTNDb21wb25lbnRcclxuICAgICAgICAgICAgICByZWZfbG9hZGluZz17dGhpcy5fcmVmRWxlbWVudC5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgIHBhZ2VXaWR0aD17cGFnZVdpZHRofVxyXG4gICAgICAgICAgICAgIHBhZ2VIZWlnaHQ9e3BhZ2VIZWlnaHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxQYWdlNENvbXBvbmVudFxyXG4gICAgICAgICAgICAgIHJlZl9sb2FkaW5nPXt0aGlzLl9yZWZFbGVtZW50LmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgcGFnZVdpZHRoPXtwYWdlV2lkdGh9XHJcbiAgICAgICAgICAgICAgcGFnZUhlaWdodD17cGFnZUhlaWdodH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFBhZ2U1Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgcmVmX2xvYWRpbmc9e3RoaXMuX3JlZkVsZW1lbnQubG9hZGluZ31cclxuICAgICAgICAgICAgICBwYWdlV2lkdGg9e3BhZ2VXaWR0aH1cclxuICAgICAgICAgICAgICBwYWdlSGVpZ2h0PXtwYWdlSGVpZ2h0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UGFnZTZDb21wb25lbnRcclxuICAgICAgICAgICAgICByZWZfbG9hZGluZz17dGhpcy5fcmVmRWxlbWVudC5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgIHBhZ2VXaWR0aD17cGFnZVdpZHRofVxyXG4gICAgICAgICAgICAgIHBhZ2VIZWlnaHQ9e3BhZ2VIZWlnaHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxQYWdlRm9vdGVyXHJcbiAgICAgICAgICAgICAgcmVmX2xvYWRpbmc9e3RoaXMuX3JlZkVsZW1lbnQubG9hZGluZ31cclxuICAgICAgICAgICAgICBwYWdlV2lkdGg9e3BhZ2VXaWR0aH1cclxuICAgICAgICAgICAgICBwYWdlSGVpZ2h0PXtwYWdlSGVpZ2h0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgX3JlbmRlck1haW5EZXNrdG9wUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgcGFnZVdpZHRoLCBwYWdlSGVpZ2h0IH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgaWQ9XCJsb2FkaW5nXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJzdGlja3kgbG9hZGluZ1wiXHJcbiAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxIH19XHJcbiAgICAgICAgcmVmPXtlbGUgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZWZFbGVtZW50LmxvYWRpbmcgPSBlbGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjUxMDB2aFwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBhZ2UxRGVza3RvcCAvPlxyXG4gICAgICAgICAgPFBhZ2UyRGVza3RvcCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb290ZXJEZXNrdG9wIC8+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgX3JlbmRlckJvdFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFBhZ2VCb3RDb21wb25lbnQgLz47XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nLCBkZXNrdG9wIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJsb2FkaW5nXCIsIGxvYWRpbmcpO1xyXG4gICAgY29uc29sZS5sb2coXCJpc19ib3RcIiwgdGhpcy5faXNCb3QpO1xyXG4gICAgY29uc29sZS5sb2coXCJkZXNrdG9wIHNjcmVlblwiLCBkZXNrdG9wKTtcclxuXHJcbiAgICBsZXQgbGF5b3V0SHRtbCA9IHRoaXMuX3JlbmRlckxvYWRpbmdQYWdlKCk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHRoaXMuX2lzQm90ID09PSBmYWxzZSkge1xyXG4gICAgICBpZiAoZGVza3RvcCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGxheW91dEh0bWwgPSB0aGlzLl9yZW5kZXJNYWluRGVza3RvcFBhZ2UoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsYXlvdXRIdG1sID0gdGhpcy5fcmVuZGVyTWFpblBhZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9pc0JvdCA9PT0gdHJ1ZSkge1xyXG4gICAgICBsYXlvdXRIdG1sID0gdGhpcy5fcmVuZGVyQm90UGFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+SWJlbmVmaXQgTmjhuq1uIMavdSDEkMOjaTwvdGl0bGU+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgXHJcbiAgICAgICAgICAgIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vLCBzaHJpbmstdG8tZml0PW5vXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiSGFuZGhlbGRGcmllbmRseVwiIGNvbnRlbnQ9XCJ0cnVlXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAge2xheW91dEh0bWx9XHJcbiAgICAgICAgPE1lc3NlbmdlckN1c3RvbWVyQ2hhdFxyXG4gICAgICAgICAgcGFnZUlkPVwiMTQwOTM0NDMzMjY3Nzc1M1wiXHJcbiAgICAgICAgICBhcHBJZD1cIjMyMzc0NzEzODg1MTUwMFwiXHJcbiAgICAgICAgICAvLyBwYWdlSWQ9XCIxNjg0NjAwNDk1MDg1NDY4XCJcclxuICAgICAgICAgIC8vIGFwcElkPVwiNTY5MTc4MzgwNDYyNTAwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnc2FwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdzYXAvZGlzdC9TY3JvbGxUb1BsdWdpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnc2FwL2Rpc3QvU2Nyb2xsVHJpZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnc2FwL2Rpc3QvZ3NhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tZXNzZW5nZXItY3VzdG9tZXItY2hhdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzY3JvbGxtYWdpY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzY3JvbGxtYWdpYy1wbHVnaW4tZ3NhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
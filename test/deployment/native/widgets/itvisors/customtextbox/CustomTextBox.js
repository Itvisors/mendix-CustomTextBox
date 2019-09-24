module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../src/CustomTextBox.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../src/CustomTextBox.tsx":
/*!***********************************************************************************!*\
  !*** c:/Users/marcel/Documents/GitHub/mendix-CustomTextBox/src/CustomTextBox.tsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! ./components/CustomTextInput */ "../../../../src/components/CustomTextInput.tsx")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_1, CustomTextInput_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomTextBox = (function (_super) {
        __extends(CustomTextBox, _super);
        function CustomTextBox() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.onUpdateHandle = _this.onUpdate.bind(_this);
            return _this;
        }
        CustomTextBox.prototype.render = function () {
            var value;
            if (this.props.dataAttr.status == "available") {
                value = this.props.dataAttr.displayValue || "";
            }
            else {
                value = "";
            }
            var editable = this.props.dataAttr.status == "available" && !this.props.dataAttr.readOnly;
            return (react_1.createElement(CustomTextInput_1.CustomTextInput, { value: value, style: this.props.style, editable: editable, onUpdate: this.onUpdateHandle }));
        };
        CustomTextBox.prototype.onUpdate = function (value) {
            this.props.dataAttr.setValue(value);
        };
        return CustomTextBox;
    }(react_1.Component));
    exports.CustomTextBox = CustomTextBox;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../../src/components/CustomTextInput.tsx":
/*!************************************************************************************************!*\
  !*** c:/Users/marcel/Documents/GitHub/mendix-CustomTextBox/src/components/CustomTextInput.tsx ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-native */ "react-native"), __webpack_require__(/*! ../utils/common */ "../../../../src/utils/common.ts"), __webpack_require__(/*! ../ui/styles */ "../../../../src/ui/styles.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_1, react_native_1, common_1, styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var defaultTextInputStyle = {
        container: styles_1.styles.flex,
        input: styles_1.styles.input
    };
    var readOnlyTextInputStyle = {
        container: styles_1.styles.flex,
        input: styles_1.styles.readOnly
    };
    var CustomTextInput = (function (_super) {
        __extends(CustomTextInput, _super);
        function CustomTextInput() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.styles = common_1.flattenStyles(defaultTextInputStyle, _this.props.style);
            _this.readOnlyStyles = common_1.flattenStyles(readOnlyTextInputStyle, _this.props.style);
            return _this;
        }
        CustomTextInput.prototype.render = function () {
            return (react_1.createElement(react_native_1.View, { style: this.styles.container },
                react_1.createElement(react_native_1.TextInput, { style: this.props.editable ? this.styles.input : this.readOnlyStyles.input, value: this.props.value, editable: this.props.editable, onChangeText: this.props.onUpdate })));
        };
        return CustomTextInput;
    }(react_1.Component));
    exports.CustomTextInput = CustomTextInput;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../../src/ui/styles.ts":
/*!******************************************************************************!*\
  !*** c:/Users/marcel/Documents/GitHub/mendix-CustomTextBox/src/ui/styles.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react-native */ "react-native")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, react_native_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styles = react_native_1.StyleSheet.create({
        flex: {
            flexDirection: "row"
        },
        input: {
            flex: 1,
            padding: 15,
            fontSize: 17.5,
            borderColor: "#cdcdcd",
            borderWidth: 1,
            borderRadius: 5
        },
        readOnly: {
            flex: 1,
            padding: 15,
            fontSize: 17.5,
            borderColor: "#cdcdcd",
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: "#f3f3f3"
        }
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "../../../../src/utils/common.ts":
/*!*********************************************************************************!*\
  !*** c:/Users/marcel/Documents/GitHub/mendix-CustomTextBox/src/utils/common.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function flattenStyles(defaultStyle, overrideStyles) {
        var styles = __spreadArrays([defaultStyle], overrideStyles.filter(function (object) { return object !== undefined; }));
        return Object.keys(defaultStyle).reduce(function (flattened, currentKey) {
            var _a;
            var styleItems = styles.map(function (object) { return object[currentKey]; });
            return __assign(__assign({}, flattened), (_a = {}, _a[currentKey] = flattenObjects(styleItems), _a));
        }, {});
    }
    exports.flattenStyles = flattenStyles;
    function flattenObjects(objects) {
        return objects.reduce(function (merged, object) { return (__assign(__assign({}, merged), object)); }, {});
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ })

/******/ });
//# sourceMappingURL=CustomTextBox.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProductCard.js":
/*!***********************************!*\
  !*** ./components/ProductCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_commonFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/commonFuncs */ "./utils/commonFuncs.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/state */ "./context/state.js");

var _jsxFileName = "/Users/aqkneo/Sites/experiments/next-ecom/components/ProductCard.js";





var ProductCard = function ProductCard(_ref) {
  var product = _ref.product;

  var _useStateValue = Object(_context_state__WEBPACK_IMPORTED_MODULE_4__["useStateValue"])(),
      _useStateValue2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useStateValue, 1),
      dispatch = _useStateValue2[0];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card",
    style: {
      width: '18rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "card-img-top img-fluid",
    src: product.thumb,
    alt: "Card image cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "card-title",
    style: {
      fontSize: '1vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, _utils_commonFuncs__WEBPACK_IMPORTED_MODULE_2__["default"].trim(product.title, 37)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "card-text",
    style: {
      fontSize: '1vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _utils_commonFuncs__WEBPACK_IMPORTED_MODULE_2__["default"].trim(product.description, 185)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "btn btn-primary",
    onClick: function onClick() {
      return dispatch({
        type: 'addToCart',
        cartItem: product
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Add to cart")));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ })

})
//# sourceMappingURL=index.js.7a92649a5f630497fa2c.hot-update.js.map
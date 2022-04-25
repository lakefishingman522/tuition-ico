webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/assets/sections/TokensaleDlg/index.js":
/*!***************************************************!*\
  !*** ./src/assets/sections/TokensaleDlg/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../slices/filter */ "./src/slices/filter.js");
/* harmony import */ var _reusecore_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reusecore/Layout */ "./src/assets/reusecore/Layout/index.js");
/* harmony import */ var _reusecore_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reusecore/Box */ "./src/assets/reusecore/Box/index.js");
/* harmony import */ var _reusecore_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reusecore/Heading */ "./src/assets/reusecore/Heading/index.js");
/* harmony import */ var _reusecore_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reusecore/Text */ "./src/assets/reusecore/Text/index.js");
/* harmony import */ var _reusecore_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reusecore/Button */ "./src/assets/reusecore/Button/index.js");
/* harmony import */ var _reusecore_Form_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reusecore/Form/Input */ "./src/assets/reusecore/Form/Input/index.js");
/* harmony import */ var _reusecore_SectionTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reusecore/SectionTitle */ "./src/assets/reusecore/SectionTitle/index.js");
/* harmony import */ var _subscribe_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subscribe.style */ "./src/assets/sections/TokensaleDlg/subscribe.style.js");
var _this = undefined,
    _jsxFileName = "D:\\6.DevProject\\Blockchain\\3.Client-project\\TUITION\\ICOLandingPage\\src\\assets\\sections\\TokensaleDlg\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var TokensaleDlg = function TokensaleDlg() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var tokens = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_slices_filter__WEBPACK_IMPORTED_MODULE_2__["tokensSelector"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      tokenNum = _useState[0],
      setTokenNum = _useState[1];

  function fnBuyToken() {
    // start buying token functions from here with the number of token
    dispatch(Object(_slices_filter__WEBPACK_IMPORTED_MODULE_2__["buyTokens"])(tokenNum));
  }

  return __jsx(_subscribe_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "contact",
    style: {
      marginTop: 150,
      paddingBottom: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "subscribe-box-bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "lg-6 offset-lg-3 xs-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(_reusecore_SectionTitle__WEBPACK_IMPORTED_MODULE_9__["SectionTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, __jsx(_reusecore_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("div", {
    "class": "waviy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      margin: 0,
      flex: "initial",
      maxWidth: "100%",
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 23
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, __jsx("span", {
    style: {
      "--i": 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 27
    }
  }, "T"), __jsx("span", {
    style: {
      "--i": 2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 27
    }
  }, "U"), __jsx("span", {
    style: {
      "--i": 3
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 27
    }
  }, "I"), __jsx("span", {
    style: {
      "--i": 4
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 27
    }
  }, "T"), __jsx("span", {
    style: {
      "--i": 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 27
    }
  }, "I"), __jsx("span", {
    style: {
      "--i": 6
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 27
    }
  }, "O"), __jsx("span", {
    style: {
      "--i": 7
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 27
    }
  }, "N")), __jsx("span", {
    style: {
      marginLeft: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, " "), __jsx("span", {
    style: {
      "--i": 8
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, "T"), __jsx("span", {
    style: {
      "--i": 8
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, "O"), __jsx("span", {
    style: {
      "--i": 8
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, "K"), __jsx("span", {
    style: {
      "--i": 8
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, "E"), __jsx("span", {
    style: {
      "--i": 8
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, "N")), __jsx("span", {
    style: {
      marginLeft: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 23
    }
  }, " "), __jsx("span", {
    style: {
      "--i": 9
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 23
    }
  }, "I"), __jsx("span", {
    style: {
      "--i": 9
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }
  }, "C"), __jsx("span", {
    style: {
      "--i": 9
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }, "O"), __jsx("span", {
    style: {
      marginLeft: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }, " "), __jsx("span", {
    style: {
      "--i": 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }
  }, "S"), __jsx("span", {
    style: {
      "--i": 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 23
    }
  }, "A"), __jsx("span", {
    style: {
      "--i": 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }, "L"), __jsx("span", {
    style: {
      "--i": 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }
  }, "E"))), __jsx(_reusecore_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("span", {
    "class": "TokenIcoText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  }, "Your current number of TUITION tokens is "), " ", tokens.balance)))), __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx(_reusecore_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "lg-8 offset-lg-2 xs-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx(_reusecore_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "form-box",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, __jsx(_reusecore_Form_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "number",
    placeholder: "type the number of tokens buying... ",
    onChange: function onChange(e) {
      return setTokenNum(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }), __jsx(_reusecore_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: function onClick() {
      return fnBuyToken();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "Buy Tokens")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TokensaleDlg);

/***/ })

})
//# sourceMappingURL=index.js.2d67e196f4028d336934.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/question/question-summary/index.js":
/*!*******************************************************!*\
  !*** ./components/question/question-summary/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/formatDistanceToNowStrict */ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slug */ "./node_modules/slug/slug.js");
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tag */ "./components/tag/index.js");
/* harmony import */ var _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question-summary.module.css */ "./components/question/question-summary/question-summary.module.css");
/* harmony import */ var _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_question_summary_module_css__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\HP\\OneDrive\\Documents\\vercel1\\vercel1\\components\\question\\question-summary\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
    serial = _useState[0],
    setSerial = _useState[1];

var QuestionSummary = function QuestionSummary(_ref) {
  _s();

  var id = _ref.id,
      title = _ref.title,
      tags = _ref.tags,
      author = _ref.author,
      createdTime = _ref.createdTime,
      children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
      isAuthenticated = _useContext.isAuthenticated,
      isAdmin = _useContext.isAdmin;

  return __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 39
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/questions/[slug]",
    as: "/questions/".concat(id, "-").concat(slug__WEBPACK_IMPORTED_MODULE_3___default()(title)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, title)), __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.excerpt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, children), __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.tagContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, tags.map(function (tag) {
    return __jsx(_tag__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, tag);
  })), !isAuthenticated() && !isAdmin() ? __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.userDetails,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 45
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/users/[user]",
    as: "/users/".concat(author.username),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "https://secure.gravatar.com/avatar/".concat(author.id, "?s=32&d=identicon"),
    alt: author.username,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.info,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "asked", ' ', Object(date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(createdTime), {
    addSuffix: true
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/users/[user]",
    as: "/users/".concat(author.username),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, author.username)))) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 27
    }
  })));
};

_s(QuestionSummary, "4II0oDaHIA0lVKsUGR9wamw20Eo=");

_c = QuestionSummary;
/* harmony default export */ __webpack_exports__["default"] = (QuestionSummary);

var _c;

$RefreshReg$(_c, "QuestionSummary");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLXN1bW1hcnkvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzZXJpYWwiLCJzZXRTZXJpYWwiLCJRdWVzdGlvblN1bW1hcnkiLCJpZCIsInRpdGxlIiwidGFncyIsImF1dGhvciIsImNyZWF0ZWRUaW1lIiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJpc0FkbWluIiwic3R5bGVzIiwiY29udGFpbmVyIiwic2x1ZyIsImxpbmsiLCJleGNlcnB0IiwiZm9vdGVyIiwidGFnQ29udGFpbmVyIiwibWFwIiwidGFnIiwidXNlckRldGFpbHMiLCJ1c2VybmFtZSIsImluZm8iLCJmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IiwiRGF0ZSIsImFkZFN1ZmZpeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O2dCQUN5QkEsc0RBQVEsQ0FBQyxDQUFELEM7SUFBMUJDLE07SUFBT0MsUzs7QUFDZCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BT2xCO0FBQUE7O0FBQUEsTUFOSkMsRUFNSSxRQU5KQSxFQU1JO0FBQUEsTUFMSkMsS0FLSSxRQUxKQSxLQUtJO0FBQUEsTUFKSkMsSUFJSSxRQUpKQSxJQUlJO0FBQUEsTUFISkMsTUFHSSxRQUhKQSxNQUdJO0FBQUEsTUFGSkMsV0FFSSxRQUZKQSxXQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJOztBQUFBLG9CQUNnQ0Msd0RBQVUsQ0FBQ0MsdURBQUQsQ0FEMUM7QUFBQSxNQUNJQyxlQURKLGVBQ0lBLGVBREo7QUFBQSxNQUNxQkMsT0FEckIsZUFDcUJBLE9BRHJCOztBQUVKLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLG1FQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFsQyxFQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsbUJBQVg7QUFBK0IsTUFBRSx1QkFBZ0JYLEVBQWhCLGNBQXNCWSwyQ0FBSSxDQUFDWCxLQUFELENBQTFCLENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRVMsbUVBQU0sQ0FBQ0csSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QlosS0FBNUIsQ0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVTLG1FQUFNLENBQUNJLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUNULFFBQWpDLENBSkYsRUFLRTtBQUFLLGFBQVMsRUFBRUssbUVBQU0sQ0FBQ0ssTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFTCxtRUFBTSxDQUFDTSxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dkLElBQUksQ0FBQ2UsR0FBTCxDQUFTLFVBQUNDLEdBQUQ7QUFBQSxXQUNSLE1BQUMsNENBQUQ7QUFBSyxTQUFHLEVBQUVBLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQkEsR0FBaEIsQ0FEUTtBQUFBLEdBQVQsQ0FESCxDQURGLEVBTUcsQ0FBQ1YsZUFBZSxFQUFoQixJQUFzQixDQUFDQyxPQUFPLEVBQTlCLEdBQW1DO0FBQUssYUFBUyxFQUFFQyxtRUFBTSxDQUFDUyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ2xDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUEyQixNQUFFLG1CQUFZaEIsTUFBTSxDQUFDaUIsUUFBbkIsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsK0NBQXdDakIsTUFBTSxDQUFDSCxFQUEvQyxzQkFETDtBQUVFLE9BQUcsRUFBRUcsTUFBTSxDQUFDaUIsUUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURrQyxFQVNsQztBQUFLLGFBQVMsRUFBRVYsbUVBQU0sQ0FBQ1csSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDUSxHQURSLEVBRUdDLGtGQUF5QixDQUFDLElBQUlDLElBQUosQ0FBU25CLFdBQVQsQ0FBRCxFQUF3QjtBQUNoRG9CLGFBQVMsRUFBRTtBQURxQyxHQUF4QixDQUY1QixDQURGLEVBT0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxlQUFYO0FBQTJCLE1BQUUsbUJBQVlyQixNQUFNLENBQUNpQixRQUFuQixDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJakIsTUFBTSxDQUFDaUIsUUFBWCxDQURGLENBUEYsQ0FUa0MsQ0FBbkMsR0FtQmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6QnBCLENBTEYsQ0FERjtBQW9DRCxDQTdDRDs7R0FBTXJCLGU7O0tBQUFBLGU7QUErQ1NBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jZDBjMGE1Y2FlNjNlMTA4NDllYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VDb250ZXh0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QnXG5pbXBvcnQgc2x1ZyBmcm9tICdzbHVnJ1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hdXRoJ1xuXG5pbXBvcnQgVGFnIGZyb20gJy4uLy4uL3RhZydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3F1ZXN0aW9uLXN1bW1hcnkubW9kdWxlLmNzcydcbmNvbnN0IFtzZXJpYWwsc2V0U2VyaWFsXT11c2VTdGF0ZSgwKTtcbmNvbnN0IFF1ZXN0aW9uU3VtbWFyeSA9ICh7XG4gIGlkLFxuICB0aXRsZSxcbiAgdGFncyxcbiAgYXV0aG9yLFxuICBjcmVhdGVkVGltZSxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgLGlzQWRtaW59ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PjxoMT48L2gxPlxuICAgICAgPExpbmsgaHJlZj1cIi9xdWVzdGlvbnMvW3NsdWddXCIgYXM9e2AvcXVlc3Rpb25zLyR7aWR9LSR7c2x1Zyh0aXRsZSl9YH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9Pnt0aXRsZX08L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2VycHR9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdDb250YWluZXJ9PlxuICAgICAgICAgIHt0YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICA8VGFnIGtleT17dGFnfT57dGFnfTwvVGFnPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICB7ICFpc0F1dGhlbnRpY2F0ZWQoKSAmJiAhaXNBZG1pbigpID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyRGV0YWlsc30+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vycy9bdXNlcl1cIiBhcz17YC91c2Vycy8ke2F1dGhvci51c2VybmFtZX1gfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9zZWN1cmUuZ3JhdmF0YXIuY29tL2F2YXRhci8ke2F1dGhvci5pZH0/cz0zMiZkPWlkZW50aWNvbmB9XG4gICAgICAgICAgICAgICAgYWx0PXthdXRob3IudXNlcm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgYXNrZWR7JyAnfVxuICAgICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChuZXcgRGF0ZShjcmVhdGVkVGltZSksIHtcbiAgICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWVcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzL1t1c2VyXVwiIGFzPXtgL3VzZXJzLyR7YXV0aG9yLnVzZXJuYW1lfWB9PlxuICAgICAgICAgICAgICA8YT57YXV0aG9yLnVzZXJuYW1lfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj48L2Rpdj4gOiAoPGRpdj48L2Rpdj4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvblN1bW1hcnlcbiJdLCJzb3VyY2VSb290IjoiIn0=
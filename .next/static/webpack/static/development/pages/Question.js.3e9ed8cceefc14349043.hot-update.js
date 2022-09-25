webpackHotUpdate("static\\development\\pages\\Question.js",{

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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
  })), __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.userDetails,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
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
  }, author.username))), " : (", __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), ")}")));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLXN1bW1hcnkvaW5kZXguanMiXSwibmFtZXMiOlsiUXVlc3Rpb25TdW1tYXJ5IiwiaWQiLCJ0aXRsZSIsInRhZ3MiLCJhdXRob3IiLCJjcmVhdGVkVGltZSIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiaXNBdXRoZW50aWNhdGVkIiwiaXNBZG1pbiIsInN0eWxlcyIsImNvbnRhaW5lciIsInNsdWciLCJsaW5rIiwiZXhjZXJwdCIsImZvb3RlciIsInRhZ0NvbnRhaW5lciIsIm1hcCIsInRhZyIsInVzZXJEZXRhaWxzIiwidXNlcm5hbWUiLCJpbmZvIiwiZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCIsIkRhdGUiLCJhZGRTdWZmaXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FPbEI7QUFBQTs7QUFBQSxNQU5KQyxFQU1JLFFBTkpBLEVBTUk7QUFBQSxNQUxKQyxLQUtJLFFBTEpBLEtBS0k7QUFBQSxNQUpKQyxJQUlJLFFBSkpBLElBSUk7QUFBQSxNQUhKQyxNQUdJLFFBSEpBLE1BR0k7QUFBQSxNQUZKQyxXQUVJLFFBRkpBLFdBRUk7QUFBQSxNQURKQyxRQUNJLFFBREpBLFFBQ0k7O0FBQUEsb0JBQ2dDQyx3REFBVSxDQUFDQyx1REFBRCxDQUQxQztBQUFBLE1BQ0lDLGVBREosZUFDSUEsZUFESjtBQUFBLE1BQ3FCQyxPQURyQixlQUNxQkEsT0FEckI7O0FBRUosU0FDRTtBQUFLLGFBQVMsRUFBRUMsbUVBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsbUJBQVg7QUFBK0IsTUFBRSx1QkFBZ0JYLEVBQWhCLGNBQXNCWSwyQ0FBSSxDQUFDWCxLQUFELENBQTFCLENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRVMsbUVBQU0sQ0FBQ0csSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QlosS0FBNUIsQ0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUVTLG1FQUFNLENBQUNJLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUNULFFBQWpDLENBSkYsRUFLRTtBQUFLLGFBQVMsRUFBRUssbUVBQU0sQ0FBQ0ssTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFTCxtRUFBTSxDQUFDTSxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dkLElBQUksQ0FBQ2UsR0FBTCxDQUFTLFVBQUNDLEdBQUQ7QUFBQSxXQUNSLE1BQUMsNENBQUQ7QUFBSyxTQUFHLEVBQUVBLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQkEsR0FBaEIsQ0FEUTtBQUFBLEdBQVQsQ0FESCxDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUVSLG1FQUFNLENBQUNTLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBMkIsTUFBRSxtQkFBWWhCLE1BQU0sQ0FBQ2lCLFFBQW5CLENBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLCtDQUF3Q2pCLE1BQU0sQ0FBQ0gsRUFBL0Msc0JBREw7QUFFRSxPQUFHLEVBQUVHLE1BQU0sQ0FBQ2lCLFFBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixFQVNFO0FBQUssYUFBUyxFQUFFVixtRUFBTSxDQUFDVyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNRLEdBRFIsRUFFR0Msa0ZBQXlCLENBQUMsSUFBSUMsSUFBSixDQUFTbkIsV0FBVCxDQUFELEVBQXdCO0FBQ2hEb0IsYUFBUyxFQUFFO0FBRHFDLEdBQXhCLENBRjVCLENBREYsRUFPRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBMkIsTUFBRSxtQkFBWXJCLE1BQU0sQ0FBQ2lCLFFBQW5CLENBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlqQixNQUFNLENBQUNpQixRQUFYLENBREYsQ0FQRixDQVRGLFVBbUJZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQlosT0FORixDQUxGLENBREY7QUFvQ0QsQ0E3Q0Q7O0dBQU1yQixlOztLQUFBQSxlO0FBK0NTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcUXVlc3Rpb24uanMuM2U5ZWQ4Y2NlZWZjMTQzNDkwNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0J1xuaW1wb3J0IHNsdWcgZnJvbSAnc2x1ZydcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYXV0aCdcblxuaW1wb3J0IFRhZyBmcm9tICcuLi8uLi90YWcnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9xdWVzdGlvbi1zdW1tYXJ5Lm1vZHVsZS5jc3MnXG5cbmNvbnN0IFF1ZXN0aW9uU3VtbWFyeSA9ICh7XG4gIGlkLFxuICB0aXRsZSxcbiAgdGFncyxcbiAgYXV0aG9yLFxuICBjcmVhdGVkVGltZSxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgLGlzQWRtaW59ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPExpbmsgaHJlZj1cIi9xdWVzdGlvbnMvW3NsdWddXCIgYXM9e2AvcXVlc3Rpb25zLyR7aWR9LSR7c2x1Zyh0aXRsZSl9YH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9Pnt0aXRsZX08L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2VycHR9PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdDb250YWluZXJ9PlxuICAgICAgICAgIHt0YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICA8VGFnIGtleT17dGFnfT57dGFnfTwvVGFnPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyRGV0YWlsc30+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vycy9bdXNlcl1cIiBhcz17YC91c2Vycy8ke2F1dGhvci51c2VybmFtZX1gfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9zZWN1cmUuZ3JhdmF0YXIuY29tL2F2YXRhci8ke2F1dGhvci5pZH0/cz0zMiZkPWlkZW50aWNvbmB9XG4gICAgICAgICAgICAgICAgYWx0PXthdXRob3IudXNlcm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgYXNrZWR7JyAnfVxuICAgICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChuZXcgRGF0ZShjcmVhdGVkVGltZSksIHtcbiAgICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWVcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzL1t1c2VyXVwiIGFzPXtgL3VzZXJzLyR7YXV0aG9yLnVzZXJuYW1lfWB9PlxuICAgICAgICAgICAgICA8YT57YXV0aG9yLnVzZXJuYW1lfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj4gOiAoPGRpdj48L2Rpdj4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uU3VtbWFyeVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
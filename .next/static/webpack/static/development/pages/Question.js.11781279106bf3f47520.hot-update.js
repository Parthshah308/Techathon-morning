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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      serial = _useState[0],
      setSerial = _useState[1];

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
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, serial), __jsx("a", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, title)), setSerial(serial + 1), __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.excerpt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, children), __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.tagContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, tags.map(function (tag) {
    return __jsx(_tag__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, tag);
  })), !isAuthenticated() && !isAdmin() ? __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.userDetails,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 45
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/users/[user]",
    as: "/users/".concat(author.username),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "https://secure.gravatar.com/avatar/".concat(author.id, "?s=32&d=identicon"),
    alt: author.username,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.info,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, author.username)))) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 27
    }
  })));
};

_s(QuestionSummary, "p9uYdzwlGhduNbiniczGqyPy9Oo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLXN1bW1hcnkvaW5kZXguanMiXSwibmFtZXMiOlsiUXVlc3Rpb25TdW1tYXJ5IiwiaWQiLCJ0aXRsZSIsInRhZ3MiLCJhdXRob3IiLCJjcmVhdGVkVGltZSIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJzZXJpYWwiLCJzZXRTZXJpYWwiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJpc0FkbWluIiwic3R5bGVzIiwiY29udGFpbmVyIiwic2x1ZyIsImxpbmsiLCJleGNlcnB0IiwiZm9vdGVyIiwidGFnQ29udGFpbmVyIiwibWFwIiwidGFnIiwidXNlckRldGFpbHMiLCJ1c2VybmFtZSIsImluZm8iLCJmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IiwiRGF0ZSIsImFkZFN1ZmZpeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQU9sQjtBQUFBOztBQUFBLE1BTkpDLEVBTUksUUFOSkEsRUFNSTtBQUFBLE1BTEpDLEtBS0ksUUFMSkEsS0FLSTtBQUFBLE1BSkpDLElBSUksUUFKSkEsSUFJSTtBQUFBLE1BSEpDLE1BR0ksUUFISkEsTUFHSTtBQUFBLE1BRkpDLFdBRUksUUFGSkEsV0FFSTtBQUFBLE1BREpDLFFBQ0ksUUFESkEsUUFDSTs7QUFBQSxrQkFDcUJDLHNEQUFRLENBQUMsQ0FBRCxDQUQ3QjtBQUFBLE1BQ0dDLE1BREg7QUFBQSxNQUNVQyxTQURWOztBQUFBLG9CQUVnQ0Msd0RBQVUsQ0FBQ0MsdURBQUQsQ0FGMUM7QUFBQSxNQUVJQyxlQUZKLGVBRUlBLGVBRko7QUFBQSxNQUVxQkMsT0FGckIsZUFFcUJBLE9BRnJCOztBQUdKLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLG1FQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLG1CQUFYO0FBQStCLE1BQUUsdUJBQWdCZCxFQUFoQixjQUFzQmUsMkNBQUksQ0FBQ2QsS0FBRCxDQUExQixDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTSxNQUFMLENBREEsRUFFRTtBQUFHLGFBQVMsRUFBRU0sbUVBQU0sQ0FBQ0csSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QmYsS0FBNUIsQ0FGRixDQURGLEVBS0dPLFNBQVMsQ0FBQ0QsTUFBTSxHQUFDLENBQVIsQ0FMWixFQU1FO0FBQUssYUFBUyxFQUFFTSxtRUFBTSxDQUFDSSxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDWixRQUFqQyxDQU5GLEVBT0U7QUFBSyxhQUFTLEVBQUVRLG1FQUFNLENBQUNLLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUwsbUVBQU0sQ0FBQ00sWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHakIsSUFBSSxDQUFDa0IsR0FBTCxDQUFTLFVBQUNDLEdBQUQ7QUFBQSxXQUNSLE1BQUMsNENBQUQ7QUFBSyxTQUFHLEVBQUVBLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQkEsR0FBaEIsQ0FEUTtBQUFBLEdBQVQsQ0FESCxDQURGLEVBTUcsQ0FBQ1YsZUFBZSxFQUFoQixJQUFzQixDQUFDQyxPQUFPLEVBQTlCLEdBQW1DO0FBQUssYUFBUyxFQUFFQyxtRUFBTSxDQUFDUyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ2xDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUEyQixNQUFFLG1CQUFZbkIsTUFBTSxDQUFDb0IsUUFBbkIsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsK0NBQXdDcEIsTUFBTSxDQUFDSCxFQUEvQyxzQkFETDtBQUVFLE9BQUcsRUFBRUcsTUFBTSxDQUFDb0IsUUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURrQyxFQVNsQztBQUFLLGFBQVMsRUFBRVYsbUVBQU0sQ0FBQ1csSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDUSxHQURSLEVBRUdDLGtGQUF5QixDQUFDLElBQUlDLElBQUosQ0FBU3RCLFdBQVQsQ0FBRCxFQUF3QjtBQUNoRHVCLGFBQVMsRUFBRTtBQURxQyxHQUF4QixDQUY1QixDQURGLEVBT0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxlQUFYO0FBQTJCLE1BQUUsbUJBQVl4QixNQUFNLENBQUNvQixRQUFuQixDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJcEIsTUFBTSxDQUFDb0IsUUFBWCxDQURGLENBUEYsQ0FUa0MsQ0FBbkMsR0FtQmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6QnBCLENBUEYsQ0FERjtBQXNDRCxDQWhERDs7R0FBTXhCLGU7O0tBQUFBLGU7QUFrRFNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxRdWVzdGlvbi5qcy4xMTc4MTI3OTEwNmJmM2Y0NzUyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VDb250ZXh0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QnXG5pbXBvcnQgc2x1ZyBmcm9tICdzbHVnJ1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hdXRoJ1xuXG5pbXBvcnQgVGFnIGZyb20gJy4uLy4uL3RhZydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3F1ZXN0aW9uLXN1bW1hcnkubW9kdWxlLmNzcydcbmNvbnN0IFF1ZXN0aW9uU3VtbWFyeSA9ICh7XG4gIGlkLFxuICB0aXRsZSxcbiAgdGFncyxcbiAgYXV0aG9yLFxuICBjcmVhdGVkVGltZSxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3QgW3NlcmlhbCxzZXRTZXJpYWxdPXVzZVN0YXRlKDEpO1xuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCAsaXNBZG1pbn0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8TGluayBocmVmPVwiL3F1ZXN0aW9ucy9bc2x1Z11cIiBhcz17YC9xdWVzdGlvbnMvJHtpZH0tJHtzbHVnKHRpdGxlKX1gfT5cbiAgICAgIDxoMT57c2VyaWFsfTwvaDE+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9Pnt0aXRsZX08L2E+XG4gICAgICA8L0xpbms+XG4gICAgICB7c2V0U2VyaWFsKHNlcmlhbCsxKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhjZXJwdH0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ0NvbnRhaW5lcn0+XG4gICAgICAgICAge3RhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgIDxUYWcga2V5PXt0YWd9Pnt0YWd9PC9UYWc+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgIHsgIWlzQXV0aGVudGljYXRlZCgpICYmICFpc0FkbWluKCkgPyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJEZXRhaWxzfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzL1t1c2VyXVwiIGFzPXtgL3VzZXJzLyR7YXV0aG9yLnVzZXJuYW1lfWB9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3NlY3VyZS5ncmF2YXRhci5jb20vYXZhdGFyLyR7YXV0aG9yLmlkfT9zPTMyJmQ9aWRlbnRpY29uYH1cbiAgICAgICAgICAgICAgICBhbHQ9e2F1dGhvci51c2VybmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBhc2tlZHsnICd9XG4gICAgICAgICAgICAgIHtmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KG5ldyBEYXRlKGNyZWF0ZWRUaW1lKSwge1xuICAgICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnMvW3VzZXJdXCIgYXM9e2AvdXNlcnMvJHthdXRob3IudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgIDxhPnthdXRob3IudXNlcm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PjwvZGl2PiA6ICg8ZGl2PjwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uU3VtbWFyeVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
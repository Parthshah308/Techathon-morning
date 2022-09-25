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








var QuestionSummary = function QuestionSummary(_ref) {
  _s();

  var id = _ref.id,
      title = _ref.title,
      tags = _ref.tags,
      author = _ref.author,
      createdTime = _ref.createdTime,
      children = _ref.children;

  var _useContext = useContext(_store_auth__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
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
  }))), isAuthenticated() && isAdmin() ? __jsx("div", {
    className: _question_summary_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.info,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 45
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
  }, author.username))) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLXN1bW1hcnkvaW5kZXguanMiXSwibmFtZXMiOlsiUXVlc3Rpb25TdW1tYXJ5IiwiaWQiLCJ0aXRsZSIsInRhZ3MiLCJhdXRob3IiLCJjcmVhdGVkVGltZSIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiaXNBdXRoZW50aWNhdGVkIiwiaXNBZG1pbiIsInN0eWxlcyIsImNvbnRhaW5lciIsInNsdWciLCJsaW5rIiwiZXhjZXJwdCIsImZvb3RlciIsInRhZ0NvbnRhaW5lciIsIm1hcCIsInRhZyIsInVzZXJEZXRhaWxzIiwidXNlcm5hbWUiLCJpbmZvIiwiZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCIsIkRhdGUiLCJhZGRTdWZmaXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FPbEI7QUFBQTs7QUFBQSxNQU5KQyxFQU1JLFFBTkpBLEVBTUk7QUFBQSxNQUxKQyxLQUtJLFFBTEpBLEtBS0k7QUFBQSxNQUpKQyxJQUlJLFFBSkpBLElBSUk7QUFBQSxNQUhKQyxNQUdJLFFBSEpBLE1BR0k7QUFBQSxNQUZKQyxXQUVJLFFBRkpBLFdBRUk7QUFBQSxNQURKQyxRQUNJLFFBREpBLFFBQ0k7O0FBQUEsb0JBQ2dDQyxVQUFVLENBQUNDLHVEQUFELENBRDFDO0FBQUEsTUFDSUMsZUFESixlQUNJQSxlQURKO0FBQUEsTUFDcUJDLE9BRHJCLGVBQ3FCQSxPQURyQjs7QUFFSixTQUNFO0FBQUssYUFBUyxFQUFFQyxtRUFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxtQkFBWDtBQUErQixNQUFFLHVCQUFnQlgsRUFBaEIsY0FBc0JZLDJDQUFJLENBQUNYLEtBQUQsQ0FBMUIsQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFUyxtRUFBTSxDQUFDRyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCWixLQUE1QixDQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBRVMsbUVBQU0sQ0FBQ0ksT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQ1QsUUFBakMsQ0FKRixFQUtFO0FBQUssYUFBUyxFQUFFSyxtRUFBTSxDQUFDSyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVMLG1FQUFNLENBQUNNLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2QsSUFBSSxDQUFDZSxHQUFMLENBQVMsVUFBQ0MsR0FBRDtBQUFBLFdBQ1IsTUFBQyw0Q0FBRDtBQUFLLFNBQUcsRUFBRUEsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdCQSxHQUFoQixDQURRO0FBQUEsR0FBVCxDQURILENBREYsRUFNRTtBQUFLLGFBQVMsRUFBRVIsbUVBQU0sQ0FBQ1MsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUEyQixNQUFFLG1CQUFZaEIsTUFBTSxDQUFDaUIsUUFBbkIsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsK0NBQXdDakIsTUFBTSxDQUFDSCxFQUEvQyxzQkFETDtBQUVFLE9BQUcsRUFBRUcsTUFBTSxDQUFDaUIsUUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBU0daLGVBQWUsTUFBTUMsT0FBTyxFQUE1QixHQUFpQztBQUFLLGFBQVMsRUFBRUMsbUVBQU0sQ0FBQ1csSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ1EsR0FEUixFQUVHQyxrRkFBeUIsQ0FBQyxJQUFJQyxJQUFKLENBQVNuQixXQUFULENBQUQsRUFBd0I7QUFDaERvQixhQUFTLEVBQUU7QUFEcUMsR0FBeEIsQ0FGNUIsQ0FEZ0MsRUFPaEMsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxlQUFYO0FBQTJCLE1BQUUsbUJBQVlyQixNQUFNLENBQUNpQixRQUFuQixDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJakIsTUFBTSxDQUFDaUIsUUFBWCxDQURGLENBUGdDLENBQWpDLEdBVVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CWixDQU5GLENBTEYsQ0FERjtBQW9DRCxDQTdDRDs7R0FBTXJCLGU7O0tBQUFBLGU7QUErQ1NBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jYjJhOGEzNWNjN2MxOWY2MjljZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCdcbmltcG9ydCBzbHVnIGZyb20gJ3NsdWcnXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2F1dGgnXG5cbmltcG9ydCBUYWcgZnJvbSAnLi4vLi4vdGFnJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcXVlc3Rpb24tc3VtbWFyeS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBRdWVzdGlvblN1bW1hcnkgPSAoe1xuICBpZCxcbiAgdGl0bGUsXG4gIHRhZ3MsXG4gIGF1dGhvcixcbiAgY3JlYXRlZFRpbWUsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkICxpc0FkbWlufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcXVlc3Rpb25zL1tzbHVnXVwiIGFzPXtgL3F1ZXN0aW9ucy8ke2lkfS0ke3NsdWcodGl0bGUpfWB9PlxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT57dGl0bGV9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGNlcnB0fT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnQ29udGFpbmVyfT5cbiAgICAgICAgICB7dGFncy5tYXAoKHRhZykgPT4gKFxuICAgICAgICAgICAgPFRhZyBrZXk9e3RhZ30+e3RhZ308L1RhZz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckRldGFpbHN9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnMvW3VzZXJdXCIgYXM9e2AvdXNlcnMvJHthdXRob3IudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vc2VjdXJlLmdyYXZhdGFyLmNvbS9hdmF0YXIvJHthdXRob3IuaWR9P3M9MzImZD1pZGVudGljb25gfVxuICAgICAgICAgICAgICAgIGFsdD17YXV0aG9yLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgIHsgaXNBdXRoZW50aWNhdGVkKCkgJiYgaXNBZG1pbigpID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBhc2tlZHsnICd9XG4gICAgICAgICAgICAgIHtmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KG5ldyBEYXRlKGNyZWF0ZWRUaW1lKSwge1xuICAgICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnMvW3VzZXJdXCIgYXM9e2AvdXNlcnMvJHthdXRob3IudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgIDxhPnthdXRob3IudXNlcm5hbWV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PiA6ICg8ZGl2PjwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25TdW1tYXJ5XG4iXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate("static\\development\\pages\\questions\\[slug].js",{

/***/ "./components/post/post-summary/index.js":
/*!***********************************************!*\
  !*** ./components/post/post-summary/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/formatDistanceToNowStrict */ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _store_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/fetch */ "./store/fetch.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tag */ "./components/tag/index.js");
/* harmony import */ var _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post-summary.module.css */ "./components/post/post-summary/post-summary.module.css");
/* harmony import */ var _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_post_summary_module_css__WEBPACK_IMPORTED_MODULE_9__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\HP\\OneDrive\\Documents\\vercel1\\vercel1\\components\\post\\post-summary\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var PostSummary = function PostSummary(_ref) {
  _s();

  var _authState$userInfo;

  var tags = _ref.tags,
      author = _ref.author,
      created = _ref.created,
      questionId = _ref.questionId,
      answerId = _ref.answerId,
      setQuestion = _ref.setQuestion,
      children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_6__["AuthContext"]),
      authState = _useContext.authState,
      isAdmin = _useContext.isAdmin;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_fetch__WEBPACK_IMPORTED_MODULE_7__["FetchContext"]),
      authAxios = _useContext2.authAxios;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var handleDeleteComment = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, _yield$authAxios$dele, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              res = window.confirm('Are you sure delete your post?');

              if (!res) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return authAxios["delete"](answerId ? "/answer/".concat(questionId, "/").concat(answerId) : "/question/".concat(questionId));

            case 4:
              _yield$authAxios$dele = _context.sent;
              data = _yield$authAxios$dele.data;

              if (answerId) {
                setQuestion(data);
              } else {
                router.push('/');
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDeleteComment() {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.postCell,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, children), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.tagContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, tags === null || tags === void 0 ? void 0 : tags.map(function (tag) {
    return __jsx(_tag__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, tag);
  })), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userDetails,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/users/[user]",
    as: "/users/".concat(author.username),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "https://secure.gravatar.com/avatar/".concat(author.id, "?s=32&d=identicon"),
    alt: author.username,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.info,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, tags ? 'asked' : 'answered', ' ', Object(date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(created), {
    addSuffix: true
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/users/[user]",
    as: "/users/".concat(author.username),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, author.username))))), (((_authState$userInfo = authState.userInfo) === null || _authState$userInfo === void 0 ? void 0 : _authState$userInfo.id) === author.id || isAdmin()) && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["delete"],
    onClick: function onClick() {
      return handleDeleteComment();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "delete")), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["delete"],
    onClick: function onClick() {
      return handleDeleteComment();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "Approve")))));
};

_s(PostSummary, "V+NKd/DT4vZpHfXvcrpxNFTLEUo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = PostSummary;
/* harmony default export */ __webpack_exports__["default"] = (PostSummary);

var _c;

$RefreshReg$(_c, "PostSummary");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvcG9zdC1zdW1tYXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3RTdW1tYXJ5IiwidGFncyIsImF1dGhvciIsImNyZWF0ZWQiLCJxdWVzdGlvbklkIiwiYW5zd2VySWQiLCJzZXRRdWVzdGlvbiIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiYXV0aFN0YXRlIiwiaXNBZG1pbiIsIkZldGNoQ29udGV4dCIsImF1dGhBeGlvcyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZURlbGV0ZUNvbW1lbnQiLCJyZXMiLCJ3aW5kb3ciLCJjb25maXJtIiwiZGF0YSIsInB1c2giLCJzdHlsZXMiLCJwb3N0Q2VsbCIsInRleHQiLCJmb290ZXIiLCJyb3ciLCJ0YWdDb250YWluZXIiLCJtYXAiLCJ0YWciLCJ1c2VyRGV0YWlscyIsInVzZXJuYW1lIiwiaWQiLCJpbmZvIiwiZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCIsIkRhdGUiLCJhZGRTdWZmaXgiLCJ1c2VySW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FRZDtBQUFBOztBQUFBOztBQUFBLE1BUEpDLElBT0ksUUFQSkEsSUFPSTtBQUFBLE1BTkpDLE1BTUksUUFOSkEsTUFNSTtBQUFBLE1BTEpDLE9BS0ksUUFMSkEsT0FLSTtBQUFBLE1BSkpDLFVBSUksUUFKSkEsVUFJSTtBQUFBLE1BSEpDLFFBR0ksUUFISkEsUUFHSTtBQUFBLE1BRkpDLFdBRUksUUFGSkEsV0FFSTtBQUFBLE1BREpDLFFBQ0ksUUFESkEsUUFDSTs7QUFBQSxvQkFDMkJDLHdEQUFVLENBQUNDLHVEQUFELENBRHJDO0FBQUEsTUFDSUMsU0FESixlQUNJQSxTQURKO0FBQUEsTUFDZUMs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QUEyQixNQUFFLG1CQUFZbEMsTUFBTSxDQUFDNkIsUUFBbkIsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTdCLE1BQU0sQ0FBQzZCLFFBQVgsQ0FERixDQVBGLENBVEYsQ0FORixDQURGLEVBNkJHLENBQUMsd0JBQUFyQixTQUFTLENBQUMyQixRQUFWLDRFQUFvQkwsRUFBcEIsTUFBMkI5QixNQUFNLENBQUM4QixFQUFsQyxJQUF3Q3JCLE9BQU8sRUFBaEQsS0FBd0QsbUVBQ3ZEO0FBQUssYUFBUyxFQUFFVywrREFBTSxDQUFDSSxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVKLCtEQUFNLFVBQXBCO0FBQTZCLFdBQU8sRUFBRTtBQUFBLGFBQU1OLG1CQUFtQixFQUF6QjtBQUFBLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQUR1RCxFQU12RDtBQUFLLGFBQVMsRUFBRU0sK0RBQU0sQ0FBQ0ksR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUcsYUFBUyxFQUFFSiwrREFBTSxVQUFwQjtBQUE2QixXQUFPLEVBQUU7QUFBQSxhQUFNTixtQkFBbUIsRUFBekI7QUFBQSxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsQ0FOdUQsQ0E3QjNELENBRkYsQ0FERjtBQWdERCxDQTlFRDs7R0FBTWhCLFc7VUFXV2UscUQ7OztLQVhYZixXO0FBZ0ZTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccXVlc3Rpb25zXFxbc2x1Z10uanMuYjM3NzcyYzdmM2RlNmJlNTYyNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QnXG5cbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYXV0aCdcbmltcG9ydCB7IEZldGNoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2ZldGNoJ1xuXG5pbXBvcnQgVGFnIGZyb20gJy4uLy4uL3RhZydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Bvc3Qtc3VtbWFyeS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBQb3N0U3VtbWFyeSA9ICh7XG4gIHRhZ3MsXG4gIGF1dGhvcixcbiAgY3JlYXRlZCxcbiAgcXVlc3Rpb25JZCxcbiAgYW5zd2VySWQsXG4gIHNldFF1ZXN0aW9uLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCB7IGF1dGhTdGF0ZSwgaXNBZG1pbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgY29uc3QgeyBhdXRoQXhpb3MgfSA9IHVzZUNvbnRleHQoRmV0Y2hDb250ZXh0KVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNvbW1lbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSBkZWxldGUgeW91ciBwb3N0PycpXG4gICAgaWYgKHJlcykge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhdXRoQXhpb3MuZGVsZXRlKFxuICAgICAgICBhbnN3ZXJJZFxuICAgICAgICAgID8gYC9hbnN3ZXIvJHtxdWVzdGlvbklkfS8ke2Fuc3dlcklkfWBcbiAgICAgICAgICA6IGAvcXVlc3Rpb24vJHtxdWVzdGlvbklkfWBcbiAgICAgIClcblxuICAgICAgaWYgKGFuc3dlcklkKSB7XG4gICAgICAgIHNldFF1ZXN0aW9uKGRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RDZWxsfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdDb250YWluZXJ9PlxuICAgICAgICAgICAge3RhZ3M/Lm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgIDxUYWcga2V5PXt0YWd9Pnt0YWd9PC9UYWc+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJEZXRhaWxzfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnMvW3VzZXJdXCIgYXM9e2AvdXNlcnMvJHthdXRob3IudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vc2VjdXJlLmdyYXZhdGFyLmNvbS9hdmF0YXIvJHthdXRob3IuaWR9P3M9MzImZD1pZGVudGljb25gfVxuICAgICAgICAgICAgICAgICAgYWx0PXthdXRob3IudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3RhZ3MgPyAnYXNrZWQnIDogJ2Fuc3dlcmVkJ317JyAnfVxuICAgICAgICAgICAgICAgIHtmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KG5ldyBEYXRlKGNyZWF0ZWQpLCB7XG4gICAgICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWVcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzL1t1c2VyXVwiIGFzPXtgL3VzZXJzLyR7YXV0aG9yLnVzZXJuYW1lfWB9PlxuICAgICAgICAgICAgICAgIDxhPnthdXRob3IudXNlcm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsoYXV0aFN0YXRlLnVzZXJJbmZvPy5pZCA9PT0gYXV0aG9yLmlkIHx8IGlzQWRtaW4oKSkgJiYgKDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVDb21tZW50KCl9PlxuICAgICAgICAgICAgICBkZWxldGVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVDb21tZW50KCl9PlxuICAgICAgICAgICAgQXBwcm92ZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFN1bW1hcnlcbiJdLCJzb3VyY2VSb290IjoiIn0=
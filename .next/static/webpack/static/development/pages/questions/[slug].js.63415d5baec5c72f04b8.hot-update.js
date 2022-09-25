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

  var handleApprove = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var res, _yield$authAxios$put, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              res = window.confirm('Are you sure delete your post?');

              if (!res) {
                _context2.next = 7;
                break;
              }

              _context2.next = 4;
              return authAxios.put(answerId ? "/answer/".concat(questionId, "/").concat(answerId) : "/question/approve/".concat(questionId));

            case 4:
              _yield$authAxios$put = _context2.sent;
              data = _yield$authAxios$put.data;

              if (answerId) {
                setQuestion(data);
              } else {
                router.push('/');
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleApprove() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleReject = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var res, _yield$authAxios$put2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              res = window.confirm('Are you sure reject this question?');

              if (!res) {
                _context3.next = 7;
                break;
              }

              _context3.next = 4;
              return authAxios.put(answerId ? "/answer/".concat(questionId, "/").concat(answerId) : "/question/reject/".concat(questionId));

            case 4:
              _yield$authAxios$put2 = _context3.sent;
              data = _yield$authAxios$put2.data;

              if (answerId) {
                setQuestion(data);
              } else {
                router.push('/');
              }

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleReject() {
      return _ref4.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.postCell,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, children), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.tagContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, tags === null || tags === void 0 ? void 0 : tags.map(function (tag) {
    return __jsx(_tag__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }
    }, tag);
  })), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userDetails,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/users/[user]",
    as: "/users/".concat(author.username),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "https://secure.gravatar.com/avatar/".concat(author.id, "?s=32&d=identicon"),
    alt: author.username,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.info,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, author.username))))), (((_authState$userInfo = authState.userInfo) === null || _authState$userInfo === void 0 ? void 0 : _authState$userInfo.id) === author.id || isAdmin()) && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 13
    }
  }, "delete")), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["delete"],
    onClick: function onClick() {
      return handleApprove();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvcG9zdC1zdW1tYXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3RTdW1tYXJ5IiwidGFncyIsImF1dGhvciIsImNyZWF0ZWQiLCJxdWVzdGlvbklkIiwiYW5zd2VySWQiLCJzZXRRdWVzdGlvbiIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiYXV0aFN0YXRlIiwiaXNBZG1pbiIsIkZldGNoQ29udGV4dCIsImF1dGhBeGlvcyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZURlbGV0ZUNvbW1lbnQiLCJyZXMiLCJ3aW5kb3ciLCJjb25maXJtIiwiZGF0YSIsInB1c2giLCJoYW5kbGVBcHByb3ZlIiwicHV0IiwiaGFuZGxlUmVqZWN0Iiwic3R5bGVzIiwicG9zdENlbGwiLCJ0ZXh0IiwiZm9vdGVyIiwicm93IiwidGFnQ29udGFpbmVyIiwibWFwIiwidGFnIiwidXNlckRldGFpbHMiLCJ1c2VybmFtZSIsImlkIiwiaW5mbyIsImZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QiLCJEYXRlIiwiYWRkU3VmZml4IiwidXNlckluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BUWQ7QUFBQTs7QUFBQTs7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxNQU1JLFFBTkpBLE1BTUk7QUFBQSxNQUxKQyxPQUtJLFFBTEpBLE9BS0k7QUFBQSxNQUpKQyxVQUlJLFFBSkpBLFVBSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxXQUVJLFFBRkpBLFdBRUk7QUFBQSxNQURKQyxRQUNJLFFBREpBLFFBQ0k7O0FBQUEsb0JBQzJCQyx3REFBVSxDQUFDQyx1REFBRCxDQURyQztB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QXBCLENBRjVCLENBREYsRUFPRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBMkIsTUFBRSxtQkFBWXJDLE1BQU0sQ0FBQ2dDLFFBQW5CLENBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUloQyxNQUFNLENBQUNnQyxRQUFYLENBREYsQ0FQRixDQVRGLENBTkYsQ0FERixFQTZCRyxDQUFDLHdCQUFBeEIsU0FBUyxDQUFDOEIsUUFBViw0RUFBb0JMLEVBQXBCLE1BQTJCakMsTUFBTSxDQUFDaUMsRUFBbEMsSUFBd0N4QixPQUFPLEVBQWhELEtBQXdELG1FQUN2RDtBQUFLLGFBQVMsRUFBRWMsK0RBQU0sQ0FBQ0ksR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFSiwrREFBTSxVQUFwQjtBQUE2QixXQUFPLEVBQUU7QUFBQSxhQUFNVCxtQkFBbUIsRUFBekI7QUFBQSxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FEdUQsRUFNdkQ7QUFBSyxhQUFTLEVBQUVTLCtEQUFNLENBQUNJLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFHLGFBQVMsRUFBRUosK0RBQU0sVUFBcEI7QUFBNkIsV0FBTyxFQUFFO0FBQUEsYUFBTUgsYUFBYSxFQUFuQjtBQUFBLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxDQU51RCxDQTdCM0QsQ0FGRixDQURGO0FBZ0RELENBOUdEOztHQUFNdEIsVztVQVdXZSxxRDs7O0tBWFhmLFc7QUFnSFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxxdWVzdGlvbnNcXFtzbHVnXS5qcy42MzQxNWQ1YmFlYzVjNzJmMDRiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCdcblxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hdXRoJ1xuaW1wb3J0IHsgRmV0Y2hDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvZmV0Y2gnXG5cbmltcG9ydCBUYWcgZnJvbSAnLi4vLi4vdGFnJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9zdC1zdW1tYXJ5Lm1vZHVsZS5jc3MnXG5cbmNvbnN0IFBvc3RTdW1tYXJ5ID0gKHtcbiAgdGFncyxcbiAgYXV0aG9yLFxuICBjcmVhdGVkLFxuICBxdWVzdGlvbklkLFxuICBhbnN3ZXJJZCxcbiAgc2V0UXVlc3Rpb24sXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHsgYXV0aFN0YXRlLCBpc0FkbWluIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxuICBjb25zdCB7IGF1dGhBeGlvcyB9ID0gdXNlQ29udGV4dChGZXRjaENvbnRleHQpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQ29tbWVudCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIGRlbGV0ZSB5b3VyIHBvc3Q/JylcbiAgICBpZiAocmVzKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF1dGhBeGlvcy5kZWxldGUoXG4gICAgICAgIGFuc3dlcklkXG4gICAgICAgICAgPyBgL2Fuc3dlci8ke3F1ZXN0aW9uSWR9LyR7YW5zd2VySWR9YFxuICAgICAgICAgIDogYC9xdWVzdGlvbi8ke3F1ZXN0aW9uSWR9YFxuICAgICAgKVxuXG4gICAgICBpZiAoYW5zd2VySWQpIHtcbiAgICAgICAgc2V0UXVlc3Rpb24oZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgaGFuZGxlQXBwcm92ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIGRlbGV0ZSB5b3VyIHBvc3Q/JylcbiAgICBpZiAocmVzKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF1dGhBeGlvcy5wdXQoXG4gICAgICAgIGFuc3dlcklkXG4gICAgICAgICAgPyBgL2Fuc3dlci8ke3F1ZXN0aW9uSWR9LyR7YW5zd2VySWR9YFxuICAgICAgICAgIDogYC9xdWVzdGlvbi9hcHByb3ZlLyR7cXVlc3Rpb25JZH1gXG4gICAgICApXG5cbiAgICAgIGlmIChhbnN3ZXJJZCkge1xuICAgICAgICBzZXRRdWVzdGlvbihkYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBoYW5kbGVSZWplY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSByZWplY3QgdGhpcyBxdWVzdGlvbj8nKVxuICAgIGlmIChyZXMpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXV0aEF4aW9zLnB1dChcbiAgICAgICAgYW5zd2VySWRcbiAgICAgICAgICA/IGAvYW5zd2VyLyR7cXVlc3Rpb25JZH0vJHthbnN3ZXJJZH1gXG4gICAgICAgICAgOiBgL3F1ZXN0aW9uL3JlamVjdC8ke3F1ZXN0aW9uSWR9YFxuICAgICAgKVxuXG4gICAgICBpZiAoYW5zd2VySWQpIHtcbiAgICAgICAgc2V0UXVlc3Rpb24oZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdENlbGx9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICB7dGFncz8ubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgPFRhZyBrZXk9e3RhZ30+e3RhZ308L1RhZz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckRldGFpbHN9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vycy9bdXNlcl1cIiBhcz17YC91c2Vycy8ke2F1dGhvci51c2VybmFtZX1gfT5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9zZWN1cmUuZ3JhdmF0YXIuY29tL2F2YXRhci8ke2F1dGhvci5pZH0/cz0zMiZkPWlkZW50aWNvbmB9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2F1dGhvci51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7dGFncyA/ICdhc2tlZCcgOiAnYW5zd2VyZWQnfXsnICd9XG4gICAgICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QobmV3IERhdGUoY3JlYXRlZCksIHtcbiAgICAgICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnMvW3VzZXJdXCIgYXM9e2AvdXNlcnMvJHthdXRob3IudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgICAgPGE+e2F1dGhvci51c2VybmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyhhdXRoU3RhdGUudXNlckluZm8/LmlkID09PSBhdXRob3IuaWQgfHwgaXNBZG1pbigpKSAmJiAoPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZUNvbW1lbnQoKX0+XG4gICAgICAgICAgICAgIGRlbGV0ZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUFwcHJvdmUoKX0+XG4gICAgICAgICAgICBBcHByb3ZlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0U3VtbWFyeVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
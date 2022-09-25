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
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");



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
              res = window.confirm('Are you sure approve this question?');

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
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, children), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.tagContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, tags === null || tags === void 0 ? void 0 : tags.map(function (tag) {
    return __jsx(_tag__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    }, tag);
  })), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.userDetails,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/users/[user]",
    as: "/users/".concat(author.username),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "https://secure.gravatar.com/avatar/".concat(author.id, "?s=32&d=identicon"),
    alt: author.username,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.info,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 102,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, author.username))))), ((_authState$userInfo = authState.userInfo) === null || _authState$userInfo === void 0 ? void 0 : _authState$userInfo.id) === author.id && isAdmin() && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    clButtonssName: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["delete"],
    onClick: function onClick() {
      return handleApprove();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "Approve")), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["delete"],
    onClick: function onClick() {
      return handleDeleteComment();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "Delete")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvcG9zdC1zdW1tYXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3RTdW1tYXJ5IiwidGFncyIsImF1dGhvciIsImNyZWF0ZWQiLCJxdWVzdGlvbklkIiwiYW5zd2VySWQiLCJzZXRRdWVzdGlvbiIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiYXV0aFN0YXRlIiwiaXNBZG1pbiIsIkZldGNoQ29udGV4dCIsImF1dGhBeGlvcyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZURlbGV0ZUNvbW1lbnQiLCJyZXMiLCJ3aW5kb3ciLCJjb25maXJtIiwiZGF0YSIsInB1c2giLCJoYW5kbGVBcHByb3ZlIiwicHV0IiwiaGFuZGxlUmVqZWN0Iiwic3R5bGVzIiwicG9zdENlbGwiLCJ0ZXh0IiwiZm9vdGVyIiwicm93IiwidGFnQ29udGFpbmVyIiwibWFwIiwidGFnIiwidXNlckRldGFpbHMiLCJ1c2VybmFtZSIsImlkIiwiaW5mbyIsImZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QiLCJEYXRlIiwiYWRkU3VmZml4IiwidXNlckluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BUWQ7QUFBQTs7QUFBQTs7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxNQU1JLFFBTkpBLE1BTUk7QUFBQSxNQUxKQyxPQUtJLFFBTEpBLE9BS0k7QUFBQSxNQUpKQyxVQUlJLFFBSkpBLFVBSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxXQUVJLFFBRkpBLFdBRUk7QUFBQSxNQURKQyxRQUNJLFFBREpBLFFBQ0k7O0FBQUEsb0JBQzJCQyx3REFBVSxDQUFDQyx1REFBRCxD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RGlDLEdBQXBCLENBRjVCLENBREYsRUFPRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBMkIsTUFBRSxtQkFBWXJDLE1BQU0sQ0FBQ2dDLFFBQW5CLENBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUloQyxNQUFNLENBQUNnQyxRQUFYLENBREYsQ0FQRixDQVRGLENBTkYsQ0FERixFQTZCSSx3QkFBQXhCLFNBQVMsQ0FBQzhCLFFBQVYsNEVBQW9CTCxFQUFwQixNQUEyQmpDLE1BQU0sQ0FBQ2lDLEVBQWxDLElBQXdDeEIsT0FBTyxFQUFoRCxJQUF3RCxtRUFDdkQ7QUFBSyxhQUFTLEVBQUVjLCtEQUFNLENBQUNJLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVEsa0JBQWMsRUFBRUosK0RBQU0sVUFBOUI7QUFBdUMsV0FBTyxFQUFFO0FBQUEsYUFBTUgsYUFBYSxFQUFuQjtBQUFBLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQUR1RCxFQU12RDtBQUFLLGFBQVMsRUFBRUcsK0RBQU0sQ0FBQ0ksR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsZ0RBQUQ7QUFBUSxhQUFTLEVBQUVKLCtEQUFNLFVBQXpCO0FBQWtDLFdBQU8sRUFBRTtBQUFBLGFBQU1ULG1CQUFtQixFQUF6QjtBQUFBLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxDQU51RCxDQTdCM0QsQ0FGRixDQURGO0FBZ0RELENBOUdEOztHQUFNaEIsVztVQVdXZSxxRDs7O0tBWFhmLFc7QUFnSFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxxdWVzdGlvbnNcXFtzbHVnXS5qcy5kZDQyOTcwNWMwM2VlMjhmMDkyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCdcblxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hdXRoJ1xuaW1wb3J0IHsgRmV0Y2hDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvZmV0Y2gnXG5cbmltcG9ydCBUYWcgZnJvbSAnLi4vLi4vdGFnJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9zdC1zdW1tYXJ5Lm1vZHVsZS5jc3MnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2J1dHRvbidcblxuY29uc3QgUG9zdFN1bW1hcnkgPSAoe1xuICB0YWdzLFxuICBhdXRob3IsXG4gIGNyZWF0ZWQsXG4gIHF1ZXN0aW9uSWQsXG4gIGFuc3dlcklkLFxuICBzZXRRdWVzdGlvbixcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3QgeyBhdXRoU3RhdGUsIGlzQWRtaW4gfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG4gIGNvbnN0IHsgYXV0aEF4aW9zIH0gPSB1c2VDb250ZXh0KEZldGNoQ29udGV4dClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBoYW5kbGVEZWxldGVDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgZGVsZXRlIHlvdXIgcG9zdD8nKVxuICAgIGlmIChyZXMpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXV0aEF4aW9zLmRlbGV0ZShcbiAgICAgICAgYW5zd2VySWRcbiAgICAgICAgICA/IGAvYW5zd2VyLyR7cXVlc3Rpb25JZH0vJHthbnN3ZXJJZH1gXG4gICAgICAgICAgOiBgL3F1ZXN0aW9uLyR7cXVlc3Rpb25JZH1gXG4gICAgICApXG5cbiAgICAgIGlmIChhbnN3ZXJJZCkge1xuICAgICAgICBzZXRRdWVzdGlvbihkYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBoYW5kbGVBcHByb3ZlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgYXBwcm92ZSB0aGlzIHF1ZXN0aW9uPycpXG4gICAgaWYgKHJlcykge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhdXRoQXhpb3MucHV0KFxuICAgICAgICBhbnN3ZXJJZFxuICAgICAgICAgID8gYC9hbnN3ZXIvJHtxdWVzdGlvbklkfS8ke2Fuc3dlcklkfWBcbiAgICAgICAgICA6IGAvcXVlc3Rpb24vYXBwcm92ZS8ke3F1ZXN0aW9uSWR9YFxuICAgICAgKVxuXG4gICAgICBpZiAoYW5zd2VySWQpIHtcbiAgICAgICAgc2V0UXVlc3Rpb24oZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgaGFuZGxlUmVqZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgcmVqZWN0IHRoaXMgcXVlc3Rpb24/JylcbiAgICBpZiAocmVzKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF1dGhBeGlvcy5wdXQoXG4gICAgICAgIGFuc3dlcklkXG4gICAgICAgICAgPyBgL2Fuc3dlci8ke3F1ZXN0aW9uSWR9LyR7YW5zd2VySWR9YFxuICAgICAgICAgIDogYC9xdWVzdGlvbi9yZWplY3QvJHtxdWVzdGlvbklkfWBcbiAgICAgIClcblxuICAgICAgaWYgKGFuc3dlcklkKSB7XG4gICAgICAgIHNldFF1ZXN0aW9uKGRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RDZWxsfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdDb250YWluZXJ9PlxuICAgICAgICAgICAge3RhZ3M/Lm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgIDxUYWcga2V5PXt0YWd9Pnt0YWd9PC9UYWc+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJEZXRhaWxzfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnMvW3VzZXJdXCIgYXM9e2AvdXNlcnMvJHthdXRob3IudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vc2VjdXJlLmdyYXZhdGFyLmNvbS9hdmF0YXIvJHthdXRob3IuaWR9P3M9MzImZD1pZGVudGljb25gfVxuICAgICAgICAgICAgICAgICAgYWx0PXthdXRob3IudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3RhZ3MgPyAnYXNrZWQnIDogJ2Fuc3dlcmVkJ317JyAnfVxuICAgICAgICAgICAgICAgIHtmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KG5ldyBEYXRlKGNyZWF0ZWQpLCB7XG4gICAgICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWVcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzL1t1c2VyXVwiIGFzPXtgL3VzZXJzLyR7YXV0aG9yLnVzZXJuYW1lfWB9PlxuICAgICAgICAgICAgICAgIDxhPnthdXRob3IudXNlcm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsoYXV0aFN0YXRlLnVzZXJJbmZvPy5pZCA9PT0gYXV0aG9yLmlkICYmIGlzQWRtaW4oKSkgJiYgKDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgICAgPEJ1dHRvbiBjbEJ1dHRvbnNzTmFtZT17c3R5bGVzLmRlbGV0ZX0gb25DbGljaz17KCkgPT4gaGFuZGxlQXBwcm92ZSgpfT5cbiAgICAgICAgICAgICAgQXBwcm92ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVDb21tZW50KCl9PlxuICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RTdW1tYXJ5XG4iXSwic291cmNlUm9vdCI6IiJ9
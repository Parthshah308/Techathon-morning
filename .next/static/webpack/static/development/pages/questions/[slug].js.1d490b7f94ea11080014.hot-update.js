webpackHotUpdate("static\\development\\pages\\questions\\[slug].js",{

/***/ "./components/post/post-vote/index.js":
/*!********************************************!*\
  !*** ./components/post/post-vote/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _store_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/fetch */ "./store/fetch.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/modal */ "./store/modal.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _post_vote_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post-vote.module.css */ "./components/post/post-vote/post-vote.module.css");
/* harmony import */ var _post_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_post_vote_module_css__WEBPACK_IMPORTED_MODULE_8__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\HP\\OneDrive\\Documents\\vercel1\\vercel1\\components\\post\\post-vote\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var PostVote = function PostVote(_ref) {
  _s();

  var score = _ref.score,
      votes = _ref.votes,
      questionId = _ref.questionId,
      answerId = _ref.answerId,
      setQuestion = _ref.setQuestion;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]),
      authState = _useContext.authState,
      isAuthenticated = _useContext.isAuthenticated;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_fetch__WEBPACK_IMPORTED_MODULE_4__["FetchContext"]),
      authAxios = _useContext2.authAxios;

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_5__["default"]),
      handleComponentVisible = _useContext3.handleComponentVisible;

  var isUpVoted = function isUpVoted() {
    var _votes$find;

    return ((_votes$find = votes.find(function (v) {
      var _authState$userInfo;

      return v.user === ((_authState$userInfo = authState.userInfo) === null || _authState$userInfo === void 0 ? void 0 : _authState$userInfo.id);
    })) === null || _votes$find === void 0 ? void 0 : _votes$find.vote) === 1;
  };

  var isDownVoted = function isDownVoted() {
    var _votes$find2;

    return ((_votes$find2 = votes.find(function (v) {
      var _authState$userInfo2;

      return v.user === ((_authState$userInfo2 = authState.userInfo) === null || _authState$userInfo2 === void 0 ? void 0 : _authState$userInfo2.id);
    })) === null || _votes$find2 === void 0 ? void 0 : _votes$find2.vote) === -1;
  };

  var upVote = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$authAxios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return authAxios.get("/votes/upvote/".concat(questionId, "/").concat(answerId ? answerId : ''));

            case 2:
              _yield$authAxios$get = _context.sent;
              data = _yield$authAxios$get.data;
              setQuestion(data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function upVote() {
      return _ref2.apply(this, arguments);
    };
  }();

  var downVote = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _yield$authAxios$get2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return authAxios.get("/votes/downvote/".concat(questionId, "/").concat(answerId ? answerId : ''));

            case 2:
              _yield$authAxios$get2 = _context2.sent;
              data = _yield$authAxios$get2.data;
              setQuestion(data);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function downVote() {
      return _ref3.apply(this, arguments);
    };
  }();

  var unVote = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var _yield$authAxios$get3, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return authAxios.get("/votes/unvote/".concat(questionId, "/").concat(answerId ? answerId : ''));

            case 2:
              _yield$authAxios$get3 = _context3.sent;
              data = _yield$authAxios$get3.data;
              setQuestion(data);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function unVote() {
      return _ref4.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: _post_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteCell,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _post_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteButton,
    onClick: function onClick() {
      return isAuthenticated() ? isUpVoted() ? unVote() : upVote() : handleComponentVisible(true, 'signup');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_7__["ArrowUp"], {
    className: isUpVoted() ? _post_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voted : '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _post_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.score,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, score), __jsx(_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _post_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voteButton,
    onClick: function onClick() {
      return isAuthenticated() ? isDownVoted() ? unVote() : downVote() : handleComponentVisible(true, 'signup');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_7__["ArrowDown"], {
    className: isDownVoted() ? _post_vote_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.voted : '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })));
};

_s(PostVote, "q49/y4NsPfmtSq0POdol/swTicY=");

_c = PostVote;
/* harmony default export */ __webpack_exports__["default"] = (PostVote);

var _c;

$RefreshReg$(_c, "PostVote");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvcG9zdC12b3RlL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3RWb3RlIiwic2NvcmUiLCJ2b3RlcyIsInF1ZXN0aW9uSWQiLCJhbnN3ZXJJZCIsInNldFF1ZXN0aW9uIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiYXV0aFN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwiRmV0Y2hDb250ZXh0IiwiYXV0aEF4aW9zIiwiTW9kYWxDb250ZXh0IiwiaGFuZGxlQ29tcG9uZW50VmlzaWJsZSIsImlzVXBWb3RlZCIsImZpbmQiLCJ2IiwidXNlciIsInVzZXJJbmZvIiwiaWQiLCJ2b3RlIiwiaXNEb3duVm90ZWQiLCJ1cFZvdGUiLCJnZXQiLCJkYXRhIiwiZG93blZvdGUiLCJ1blZvdGUiLCJzdHlsZXMiLCJ2b3RlQ2VsbCIsInZvdGVCdXR0b24iLCJ2b3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXlEO0FBQUE7O0FBQUEsTUFBdERDLEtBQXNELFFBQXREQSxLQUFzRDtBQUFBLE1BQS9DQyxLQUErQyxRQUEvQ0EsS0FBK0M7QUFBQSxNQUF4Q0MsVUFBd0MsUUFBeENBLFVBQXdDO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQUEsb0JBQ2pDQyx3REFBVSxDQUFDQyx1REFBRCxDQUR1QjtBQUFBLE1BQ2hFQyxTQURnRSxlQUNoRUEsU0FEZ0U7QUFBQSxNQUNyREMsZUFEcUQsZUFDckRBLGVBRHFEOztBQUFBLHFCQUVsREgsd0RBQVUsQ0FBQ0kseURBQUQsQ0FGd0M7QUFBQSxNQUVoRUMsU0FGZ0UsZ0JBRWhFQSxTQUZnRTs7QUFBQSxxQkFHckNMLHdEQUFVLENBQUNNLG9E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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCQSxLQUEvQixDQWJGLEVBY0UsTUFBQywrQ0FBRDtBQUNFLGFBQVMsRUFBRTBCLDREQUFNLENBQUNFLFVBRHBCO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFDUHBCLGVBQWUsS0FDWFksV0FBVyxLQUNUSyxNQUFNLEVBREcsR0FFVEQsUUFBUSxFQUhDLEdBSVhaLHNCQUFzQixDQUFDLElBQUQsRUFBTyxRQUFQLENBTG5CO0FBQUEsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsTUFBQyxnREFBRDtBQUFXLGFBQVMsRUFBRVEsV0FBVyxLQUFLTSw0REFBTSxDQUFDRyxLQUFaLEdBQW9CLEVBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQWRGLENBREY7QUE2QkQsQ0EvREQ7O0dBQU05QixROztLQUFBQSxRO0FBaUVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccXVlc3Rpb25zXFxbc2x1Z10uanMuMWQ0OTBiN2Y5NGVhMTEwODAwMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYXV0aCdcbmltcG9ydCB7IEZldGNoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2ZldGNoJ1xuaW1wb3J0IE1vZGFsQ29udGV4dCBmcm9tICcuLi8uLi8uLi9zdG9yZS9tb2RhbCdcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24nXG5pbXBvcnQgeyBBcnJvd1VwLCBBcnJvd0Rvd24gfSBmcm9tICcuLi8uLi9pY29ucydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Bvc3Qtdm90ZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBQb3N0Vm90ZSA9ICh7IHNjb3JlLCB2b3RlcywgcXVlc3Rpb25JZCwgYW5zd2VySWQsIHNldFF1ZXN0aW9uIH0pID0+IHtcbiAgY29uc3QgeyBhdXRoU3RhdGUsIGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgY29uc3QgeyBhdXRoQXhpb3MgfSA9IHVzZUNvbnRleHQoRmV0Y2hDb250ZXh0KVxuICBjb25zdCB7IGhhbmRsZUNvbXBvbmVudFZpc2libGUgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KVxuXG4gIGNvbnN0IGlzVXBWb3RlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gdm90ZXMuZmluZCgodikgPT4gdi51c2VyID09PSBhdXRoU3RhdGUudXNlckluZm8/LmlkKT8udm90ZSA9PT0gMVxuICB9XG5cbiAgY29uc3QgaXNEb3duVm90ZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHZvdGVzLmZpbmQoKHYpID0+IHYudXNlciA9PT0gYXV0aFN0YXRlLnVzZXJJbmZvPy5pZCk/LnZvdGUgPT09IC0xXG4gIH1cblxuICBjb25zdCB1cFZvdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhdXRoQXhpb3MuZ2V0KFxuICAgICAgYC92b3Rlcy91cHZvdGUvJHtxdWVzdGlvbklkfS8ke2Fuc3dlcklkID8gYW5zd2VySWQgOiAnJ31gXG4gICAgKVxuICAgIHNldFF1ZXN0aW9uKGRhdGEpXG4gIH1cblxuICBjb25zdCBkb3duVm90ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF1dGhBeGlvcy5nZXQoXG4gICAgICBgL3ZvdGVzL2Rvd252b3RlLyR7cXVlc3Rpb25JZH0vJHthbnN3ZXJJZCA/IGFuc3dlcklkIDogJyd9YFxuICAgIClcbiAgICBzZXRRdWVzdGlvbihkYXRhKVxuICB9XG5cbiAgY29uc3QgdW5Wb3RlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXV0aEF4aW9zLmdldChcbiAgICAgIGAvdm90ZXMvdW52b3RlLyR7cXVlc3Rpb25JZH0vJHthbnN3ZXJJZCA/IGFuc3dlcklkIDogJyd9YFxuICAgIClcbiAgICBzZXRRdWVzdGlvbihkYXRhKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVDZWxsfT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQoKVxuICAgICAgICAgICAgPyBpc1VwVm90ZWQoKVxuICAgICAgICAgICAgICA/IHVuVm90ZSgpXG4gICAgICAgICAgICAgIDogdXBWb3RlKClcbiAgICAgICAgICAgIDogaGFuZGxlQ29tcG9uZW50VmlzaWJsZSh0cnVlLCAnc2lnbnVwJylcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8QXJyb3dVcCBjbGFzc05hbWU9e2lzVXBWb3RlZCgpID8gc3R5bGVzLnZvdGVkIDogJyd9IC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2NvcmV9PntzY29yZX08L2Rpdj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQoKVxuICAgICAgICAgICAgPyBpc0Rvd25Wb3RlZCgpXG4gICAgICAgICAgICAgID8gdW5Wb3RlKClcbiAgICAgICAgICAgICAgOiBkb3duVm90ZSgpXG4gICAgICAgICAgICA6IGhhbmRsZUNvbXBvbmVudFZpc2libGUodHJ1ZSwgJ3NpZ251cCcpXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPEFycm93RG93biBjbGFzc05hbWU9e2lzRG93blZvdGVkKCkgPyBzdHlsZXMudm90ZWQgOiAnJ30gLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RWb3RlXG4iXSwic291cmNlUm9vdCI6IiJ9
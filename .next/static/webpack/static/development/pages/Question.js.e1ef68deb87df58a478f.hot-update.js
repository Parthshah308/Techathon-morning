webpackHotUpdate("static\\development\\pages\\Question.js",{

/***/ "./pages/Question/index.js":
/*!*********************************!*\
  !*** ./pages/Question/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.js");
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/fetcher */ "./util/fetcher.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_question_question_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/question/question-wrapper */ "./components/question/question-wrapper.js");
/* harmony import */ var _components_question_question_stats__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/question/question-stats */ "./components/question/question-stats/index.js");
/* harmony import */ var _components_question_question_summary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/question/question-summary */ "./components/question/question-summary/index.js");
/* harmony import */ var _components_page_title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/page-title */ "./components/page-title/index.js");
/* harmony import */ var _components_button_group__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/button-group */ "./components/button-group/index.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/icons */ "./components/icons/index.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\HP\\OneDrive\\Documents\\vercel1\\vercel1\\pages\\Question\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;













var HomePage = function HomePage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      questions = _useState[0],
      setQuestions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Votes'),
      sortType = _useState2[0],
      setSortType = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchQuestion = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$publicFetch$ge, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _util_fetcher__WEBPACK_IMPORTED_MODULE_6__["publicFetch"].get('/question');

              case 2:
                _yield$publicFetch$ge = _context.sent;
                data = _yield$publicFetch$ge.data;
                setQuestions(data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchQuestion() {
        return _ref.apply(this, arguments);
      };
    }();

    var fetchQuestionByTag = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$publicFetch$ge2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _util_fetcher__WEBPACK_IMPORTED_MODULE_6__["publicFetch"].get("/questions/".concat(router.query.tag));

              case 2:
                _yield$publicFetch$ge2 = _context2.sent;
                data = _yield$publicFetch$ge2.data;
                setQuestions(data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchQuestionByTag() {
        return _ref2.apply(this, arguments);
      };
    }();

    if (router.query.tag) {
      fetchQuestionByTag();
    } else {
      fetchQuestion();
    }
  }, [router.query.tag]);

  var handleSorting = function handleSorting() {
    switch (sortType) {
      case 'Votes':
        return function (a, b) {
          return b.score - a.score;
        };

      case 'Views':
        return function (a, b) {
          return b.views - a.views;
        };

      case 'Newest':
        return function (a, b) {
          return new Date(b.created) - new Date(a.created);
        };

      case 'Oldest':
        return function (a, b) {
          return new Date(a.created) - new Date(b.created);
        };

      default:
        break;
    }
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, router.query.tag ? router.query.tag : 'Questions', " - Clone of Stackoverflow")), __jsx(_components_button_group__WEBPACK_IMPORTED_MODULE_12__["default"], {
    borderBottom: true,
    buttons: ['Newest', 'Oldest'],
    selected: sortType,
    setSelected: setSortType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), !questions && __jsx("div", {
    className: "loading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_13__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  })), questions === null || questions === void 0 ? void 0 : questions.sort(handleSorting()).map(function (_ref3) {
    var id = _ref3.id,
        votes = _ref3.votes,
        answers = _ref3.answers,
        views = _ref3.views,
        title = _ref3.title,
        text = _ref3.text,
        tags = _ref3.tags,
        author = _ref3.author,
        created = _ref3.created;
    return __jsx(_components_question_question_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, __jsx(_components_question_question_stats__WEBPACK_IMPORTED_MODULE_9__["default"], {
      voteCount: votes.length,
      answerCount: answers.length,
      view: views,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }), __jsx(_components_question_question_summary__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: id,
      title: title,
      tags: tags,
      author: author,
      createdTime: created,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 15
      }
    }, text));
  }));
};

_s(HomePage, "XcfFrNqanLVIH4XtjJXvyZw61w0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9RdWVzdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwic29ydFR5cGUiLCJzZXRTb3J0VHlwZSIsInVzZUVmZmVjdCIsImZldGNoUXVlc3Rpb24iLCJwdWJsaWNGZXRjaCIsImdldCIsImRhdGEiLCJmZXRjaFF1ZXN0aW9uQnlUYWciLCJxdWVyeSIsInRhZyIsImhhbmRsZVNvcnRpbmciLCJhIiwiYiIsInNjb3JlIiwidmlld3MiLCJEYXRlIiwiY3JlYXRlZCIsInNvcnQiLCJtYXAiLCJpZCIsInZvdGVzIiwiYW5zd2VycyIsInRpdGxlIiwidGV4dCIsInRhZ3MiLCJhdXRob3IiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURxQixrQkFHYUMsc0RBQVEsQ0FBQyxJQUFELENBSHJCO0FBQUEsTUFHZEMsU0FIYztBQUFBLE1BR0hDLFlBSEc7O0FBQUEsbUJBSVdGLHNEQUFRLENBQUMsT0FBRCxDQUpuQjtBQUFBLE1BSWRHLFFBSmM7QUFBQSxNQUlKQyxXQUpJOztBQU1yQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsYUFBYTtBQUFBLGtNQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNHQyx5REFBVyxDQUFDQyxHQUFaLENBQWdCLFdBQWhCLENBREg7O0FBQUE7QUFBQTtBQUNaQyxvQkFEWSx5QkFDWkEsSUFEWTtBQUVwQlAsNEJBQVksQ0FBQ08sSUFB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QyxPQUhGLFNBR0VBLE9BSEY7QUFBQSxRQUlFUCxLQUpGLFNBSUVBLEtBSkY7QUFBQSxRQUtFUSxLQUxGLFNBS0VBLEtBTEY7QUFBQSxRQU1FQyxJQU5GLFNBTUVBLElBTkY7QUFBQSxRQU9FQyxJQVBGLFNBT0VBLElBUEY7QUFBQSxRQVFFQyxNQVJGLFNBUUVBLE1BUkY7QUFBQSxRQVNFVCxPQVRGLFNBU0VBLE9BVEY7QUFBQSxXQVdFLE1BQUMsNkVBQUQ7QUFBaUIsU0FBRyxFQUFFRyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyRUFBRDtBQUNFLGVBQVMsRUFBRUMsS0FBSyxDQUFDTSxNQURuQjtBQUVFLGlCQUFXLEVBQUVMLE9BQU8sQ0FBQ0ssTUFGdkI7QUFHRSxVQUFJLEVBQUVaLEtBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBTUUsTUFBQyw4RUFBRDtBQUNFLFFBQUUsRUFBRUssRUFETjtBQUVFLFdBQUssRUFBRUcsS0FGVDtBQUdFLFVBQUksRUFBRUUsSUFIUjtBQUlFLFlBQU0sRUFBRUMsTUFKVjtBQUtFLGlCQUFXLEVBQUVULE9BTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9HTyxJQVBILENBTkYsQ0FYRjtBQUFBLEdBSEgsQ0F0QkgsQ0FERjtBQXlERCxDQWhHRDs7R0FBTTdCLFE7VUFDV0UscUQ7OztLQURYRixRO0FBa0dTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcUXVlc3Rpb24uanMuZTFlZjY4ZGViODdkZjU4YTQ3OGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aCdcclxuaW1wb3J0IHsgcHVibGljRmV0Y2ggfSBmcm9tICcuLi8uLi91dGlsL2ZldGNoZXInXHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgUXVlc3Rpb25XcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24td3JhcHBlcidcclxuaW1wb3J0IFF1ZXN0aW9uU3RhdHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi1zdGF0cydcclxuaW1wb3J0IFF1ZXN0aW9uU3VtbWFyeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLXN1bW1hcnknXHJcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdlLXRpdGxlJ1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24tZ3JvdXAnXHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ljb25zJ1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3NvcnRUeXBlLCBzZXRTb3J0VHlwZV0gPSB1c2VTdGF0ZSgnVm90ZXMnKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hRdWVzdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwdWJsaWNGZXRjaC5nZXQoJy9xdWVzdGlvbicpXHJcbiAgICAgIHNldFF1ZXN0aW9ucyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZldGNoUXVlc3Rpb25CeVRhZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwdWJsaWNGZXRjaC5nZXQoYC9xdWVzdGlvbnMvJHtyb3V0ZXIucXVlcnkudGFnfWApXHJcbiAgICAgIHNldFF1ZXN0aW9ucyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb3V0ZXIucXVlcnkudGFnKSB7XHJcbiAgICAgIGZldGNoUXVlc3Rpb25CeVRhZygpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmZXRjaFF1ZXN0aW9uKClcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LnRhZ10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNvcnRpbmcgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHNvcnRUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ1ZvdGVzJzpcclxuICAgICAgICByZXR1cm4gKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlXHJcbiAgICAgIGNhc2UgJ1ZpZXdzJzpcclxuICAgICAgICByZXR1cm4gKGEsIGIpID0+IGIudmlld3MgLSBhLnZpZXdzXHJcbiAgICAgIGNhc2UgJ05ld2VzdCc6XHJcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBuZXcgRGF0ZShiLmNyZWF0ZWQpIC0gbmV3IERhdGUoYS5jcmVhdGVkKVxyXG4gICAgICBjYXNlICdPbGRlc3QnOlxyXG4gICAgICAgIHJldHVybiAoYSwgYikgPT4gbmV3IERhdGUoYS5jcmVhdGVkKSAtIG5ldyBEYXRlKGIuY3JlYXRlZClcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgIHtyb3V0ZXIucXVlcnkudGFnID8gcm91dGVyLnF1ZXJ5LnRhZyA6ICdRdWVzdGlvbnMnfSAtIENsb25lIG9mXHJcbiAgICAgICAgICBTdGFja292ZXJmbG93XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgXHJcbiAgICAgIDxCdXR0b25Hcm91cFxyXG4gICAgICAgIGJvcmRlckJvdHRvbVxyXG4gICAgICAgIGJ1dHRvbnM9e1sgJ05ld2VzdCcsICdPbGRlc3QnXX1cclxuICAgICAgICBzZWxlY3RlZD17c29ydFR5cGV9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNvcnRUeXBlfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgeyFxdWVzdGlvbnMgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxyXG4gICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtxdWVzdGlvbnNcclxuICAgICAgICA/LnNvcnQoaGFuZGxlU29ydGluZygpKVxyXG4gICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAoe1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgdm90ZXMsXHJcbiAgICAgICAgICAgIGFuc3dlcnMsXHJcbiAgICAgICAgICAgIHZpZXdzLFxyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgdGFncyxcclxuICAgICAgICAgICAgYXV0aG9yLFxyXG4gICAgICAgICAgICBjcmVhdGVkXHJcbiAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxRdWVzdGlvbldyYXBwZXIga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgPFF1ZXN0aW9uU3RhdHNcclxuICAgICAgICAgICAgICAgIHZvdGVDb3VudD17dm90ZXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgYW5zd2VyQ291bnQ9e2Fuc3dlcnMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgdmlldz17dmlld3N9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UXVlc3Rpb25TdW1tYXJ5XHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICB0YWdzPXt0YWdzfVxyXG4gICAgICAgICAgICAgICAgYXV0aG9yPXthdXRob3J9XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkVGltZT17Y3JlYXRlZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGV4dH1cclxuICAgICAgICAgICAgICA8L1F1ZXN0aW9uU3VtbWFyeT5cclxuICAgICAgICAgICAgPC9RdWVzdGlvbldyYXBwZXI+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
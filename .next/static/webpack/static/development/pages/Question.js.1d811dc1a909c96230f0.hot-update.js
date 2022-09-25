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
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/fetcher */ "./util/fetcher.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.js");
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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_6__["AuthContext"]),
      isAuthenticated = _useContext.isAuthenticated,
      isAdmin = _useContext.isAdmin;

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
                return _util_fetcher__WEBPACK_IMPORTED_MODULE_5__["publicFetch"].get('/question');

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
                return _util_fetcher__WEBPACK_IMPORTED_MODULE_5__["publicFetch"].get("/questions/".concat(router.query.tag));

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
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 66,
      columnNumber: 7
    }
  }), !questions && __jsx("div", {
    className: "loading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_13__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  })), console.log(questions.status), questions === null || questions === void 0 ? void 0 : questions.sort(handleSorting()).map(function (_ref3) {
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
        lineNumber: 94,
        columnNumber: 13
      }
    }, !isAuthenticated() && !isAdmin() ? __jsx(_components_question_question_stats__WEBPACK_IMPORTED_MODULE_9__["default"], {
      voteCount: votes.length,
      answerCount: answers.length,
      view: views,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 51
      }
    }) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), __jsx(_components_question_question_summary__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: id,
      title: title,
      tags: tags,
      author: author,
      createdTime: created,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 15
      }
    }, text));
  }));
};

_s(HomePage, "loTX9dyEUYUIKZF5o3YfCJc5kok=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9RdWVzdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJ1c2VTdGF0ZSIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsInNvcnRUeXBlIiwic2V0U29ydFR5cGUiLCJ1c2VFZmZlY3QiLCJmZXRjaFF1ZXN0aW9uIiwicHVibGljRmV0Y2giLCJnZXQiLCJkYXRhIiwiZmV0Y2hRdWVzdGlvbkJ5VGFnIiwicXVlcnkiLCJ0YWciLCJoYW5kbGVTb3J0aW5nIiwiYSIsImIiLCJzY29yZSIsInZpZXdzIiwiRGF0ZSIsImNyZWF0ZWQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic29ydCIsIm1hcCIsImlkIiwidm90ZXMiLCJhbnN3ZXJzIiwidGl0bGUiLCJ0ZXh0IiwidGFncyIsImF1dGhvciIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHFCLG9CQUVlQyx3REFBVSxDQUFDQyx1REFBRCxDQUZ6QjtBQUFBLE1BRWJDLGVBRmEsZUFFYkEsZUFGYTtBQUFBLE1BRUlDLE9BRkosZUFFSUEsT0FGSjs7QUFBQSxrQkFJYUMsc0RBQVEsQ0FBQyxJQUFELENBSnJCO0FBQUEsTUFJZEMsU0FKYztBQUFBLE1BSUhDLFlBSkc7O0FBQUEsbUJBS1dGLHNEQUFRLENBQUMsT0FBRCxDQUxuQjtBQUFBLE1BS2RHLFFBTGM7QUFBQSxNQUtKQyxXQUxJOztBQVFyQkMseURBQVMs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QTJERCxDQXBHRDs7R0FBTXBDLFE7VUFDV0UscUQ7OztLQURYRixRO0FBc0dTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcUXVlc3Rpb24uanMuMWQ4MTFkYzFhOTA5Yzk2MjMwZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgcHVibGljRmV0Y2ggfSBmcm9tICcuLi8uLi91dGlsL2ZldGNoZXInXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aCdcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBRdWVzdGlvbldyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi13cmFwcGVyJ1xyXG5pbXBvcnQgUXVlc3Rpb25TdGF0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLXN0YXRzJ1xyXG5pbXBvcnQgUXVlc3Rpb25TdW1tYXJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24tc3VtbWFyeSdcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhZ2UtdGl0bGUnXHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbi1ncm91cCdcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaWNvbnMnXHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkICxpc0FkbWlufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbc29ydFR5cGUsIHNldFNvcnRUeXBlXSA9IHVzZVN0YXRlKCdWb3RlcycpXHJcbiBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUXVlc3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHVibGljRmV0Y2guZ2V0KCcvcXVlc3Rpb24nKVxyXG4gICAgICBzZXRRdWVzdGlvbnMoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZXRjaFF1ZXN0aW9uQnlUYWcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHVibGljRmV0Y2guZ2V0KGAvcXVlc3Rpb25zLyR7cm91dGVyLnF1ZXJ5LnRhZ31gKVxyXG4gICAgICBzZXRRdWVzdGlvbnMoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LnRhZykge1xyXG4gICAgICBmZXRjaFF1ZXN0aW9uQnlUYWcoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmV0Y2hRdWVzdGlvbigpXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS50YWddKVxyXG5cclxuICBjb25zdCBoYW5kbGVTb3J0aW5nID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChzb3J0VHlwZSkge1xyXG4gICAgICBjYXNlICdWb3Rlcyc6XHJcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZVxyXG4gICAgICBjYXNlICdWaWV3cyc6XHJcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBiLnZpZXdzIC0gYS52aWV3c1xyXG4gICAgICBjYXNlICdOZXdlc3QnOlxyXG4gICAgICAgIHJldHVybiAoYSwgYikgPT4gbmV3IERhdGUoYi5jcmVhdGVkKSAtIG5ldyBEYXRlKGEuY3JlYXRlZClcclxuICAgICAgY2FzZSAnT2xkZXN0JzpcclxuICAgICAgICByZXR1cm4gKGEsIGIpID0+IG5ldyBEYXRlKGEuY3JlYXRlZCkgLSBuZXcgRGF0ZShiLmNyZWF0ZWQpXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICB7cm91dGVyLnF1ZXJ5LnRhZyA/IHJvdXRlci5xdWVyeS50YWcgOiAnUXVlc3Rpb25zJ30gLSBDbG9uZSBvZlxyXG4gICAgICAgICAgU3RhY2tvdmVyZmxvd1xyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIFxyXG4gICAgICA8QnV0dG9uR3JvdXBcclxuICAgICAgICBib3JkZXJCb3R0b21cclxuICAgICAgICBidXR0b25zPXtbICdOZXdlc3QnLCAnT2xkZXN0J119XHJcbiAgICAgICAgc2VsZWN0ZWQ9e3NvcnRUeXBlfVxyXG4gICAgICAgIHNldFNlbGVjdGVkPXtzZXRTb3J0VHlwZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHshcXVlc3Rpb25zICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cclxuICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAge2NvbnNvbGUubG9nKHF1ZXN0aW9ucy5zdGF0dXMpfVxyXG4gICAgICB7cXVlc3Rpb25zXHJcbiAgICAgICAgPy5zb3J0KGhhbmRsZVNvcnRpbmcoKSlcclxuICAgICAgICAubWFwKFxyXG4gICAgICAgICAgKHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIHZvdGVzLFxyXG4gICAgICAgICAgICBhbnN3ZXJzLFxyXG4gICAgICAgICAgICB2aWV3cyxcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgIHRhZ3MsXHJcbiAgICAgICAgICAgIGF1dGhvcixcclxuICAgICAgICAgICAgY3JlYXRlZCxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxRdWVzdGlvbldyYXBwZXIga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgeyFpc0F1dGhlbnRpY2F0ZWQoKSAmJiAhaXNBZG1pbigpID8gPFF1ZXN0aW9uU3RhdHNcclxuICAgICAgICAgICAgICAgIHZvdGVDb3VudD17dm90ZXMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgYW5zd2VyQ291bnQ9e2Fuc3dlcnMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgdmlldz17dmlld3N9XHJcbiAgICAgICAgICAgICAgLz4gOig8PjwvPil9XHJcbiAgICAgICAgICAgICAgPFF1ZXN0aW9uU3VtbWFyeVxyXG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgdGFncz17dGFnc31cclxuICAgICAgICAgICAgICAgIGF1dGhvcj17YXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZFRpbWU9e2NyZWF0ZWR9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGV4dH1cclxuICAgICAgICAgICAgICA8L1F1ZXN0aW9uU3VtbWFyeT5cclxuICAgICAgICAgICAgPC9RdWVzdGlvbldyYXBwZXI+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
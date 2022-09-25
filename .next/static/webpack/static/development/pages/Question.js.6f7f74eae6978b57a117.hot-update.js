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
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\HP\\OneDrive\\Documents\\vercel1\\vercel1\\pages\\Question\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* eslint-disable no-unused-vars */






var Question = function Question() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var columns = [{
    name: 'Title',
    selector: function selector(row) {
      return row.title;
    },
    sortable: true
  }, {
    name: 'Year',
    selector: function selector(row) {
      return row.year;
    },
    sortable: true
  }];
  var data = [{
    id: 1,
    title: 'Beetlejuice',
    year: '1988'
  }, {
    id: 2,
    title: 'Ghostbusters',
    year: '1984'
  }]; // eslint-disable-next-line no-unused-vars

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
  }, [router.query.tag]); // eslint-disable-next-line no-unused-vars

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

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, router.query.tag ? router.query.tag : 'Questions', " - TakeCode")), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "All Questions"), questions.map(function (e) {}));
};

_s(Question, "XcfFrNqanLVIH4XtjJXvyZw61w0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Question;
/* harmony default export */ __webpack_exports__["default"] = (Question);

var _c;

$RefreshReg$(_c, "Question");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9RdWVzdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbHVtbnMiLCJuYW1lIiwic2VsZWN0b3IiLCJyb3ciLCJ0aXRsZSIsInNvcnRhYmxlIiwieWVhciIsImRhdGEiLCJpZCIsInVzZVN0YXRlIiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwic29ydFR5cGUiLCJzZXRTb3J0VHlwZSIsInVzZUVmZmVjdCIsImZldGNoUXVlc3Rpb24iLCJwdWJsaWNGZXRjaCIsImdldCIsImZldGNoUXVlc3Rpb25CeVRhZyIsInF1ZXJ5IiwidGFnIiwiaGFuZGxlU29ydGluZyIsImEiLCJiIiwic2NvcmUiLCJ2aWV3cyIsIkRhdGUiLCJjcmVhdGVkIiwibWFwIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUNFQyxRQUFJLEVBQUUsT0FEUjtBQUVFQyxZQUFRLEVBQUUsa0JBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLEtBQWI7QUFBQSxLQUZaO0FBR0VDLFlBQVEsRUFBRTtBQUhaLEdBRGMsRUFNZDtBQUNFSixRQUFJLEVBQUUsTUFEUjtBQUVFQyxZQUFRLEVBQUUsa0JBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNHLElBQWI7QUFBQSxLQUZaO0FBR0VELFlBQVEsRUFBRTtBQUhaLEdBTmMsQ0FBaEI7QUFhQSxNQUFNRSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFSixTQUFLLEVBQUUsYUFGVDtBQUdFRSxRQUFJLEVBQUU7QUFIUixHQURXLEVB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Q0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsRUFPR1YsU0FBUyxDQUFDa0IsR0FBVixDQUFjLFVBQUNDLENBQUQsRUFBSyxDQUFFLENBQXJCLENBUEgsQ0FERjtBQVdELENBN0VEOztHQUFNaEMsUTtVQUNXRSxxRDs7O0tBRFhGLFE7QUErRVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxRdWVzdGlvbi5qcy42ZjdmNzRlYWU2OTc4YjU3YTExNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgcHVibGljRmV0Y2ggfSBmcm9tICcuLi8uLi91dGlsL2ZldGNoZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcblxyXG5jb25zdCBRdWVzdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdUaXRsZScsXHJcbiAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cudGl0bGUsXHJcbiAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnWWVhcicsXHJcbiAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cueWVhcixcclxuICAgICAgc29ydGFibGU6IHRydWVcclxuICAgIH1cclxuICBdXHJcblxyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICB0aXRsZTogJ0JlZXRsZWp1aWNlJyxcclxuICAgICAgeWVhcjogJzE5ODgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgdGl0bGU6ICdHaG9zdGJ1c3RlcnMnLFxyXG4gICAgICB5ZWFyOiAnMTk4NCdcclxuICAgIH1cclxuICBdXHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzb3J0VHlwZSwgc2V0U29ydFR5cGVdID0gdXNlU3RhdGUoJ1ZvdGVzJylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUXVlc3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHVibGljRmV0Y2guZ2V0KCcvcXVlc3Rpb24nKVxyXG4gICAgICBzZXRRdWVzdGlvbnMoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZXRjaFF1ZXN0aW9uQnlUYWcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHVibGljRmV0Y2guZ2V0KGAvcXVlc3Rpb25zLyR7cm91dGVyLnF1ZXJ5LnRhZ31gKVxyXG4gICAgICBzZXRRdWVzdGlvbnMoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LnRhZykge1xyXG4gICAgICBmZXRjaFF1ZXN0aW9uQnlUYWcoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmV0Y2hRdWVzdGlvbigpXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS50YWddKVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICBjb25zdCBoYW5kbGVTb3J0aW5nID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChzb3J0VHlwZSkge1xyXG4gICAgICBjYXNlICdWb3Rlcyc6XHJcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZVxyXG4gICAgICBjYXNlICdWaWV3cyc6XHJcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBiLnZpZXdzIC0gYS52aWV3c1xyXG4gICAgICBjYXNlICdOZXdlc3QnOlxyXG4gICAgICAgIHJldHVybiAoYSwgYikgPT4gbmV3IERhdGUoYi5jcmVhdGVkKSAtIG5ldyBEYXRlKGEuY3JlYXRlZClcclxuICAgICAgY2FzZSAnT2xkZXN0JzpcclxuICAgICAgICByZXR1cm4gKGEsIGIpID0+IG5ldyBEYXRlKGEuY3JlYXRlZCkgLSBuZXcgRGF0ZShiLmNyZWF0ZWQpXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICB7cm91dGVyLnF1ZXJ5LnRhZyA/IHJvdXRlci5xdWVyeS50YWcgOiAnUXVlc3Rpb25zJ30gLSBUYWtlQ29kZVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgyPkFsbCBRdWVzdGlvbnM8L2gyPlxyXG4gICAgICB7cXVlc3Rpb25zLm1hcCgoZSk9Pnt9KX1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
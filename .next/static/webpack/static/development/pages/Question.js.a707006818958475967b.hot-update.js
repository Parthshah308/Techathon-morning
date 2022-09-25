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
                console.log(questions);

              case 6:
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
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, router.query.tag ? router.query.tag : 'Questions', " - TakeCode")), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "All Questions"), questions.map(function (e) {
    return console.log(e);
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9RdWVzdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbHVtbnMiLCJuYW1lIiwic2VsZWN0b3IiLCJyb3ciLCJ0aXRsZSIsInNvcnRhYmxlIiwieWVhciIsImRhdGEiLCJpZCIsInVzZVN0YXRlIiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwic29ydFR5cGUiLCJzZXRTb3J0VHlwZSIsInVzZUVmZmVjdCIsImZldGNoUXVlc3Rpb24iLCJwdWJsaWNGZXRjaCIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFF1ZXN0aW9uQnlUYWciLCJxdWVyeSIsInRhZyIsImhhbmRsZVNvcnRpbmciLCJhIiwiYiIsInNjb3JlIiwidmlld3MiLCJEYXRlIiwiY3JlYXRlZCIsIm1hcCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsUUFBSSxFQUFFLE9BRFI7QUFFRUMsWUFBUSxFQUFFLGtCQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxLQUFiO0FBQUEsS0FGWjtBQUdFQyxZQUFRLEVBQUU7QUFIWixHQURjLEVBTWQ7QUFDRUosUUFBSSxFQUFFLE1BRFI7QUFFRUMsWUFBUSxFQUFFLGtCQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDRyxJQUFiO0FBQUEsS0FGWjtBQUdFRCxZQUFRLEVBQUU7QUFIWixHQU5jLENBQWhCO0FBYUEsTUFBTUUsSUFBSSxHQUFHLENBQ1g7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUosU0FBSyxFQUFFLGFBRlQ7QUFHRUUsUUFBSSxF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eEIsTUFBTSxDQUFDdUIsS0FBUCxDQUFhQyxHQUFoQyxHQUFzQyxXQUR6QyxnQkFERixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixFQU9HWixTQUFTLENBQUNvQixHQUFWLENBQWMsVUFBQ0MsQ0FBRDtBQUFBLFdBQ2JiLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWSxDQUFaLENBRGE7QUFBQSxHQUFkLENBUEgsQ0FERjtBQWFELENBaEZEOztHQUFNbEMsUTtVQUNXRSxxRDs7O0tBRFhGLFE7QUFrRlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxRdWVzdGlvbi5qcy5hNzA3MDA2ODE4OTU4NDc1OTY3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgcHVibGljRmV0Y2ggfSBmcm9tICcuLi8uLi91dGlsL2ZldGNoZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcblxyXG5jb25zdCBRdWVzdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdUaXRsZScsXHJcbiAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cudGl0bGUsXHJcbiAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnWWVhcicsXHJcbiAgICAgIHNlbGVjdG9yOiAocm93KSA9PiByb3cueWVhcixcclxuICAgICAgc29ydGFibGU6IHRydWVcclxuICAgIH1cclxuICBdXHJcblxyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICB0aXRsZTogJ0JlZXRsZWp1aWNlJyxcclxuICAgICAgeWVhcjogJzE5ODgnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgdGl0bGU6ICdHaG9zdGJ1c3RlcnMnLFxyXG4gICAgICB5ZWFyOiAnMTk4NCdcclxuICAgIH1cclxuICBdXHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzb3J0VHlwZSwgc2V0U29ydFR5cGVdID0gdXNlU3RhdGUoJ1ZvdGVzJylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUXVlc3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHVibGljRmV0Y2guZ2V0KCcvcXVlc3Rpb24nKVxyXG4gICAgICBzZXRRdWVzdGlvbnMoZGF0YSlcclxuICAgICAgY29uc29sZS5sb2cocXVlc3Rpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZXRjaFF1ZXN0aW9uQnlUYWcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHVibGljRmV0Y2guZ2V0KGAvcXVlc3Rpb25zLyR7cm91dGVyLnF1ZXJ5LnRhZ31gKVxyXG4gICAgICBzZXRRdWVzdGlvbnMoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LnRhZykge1xyXG4gICAgICBmZXRjaFF1ZXN0aW9uQnlUYWcoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmV0Y2hRdWVzdGlvbigpXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS50YWddKVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICBjb25zdCBoYW5kbGVTb3J0aW5nID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChzb3J0VHlwZSkge1xyXG4gICAgICBjYXNlICdWb3Rlcyc6XHJcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZVxyXG4gICAgICBjYXNlICdWaWV3cyc6XHJcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBiLnZpZXdzIC0gYS52aWV3c1xyXG4gICAgICBjYXNlICdOZXdlc3QnOlxyXG4gICAgICAgIHJldHVybiAoYSwgYikgPT4gbmV3IERhdGUoYi5jcmVhdGVkKSAtIG5ldyBEYXRlKGEuY3JlYXRlZClcclxuICAgICAgY2FzZSAnT2xkZXN0JzpcclxuICAgICAgICByZXR1cm4gKGEsIGIpID0+IG5ldyBEYXRlKGEuY3JlYXRlZCkgLSBuZXcgRGF0ZShiLmNyZWF0ZWQpXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICB7cm91dGVyLnF1ZXJ5LnRhZyA/IHJvdXRlci5xdWVyeS50YWcgOiAnUXVlc3Rpb25zJ30gLSBUYWtlQ29kZVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGgyPkFsbCBRdWVzdGlvbnM8L2gyPlxyXG4gICAgICB7cXVlc3Rpb25zLm1hcCgoZSk9PlxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICl9XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
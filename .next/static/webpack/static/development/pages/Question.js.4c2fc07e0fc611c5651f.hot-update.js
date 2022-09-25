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
  }, "All Questions"), questions.map(function (e) {
    console.log(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9RdWVzdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJRdWVzdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbHVtbnMiLCJuYW1lIiwic2VsZWN0b3IiLCJyb3ciLCJ0aXRsZSIsInNvcnRhYmxlIiwieWVhciIsImRhdGEiLCJpZCIsInVzZVN0YXRlIiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwic29ydFR5cGUiLCJzZXRTb3J0VHlwZSIsInVzZUVmZmVjdCIsImZldGNoUXVlc3Rpb24iLCJwdWJsaWNGZXRjaCIsImdldCIsImZldGNoUXVlc3Rpb25CeVRhZyIsInF1ZXJ5IiwidGFnIiwiaGFuZGxlU29ydGluZyIsImEiLCJiIiwic2NvcmUiLCJ2aWV3cyIsIkRhdGUiLCJjcmVhdGVkIiwibWFwIiwiZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsUUFBSSxFQUFFLE9BRFI7QUFFRUMsWUFBUSxFQUFFLGtCQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxLQUFiO0FBQUEsS0FGWjtBQUdFQyxZQUFRLEVBQUU7QUFIWixHQURjLEVBTWQ7QUFDRUosUUFBSSxFQUFFLE1BRFI7QUFFRUMsWUFBUSxFQUFFLGtCQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDRyxJQUFiO0FBQUEsS0FGWjtBQUdFRCxZQUFRLEVBQUU7QUFIWixHQU5jLENBQWhCO0FBYUEsTUFBTUUsSUFBSSxHQUFHLENBQ1g7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUosU0FBSyxFQUFFLGFBRlQ7QUFHRUUsUUFBSSxF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QXNDLFdBRHpDLGdCQURGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLEVBT0dWLFNBQVMsQ0FBQ2tCLEdBQVYsQ0FBYyxVQUFDQyxDQUFELEVBQUs7QUFDbEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0QsR0FGQSxDQVBILENBREY7QUFhRCxDQS9FRDs7R0FBTWhDLFE7VUFDV0UscUQ7OztLQURYRixRO0FBaUZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcUXVlc3Rpb24uanMuNGMyZmMwN2UwZmM2MTFjNTY1MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHB1YmxpY0ZldGNoIH0gZnJvbSAnLi4vLi4vdXRpbC9mZXRjaGVyJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5cclxuY29uc3QgUXVlc3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnVGl0bGUnLFxyXG4gICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnRpdGxlLFxyXG4gICAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1llYXInLFxyXG4gICAgICBzZWxlY3RvcjogKHJvdykgPT4gcm93LnllYXIsXHJcbiAgICAgIHNvcnRhYmxlOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG5cclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgdGl0bGU6ICdCZWV0bGVqdWljZScsXHJcbiAgICAgIHllYXI6ICcxOTg4J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHRpdGxlOiAnR2hvc3RidXN0ZXJzJyxcclxuICAgICAgeWVhcjogJzE5ODQnXHJcbiAgICB9XHJcbiAgXVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbc29ydFR5cGUsIHNldFNvcnRUeXBlXSA9IHVzZVN0YXRlKCdWb3RlcycpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFF1ZXN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHB1YmxpY0ZldGNoLmdldCgnL3F1ZXN0aW9uJylcclxuICAgICAgc2V0UXVlc3Rpb25zKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hRdWVzdGlvbkJ5VGFnID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHB1YmxpY0ZldGNoLmdldChgL3F1ZXN0aW9ucy8ke3JvdXRlci5xdWVyeS50YWd9YClcclxuICAgICAgc2V0UXVlc3Rpb25zKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvdXRlci5xdWVyeS50YWcpIHtcclxuICAgICAgZmV0Y2hRdWVzdGlvbkJ5VGFnKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZldGNoUXVlc3Rpb24oKVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkudGFnXSlcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgY29uc3QgaGFuZGxlU29ydGluZyA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAoc29ydFR5cGUpIHtcclxuICAgICAgY2FzZSAnVm90ZXMnOlxyXG4gICAgICAgIHJldHVybiAoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmVcclxuICAgICAgY2FzZSAnVmlld3MnOlxyXG4gICAgICAgIHJldHVybiAoYSwgYikgPT4gYi52aWV3cyAtIGEudmlld3NcclxuICAgICAgY2FzZSAnTmV3ZXN0JzpcclxuICAgICAgICByZXR1cm4gKGEsIGIpID0+IG5ldyBEYXRlKGIuY3JlYXRlZCkgLSBuZXcgRGF0ZShhLmNyZWF0ZWQpXHJcbiAgICAgIGNhc2UgJ09sZGVzdCc6XHJcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBuZXcgRGF0ZShhLmNyZWF0ZWQpIC0gbmV3IERhdGUoYi5jcmVhdGVkKVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAge3JvdXRlci5xdWVyeS50YWcgPyByb3V0ZXIucXVlcnkudGFnIDogJ1F1ZXN0aW9ucyd9IC0gVGFrZUNvZGVcclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxoMj5BbGwgUXVlc3Rpb25zPC9oMj5cclxuICAgICAge3F1ZXN0aW9ucy5tYXAoKGUpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
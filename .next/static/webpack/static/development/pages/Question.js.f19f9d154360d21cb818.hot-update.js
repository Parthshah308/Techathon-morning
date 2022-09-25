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

  var _Approved;

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
  })), questions.status == ((_Approved = "Approved") === null || _Approved === void 0 ? void 0 : _Approved.sort(handleSorting()).map(function (_ref3) {
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
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9RdWVzdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJ1c2VTdGF0ZSIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsInNvcnRUeXBlIiwic2V0U29ydFR5cGUiLCJ1c2VFZmZlY3QiLCJmZXRjaFF1ZXN0aW9uIiwicHVibGljRmV0Y2giLCJnZXQiLCJkYXRhIiwiZmV0Y2hRdWVzdGlvbkJ5VGFnIiwicXVlcnkiLCJ0YWciLCJoYW5kbGVTb3J0aW5nIiwiYSIsImIiLCJzY29yZSIsInZpZXdzIiwiRGF0ZSIsImNyZWF0ZWQiLCJzdGF0dXMiLCJzb3J0IiwibWFwIiwiaWQiLCJ2b3RlcyIsImFuc3dlcnMiLCJ0aXRsZSIsInRleHQiLCJ0YWdzIiwiYXV0aG9yIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQTs7QUFDckIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEcUIsb0JBRWVDLHdEQUFVLENBQUNDLHVEQUFELENBRnpCO0FBQUEsTUFFYkMsZUFGYSxlQUViQSxlQUZhO0FBQUEsTUFFSUMsT0FGSixlQUVJQSxPQUZKOztBQUFBLGtCQUlhQyxzREFBUSxDQUFDLElBQUQsQ0FKckI7QUFBQSxNQUlkQyxTQUpjO0FBQUEsTUFJSEMsWUFKRzs7QUFBQSxtQkFLV0Ysc0RBQVEsQ0FBQyxPQUFELENBTG5CO0FBQUEsTUFLZEcsUUFMYztBQUFBLE1BS0pDLFdBTEk7O0FBUXJCQyx5REFBUyxDQUFDLFlBQU07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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxRdWVzdGlvbi5qcy5mMTlmOWQxNTQzNjBkMjFjYjgxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBwdWJsaWNGZXRjaCB9IGZyb20gJy4uLy4uL3V0aWwvZmV0Y2hlcidcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoJ1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IFF1ZXN0aW9uV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLXdyYXBwZXInXHJcbmltcG9ydCBRdWVzdGlvblN0YXRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24tc3RhdHMnXHJcbmltcG9ydCBRdWVzdGlvblN1bW1hcnkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi1zdW1tYXJ5J1xyXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFnZS10aXRsZSdcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJ1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pY29ucydcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgLGlzQWRtaW59ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzb3J0VHlwZSwgc2V0U29ydFR5cGVdID0gdXNlU3RhdGUoJ1ZvdGVzJylcclxuIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hRdWVzdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwdWJsaWNGZXRjaC5nZXQoJy9xdWVzdGlvbicpXHJcbiAgICAgIHNldFF1ZXN0aW9ucyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZldGNoUXVlc3Rpb25CeVRhZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwdWJsaWNGZXRjaC5nZXQoYC9xdWVzdGlvbnMvJHtyb3V0ZXIucXVlcnkudGFnfWApXHJcbiAgICAgIHNldFF1ZXN0aW9ucyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb3V0ZXIucXVlcnkudGFnKSB7XHJcbiAgICAgIGZldGNoUXVlc3Rpb25CeVRhZygpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmZXRjaFF1ZXN0aW9uKClcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LnRhZ10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNvcnRpbmcgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHNvcnRUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ1ZvdGVzJzpcclxuICAgICAgICByZXR1cm4gKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlXHJcbiAgICAgIGNhc2UgJ1ZpZXdzJzpcclxuICAgICAgICByZXR1cm4gKGEsIGIpID0+IGIudmlld3MgLSBhLnZpZXdzXHJcbiAgICAgIGNhc2UgJ05ld2VzdCc6XHJcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBuZXcgRGF0ZShiLmNyZWF0ZWQpIC0gbmV3IERhdGUoYS5jcmVhdGVkKVxyXG4gICAgICBjYXNlICdPbGRlc3QnOlxyXG4gICAgICAgIHJldHVybiAoYSwgYikgPT4gbmV3IERhdGUoYS5jcmVhdGVkKSAtIG5ldyBEYXRlKGIuY3JlYXRlZClcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgIHtyb3V0ZXIucXVlcnkudGFnID8gcm91dGVyLnF1ZXJ5LnRhZyA6ICdRdWVzdGlvbnMnfSAtIENsb25lIG9mXHJcbiAgICAgICAgICBTdGFja292ZXJmbG93XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgXHJcbiAgICAgIDxCdXR0b25Hcm91cFxyXG4gICAgICAgIGJvcmRlckJvdHRvbVxyXG4gICAgICAgIGJ1dHRvbnM9e1sgJ05ld2VzdCcsICdPbGRlc3QnXX1cclxuICAgICAgICBzZWxlY3RlZD17c29ydFR5cGV9XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNvcnRUeXBlfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgeyFxdWVzdGlvbnMgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxyXG4gICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtxdWVzdGlvbnMuc3RhdHVzPT1cIkFwcHJvdmVkXCJcclxuICAgICAgICA/LnNvcnQoaGFuZGxlU29ydGluZygpKVxyXG4gICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAoe1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgdm90ZXMsXHJcbiAgICAgICAgICAgIGFuc3dlcnMsXHJcbiAgICAgICAgICAgIHZpZXdzLFxyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgdGFncyxcclxuICAgICAgICAgICAgYXV0aG9yLFxyXG4gICAgICAgICAgICBjcmVhdGVkLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgPFF1ZXN0aW9uV3JhcHBlciBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICB7IWlzQXV0aGVudGljYXRlZCgpICYmICFpc0FkbWluKCkgPyA8UXVlc3Rpb25TdGF0c1xyXG4gICAgICAgICAgICAgICAgdm90ZUNvdW50PXt2b3Rlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJDb3VudD17YW5zd2Vycy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICB2aWV3PXt2aWV3c31cclxuICAgICAgICAgICAgICAvPiA6KDw+PC8+KX1cclxuICAgICAgICAgICAgICA8UXVlc3Rpb25TdW1tYXJ5XHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICB0YWdzPXt0YWdzfVxyXG4gICAgICAgICAgICAgICAgYXV0aG9yPXthdXRob3J9XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkVGltZT17Y3JlYXRlZH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgICAgICAgIDwvUXVlc3Rpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgICA8L1F1ZXN0aW9uV3JhcHBlcj5cclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
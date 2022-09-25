webpackHotUpdate("static\\development\\pages\\Question.js",{

/***/ "./components/layout/extra/index.js":
/*!******************************************!*\
  !*** ./components/layout/extra/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _store_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/tag */ "./store/tag.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tag */ "./components/tag/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _extra_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extra.module.css */ "./components/layout/extra/extra.module.css");
/* harmony import */ var _extra_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_extra_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\HP\\OneDrive\\Documents\\vercel1\\vercel1\\components\\layout\\extra\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Extra = function Extra(_ref) {
  _s();

  var _ref$marginTop = _ref.marginTop,
      marginTop = _ref$marginTop === void 0 ? 24 : _ref$marginTop;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_tag__WEBPACK_IMPORTED_MODULE_2__["TagContext"]),
      tagState = _useContext.tagState;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_1__["AuthContext"]),
      isAuthenticated = _useContext2.isAuthenticated,
      isAdmin = _useContext2.isAdmin;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "  ", !isAuthenticated() && !isAdmin() ? __jsx("div", {
    className: _extra_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 51
    }
  }, __jsx("div", {
    className: _extra_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.tagContainer,
    style: {
      marginTop: "".concat(marginTop, "px")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Popular Tags"), !tagState && __jsx("div", {
    className: "loading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _extra_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.popularTags,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, tagState === null || tagState === void 0 ? void 0 : tagState.map(function (tag) {
    return __jsx(_tag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: tag._id,
      count: tag.count,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, tag._id);
  })))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));
};

_s(Extra, "ZAuSUQUJATyMTyzeDNpag1gLQnI=");

_c = Extra;
/* harmony default export */ __webpack_exports__["default"] = (Extra);

var _c;

$RefreshReg$(_c, "Extra");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9leHRyYS9pbmRleC5qcyJdLCJuYW1lcyI6WyJFeHRyYSIsIm1hcmdpblRvcCIsInVzZUNvbnRleHQiLCJUYWdDb250ZXh0IiwidGFnU3RhdGUiLCJBdXRoQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJzdHlsZXMiLCJjb250YWluZXIiLCJ0YWdDb250YWluZXIiLCJwb3B1bGFyVGFncyIsIm1hcCIsInRhZyIsIl9pZCIsImNvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBd0I7QUFBQTs7QUFBQSw0QkFBckJDLFNBQXFCO0FBQUEsTUFBckJBLFNBQXFCLCtCQUFULEVBQVM7O0FBQUEsb0JBQ2ZDLHdEQUFVLENBQUNDLHFEQUFELENBREs7QUFBQSxNQUM1QkMsUUFENEIsZUFDNUJBLFFBRDRCOztBQUFBLHFCQUdBRix3REFBVSxDQUFDRyx1REFBRCxDQUhWO0FBQUEsTUFHNUJDLGVBSDRCLGdCQUc1QkEsZUFINEI7QUFBQSxNQUdYQyxPQUhXLGdCQUdYQSxPQUhXOztBQUlwQyxTQUFRLHlFQUFLLENBQUNELGVBQWUsRUFBaEIsSUFBc0IsQ0FBQ0MsT0FBTyxFQUE5QixHQUFtQztBQUFLLGFBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUM1QztBQUNFLGFBQVMsRUFBRUQsd0RBQU0sQ0FBQ0UsWUFEcEI7QUFFRSxTQUFLLEVBQUU7QUFBRVQsZUFBUyxZQUFLQSxTQUFMO0FBQVgsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixFQUtHLENBQUNHLFFBQUQsSUFDQztBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5KLEVBVUU7QUFBSyxhQUFTLEVBQUVJLHdEQUFNLENBQUNHLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsUUFESCxhQUNHQSxRQURILHVCQUNHQSxRQUFRLENBQUVRLEdBQVYsQ0FBYyxVQUFDQyxHQUFEO0FBQUEsV0FDYixNQUFDLDRDQUFEO0FBQUssU0FBRyxFQUFFQSxHQUFHLENBQUNDLEdBQWQ7QUFBbUIsV0FBSyxFQUFFRCxHQUFHLENBQUNFLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0YsR0FBRyxDQUFDQyxHQURQLENBRGE7QUFBQSxHQUFkLENBREgsQ0FWRixDQUQ0QyxDQUFuQyxHQW1CRCxrRUFuQkosQ0FBUjtBQXFCRCxDQXpCRDs7R0FBTWQsSzs7S0FBQUEsSztBQTJCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFF1ZXN0aW9uLmpzLmZjNzMyYTEwNzc4N2I4NTA5OGIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hdXRoJ1xuaW1wb3J0IHsgVGFnQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3RhZydcblxuaW1wb3J0IFRhZyBmcm9tICcuLi8uLi90YWcnXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9leHRyYS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBFeHRyYSA9ICh7IG1hcmdpblRvcCA9IDI0IH0pID0+IHtcbiAgY29uc3QgeyB0YWdTdGF0ZSB9ID0gdXNlQ29udGV4dChUYWdDb250ZXh0KVxuXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkICxpc0FkbWlufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICByZXR1cm4gKDw+ICB7IWlzQXV0aGVudGljYXRlZCgpICYmICFpc0FkbWluKCkgPyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhZ0NvbnRhaW5lcn1cbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBgJHttYXJnaW5Ub3B9cHhgIH19XG4gICAgICA+XG4gICAgICAgIDxoMj5Qb3B1bGFyIFRhZ3M8L2gyPlxuICAgICAgICB7IXRhZ1N0YXRlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdWxhclRhZ3N9PlxuICAgICAgICAgIHt0YWdTdGF0ZT8ubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgIDxUYWcga2V5PXt0YWcuX2lkfSBjb3VudD17dGFnLmNvdW50fT5cbiAgICAgICAgICAgICAge3RhZy5faWR9XG4gICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gOiAoPD48Lz4pfVxuICA8Lz4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4dHJhXG4iXSwic291cmNlUm9vdCI6IiJ9
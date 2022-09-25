webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/navigation/index.js":
/*!****************************************!*\
  !*** ./components/navigation/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-item */ "./components/navigation/nav-item/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation.module.css */ "./components/navigation/navigation.module.css");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\HP\\OneDrive\\Documents\\vercel1\\vercel1\\components\\navigation\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Navigation = function Navigation() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]),
      isAuthenticated = _useContext.isAuthenticated,
      isAdmin = _useContext.isAdmin;

  return __jsx("nav", {
    className: _navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, isAuthenticated() ? isAd(__jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/Dashboard",
    selected: router.pathname.split('/')[1] == 'Dashboard',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 35
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Dashboard"))) : __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 22
    }
  }), __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    selected: router.pathname == '/' || router.pathname.split('/')[1] == 'questions',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_3__["World"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "TakeCode")), __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/Question",
    selected: router.pathname.split('/')[1] == 'Question',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Questions")), __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/tags",
    selected: router.pathname == '/tags',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Tags")), __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/users",
    selected: router.pathname.split('/')[1] == 'users',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Users")));
};

_s(Navigation, "A/mI9WuNP2hcqZ05Lo5iYbO3+/A=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Navigation;
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

var _c;

$RefreshReg$(_c, "Navigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24vaW5kZXguanMiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJzdHlsZXMiLCJuYXYiLCJpc0FkIiwicGF0aG5hbWUiLCJzcGxpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHVCLG9CQUVhQyx3REFBVSxDQUFDQyx1REFBRCxDQUZ2QjtBQUFBLE1BRWZDLGVBRmUsZUFFZkEsZUFGZTtBQUFBLE1BRUNDLE9BRkQsZUFFQ0EsT0FGRDs7QUFHdkIsU0FDRTtBQUFLLGFBQVMsRUFBRUMsNkRBQU0sQ0FBQ0MsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxlQUFlLEtBQUtJLElBQUksQ0FBRyxNQUFDLGlEQUFEO0FBQzFCLFFBQUksRUFBQyxZQURxQjtBQUUxQixZQUFRLEVBQUVSLE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkMsS0FBaEIsQ0FBc0IsR0FBdEIsRUFBMkIsQ0FBM0IsS0FBaUMsV0FGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUkxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUowQixDQUFILENBQVQsR0FLRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTmpCLEVBUUUsTUFBQyxpREFBRDtBQUNFLFFBQUksRUFBQyxHQURQO0FBRUUsWUFBUSxFQUNOVixNQUFNLENBQUNTLFFBQVAsSUFBbUIsR0FBbkIsSUFBMEJULE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkMsS0FBaEIsQ0FBc0IsR0FBdEIsRUFBMkIsQ0FBM0IsS0FBaUMsV0FIL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixDQVJGLEVBaUJFLE1BQUMsaURBQUQ7QUFDRSxRQUFJLEVBQUMsV0FEUDtBQUVFLFlBQVEsRUFBRVYsTUFBTSxDQUFDUyxRQUFQLENBQWdCQyxLQUFoQixDQUFzQixHQUF0QixFQUEyQixDQUEzQixLQUFpQyxVQUY3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixDQWpCRixFQXVCRSxNQUFDLGlEQUFEO0FBQVMsUUFBSSxFQUFDLE9BQWQ7QUFBc0IsWUFBUSxFQUFFVixNQUFNLENBQUNTLFFBQVAsSUFBbUIsT0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQXZCRixFQTJCRSxNQUFDLGlEQUFEO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxZQUFRLEVBQUVULE1BQU0sQ0FBQ1MsUUFBUCxDQUFnQkMsS0FBaEIsQ0FBc0IsR0FBdEIsRUFBMkIsQ0FBM0IsS0FBaUMsT0FGN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixDQTNCRixDQURGO0FBb0NELENBdkNEOztHQUFNWCxVO1VBQ1dFLHFEOzs7S0FEWEYsVTtBQXlDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjVmYmE2OWQ2NTUzNDIzYjcxYjg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgTmF2SXRlbSBmcm9tICcuL25hdi1pdGVtJ1xuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuLi9pY29ucydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24ubW9kdWxlLmNzcydcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aCdcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsaXNBZG1pbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxuICAgICAge2lzQXV0aGVudGljYXRlZCgpID8gaXNBZCAoIDxOYXZJdGVtXG4gICAgICAgIGhyZWY9XCIvRGFzaGJvYXJkXCJcbiAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZS5zcGxpdCgnLycpWzFdID09ICdEYXNoYm9hcmQnfVxuICAgICAgPlxuICAgICAgICA8c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+XG4gICAgICA8L05hdkl0ZW0+KSA6ICg8c3Bhbj48L3NwYW4+KX1cbiAgICAgXG4gICAgICA8TmF2SXRlbVxuICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgIHNlbGVjdGVkPXtcbiAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gJy8nIHx8IHJvdXRlci5wYXRobmFtZS5zcGxpdCgnLycpWzFdID09ICdxdWVzdGlvbnMnXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPFdvcmxkIC8+XG4gICAgICAgIDxzcGFuPlRha2VDb2RlPC9zcGFuPlxuICAgICAgPC9OYXZJdGVtPlxuICAgICAgPE5hdkl0ZW1cbiAgICAgICAgaHJlZj1cIi9RdWVzdGlvblwiXG4gICAgICAgIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUuc3BsaXQoJy8nKVsxXSA9PSAnUXVlc3Rpb24nfVxuICAgICAgPlxuICAgICAgICA8c3Bhbj5RdWVzdGlvbnM8L3NwYW4+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgICA8TmF2SXRlbSBocmVmPVwiL3RhZ3NcIiBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09ICcvdGFncyd9PlxuICAgICAgICA8c3Bhbj5UYWdzPC9zcGFuPlxuICAgICAgPC9OYXZJdGVtPlxuXG4gICAgICA8TmF2SXRlbVxuICAgICAgICBocmVmPVwiL3VzZXJzXCJcbiAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZS5zcGxpdCgnLycpWzFdID09ICd1c2Vycyd9XG4gICAgICA+XG4gICAgICAgIDxzcGFuPlVzZXJzPC9zcGFuPlxuICAgICAgPC9OYXZJdGVtPlxuICAgIDwvbmF2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=
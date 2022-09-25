webpackHotUpdate("static\\development\\pages\\Question.js",{

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
      isAuthenticated = _useContext.isAuthenticated;

  return __jsx("nav", {
    className: _navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, isAuthenticated() ? __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/Dashboard",
    selected: router.pathname.split('/')[1] == 'Dashboard',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 31
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Dashboard")) : __jsx("span", {
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

_s(Navigation, "kkk3EfTpnf1wlQhDE/gjXFUFxD8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24vaW5kZXguanMiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsInN0eWxlcyIsIm5hdiIsInBhdGhuYW1lIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUN2QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUR1QixvQkFFS0Msd0RBQVUsQ0FBQ0MsdURBQUQsQ0FGZjtBQUFBLE1BRWZDLGVBRmUsZUFFZkEsZUFGZTs7QUFHdkIsU0FDRTtBQUFLLGFBQVMsRUFBRUMsNkRBQU0sQ0FBQ0MsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixlQUFlLEtBQVEsTUFBQyxpREFBRDtBQUN0QixRQUFJLEVBQUMsWUFEaUI7QUFFdEIsWUFBUSxFQUFFSixNQUFNLENBQUNPLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLEtBQWlDLFdBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKc0IsQ0FBUixHQUtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOakIsRUFRRSxNQUFDLGlEQUFEO0FBQ0UsUUFBSSxFQUFDLEdBRFA7QUFFRSxZQUFRLEVBQ05SLE1BQU0sQ0FBQ08sUUFBUCxJQUFtQixHQUFuQixJQUEwQlAsTUFBTSxDQUFDTyxRQUFQLENBQWdCQyxLQUFoQixDQUFzQixHQUF0QixFQUEyQixDQUEzQixLQUFpQyxXQUgvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLENBUkYsRUFpQkUsTUFBQyxpREFBRDtBQUNFLFFBQUksRUFBQyxXQURQO0FBRUUsWUFBUSxFQUFFUixNQUFNLENBQUNPLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLEtBQWlDLFVBRjdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLENBakJGLEVBdUJFLE1BQUMsaURBQUQ7QUFBUyxRQUFJLEVBQUMsT0FBZDtBQUFzQixZQUFRLEVBQUVSLE1BQU0sQ0FBQ08sUUFBUCxJQUFtQixPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBdkJGLEVBMkJFLE1BQUMsaURBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFlBQVEsRUFBRVAsTUFBTSxDQUFDTyxRQUFQLENBQWdCQyxLQUFoQixDQUFzQixHQUF0QixFQUEyQixDQUEzQixLQUFpQyxPQUY3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLENBM0JGLENBREY7QUFvQ0QsQ0F2Q0Q7O0dBQU1ULFU7VUFDV0UscUQ7OztLQURYRixVO0FBeUNTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcUXVlc3Rpb24uanMuNTkzNDQ2NGZkYmIzYTFkN2I1ZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyAgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCBOYXZJdGVtIGZyb20gJy4vbmF2LWl0ZW0nXG5pbXBvcnQgeyBXb3JsZCB9IGZyb20gJy4uL2ljb25zJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2aWdhdGlvbi5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoJ1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxuICAgICAge2lzQXV0aGVudGljYXRlZCgpID8gICggPE5hdkl0ZW1cbiAgICAgICAgaHJlZj1cIi9EYXNoYm9hcmRcIlxuICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lLnNwbGl0KCcvJylbMV0gPT0gJ0Rhc2hib2FyZCd9XG4gICAgICA+XG4gICAgICAgIDxzcGFuPkRhc2hib2FyZDwvc3Bhbj5cbiAgICAgIDwvTmF2SXRlbT4pIDogKDxzcGFuPjwvc3Bhbj4pfVxuICAgICBcbiAgICAgIDxOYXZJdGVtXG4gICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgc2VsZWN0ZWQ9e1xuICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSAnLycgfHwgcm91dGVyLnBhdGhuYW1lLnNwbGl0KCcvJylbMV0gPT0gJ3F1ZXN0aW9ucydcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8V29ybGQgLz5cbiAgICAgICAgPHNwYW4+VGFrZUNvZGU8L3NwYW4+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgICA8TmF2SXRlbVxuICAgICAgICBocmVmPVwiL1F1ZXN0aW9uXCJcbiAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZS5zcGxpdCgnLycpWzFdID09ICdRdWVzdGlvbid9XG4gICAgICA+XG4gICAgICAgIDxzcGFuPlF1ZXN0aW9uczwvc3Bhbj5cbiAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDxOYXZJdGVtIGhyZWY9XCIvdGFnc1wiIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy90YWdzJ30+XG4gICAgICAgIDxzcGFuPlRhZ3M8L3NwYW4+XG4gICAgICA8L05hdkl0ZW0+XG5cbiAgICAgIDxOYXZJdGVtXG4gICAgICAgIGhyZWY9XCIvdXNlcnNcIlxuICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lLnNwbGl0KCcvJylbMV0gPT0gJ3VzZXJzJ31cbiAgICAgID5cbiAgICAgICAgPHNwYW4+VXNlcnM8L3NwYW4+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgPC9uYXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
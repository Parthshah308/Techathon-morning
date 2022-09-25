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
  }, isAuthenticated() && isAdmin() ? __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/Dashboard",
    selected: router.pathname.split('/')[1] == 'Dashboard',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 43
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
  }, "TakeCode")), isAuthenticated() && isAdmin() ? __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/Question",
    selected: router.pathname.split('/')[1] == 'Question',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 42
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Questions")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

_s(Navigation, "mj1VNLpSUViao/L0IfFGYSSHXDs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24vaW5kZXguanMiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJzdHlsZXMiLCJuYXYiLCJwYXRobmFtZSIsInNwbGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEdUIsb0JBRWFDLHdEQUFVLENBQUNDLHVEQUFELENBRnZCO0FBQUEsTUFFZkMsZUFGZSxlQUVmQSxlQUZlO0FBQUEsTUFFRUMsT0FGRixlQUVFQSxPQUZGOztBQUd2QixTQUNFO0FBQUssYUFBUyxFQUFFQyw2REFBTSxDQUFDQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILGVBQWUsTUFBTUMsT0FBTyxFQUE1QixHQUFtQyxNQUFDLGlEQUFEO0FBQ2xDLFFBQUksRUFBQyxZQUQ2QjtBQUVsQyxZQUFRLEVBQUVMLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQkMsS0FBaEIsQ0FBc0IsR0FBdEIsRUFBMkIsQ0FBM0IsS0FBaUMsV0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSmtDLENBQW5DLEdBS2M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5qQixFQVFFLE1BQUMsaURBQUQ7QUFDRSxRQUFJLEVBQUMsR0FEUDtBQUVFLFlBQVEsRUFDTlQsTUFBTSxDQUFDUSxRQUFQLElBQW1CLEdBQW5CLElBQTBCUixNQUFNLENBQUNRLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLEtBQWlDLFdBSC9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsQ0FSRixFQWlCR0wsZUFBZSxNQUFNQyxPQUFPLEVBQTVCLEdBQWtDLE1BQUMsaURBQUQ7QUFDakMsUUFBSSxFQUFDLFdBRDRCO0FBRWpDLFlBQVEsRUFBRUwsTUFBTSxDQUFDUSxRQUFQLENBQWdCQyxLQUFoQixDQUFzQixHQUF0QixFQUEyQixDQUEzQixLQUFpQyxVQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKaUMsQ0FBbEMsR0FLVyxrRUF0QmQsRUF1QkUsTUFBQyxpREFBRDtBQUFTLFFBQUksRUFBQyxPQUFkO0FBQXNCLFlBQVEsRUFBRVQsTUFBTSxDQUFDUSxRQUFQLElBQW1CLE9BQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0F2QkYsRUEyQkUsTUFBQyxpREFBRDtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsWUFBUSxFQUFFUixNQUFNLENBQUNRLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLEtBQWlDLE9BRjdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsQ0EzQkYsQ0FERjtBQW9DRCxDQXZDRDs7R0FBTVYsVTtVQUNXRSxxRDs7O0tBRFhGLFU7QUF5Q1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iMGZlYmE2N2E0ZDNmYjkxYzFlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7ICB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IE5hdkl0ZW0gZnJvbSAnLi9uYXYtaXRlbSdcbmltcG9ydCB7IFdvcmxkIH0gZnJvbSAnLi4vaWNvbnMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL2F1dGgnXG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkICxpc0FkbWlufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgIHtpc0F1dGhlbnRpY2F0ZWQoKSAmJiBpc0FkbWluKCkgPyAoIDxOYXZJdGVtXG4gICAgICAgIGhyZWY9XCIvRGFzaGJvYXJkXCJcbiAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZS5zcGxpdCgnLycpWzFdID09ICdEYXNoYm9hcmQnfVxuICAgICAgPlxuICAgICAgICA8c3Bhbj5EYXNoYm9hcmQ8L3NwYW4+XG4gICAgICA8L05hdkl0ZW0+KSA6ICg8c3Bhbj48L3NwYW4+KX1cbiAgICAgXG4gICAgICA8TmF2SXRlbVxuICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgIHNlbGVjdGVkPXtcbiAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gJy8nIHx8IHJvdXRlci5wYXRobmFtZS5zcGxpdCgnLycpWzFdID09ICdxdWVzdGlvbnMnXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPFdvcmxkIC8+XG4gICAgICAgIDxzcGFuPlRha2VDb2RlPC9zcGFuPlxuICAgICAgPC9OYXZJdGVtPlxuICAgICAge2lzQXV0aGVudGljYXRlZCgpICYmIGlzQWRtaW4oKSA/ICg8TmF2SXRlbVxuICAgICAgICBocmVmPVwiL1F1ZXN0aW9uXCJcbiAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZS5zcGxpdCgnLycpWzFdID09ICdRdWVzdGlvbid9XG4gICAgICA+XG4gICAgICAgIDxzcGFuPlF1ZXN0aW9uczwvc3Bhbj5cbiAgICAgIDwvTmF2SXRlbT4pOjw+PC8+fVxuICAgICAgPE5hdkl0ZW0gaHJlZj1cIi90YWdzXCIgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZSA9PSAnL3RhZ3MnfT5cbiAgICAgICAgPHNwYW4+VGFnczwvc3Bhbj5cbiAgICAgIDwvTmF2SXRlbT5cblxuICAgICAgPE5hdkl0ZW1cbiAgICAgICAgaHJlZj1cIi91c2Vyc1wiXG4gICAgICAgIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUuc3BsaXQoJy8nKVsxXSA9PSAndXNlcnMnfVxuICAgICAgPlxuICAgICAgICA8c3Bhbj5Vc2Vyczwvc3Bhbj5cbiAgICAgIDwvTmF2SXRlbT5cbiAgICA8L25hdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXG4iXSwic291cmNlUm9vdCI6IiJ9
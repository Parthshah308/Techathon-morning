webpackHotUpdate("static\\development\\pages\\Question.js",{

/***/ "./store/auth.js":
/*!***********************!*\
  !*** ./store/auth.js ***!
  \***********************/
/*! exports provided: AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\HP\\OneDrive\\Documents\\vercel1\\vercel1\\store\\auth.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var Provider = AuthContext.Provider;

var AuthProvider = function AuthProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      authState = _useState[0],
      setAuthState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var token = localStorage.getItem('token');
    var userInfo = localStorage.getItem('userInfo');
    var expiresAt = localStorage.getItem('expiresAt');
    setAuthState({
      token: token,
      expiresAt: expiresAt,
      userInfo: userInfo ? JSON.parse(userInfo) : {}
    });
  }, []);

  var setAuthInfo = function setAuthInfo(_ref2) {
    var token = _ref2.token,
        userInfo = _ref2.userInfo,
        expiresAt = _ref2.expiresAt;
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('expiresAt', expiresAt);
    setAuthState({
      token: token,
      userInfo: userInfo,
      expiresAt: expiresAt
    });
  };

  var logout = function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    setAuthState({});
  };

  var isAuthenticated = function isAuthenticated() {
    if (!authState.token || !authState.expiresAt) {
      return false;
    }

    return new Date().getTime() / 1000 < authState.expiresAt;
  };

  var isAdmin = function isAdmin() {
    var _authState$userInfo;

    return ((_authState$userInfo = authState.userInfo) === null || _authState$userInfo === void 0 ? void 0 : _authState$userInfo.role) === 'moderator';
  };

  return __jsx(Provider, {
    value: {
      authState: authState,
      setAuthState: function setAuthState(authInfo) {
        return setAuthInfo(authInfo);
      },
      logout: logout,
      isAuthenticated: isAuthenticated,
      isAdmin: isAdmin
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, children);
};

_s(AuthProvider, "8NY8Ru65LkWpH2YOFd2Oak7Rs7M=");

_c = AuthProvider;


var _c;

$RefreshReg$(_c, "AuthProvider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9hdXRoLmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVyIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImF1dGhTdGF0ZSIsInNldEF1dGhTdGF0ZSIsInVzZUVmZmVjdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJJbmZvIiwiZXhwaXJlc0F0IiwiSlNPTiIsInBhcnNlIiwic2V0QXV0aEluZm8iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsImlzQXV0aGVudGljYXRlZCIsIkRhdGUiLCJnZXRUaW1lIiwiaXNBZG1pbiIsInJvbGUiLCJhdXRoSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsMkRBQWEsRUFBakM7SUFDUUMsUSxHQUFhRixXLENBQWJFLFE7O0FBRVIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDOUJDLFNBRDhCO0FBQUEsTUFDbkJDLFlBRG1COztBQUdyQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUNBLFFBQU1DLFFBQVEsR0FBR0YsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQWpCO0FBQ0EsUUFBTUUsU0FBUyxHQUFHSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBbEI7QUFFQUosZ0JBQVksQ0FBQztBQUNYRSxXQUFLLEVBQUxBLEtBRFc7QUFFWEksZUFBUyxFQUFUQSxTQUZXO0FBR1hELGNBQVEsRUFBRUEsUUFBUSxHQUFHRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsUUFBWCxDQUFILEdBQTBCO0FBSGpDLEtBQUQsQ0FBWjtBQUtELEdBVlEsRUFVTixFQVZNLENBQVQ7O0FBWUEsTUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFBb0M7QUFBQSxRQUFqQ1AsS0FBaUMsU0FBakNBLEtBQWlDO0FBQUEsUUFBMUJHLFFBQTBCLFNBQTFCQSxRQUEwQjtBQUFBLFFBQWhCQyxTQUFnQixTQUFoQkEsU0FBZ0I7QUFDdERILGdCQUFZLENBQUNPLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJSLEtBQTlCO0FBQ0FDLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNILElBQUksQ0FBQ0ksU0FBTCxDQUFlTixRQUFmLENBQWpDO0FBQ0FGLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0NKLFNBQWxDO0FBRUFOLGdCQUFZLENBQUM7QUFDWEUsV0FBSyxFQUFMQSxLQURXO0FBRVhHLGNBQVEsRUFBUkEsUUFGVztBQUdYQyxlQUFTLEVBQVRBO0FBSFcsS0FBRCxDQUFaO0FBS0QsR0FWRDs7QUFZQSxNQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CVCxnQkFBWSxDQUFDVSxVQUFiLENBQXdCLE9BQXhCO0FBQ0FWLGdCQUFZLENBQUNVLFVBQWIsQ0FBd0IsVUFBeEI7QUFDQVYsZ0JBQVksQ0FBQ1UsVUFBYixDQUF3QixXQUF4QjtBQUNBYixnQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNELEdBTEQ7O0FBT0EsTUFBTWMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFFBQUksQ0FBQ2YsU0FBUyxDQUFDRyxLQUFYLElBQW9CLENBQUNILFNBQVMsQ0FBQ08sU0FBbkMsRUFBOEM7QUFDNUMsYUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxJQUFJUyxJQUFKLEdBQVdDLE9BQVgsS0FBdUIsSUFBdkIsR0FBOEJqQixTQUFTLENBQUNPLFNBQS9DO0FBQ0QsR0FMRDs7QUFPQSxNQUFNVyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLFdBQU8sd0JBQUFsQixTQUFTLENBQUNNLFFBQVYsNEVBQW9CYSxJQUFwQixNQUE2QixXQUFwQztBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLFFBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTG5CLGVBQVMsRUFBVEEsU0FESztBQUVMQyxrQkFBWSxFQUFFLHNCQUFDbUIsUUFBRDtBQUFBLGVBQWNWLFdBQVcsQ0FBQ1UsUUFBRCxDQUF6QjtBQUFBLE9BRlQ7QUFHTFAsWUFBTSxFQUFOQSxNQUhLO0FBSUxFLHFCQUFlLEVBQWZBLGVBSks7QUFLTEcsYUFBTyxFQUFQQTtBQUxLLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNHcEIsUUFUSCxDQURGO0FBYUQsQ0ExREQ7O0dBQU1ELFk7O0tBQUFBLFk7QUE0RE4iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFF1ZXN0aW9uLmpzLmI3YTcyOTgyMGJjOGMxYzVlMTAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuY29uc3QgeyBQcm92aWRlciB9ID0gQXV0aENvbnRleHRcblxuY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbYXV0aFN0YXRlLCBzZXRBdXRoU3RhdGVdID0gdXNlU3RhdGUoe30pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgY29uc3QgdXNlckluZm8gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckluZm8nKVxuICAgIGNvbnN0IGV4cGlyZXNBdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVzQXQnKVxuXG4gICAgc2V0QXV0aFN0YXRlKHtcbiAgICAgIHRva2VuLFxuICAgICAgZXhwaXJlc0F0LFxuICAgICAgdXNlckluZm86IHVzZXJJbmZvID8gSlNPTi5wYXJzZSh1c2VySW5mbykgOiB7fVxuICAgIH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHNldEF1dGhJbmZvID0gKHsgdG9rZW4sIHVzZXJJbmZvLCBleHBpcmVzQXQgfSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySW5mbycsIEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvKSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXhwaXJlc0F0JywgZXhwaXJlc0F0KVxuXG4gICAgc2V0QXV0aFN0YXRlKHtcbiAgICAgIHRva2VuLFxuICAgICAgdXNlckluZm8sXG4gICAgICBleHBpcmVzQXRcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJbmZvJylcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZXhwaXJlc0F0JylcbiAgICBzZXRBdXRoU3RhdGUoe30pXG4gIH1cblxuICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKCFhdXRoU3RhdGUudG9rZW4gfHwgIWF1dGhTdGF0ZS5leHBpcmVzQXQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwIDwgYXV0aFN0YXRlLmV4cGlyZXNBdFxuICB9XG5cbiAgY29uc3QgaXNBZG1pbiA9ICgpID0+IHtcbiAgICByZXR1cm4gYXV0aFN0YXRlLnVzZXJJbmZvPy5yb2xlID09PSAnbW9kZXJhdG9yJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGF1dGhTdGF0ZSxcbiAgICAgICAgc2V0QXV0aFN0YXRlOiAoYXV0aEluZm8pID0+IHNldEF1dGhJbmZvKGF1dGhJbmZvKSxcbiAgICAgICAgbG9nb3V0LFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQsXG4gICAgICAgIGlzQWRtaW5cbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IHsgQXV0aENvbnRleHQsIEF1dGhQcm92aWRlciB9XG4iXSwic291cmNlUm9vdCI6IiJ9
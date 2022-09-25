webpackHotUpdate("static\\development\\pages\\_app.js",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9hdXRoLmpzIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVyIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImF1dGhTdGF0ZSIsInNldEF1dGhTdGF0ZSIsInVzZUVmZmVjdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJJbmZvIiwiZXhwaXJlc0F0IiwiSlNPTiIsInBhcnNlIiwic2V0QXV0aEluZm8iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsImlzQXV0aGVudGljYXRlZCIsIkRhdGUiLCJnZXRUaW1lIiwiaXNBZG1pbiIsInJvbGUiLCJhdXRoSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsMkRBQWEsRUFBakM7SUFDUUMsUSxHQUFhRixXLENBQWJFLFE7O0FBRVIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDOUJDLFNBRDhCO0FBQUEsTUFDbkJDLFlBRG1COztBQUdyQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUNBLFFBQU1DLFFBQVEsR0FBR0YsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQWpCO0FBQ0EsUUFBTUUsU0FBUyxHQUFHSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBbEI7QUFFQUosZ0JBQVksQ0FBQztBQUNYRSxXQUFLLEVBQUxBLEtBRFc7QUFFWEksZUFBUyxFQUFUQSxTQUZXO0FBR1hELGNBQVEsRUFBRUEsUUFBUSxHQUFHRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsUUFBWCxDQUFILEdBQTBCO0FBSGpDLEtBQUQsQ0FBWjtBQUtELEdBVlEsRUFVTixFQVZNLENBQVQ7O0FBWUEsTUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFBb0M7QUFBQSxRQUFqQ1AsS0FBaUMsU0FBakNBLEtBQWlDO0FBQUEsUUFBMUJHLFFBQTBCLFNBQTFCQSxRQUEwQjtBQUFBLFFBQWhCQyxTQUFnQixTQUFoQkEsU0FBZ0I7QUFDdERILGdCQUFZLENBQUNPLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJSLEtBQTlCO0FBQ0FDLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNILElBQUksQ0FBQ0ksU0FBTCxDQUFlTixRQUFmLENBQWpDO0FBQ0FGLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0NKLFNBQWxDO0FBRUFOLGdCQUFZLENBQUM7QUFDWEUsV0FBSyxFQUFMQSxLQURXO0FBRVhHLGNBQVEsRUFBUkEsUUFGVztBQUdYQyxlQUFTLEVBQVRBO0FBSFcsS0FBRCxDQUFaO0FBS0QsR0FWRDs7QUFZQSxNQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CVCxnQkFBWSxDQUFDVSxVQUFiLENBQXdCLE9BQXhCO0FBQ0FWLGdCQUFZLENBQUNVLFVBQWIsQ0FBd0IsVUFBeEI7QUFDQVYsZ0JBQVksQ0FBQ1UsVUFBYixDQUF3QixXQUF4QjtBQUNBYixnQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNELEdBTEQ7O0FBT0EsTUFBTWMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFFBQUksQ0FBQ2YsU0FBUyxDQUFDRyxLQUFYLElBQW9CLENBQUNILFNBQVMsQ0FBQ08sU0FBbkMsRUFBOEM7QUFDNUMsYUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsV0FBTyxJQUFJUyxJQUFKLEdBQVdDLE9BQVgsS0FBdUIsSUFBdkIsR0FBOEJqQixTQUFTLENBQUNPLFNBQS9DO0FBQ0QsR0FMRDs7QUFPQSxNQUFNVyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLFdBQU8sd0JBQUFsQixTQUFTLENBQUNNLFFBQVYsNEVBQW9CYSxJQUFwQixNQUE2QixXQUFwQztBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLFFBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTG5CLGVBQVMsRUFBVEEsU0FESztBQUVMQyxrQkFBWSxFQUFFLHNCQUFDbUIsUUFBRDtBQUFBLGVBQWNWLFdBQVcsQ0FBQ1UsUUFBRCxDQUF6QjtBQUFBLE9BRlQ7QUFHTFAsWUFBTSxFQUFOQSxNQUhLO0FBSUxFLHFCQUFlLEVBQWZBLGVBSks7QUFLTEcsYUFBTyxFQUFQQTtBQUxLLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNHcEIsUUFUSCxDQURGO0FBYUQsQ0ExREQ7O0dBQU1ELFk7O0tBQUFBLFk7QUE0RE4iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYjdhNzI5ODIwYmM4YzFjNWUxMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5jb25zdCB7IFByb3ZpZGVyIH0gPSBBdXRoQ29udGV4dFxuXG5jb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFthdXRoU3RhdGUsIHNldEF1dGhTdGF0ZV0gPSB1c2VTdGF0ZSh7fSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICBjb25zdCB1c2VySW5mbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySW5mbycpXG4gICAgY29uc3QgZXhwaXJlc0F0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2V4cGlyZXNBdCcpXG5cbiAgICBzZXRBdXRoU3RhdGUoe1xuICAgICAgdG9rZW4sXG4gICAgICBleHBpcmVzQXQsXG4gICAgICB1c2VySW5mbzogdXNlckluZm8gPyBKU09OLnBhcnNlKHVzZXJJbmZvKSA6IHt9XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgY29uc3Qgc2V0QXV0aEluZm8gPSAoeyB0b2tlbiwgdXNlckluZm8sIGV4cGlyZXNBdCB9KSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJbmZvJywgSlNPTi5zdHJpbmdpZnkodXNlckluZm8pKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdleHBpcmVzQXQnLCBleHBpcmVzQXQpXG5cbiAgICBzZXRBdXRoU3RhdGUoe1xuICAgICAgdG9rZW4sXG4gICAgICB1c2VySW5mbyxcbiAgICAgIGV4cGlyZXNBdFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlckluZm8nKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdleHBpcmVzQXQnKVxuICAgIHNldEF1dGhTdGF0ZSh7fSlcbiAgfVxuXG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICgpID0+IHtcbiAgICBpZiAoIWF1dGhTdGF0ZS50b2tlbiB8fCAhYXV0aFN0YXRlLmV4cGlyZXNBdCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAgPCBhdXRoU3RhdGUuZXhwaXJlc0F0XG4gIH1cblxuICBjb25zdCBpc0FkbWluID0gKCkgPT4ge1xuICAgIHJldHVybiBhdXRoU3RhdGUudXNlckluZm8/LnJvbGUgPT09ICdtb2RlcmF0b3InXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgYXV0aFN0YXRlLFxuICAgICAgICBzZXRBdXRoU3RhdGU6IChhdXRoSW5mbykgPT4gc2V0QXV0aEluZm8oYXV0aEluZm8pLFxuICAgICAgICBsb2dvdXQsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZCxcbiAgICAgICAgaXNBZG1pblxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgeyBBdXRoQ29udGV4dCwgQXV0aFByb3ZpZGVyIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=
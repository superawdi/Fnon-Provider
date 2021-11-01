"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FnonProvider;
exports.useFnon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _Alert = _interopRequireDefault(require("@material-ui/lab/Alert"));

var _styles = require("@material-ui/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _core = require("@material-ui/core");

var _excluded = ["title", "buttons", "children"],
    _excluded2 = ["title", "children", "theme", "callback", "buttons", "btnOkText", "btnNoText"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FnonContext = /*#__PURE__*/(0, _react.createContext)();

var Transition = /*#__PURE__*/_react["default"].forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_Slide["default"], _extends({
    direction: "up",
    ref: ref
  }, props));
});

var DialogContainer = function DialogContainer(_ref) {
  var children = _ref.children,
      open = _ref.open,
      onClose = _ref.onClose,
      onKill = _ref.onKill,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? "sm" : _ref$maxWidth,
      _ref$fullScreen = _ref.fullScreen,
      fullScreen = _ref$fullScreen === void 0 ? false : _ref$fullScreen,
      dialogProps = _ref.dialogProps;
  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], _extends({
    fullWidth: fullWidth,
    maxWidth: maxWidth,
    fullScreen: fullScreen,
    open: open,
    onClose: onClose,
    onExit: onKill
  }, dialogProps, {
    TransitionComponent: Transition
  }), children);
};

function Alert(props) {
  return /*#__PURE__*/_react["default"].createElement(_Alert["default"], _extends({
    elevation: 6,
    variant: "filled"
  }, props));
}

var SnackBarContainer = function SnackBarContainer(_ref2) {
  var message = _ref2.message,
      children = _ref2.children,
      open = _ref2.open,
      onClose = _ref2.onClose,
      severity = _ref2.severity,
      snackbarProps = _ref2.snackbarProps;
  var anchorOrigin = {
    horizontal: 'center',
    vertical: 'bottom'
  };
  return /*#__PURE__*/_react["default"].createElement(_Snackbar["default"], _extends({
    disableWindowBlurListener: true,
    anchorOrigin: anchorOrigin,
    open: open,
    autoHideDuration: 6000
  }, snackbarProps, {
    onClose: onClose
  }), children !== null && children !== void 0 ? children : /*#__PURE__*/_react["default"].createElement(Alert, {
    severity: severity
  }, message));
};

var useStyle = (0, _styles.makeStyles)(function (theme) {
  return {
    snackWrapper: {
      position: 'relative',
      '& .MuiSnackbar-root': {
        '&.MuiSnackbar-anchorOriginBottomCenter, &.MuiSnackbar-anchorOriginBottomLeft, &.MuiSnackbar-anchorOriginBottomRight': {
          '&:nth-child(2)': {
            'bottom': 24 * 3 + 5 + 'px'
          },
          '&:nth-child(3)': {
            'bottom': 24 * 5 + 10 + 'px'
          },
          '&:nth-child(4)': {
            'bottom': 24 * 6 + 40 + 'px'
          }
        },
        '&.MuiSnackbar-anchorOriginTopCenter, &.MuiSnackbar-anchorOriginTopLeft, &.MuiSnackbar-anchorOriginTopRight': {
          '&:nth-child(2)': {
            'top': 24 * 3 + 5 + 'px'
          },
          '&:nth-child(3)': {
            'top': 24 * 5 + 10 + 'px'
          },
          '&:nth-child(4)': {
            'top': 24 * 6 + 40 + 'px'
          }
        }
      }
    },
    fullDialogAppBar: {
      position: 'relative'
    },
    fullDialogTitle: {
      marginLeft: theme.spacing(2),
      flex: 1
    },
    fullDialogButtons: {
      '& .MuiButtonBase-root + .MuiButtonBase-root': {
        marginLeft: '8px !important'
      }
    },
    dialogerror: {
      backgroundColor: theme.palette.error.main,
      color: '#fff'
    },
    dialogprimary: {
      backgroundColor: theme.palette.primary.main,
      color: '#fff'
    },
    dialoginfo: {
      backgroundColor: theme.palette.info.main,
      color: '#fff'
    },
    dialogsecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: '#fff'
    },
    dialogsuccess: {
      backgroundColor: theme.palette.success.main,
      color: '#fff'
    },
    dialogwarning: {
      backgroundColor: theme.palette.warning.main,
      color: '#fff'
    }
  };
});

function FnonProvider(_ref3) {
  var children = _ref3.children;
  var classes = useStyle();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      dialogs = _useState2[0],
      setDialogs = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      snackbars = _useState4[0],
      setSnackbars = _useState4[1];

  var createDialog = function createDialog(option) {
    var dialog = _objectSpread(_objectSpread({}, option), {}, {
      open: true
    });

    setDialogs(function (dialogs) {
      return [].concat(_toConsumableArray(dialogs), [dialog]);
    });
  };

  var closeDialog = function closeDialog() {
    setDialogs(function (dialogs) {
      var latestDialog = dialogs.pop(); // const index = dialogs.indexOf(latestDialog);

      if (!latestDialog) return dialogs;
      if (latestDialog.onClose) latestDialog.onClose();
      var g = [_objectSpread(_objectSpread({}, latestDialog), {}, {
        open: false
      })].concat(_toConsumableArray(dialogs));
      return g;
    });
    setTimeout(function () {
      if (dialogs.length > 0 && !dialogs.filter(function (c) {
        return c.open;
      }).length > 0) setDialogs([]);
    }, 5000);
  };

  var useFullDialog = function useFullDialog(_ref4) {
    var title = _ref4.title,
        buttons = _ref4.buttons,
        children = _ref4.children,
        etc = _objectWithoutProperties(_ref4, _excluded);

    createDialog(_objectSpread({
      children: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
        className: classes.fullDialogAppBar
      }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], null, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        edge: "start",
        color: "inherit",
        onClick: closeDialog,
        "aria-label": "close"
      }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h6",
        className: classes.fullDialogTitle
      }, title), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.fullDialogButtons
      }, buttons))), /*#__PURE__*/_react["default"].createElement(_core.DialogContent, null, children)),
      fullScreen: true
    }, etc));
  };

  var useSimpleDialog = function useSimpleDialog(_ref5) {
    var title = _ref5.title,
        children = _ref5.children,
        theme = _ref5.theme,
        callback = _ref5.callback,
        buttons = _ref5.buttons,
        _ref5$btnOkText = _ref5.btnOkText,
        btnOkText = _ref5$btnOkText === void 0 ? "Yes" : _ref5$btnOkText,
        _ref5$btnNoText = _ref5.btnNoText,
        btnNoText = _ref5$btnNoText === void 0 ? "No" : _ref5$btnNoText,
        etc = _objectWithoutProperties(_ref5, _excluded2);

    createDialog(_objectSpread({
      children: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, {
        className: classes["dialog".concat(theme)]
      }, title), /*#__PURE__*/_react["default"].createElement(_core.DialogContent, null, children), /*#__PURE__*/_react["default"].createElement(_core.DialogActions, null, buttons !== null && buttons !== void 0 ? buttons : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Button, {
        color: "primary",
        onClick: function onClick() {
          closeDialog();
          if (callback && typeof callback === 'function') callback(false);
        }
      }, btnNoText), /*#__PURE__*/_react["default"].createElement(_core.Button, {
        color: "primary",
        onClick: function onClick() {
          closeDialog();
          if (callback && typeof callback === 'function') callback(true);
        }
      }, btnOkText))))
    }, etc));
  };

  var createSnackbar = function createSnackbar(_ref6) {
    var message = _ref6.message,
        children = _ref6.children,
        onClose = _ref6.onClose,
        severity = _ref6.severity,
        snackbarProps = _ref6.snackbarProps;
    var snack = {
      message: message,
      children: children,
      onClose: onClose,
      severity: severity,
      snackbarProps: snackbarProps,
      open: true,
      id: new Date().getTime()
    };
    setSnackbars(function (snaks) {
      return [].concat(_toConsumableArray(snaks), [snack]);
    });
  };

  var onSnackBarClose = function onSnackBarClose(id) {
    setSnackbars(function (snaks) {
      var nSnaks = snaks.map(function (c) {
        if (c.id === id) {
          c.open = false;
        }

        return c;
      });
      return nSnaks;
    });
    setTimeout(function () {
      if (snackbars.length > 0 && !snackbars.filter(function (c) {
        return c.open;
      }).length > 0) setSnackbars([]);
    }, 5000);
  };

  var contextValue = (0, _react.useRef)([createDialog, closeDialog, createSnackbar, useFullDialog, useSimpleDialog]);
  return /*#__PURE__*/_react["default"].createElement(FnonContext.Provider, {
    value: contextValue.current
  }, children, dialogs.map(function (dialog, i) {
    return /*#__PURE__*/_react["default"].createElement(DialogContainer, _extends({
      key: i
    }, dialog));
  }), snackbars.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.snackWrapper
  }, snackbars.map(function (snak, i) {
    return /*#__PURE__*/_react["default"].createElement(SnackBarContainer, _extends({
      key: i
    }, snak, {
      onClose: function onClose() {
        return onSnackBarClose(snak.id, snak.onClose);
      }
    }));
  })));
}

var useFnon = function useFnon() {
  return (0, _react.useContext)(FnonContext);
};

exports.useFnon = useFnon;
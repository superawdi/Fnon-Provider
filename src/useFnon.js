"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFnon;

var _react = _interopRequireDefault(require("react"));

var _FnonContext = _interopRequireDefault(require("./FnonContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useFnon() {
  return _react["default"].useContext(_FnonContext["default"]);
}
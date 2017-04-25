'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (g) {
  try {
    (0, _topsort2.default)(g);
  } catch (e) {
    if (e instanceof _topsort2.default.CycleException) {
      return false;
    }
    throw e;
  }
  return true;
};

var _topsort = require('./topsort');

var _topsort2 = _interopRequireDefault(_topsort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
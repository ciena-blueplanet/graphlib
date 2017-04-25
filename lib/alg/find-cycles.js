'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (g) {
  return _lodash2.default.filter((0, _tarjan2.default)(g), function (cmpt) {
    return cmpt.length > 1 || cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]);
  });
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _tarjan = require('./tarjan');

var _tarjan2 = _interopRequireDefault(_tarjan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
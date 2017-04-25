'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (g, vs) {
  return (0, _dfs2.default)(g, vs, 'post');
};

var _dfs = require('./dfs');

var _dfs2 = _interopRequireDefault(_dfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
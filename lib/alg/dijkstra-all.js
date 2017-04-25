'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (g, weightFunc, edgeFunc) {
  return _lodash2.default.transform(g.nodes(), function (acc, v) {
    acc[v] = (0, _dijkstra2.default)(g, v, weightFunc, edgeFunc);
  }, {});
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _dijkstra = require('./dijkstra');

var _dijkstra2 = _interopRequireDefault(_dijkstra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
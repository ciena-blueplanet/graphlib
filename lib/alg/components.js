'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (g) {
  var visited = {};
  var cmpts = [];
  var cmpt;

  function dfs(v) {
    if (_lodash2.default.has(visited, v)) return;
    visited[v] = true;
    cmpt.push(v);
    _lodash2.default.each(g.successors(v), dfs);
    _lodash2.default.each(g.predecessors(v), dfs);
  }

  _lodash2.default.each(g.nodes(), function (v) {
    cmpt = [];
    dfs(v);
    if (cmpt.length) {
      cmpts.push(cmpt);
    }
  });

  return cmpts;
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
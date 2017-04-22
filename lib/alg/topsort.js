'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CycleException() {}

function topsort(g) {
  var visited = {};
  var stack = {};
  var results = [];

  function visit(node) {
    if (_lodash2.default.has(stack, node)) {
      throw new CycleException();
    }

    if (!_lodash2.default.has(visited, node)) {
      stack[node] = true;
      visited[node] = true;
      _lodash2.default.each(g.predecessors(node), visit);
      delete stack[node];
      results.push(node);
    }
  }

  _lodash2.default.each(g.sinks(), visit);

  if (_lodash2.default.size(visited) !== g.nodeCount()) {
    throw new CycleException();
  }

  return results;
}

topsort.CycleException = CycleException;

exports.default = topsort;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = read;
exports.write = write;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _graph = require('./graph');

var _graph2 = _interopRequireDefault(_graph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function writeNodes(g) {
  return _lodash2.default.map(g.nodes(), function (v) {
    var nodeValue = g.node(v);
    var parent = g.parent(v);
    var node = { v: v };
    if (!_lodash2.default.isUndefined(nodeValue)) {
      node.value = nodeValue;
    }
    if (!_lodash2.default.isUndefined(parent)) {
      node.parent = parent;
    }
    return node;
  });
}

function writeEdges(g) {
  return _lodash2.default.map(g.edges(), function (e) {
    var edgeValue = g.edge(e);
    var edge = { v: e.v, w: e.w };
    if (!_lodash2.default.isUndefined(e.name)) {
      edge.name = e.name;
    }
    if (!_lodash2.default.isUndefined(edgeValue)) {
      edge.value = edgeValue;
    }
    return edge;
  });
}

function read(json) {
  var g = new _graph2.default(json.options).setGraph(json.value);
  _lodash2.default.each(json.nodes, function (entry) {
    g.setNode(entry.v, entry.value);
    if (entry.parent) {
      g.setParent(entry.v, entry.parent);
    }
  });
  _lodash2.default.each(json.edges, function (entry) {
    g.setEdge({ v: entry.v, w: entry.w, name: entry.name }, entry.value);
  });
  return g;
}

function write(g) {
  var json = {
    options: {
      directed: g.isDirected(),
      multigraph: g.isMultigraph(),
      compound: g.isCompound()
    },
    nodes: writeNodes(g),
    edges: writeEdges(g)
  };
  if (!_lodash2.default.isUndefined(g.graph())) {
    json.value = _lodash2.default.clone(g.graph());
  }
  return json;
}

exports.default = {
  write: write,
  read: read
};
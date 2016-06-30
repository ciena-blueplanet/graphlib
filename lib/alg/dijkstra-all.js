var dijkstra = require('./dijkstra')
var _ = require('../lodash')

export default dijkstraAll

function dijkstraAll (g, weightFunc, edgeFunc) {
  return _.transform(g.nodes(), function (acc, v) {
    acc[v] = dijkstra(g, v, weightFunc, edgeFunc)
  }, {})
}

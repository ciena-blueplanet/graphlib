import _ from 'lodash'

import dijkstra from './dijkstra'

export default dijkstraAll

function dijkstraAll (g, weightFunc, edgeFunc) {
  return _.transform(g.nodes(), function (acc, v) {
    acc[v] = dijkstra(g, v, weightFunc, edgeFunc)
  }, {})
}

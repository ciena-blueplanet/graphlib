import _ from 'lodash'
import PriorityQueue from '../data/priority-queue'

const DEFAULT_WEIGHT_FUNC = _.constant(1)

function runDijkstra (g, source, weightFn, edgeFn) {
  var results = {}
  var pq = new PriorityQueue()
  var v, vEntry

  var updateNeighbors = function (edge) {
    var w = edge.v !== v ? edge.v : edge.w
    var wEntry = results[w]
    var weight = weightFn(edge)
    var distance = vEntry.distance + weight

    if (weight < 0) {
      throw new Error('dijkstra does not allow negative edge weights. ' +
                      'Bad edge: ' + edge + ' Weight: ' + weight)
    }

    if (distance < wEntry.distance) {
      wEntry.distance = distance
      wEntry.predecessor = v
      pq.decrease(w, distance)
    }
  }

  g.nodes().forEach(function (v) {
    var distance = v === source ? 0 : Number.POSITIVE_INFINITY
    results[v] = { distance: distance }
    pq.add(v, distance)
  })

  while (pq.size() > 0) {
    v = pq.removeMin()
    vEntry = results[v]
    if (vEntry.distance === Number.POSITIVE_INFINITY) {
      break
    }

    edgeFn(v).forEach(updateNeighbors)
  }

  return results
}

export default function (g, source, weightFn, edgeFn) {
  weightFn = weightFn || DEFAULT_WEIGHT_FUNC
  edgeFn = edgeFn || function (v) { return g.outEdges(v) }
  return runDijkstra(g, String(source), weightFn, edgeFn)
}

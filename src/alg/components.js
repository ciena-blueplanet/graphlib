import _ from 'lodash'

export default function (g) {
  var visited = {}
  var cmpts = []
  var cmpt

  function dfs (v) {
    if (_.has(visited, v)) return
    visited[v] = true
    cmpt.push(v)
    _.each(g.successors(v), dfs)
    _.each(g.predecessors(v), dfs)
  }

  _.each(g.nodes(), function (v) {
    cmpt = []
    dfs(v)
    if (cmpt.length) {
      cmpts.push(cmpt)
    }
  })

  return cmpts
}

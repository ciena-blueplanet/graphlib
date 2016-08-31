var _ = require('lodash')

// A helper that sorts components and their contents
function sort (cmpts) {
  return _.sortBy(_.map(cmpts, function (cmpt) {
    return _.sortBy(cmpt)
  }), function (cmpts) { return cmpts[0] })
}

function weightFn (g) {
  return function (edge) {
    return g.edge(edge)
  }
}

module.exports = {
  sort,
  weightFn
}

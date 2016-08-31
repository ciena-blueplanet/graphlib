import _ from 'lodash'
import tarjan from './tarjan'

export default function (g) {
  return _.filter(tarjan(g), function (cmpt) {
    return cmpt.length > 1 || (cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]))
  })
}

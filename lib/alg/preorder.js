var dfs = require('./dfs')

export default preorder

function preorder (g, vs) {
  return dfs(g, vs, 'pre')
}

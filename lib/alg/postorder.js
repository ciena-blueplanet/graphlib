var dfs = require('./dfs')

export default postorder

function postorder (g, vs) {
  return dfs(g, vs, 'post')
}

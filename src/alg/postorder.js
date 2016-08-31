import dfs from './dfs'

export default function (g, vs) {
  return dfs(g, vs, 'post')
}

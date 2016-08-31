import topsort from './topsort'

export default function (g) {
  try {
    topsort(g)
  } catch (e) {
    if (e instanceof topsort.CycleException) {
      return false
    }
    throw e
  }
  return true
}

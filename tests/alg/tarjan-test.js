var _ = require('lodash')
var expect = require('../chai').expect
var Graph = require('../..').Graph
var tarjan = require('../..').alg.tarjan
var sort = require('../utils').sort

describe('alg.tarjan', function () {
  it('returns an empty array for an empty graph', function () {
    expect(tarjan(new Graph())).to.eql([])
  })

  it('returns singletons for nodes not in a strongly connected component', function () {
    var g = new Graph()
    g.setPath(['a', 'b', 'c'])
    g.setEdge('d', 'c')
    expect(sort(tarjan(g))).to.eql([['a'], ['b'], ['c'], ['d']])
  })

  it('returns a single component for a cycle of 1 edge', function () {
    var g = new Graph()
    g.setPath(['a', 'b', 'a'])
    expect(sort(tarjan(g))).to.eql([['a', 'b']])
  })

  it('returns a single component for a triangle', function () {
    var g = new Graph()
    g.setPath(['a', 'b', 'c', 'a'])
    expect(sort(tarjan(g))).to.eql([['a', 'b', 'c']])
  })

  it('can find multiple components', function () {
    var g = new Graph()
    g.setPath(['a', 'b', 'a'])
    g.setPath(['c', 'd', 'e', 'c'])
    g.setNode('f')
    expect(sort(tarjan(g))).to.eql([['a', 'b'], ['c', 'd', 'e'], ['f']])
  })
})

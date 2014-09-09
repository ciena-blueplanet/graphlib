var expect = require("../chai").expect,
    Graph = require("../..").Graph;

exports.tests = tests;

function tests(sp) {
  describe("allShortestPaths", function() {
    it("returns 0 for the node itself", function() {
      var g = new Graph();
      g.node("a");
      expect(sp(g)).to.eql({ a: { a: { distance: 0 } }});
    });

    it("returns the distance and path from all nodes to other nodes", function() {
      var g = new Graph();
      g.edge("a", "b");
      g.edge("b", "c");
      expect(sp(g)).to.eql({
        a: {
          a: { distance: 0 },
          b: { distance: 1, predecessor: "a" },
          c: { distance: 2, predecessor: "b" }
        },
        b: {
          a: { distance: Number.POSITIVE_INFINITY },
          b: { distance: 0 },
          c: { distance: 1, predecessor: "b" }
        },
        c: {
          a: { distance: Number.POSITIVE_INFINITY },
          b: { distance: Number.POSITIVE_INFINITY },
          c: { distance: 0 }
        }
      });
    });

    it("uses an optionally supplied weight function", function() {
      var g = new Graph();
      g.edge("a", "b").weight = 2;
      g.edge("b", "c").weight = 3;

      expect(sp(g, weightFn(g))).to.eql({
        a: {
          a: { distance: 0 },
          b: { distance: 2, predecessor: "a" },
          c: { distance: 5, predecessor: "b" }
        },
        b: {
          a: { distance: Number.POSITIVE_INFINITY },
          b: { distance: 0 },
          c: { distance: 3, predecessor: "b" }
        },
        c: {
          a: { distance: Number.POSITIVE_INFINITY },
          b: { distance: Number.POSITIVE_INFINITY },
          c: { distance: 0 }
        }
      });
    });

    it("uses an optionally supplied incident function", function() {
      var g = new Graph();
      g.edge("a", "b");
      g.edge("b", "c");

      expect(sp(g, undefined, function(v) { return g.inEdges(v); })).to.eql({
        a: {
          a: { distance: 0 },
          b: { distance: Number.POSITIVE_INFINITY },
          c: { distance: Number.POSITIVE_INFINITY }
        },
        b: {
          a: { distance: 1, predecessor: "b" },
          b: { distance: 0 },
          c: { distance: Number.POSITIVE_INFINITY }
        },
        c: {
          a: { distance: 2, predecessor: "b" },
          b: { distance: 1, predecessor: "c" },
          c: { distance: 0 }
        }
      });
    });

    it("works with undirected graphs", function() {
      var g = new Graph({ directed: false });
      g.edge("a", "b").weight = 1;
      g.edge("b", "c").weight = 2;
      g.edge("c", "a").weight = 4;
      g.edge("b", "d").weight = 6;

      expect(sp(g, weightFn(g), g.edges.bind(g))).to.eql({
        a: {
          a: { distance: 0 },
          b: { distance: 1, predecessor: "a" },
          c: { distance: 3, predecessor: "b" },
          d: { distance: 7, predecessor: "b" },
        },
        b: {
          a: { distance: 1, predecessor: "b" },
          b: { distance: 0 },
          c: { distance: 2, predecessor: "b" },
          d: { distance: 6, predecessor: "b" },
        },
        c: {
          a: { distance: 3, predecessor: "b" },
          b: { distance: 2, predecessor: "c" },
          c: { distance: 0 },
          d: { distance: 8, predecessor: "b" },
        },
        d: {
          a: { distance: 7, predecessor: "b" },
          b: { distance: 6, predecessor: "d" },
          c: { distance: 8, predecessor: "b" },
          d: { distance: 0 },
        }
      });
    });
  });
}

function weightFn(g) {
  return function(e) {
    return g.edge(e).weight;
  };
}
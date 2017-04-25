// TypeScript type definitions

export interface IGraphOptions {
    directed: boolean;
    multigraph: boolean;
    compound: boolean;
}

export class Graph {
    constructor(options: IGraphOptions);
    edges(): Edge[];
    edge(id: any): any;
    nodes(): string[];
    node(id: any): any;
    setDefaultEdgeLabel(callback: () => void): Graph;
    setEdge(sourceId: string, targetId: string): Graph;
    setGraph(options: { [key: string]: any }): Graph;
    setNode(id: string, node: { [key: string]: any }): Graph;
}

interface Edge {
    v: string;
    w: string;
}


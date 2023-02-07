// ====undirected graph=====
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex])this.adjacencyList[vertex] = [];
    }
}
let newGraph = new Graph();
newGraph.addVertex("Tokyo");
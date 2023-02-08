// ====undirected graph=====
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex])this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    remvoeEdge(v1,v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !==vertex2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !==vertex1
        );
    }
}
let newGraph = new Graph();
newGraph.addVertex("Tokyo");
newGraph.addVertex("DALLAS");
newGraph.addVertex("Aspen");
newGraph.addEdge("Dallas", "Tokyo")
newGraph.addEdge("Dallas", "Aspen")
console.log(newGraph);
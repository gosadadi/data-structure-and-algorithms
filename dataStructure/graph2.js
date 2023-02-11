// ====undirected graph=====
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1,v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !==v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !==v1
        );
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    depthFirstTraversal(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start)
    }
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                }
            })
        }
        return result;
    }
    breadthFirstTraversal() {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        while(queue.length) {
            let currentVertex = queue.shift();
            result.push(currentVertex).forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
            
        }
        return result;
    }
}
let newGraph = new Graph();
newGraph.addVertex("Tokyo");
newGraph.addVertex("Dallas");
newGraph.addVertex("Aspen");
newGraph.addVertex("Los Angeles");
newGraph.addVertex("Hong Kong");
newGraph.addEdge("Dallas", "Tokyo");
newGraph.addEdge("Dallas", "Aspen");
newGraph.addEdge("Hong Kong", "Tokyo");
newGraph.addEdge("Hong Kong", "Dallas");
newGraph.addEdge("Los Angeles", "Hong Kong");
newGraph.addEdge("Los Angeles", "Aspen");
newGraph.removeEdge("Dallas", "Aspen");
newGraph.removeEdge("Dallas", "Tokyo");
newGraph.removeVertex("Hong Kong");
console.log(newGraph);
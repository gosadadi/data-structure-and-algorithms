class priorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    };
    dequeue() {
        return this.values.shift();
    };
    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    };
}
class weightedGraph {
    constructor () {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1,weight});
    }
    Dijkstra (start, finish) {
        const nodes = new priorityQueue();
        const distances = {};
        const previous = {};
        // ======build up initial state====
        for (let vertex in  this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // =====as long as something to visit=====
        while(nodes.values.length) {
            smallest = nodes.dequeue().val;
            if(smallest == finish) {

            }
            if(smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //====calculate new distance to neighboring node====
                }
            }
        }
    }
}
const newGraph = new weightedGraph();
newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addVertex("F");

newGraph.addEdge("A","B",4);
newGraph.addEdge("A","C",2);
newGraph.addEdge("C","D",3);
newGraph.addEdge("C","F",4);
newGraph.addEdge("D","E",3);
newGraph.addEdge("D","F",1);
newGraph.addEdge("E","F",1);

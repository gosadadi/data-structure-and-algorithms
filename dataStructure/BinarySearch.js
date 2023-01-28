class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        // case1: if root is null
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        // if there is root
        else {
            let currentNode = this.root;
            while (true) {
                if (value === currentNode.value) return undefined;
                if (value < currentNode.value) {
                    // left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return false;
    }
    // ====remove====
    remove() {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left

            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;


            } else if (currentNode.value === value) {
                // we got match====
                // option1:if no right child
                if (currentNode.right == null) {

                } else if (currentNode.right.left === null) {

                } else {

                }

            }
            return true
        }
    }
    breadthFirstSearch() {
        let currentNode = thi.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
    BFS(queue, list) {
        // ======base case=====
        if (!queue.length) {
            return list
        }
        let currentNode = queue.shift();
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.BFS()
    }
    DFInOrder() {

    }
    DFPostOrder() {

    }
    DFPreOrder() {

    }
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree);
tree.lookup(9)
JSON.stringify(traverse(tree.root))
console.log(tree.lookup(170));
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree;
}
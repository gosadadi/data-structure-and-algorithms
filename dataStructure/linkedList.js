// ======Singly linked list========
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    append(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = null;
        }
        this.length++;
        return this;
    }
    traverse(index) {
        let counter = 0;
        let currentNode = this.head;
        if(counter === index ) {
            return currentNode;
        }
        while(counter !== index) {
            currentNode = currentNode.next;
            console.log(currentNode.next);
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        if (index < 1) {
            const temp = this.head.next;
            this.head = null;
            this.head = temp;
        }
        const frontNode = this.traverse(index - 1);
        
    }
}
const myLinkedList = new SinglyLinkedList();
myLinkedList.append(50);
myLinkedList.append(40);
myLinkedList.append(60);
myLinkedList.remove(1);
myLinkedList.remove(0);
// myLinkedList.traverse(1);
console.log(myLinkedList);

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
        if (counter === index) {
            return currentNode;
        }
        while (counter !== index && index > 0) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        if (index < 1) {
            const temp = this.head.next;
            this.head = null;
            this.head = temp;
            this.length--;
        }
        if (this.length === 0) {
            this.tail = null;
        }
        const frontNode = this.traverse(index - 1);
        let current = this.head;
        while (current.next) {
            let temp = frontNode.next;
            frontNode.next = temp.next;
            this.length--;
            return this;
        }
    }
    pop() {
        if (!this.head) return undefined;
        let runner = this.head;
        let count = 0
        while (count !== this.length) {
            runner = runner.next;
            count++;
            if (count === this.length - 1) {
                let temp = runner.next;
                runner.next = null;
                this.tail = runner;
                this.length--;
            }
        }
        return this;
    }
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }
    pop () {
        if(!this.head) return;
        let current = this.head;
        let newTail = current
        while(current.next) {
            current = current.next;
            newTail = current;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return this;
    }
    prepend(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get (index) {
        if (index < 0 || index >= this.length ) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++
        }
        return current;
    }
    set(index, val) {
        let foundedNode = this.get(index);
        if (foundedNode) {
            foundedNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if(!this.head) return null;
        if (index < 0 || index >= this.length ) return false;
        if(index === 0) return this.prepend(val);
        if (index === this.length) return this.append(val);
        let prev = this.get(index - 1);
        let newNode = new Node(val);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return this;
    }
    removeNode(index) {
        if(index < 0  || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let prevNode = this.get(index -1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse (){
        // if only one node====
        if(!this.head.next){
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            let temp = second.next;//=====third element====
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList;
    }
    
    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

}
const myLinkedList = new SinglyLinkedList();
myLinkedList.append(50);
myLinkedList.append(40);
myLinkedList.append(60);
myLinkedList.append(80);
myLinkedList.shift();
myLinkedList.prepend(30);
myLinkedList.reverse();
//myLinkedList.pop();
// myLinkedList.insert(1,35);
// myLinkedList.remove(1);
// myLinkedList.remove(0);
console.log(myLinkedList.print());


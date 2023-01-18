class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    } 
}
class DLL {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }
    // ====add node to class===
    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift (val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head === newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let current, count;
        if (index <= this.length/2) {
            count = 0;
            current = this.head;
            while(count != index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail; 
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index,val) {
        let changedNode = this.get(index);
        if(changedNode !== null) {
            changedNode.val = val;
            return true;
        }
        return false;
    }
    insert (index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);
        let newNode = new Node();
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = nextNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shiift();
        if(index === this.length - 1) return this.pop();
        let removeNode = this.get(index);
        removeNode.prev.next =  removeNode.next;
        removeNode.next.prev = removeNode.prev;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;
        return removeNode;
    }
}
const myNewList = new DLL();
myNewList.push(10);
myNewList.push(20);
myNewList.push(30);
myNewList.push(40);
myNewList.push(50);
myNewList.push("Last");
myNewList.set(5, "ChangedNode");
myNewList.insert(0, "Insert");
myNewList.insert(3, "NewInsert");
myNewList.insert(3, "NewInsert");
// myNewList.pop();
// myNewList.shift();
// myNewList.unshift(5);
// console.log(myNewList.get(1));
console.log(myNewList)

class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class SLL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertNode(val){
        const node3 =new Node(val);
        if(!this.head){
            this.head = node3;
            this.tail = node3;
        }else {
            this.tail.next=node3;
            this.tail=node3;
        }
        this.length++;
        return this;
    }
    pop(){
        // case1:empty list
        if(!this.head)return;
        // case2:one node
        if(this.length===1){
            this.head =null;
            this.tail=null;
            this.length=0;
            return;
        }
        // case3: many nodes
        let current = this.head;
        let newTail =null;
        while(current) {
            if(current.next){
                newTail = current
            }
            current = current.next;
        }
        const deletedNode = this.tail;
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return deletedNode;
    }
    shift(){
        // case1: empty list
        if(!this.head) return null;
        // case2: one node
        if(this.length ===1){
            this.head = null;
            this.tail = null;
            this.length=0;
            return;
        }
        // case3: many nodes
        const currentHead = this.head;
        const newHead = currentHead.next;
        this.head=newHead;
        this.length--;
        return currentHead;
    }
    unshift(val){
        const newNode = new Node (val);
        // case:empty list
        if(this.length ===0){
            this.head = newNode;
            this.tail = newNode;
            this.length =1;
            return;
        }
        // case2: many nodes
        const currentHead = this.head;
        const newHead = newNode;
        this.head = newHead;
        newHead.next = currentHead;
        this.length++;
        return newHead;
    }
    get(index){
        // check edge cases
        if(index < 0 || index >= this.length){
            return;
        }
        let target = this.head;
        for (let i =1; i<=index; i++) {
            target = target.next;
        }
        return target;
    }

}
const list = new SLL();
list.insertNode(40);
list.insertNode(50);
list.insertNode(60);
list.insertNode(80);
// list.unshift(100);
// list.pop();
// list.shift()
list.get(3);
console.log(list);
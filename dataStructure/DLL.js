class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next:null,
            prev :null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;        
    }
    prepend (value) {
        const newNode = new Node(value);

        newNode.next =this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++
    }
    printList (){
        const array = [];
        let currentNode = this.head;
        while(currentNode !==null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array
    }
    insert (index, value) {
        const newNode = new Node(value);
        // ======if index >= total length======
        if(index >= this.length){
            return this.append(value);
        }
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
        this.length++;
        return this.printList;
    }
    traverseToIndex(index){
        // check params
        let counter =0;
        let currentNode = this.head;
        if (counter === index){
            return currentNode;
        }
        while(counter !== index && index >0){
            currentNode = currentNode.next;
            counter++;
        } 
        return currentNode;
    }
    remove(index){
        if(index < 1){
            const temp = this.head.next;
            this.head =null;
            this.head =temp;
        }
        const frontNode = this.traverseToIndex(index-1)
        let current = this.head;
        while(current.next){
            let temp = frontNode.next;
            frontNode.next =temp.next;
            this.length --;
            return this.printList;
        }
    }
}
const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(5);
myLinkedList.insert(5,35);
myLinkedList.insert(3,55);
// myLinkedList.printList();
// myLinkedList.remove(0);
console.log(myLinkedList);
console.log(myLinkedList.printList());
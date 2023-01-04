// let myLinkedList = {
//     head:{
//         value:10,
//         next:{
//             value:5,
//             next:{
//                 value:16,
//                 next:null
//             }
//         }
//     }
// }
// =======create 10-->20-->30 linked list======
class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class linkedList {
    constructor(value){
        this.head = {
            value: value,
            next:null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // const newNode = new Node(value);
        const newNode = {
            value:value,
            next:null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;        
    }
    prepend (value) {
        const newNode = {
            value: value,
            next:null
        };
        newNode.next =this.head;
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
        // ======if index >= total length======
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = {
            value: value,
            next:null
        };
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList;
    }
    traverseToIndex(index){
        // check params
        let counter = 0;
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
}
const myLinkedList = new linkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(5);
myLinkedList.insert(5,35);
myLinkedList.insert(3,55);
myLinkedList.printList()
// myLinkedList.remove(0)
myLinkedList.reverse();
// console.log(myLinkedList);
console.log(myLinkedList.printList());
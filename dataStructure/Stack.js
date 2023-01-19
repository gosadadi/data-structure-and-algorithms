class Node {
    constructor(value){
        this.value = value;
        this.next =null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        let newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }
        else{
            let temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        this.length++;
        return this;
    }
    pop(){
        // CASE1
        if(!this.top){
            return this;
        }
        if(this.top === this.bottom){
            this.bottom =null;
        }
        let holdingPointer = this.top;//if needed 
        this.top = this.top.next;
        this.length --;
        return this;
    }
}
const myNewStack = new Stack();
myStack.push("Google");
myStack.push("UDEMY");
myStack.push("DISCORD");
console.log(myStack.peek());
console.log(myStack);

class Stack1 {
    constructor(){
        this.array = [];
    }
    peek(){
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop();
        return this;
    }
}
const myStack = new Stack1();
myStack.push("Google");
myStack.push("UDEMY");
myStack.push("DISCORD");
myStack.pop();
console.log(myStack.peek());
console.log(myStack);
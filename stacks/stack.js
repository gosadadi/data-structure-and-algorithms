// ====stacks functions ====push, pop, peek, length
// use array as stack ====palindrome
// function isPalindrome (word){
//     let letters =[];//stack
//     let  rword = '';//reverse word
// // put letters of word into stack
// for(let i=0; i<word.length; i++) {
//     letters.push(word[i]);
// }
// //===pop of the stack in reverse order
// for (let i=0; i<word.length;i++){
//     rword +=letters.pop();
// }
// if(rword === word) {
//     console.log(word + " is a Palindrome.");
// } else {
//     console.log(word + "is not a palindrome.");
// }
// }
// isPalindrome("racecar");
// isPalindrome("Gosa");

// ===create a stack=====
let Stack = function () {
    this.count = 0;//track amount of items in a stack
    this.storage = {};
    // ====add a value onto the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }
    // Removes and return the value at the end of the stack
    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    this.size = function () {
        return this.count;
    }
    // return the value at the end of the stack
    this.peek = function () {
        return this.storage[this.count - 1];
    }
}
let myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("Free Ethiopia")
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

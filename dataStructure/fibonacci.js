// given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0,1,2,3,4,5,8,13,21,34,55,89,144,..

function fibonacciIterative(n) {
let arr = [0,1];
for (let i=2; i <= n ; i++ ) {
    arr.push(arr[i-1] + arr[i-2]);
}
// big O====O(n)
return arr[n];
}

function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
    // big O : ======O(2^N)========
}
// console.log(fibonacciRecursive(8));
console.log(fibonacciIterative(0));
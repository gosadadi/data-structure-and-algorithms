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
// console.log(fibonacciIterative(0));
function fibonacciMater() {
    let cache = {};
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n< 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}
function fibonacciMaster2 () {
    let answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        answer.push(answer[i - 2] + answer[i - 1]);
    }
    return answer.pop();
}
const fasterFib = fibonacciMater();
console.log("DP", fasterFib(10))
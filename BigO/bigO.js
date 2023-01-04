// write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

function addNumbers (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum +=i;
    }
    return sum;
}
addNumbers(5);
console.log(addNumbers(100));

function addUpTo(n) {
    return n*(n + 1)/2;
}
// ======space complexity====

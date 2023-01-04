let counter = 0
function inception () {

    if (counter >3) {
        return "done";
    }
    counter ++;
    return inception ();
}
// console.log(inception());
// ====identigy base case====
// =====identify the recursive case====
// =====Get closer and closer and return when needed

function findFactorialRecursive(number) {
    if (number === 2) {
        return number
    } 
    // O(n)
    return number * findFactorialRecursive(number-1);
}

function findFactorialIterative(number) {
    let answer =1;
    if (number ===2) {
        answer = 2;
    }
    for (let i =2; i <= number; i++) {
        answer = answer *i;
    }
    // O(n)
    return answer;
}
// console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));

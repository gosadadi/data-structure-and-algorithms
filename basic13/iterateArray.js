// Write a function that returns the sum of all the values within an array. 
// (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
function sumOfArray(array) {
    let sum =0
    for (let i =0; i<=array.length-1; i++) {
        sum = sum + array[i];
    }
    return sum;
}
console.log(sumOfArray([1,2,3]));
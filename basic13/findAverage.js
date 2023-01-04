// Given an array with multiple values, write a function that returns the average of the values in the array. 
// (e.g. for [1,3,5,7,20] average is 7.2)

function findAverage(arr) {
    let sum = 0;
    for ( let i = 0; i <= arr.length-1; i++){
        sum = sum + arr[i]
    }
    let average = sum/arr.length;
    return average;
}
console.log(findAverage([1,3,5,4]));
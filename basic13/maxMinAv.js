// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
// (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAv (arr) {
    let sum = 0;
    let max =arr[0];
    let min = arr[0];
    let newArr= []
    for (let i =0; i<= arr.length-1; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
        sum = arr[i] + sum;
        averg = sum /arr.length;
    }
    newArr.push(max);
    newArr.push(averg);
    newArr.push(min);
    return newArr;
}
console.log(maxMinAv([1,2,3,4]));
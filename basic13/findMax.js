// Given an array with multiple values, write a function that returns the maximum number in the array. 
// (e.g. for [-3,3,5,7] max is 7)

function maxValue(arr) {
    let max = arr[0];
    for (let i =0 ; i <= arr.length-1; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([3,5,10,20]));
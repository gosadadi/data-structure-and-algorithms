// Write a function that will swap the first and last values of any given array. 
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swap (arr) {
    for (let i = 0; i <=arr.length; i++) {
            if (arr.length >=0) {
                let temp = arr[0];
                arr[0] = arr[arr.length-1];
                arr[arr.length-1] =temp;

            }
            else  {
                return ;
            }
        
    }
    return arr;
}

console.log(swap([0,1,2,4]));
console.log([1]);
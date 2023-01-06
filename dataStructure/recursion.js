function countDown(num) {
    if (num <= 0) {
        // console.log("All Done");
        return;
    }
    console.log(num);
    num--;
    countDown(num)
}
// countDown(5);
function factorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
// console.log(factorial(5));
// helper method recursion
function collectOddValues(arr) {
    let result = [];
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}
// console.log(collectOddValues([1,2,3,4,3,5]));
// Given an integer array nums, find the subarray with the largest sum, and return its sum.
function findLargeSum(arr) {
    if (!arr) {
        return null;
    }
    let maxSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i] = Math.max(0, arr[i - 1] + arr[i]);
        console.log(arr[i]);
        if (arr[i] > maxSum) {
            maxSum = arr[i];
        }
    }
    return maxSum;
};
// console.log(findLargeSum([-2,1,-3,4,-1,2,1,-5,4]));

// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  - 
// do not worry about negative bases and exponents.

function power(b, n) {
    // 2^2 ==== 2*2=====2^3====2*2^2====2
    if (n === 0) {
        return 1
    }
    return b * power(b, n - 1);

}
// console.log(power(2,2));
// Write a function factorial which accepts a number and returns the factorial
//  of that number. A factorial is the product of an integer and all the 
//  integers below it; e.g., factorial four ( 4! ) is equal to 24, 
//  because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}
// console.log(factorial(20));
// Write a function called productOfArray which takes in an array of numbers 
// and returns the product of them all.

function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([2,3,4,5]))
// write a function called recursiveRange which accepts a number and 
// adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(nums) {
    if (nums === 0) {
        return 0
    }
    return nums + recursiveRange(nums - 1);
}
// console.log(recursiveRange(2));
// Write a recursive function called fib which accepts a number and returns 
// the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is 
// the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(nums) {
    if (nums === 1 || nums === 2) {
        return 1;
    }
    return fib(nums - 1) + fib(nums - 2);
}

// console.log(fib(35));
// Write a recursive function called reverse which accepts a string and 
// returns a new string in reverse.

function reverse(str) {
    if (str.length === 1) {
        return str;
    }
    return reverse(str.slice(1)) + str[0];
}
// console.log(reverse("Gosa"));

// Write a recursive function called isPalindrome which returns true if the 
// string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];

    if (str[0] === str.slice(-1)) {
        return isPalindrome(str.slice(1, -1))
    }
    return false;
}
// console.log(isPalindrome("tacocat"))

// Write a recursive function called someRecursive which accepts an array 
// and a callback. The function returns true if a single value in the array 
// returns true when passed to the callback. Otherwise it returns false.

const isOdd = val => val % 2 !== 0;
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}
// console.log(someRecursive([6,2,2],isOdd));
// Write a recursive function called flatten which accepts an array of arrays 
// and returns a new array with all values flattened.
function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}


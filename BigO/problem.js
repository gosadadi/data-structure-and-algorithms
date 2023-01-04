// write a function which takes two numbers and return their sum;
// write a function which takes in a string and returns counts of each character in the string
function charCount(str) {
    // make object
    // loop over a string and for each char is key in object?
    let result = {};
    for (let char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}
// console.log(charCount("Hi There"));

// write a function called same, which accepts two arrays.The function should return true if every value in the 
// array has it's corresponding value square in the second array.The frequnecy of values must be the same

function same(arr1, arr2) {
    // if values in arr1 squared in arr2 return true;
    // [1,2,3]=====[1,4,9]
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
}

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequnecyCounter1 = {};
    let frequnecyCounter2 = {};
    for (let val of arr1) {
        frequnecyCounter1[val] = (frequnecyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequnecyCounter2[val] = (frequnecyCounter2[val] || 0) + 1
    }
    for (let key in frequnecyCounter1) {
        if (!(key ** 2 in frequnecyCounter2)) {
            return false;
        }
        if (frequnecyCounter2[key ** 2] !== frequnecyCounter1[key]) {
            return false;
        }
    }
    return true
}
// console.log(same([1,2,3],[1,4,9]));
//Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequnecyCounter1 = {};
    let frequnecyCounter2 = {};
    for (let val of str1) {
        frequnecyCounter1[val] = (frequnecyCounter1[val] || 0) + 1
    }
    for (let val of str2) {
        frequnecyCounter2[val] = (frequnecyCounter2[val] || 0) + 1
    }
    for (let key in frequnecyCounter1) {
        if (!(key in frequnecyCounter2)) {
            return false;
        }
        if (frequnecyCounter2[key] !== frequnecyCounter1[key]) {
            return false;
        }
    }
    return true;
}
// console.log(isAnagram("gosa","osag"));
// console.log(isAnagram("gosa","gosaa"));

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    let lookup = {};
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}
// console.log(validAnagram ("Gosa","osag"));

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr) {
    // O(n^2)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return arr[arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

//implement a function called countUniquesValues, which accepts a sorted array, and counts the
//unique values in the array. There can be negative numbers in the array, but it will always be sorted

function counterUniquesValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j <= arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        // console.log(i,j);
    }
    return i;
}
// console.log(counterUniquesValues([1,1,2,2,3,3,4,5,6,6]));

// write a function called maxSubarraySum which accepts an array of integers and
// a number called n. The function should calculate the maximum sum of n consecutive
//elements in the array.
function maxSubarraySum(arr, num) {
    if (num > arr.length || !arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let sum = 0;
        for (let j = 0; j < num; j++) {
            sum += arr[i + j];
        }
        if (sum > max) {
            max = sum;
        }
        // bigO(O(n^2))
    }
    return max;
}
// console.log(maxSubarraySum([1,2,3,4,1,10,100],5));
function findSum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) {
        return null;
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// divide and conquer
//Given a sorted array of integers, write a function called search, that accepts a value and returns
//the index where the value passed to the function is located. If the value is not found, return -1

function Search(arr, num) {
    if (!arr.length) {
        return -1;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
        // O(n)
    }
    return -1;
}
// console.log(Search([1,2,3,4],4));
//Binary Search =====Logn

function binarySearch(arr, num) {
    let min = 0;
    let max = arr.length - 1;
    while (min < max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];
        if (arr[middle] < num) {
            min = middle + 1
        }
        else if (arr[middle] > val) {
            max = middle - 1
        } else {
            return middle;
        }
    }
    return -1;
}
// Write a function called sameFrequency. Given two positive integers, find out if the 
//two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }

    for (let j = 0; j < strNum1.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}
(sameFrequency(123, 4516));
//Implement a function called, areThereDuplicates which accepts a variable number of arguments,
//and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
function areThereDuplicates() {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection) {
        if (collection[key] > 1) return true
    }
    return false;
}
//areThereDuplicates Solution(Multiple Pointers)
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}
//areThereDuplicates One Liner Solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}
// Write a function called averagePair. Given a sorted array of integers and
//  a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.

function averagePair(arr, num) {
    let start = 0
    let end = arr.length - 1;
    while (start < end) {
        let avg = (arr[start] + arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num) start++
        else end--
    }
    return false;
}

// Write a function called isSubsequence which takes in two strings and 
// checks whether the characters in the first string form a subsequence of 
// the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
// without their order changing.
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let total = 0;
    for (let i = 0; i < num; i++) {
        total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - num];
        total = Math.max(total, currentTotal);
    }
    return total;
}
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then 
        // move the window to right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window 
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}
// Time Complexity - O(n)
// Space Complexity - O(1)
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}
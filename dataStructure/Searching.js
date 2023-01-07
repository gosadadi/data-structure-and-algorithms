// ======Linear Search====
function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) return i;
    }
    return -1;
}
// console.log(linearSearch([34,56,1,2],1))
// Linear Search BigO =======worst/average===O(n)

// =======Binary Search ========
// work only on sorted array

function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}

// console.log(binarySearch([1,2,3,4,5,15,20,50,100],3));
// Given an integer array nums, move all 0's to the end of it while
// maintaining the relative order of the non-zero elements

function moveZero(nums) {
    let j = 0
    let i = 1
    while (i < nums.length) {
        if (nums[j] === 0 && nums[i] !== 0) {
            nums[j] = nums[i]
            nums[i] = 0
            j++
        }
        if (nums[j] !== 0) {
            j++
        }
        i++
    }
    return nums;
}

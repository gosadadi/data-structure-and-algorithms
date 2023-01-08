// create an array 
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}
const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
// newArray.pop();
newArray.delete(1)
// console.log(newArray);

//======= Create a function that reverse a string=======

function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return null;
    }
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr = revStr.concat(str[i])
    }
    return revStr;
}
// console.log(reverse("There are"));

// ====merge sorted arrays

function mergeSortedArrays(arr1, arr2) {

    const mergeArr = [];
    let i = 1;
    let j = 1;
    if (arr1.length === 0) {
        return arr2
    }
    if (arr2.length === 0) {
        return arr1;
    }
    while (arr1[0] || arr2[0]) {
        console.log(arr1[0], arr2[0]);
        if (arr1[0] < arr2[0] || !arr2[0]) {
            mergeArr.push(arr1[0]);
            arr1[0] = arr1[i]
            i++;
        }
        else {
            mergeArr.push(arr2[0]);
            arr2[0] = arr2[j];
            j++;
        }
    }
    return mergeArr;
}
// console.log(mergeSortedArrays([1, 2, 3, 4, 6], [5, 7, 8, 9]));
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function indicesOfTwo(nums, target) {
    if (!nums || !target) {
        return null;
    }
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = nums.length - 1; j > 0; j--) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // BigO=====O(n^2)
    return null;
}
// console.log(indicesOfTwo([1,2,3,20,5,10],8));
function addToTarget (arr,target) {
    let j = arr.length - 1;
    for (let i = 0; i < arr.length-1; i++) {
        if ( arr[i] + arr[j] === target) {
            return [i, j];
        }
        console.log(arr[i], arr[j]);
        continue;
    }
    return null
}
// console.log(addToTarget([1,2,3,20,5,10],8))
// Given an integer array nums, return true if any value appears at 
// least twice in the array, and return false if every element is distinct.
function countElement(arr) {
    if (arr.length <= 1) {
        return false;
    }
    let hash = {};
    for ( let i =0; i < arr.length; i++) {
        if(hash[arr[i]])return true;
        hash[arr[i]] = 1;
    }
    return false;
}
// console.log(countElement([1,3,6,4,10,5]));

// Given an array, rotate the array to the right by k steps, 
// where k is non-negative.

function rotateArray(arr, k) {
    if (arr.length <= 1) {
        return arr;
    }
    k = (k % arr.length)
    console.log(k);
    let end = arr.splice(arr.length - k)
    console.log(end);
    arr.splice(0,0,...end);
    return arr;
}
// console.log(rotateArray([1,2,3,4,5,6,7],3));


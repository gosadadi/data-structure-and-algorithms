const numbers = [1000, 99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, -3];
//======1.buble sort========
function bubbleSort(array) {
    if (array.loength === 1) {
        return array;
    }
    let noSwaps;
    const length = array.length;
    for (let i = length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(array[j], array[j + 1])
            if (array[j] > array[j + 1]) {
                //swab numbers
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
        //   ========big O=====O(n^2)=======
    }
    return array;
}
// console.log(bubbleSort(numbers));

// =======2.Selection Sort======
function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        // set current index as min
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            array[i] = array[min];
            array[min] = temp;
        }
        // bigO====o(n^2)
    }
    return array;
}
// console.log(selectionSort(numbers))
// =======3.insertion sort=======

function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {

        if (array[i] < array[0]) {
            array.unshift(array.splice(i, 1)[0]);
        } else {
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    array.splice(j, 0, array.splice(i, 1)[0]);
                }
            }
        }
    }
}
function insertionsort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
            console.log("******** first", i, j);
            arr[j + 1] = arr[j];
            console.log(arr);
        }
        console.log(i, j, "*************second");
        arr[j + 1] = current;
        console.log(arr);
    }
}
// console.log(insertionsort([2,1,9,76,4]));

// =========4.Merge sort =========
function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length &&
        rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
}
// return resulut.concat(left.slice(leftIndex)).concat

function mergedSort(arr) {
    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = mergedSort(arr.slice(0, middle));
    let right = mergedSort(arr.slice(middle));
    return mergeSortedArray(left, right);
}
// console.log(mergedSort([10,24,76,73]))
function mergeSortedArray(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}
// console.log(mergeSortedArray([1,10,50],[2,14,99,100]))

// ======5.quick sort======

function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(array, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    var pivot = arr[start];
    var swapIdx = start;
    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
            console.log(arr);
        }
    }
    swap(arr, start, swapIdx);
    console.log(arr);
    return swapIdx;
}
// console.log(pivot([4,8,2,1,5,7,6,3]))
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left 
        quickSort(arr, left, pivotIndex - 1)
        // right
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}
// console.log(quickSort([4, 8, 2,-3, 1, 5, 7, 6, 3]));
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//======1.buble sort========
function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                //swab numbers
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        //   ========big O=====O(n^2)=======
    }
}
bubbleSort(numbers);
// console.log(numbers);

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
        array[i] = array[min];
        array[min] = temp;
    }
}
// =======3.insertion sort=======
function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            array.unshift(array.splice(i, 1)[0]);
        } else {
            for (let j =1; j <i; j++) {
                if (array[i] > array[j-1] && array[i] < array[j]) {
                    array.splice(j,0,array.splice(i,1)[0]);
                }
            }
        }
    }
}
// =========4.Merge sort =========
const numbers = [99,44,6,2,1,5,63,87,283,4,0]
function mergeSort (array) {
    if (array.length === 1) {
        return array;
    }
    const length = array.length;
    const middle = Math.floor(length/2);
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge (
        mergeSort (left),
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
                rightIndex ++
            }
        }
}
return resulut.concat(left.slice(leftIndex)).concat
// ======5.quick sort======
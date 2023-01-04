// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items.

function haveCommonItem(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i + 1; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
    // BigO: O(n^2)
}
// console.log(haveCommonItem(['A','B',1,3],['a',2,'C']));

function commonItemArray(arr1, arr2) {
    if (!arr1, !arr2) {
        return false
    }
    let hashMap = {};
    for (let i = 0; i < arr1.length; i++) {
        hashMap[arr1[i]] = (hashMap[arr1[i]] || 0) + 1;
    }
    console.log(hashMap);
    for (let j = 0; j < arr2.length; j++) {
        if (!hashMap[arr2[j]]) {
            return false;
        }
        return true;
    }
}
console.log(commonItemArray([2, 3,], [1, 5, 6,]));
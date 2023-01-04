// Week 3 day 5 algorithm is about counting items in an array and finding the maximum occurrence(Mode).Use object to keep the occurrence. Array: Mode Create a function that, given an array of ints,returns the int that occurs most frequently in the array.What if there are multiple items that occur the same number of time ?return all of them(in an array)
//         - what if all items occur the same number of times ?
//             - return empty array
//                 * /

function findoccurence(arr){
    let obj={};
    let count=0;
    for (var i=0;i<arr.length;i++){
        if(arr[i]in obj){
            count++;
        }
        obj[arr[i]]=count;
        console.log(obj)
    }
    
    return obj
}

const nums4 = [5, 1, 4, 1];



findoccurence(nums4);



const nums1 = [];
const expected1 = [];

var nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
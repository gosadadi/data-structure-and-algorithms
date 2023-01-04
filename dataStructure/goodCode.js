// const nemo = ['nemo'];
// let large = new Array(10).fill("nemo")
// function findNemo(array) {
//     // let t0 = performance.now();
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 'nemo') {
//             console.log("found nemo");
//         }
//     }
//     // let t1 = performance.now();
//     // console.log("Call to find nemo took " +(t1-t0) + 'milliseconds');
// }
// findNemo(large);
// function compress(boxes) {
//     console.log(boxes[0]);
// }
// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//     let a = 10;//O(1)
//     a = 50 + 3;//O(1)

//     for (let i = 0; i < input.length; i++) { //O(n)
//         anotherFunction();//O(n)
//         let stranger = true; //O(n)
//         a++;//O(n)
//     }
//     return a;//O(1)
// }
// // 3 + 4n = BigO(n)
// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//     let a = 5;//O(1)
//     let b = 10;//O(1)
//     let c = 50;//O(1)
//     for (let i = 0; i < input; i++) { 
//         let x = i + 1; //O(n)
//         let y = i + 2;//O(n)
//         let z = i + 3;//O(n)

//     }
//     for (let j = 0; j < input; j++) { 
//         let p = j * 2;//O(n)
//         let q = j * 2;//O(n)
//     }
//     let whoAmI = "I don't know"; //O(1)
//     // big O = 4 +5n = O(n)
// }

// function printFistItemThenFistHalfThenSayHi100Times(items){
//     console.log(items[0]);
//     let middleIndex = Math.floor(items.length/2);
//     let index =0;
//     while(index <middleIndex) {
//         console.log(items[index]);
//         index++;
//     }
//     for( let i=0; i<100; i++){
//         console.log("hi");
//     }

// }
// log all pairs of array
// const boxes = ['a','b','c','d','e'];
// function logAllPairsOfArray(array) {
//     for (let i = 0; i < array.length; i++){
//         for( let j = 0; j < array.length; j++){
//             console.log(array[i],array[j]);
//         }
//     }
// }
// logAllPairsOfArray(boxes);
// space complexity===
// function booooo(n) {
//     for (let i = 0; i<n.length; i++){
//         console.log('boooooo');
//     }
// }
// booooo([1,3,4]);//space complexity O(1)

// function arrayOfHiNTimes (n){
//     let hiArray = [];
//     for(let i= 0; i<n; i++){
//         hiArray[i]="hi"
//     }
//     return  hiArray
// }
// console.log(arrayOfHiNTimes(6));//O(n)

// given array of number and a target integer, find two integer in array add upto traget

// function addUptoTarget(array, target) {
//     for (let i =0; i<array.length; i ++){
//         for (let j=i+1; j<array.length; j++){
//             if(array[i] + array[j] === target){
//                 return true
//             }
//         }
//     }
//     return false;
// }
// console.log(addUptoTarget([1,2,4,4],8));
function hasPairWithSum(arr,sum){
    const myset = new Set();
    for(let i=0; i<arr.length; i++){
        if(myset.has(arr[i])){
            return true;
        }
        myset.add(sum-arr[i]);
    }
    return false;
}
console.log(hasPairWithSum([1,2,5,3],8));
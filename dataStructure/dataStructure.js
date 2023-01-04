// given 2 arrays, create a function that
// let a user know (true/false) if the two arrays contain common items
// 2 param(array), return true or false, 
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','r'];
// function containCommonItem(array1, array2){
//     for (let i = 0; i<array1.length; i++){
//         for( let j = 0; j<array2.length;j++){
//             if(array1[i] === array2[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// // bigO = O(a*b)
// space complexity O(1)
// console.log(containCommonItem(array1, array2));
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','r'];
// // ====array1 ======>object
// // a:true, b:true, c:true,.....
// function containsCmmonItem2(array1, array2){
//     // loop through first array and create object where properties === items in the array
//     let map ={};
//     for(let i=0; i<array1.length; i++){
//         if(!map[array1[i]]){
//             const item = array1[i];
//             map[item] =true;
//         }
//     }
//     // loop through decond array and check if item in second array exist on created object
//     for (let j =0; j< array2.length; j++){
//         if(map[array2[j]]){
//             return true;
//         }
//     }
//     return false;
//     // bigO =O(a+b)....time complexity better
        // space complecity O(a)
// }
// console.log(containsCmmonItem2(array1,array2));
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','r'];
// function containsCmmonItem3(array1, array2) {
//     return array1.some(item =>array2.includes(item))
// }
// console.log(containsCmmonItem3(array1, array2));
function hasPairWithSum (arr, sum) {
        let len = arr.length;
        for(let i = 0; i < len-1; i++){
                for (let j =i+1; j<len; j++){
                        
                }
        }
}
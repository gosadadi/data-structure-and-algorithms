// // objects are reference type....non primitive
// class MyArray {
//     constructor(){
//         this.length = 0;
//         this.data = {};
//     }
//     get(index){
//         return this.data[index]
//     }
//     push(item){
//         this.data[this.length] = item;
//         this.length++;
//         return this.length;
//     }
//     pop(){
//         const lastItem = this.data[this.length-1];
//         delete this.data[this.length-1];
//         this.length--;
//         return lastItem;
//     }
//     delete(indx){
//         const item = this.data[indx];
//         this.shiftItem(indx);
//     }
//     shiftItem(indx){
//         for(let i = indx; i<this.length-1; i++){
//             this.data[i] = this.data[i+1];
//         }
//         delete this.data[this.length -1];
//         this.length --;
//     }
//     }
// const newArray =new MyArray();
// newArray.push("Hi");
// newArray.push("You");
// newArray.push("!");
// newArray.delete(1);
// console.log(newArray);
// create a function that reverses a string
// Gosa...asog
// function reverse(str){
//     let array =[];
//     let rstr = []
//     for (let i=0; i< str.length; i++){
//         array.push(str[i]);
//     }
//     for (let j= array.length-1; j >=0; j-- ){
//         rstr.push(array[j])
//     }

//     console.log(array);
//     return rstr;
// }
// console.log(reverse("Gosa"));
// function reverse (str) {
//     const reverseString =[];
//     const totalItems = str.length-1;
//     // check
//     if(!str || str.length<2 || typeof str !=='string'){
//         return "input is not string";
//     }

//     for( let i =totalItems; i>=0; i--){
//         reverseString.push(str[i]);
//     }
//     console.log(reverseString);
//     return reverseString.join('');
// }
// reverse("Gosa");
// function reverse2 (str){
//     return str.split('').reverse().join('');
// }
// console.log(reverse2("Gosa"));

// const reverse3 = str => str.split('').reverse().join('');
// ======given two arrays that are sorted, can you merge two arrays still sorted======
function mergeSortedArrays(array1, array2) {
    const mergedArray = []
    let array1Item = array1[0]
    let array2Item = array2[0]
    let i =1;
    let j =1;
    // ======check1=========
    if (array1.length ===0){
        return array2;
    }
    if (array2.length ===0){
        return array1;
    }
    // =======both array1&2 given=======
    while(array1Item || array2Item){
        console.log(array1Item,array2Item);
        if(!array2 || array1Item < array2Item){
            mergedArray.push(array1Item)
            array1Item = array1[i]
            i++
        }else {
            mergedArray.push(array2Item);
            array2Item = array2[j]
            j++
        }

    }
    return mergedArray
}
console.log(mergeSortedArrays([1,2],[4,6,5]));
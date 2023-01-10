// class HashTable {
//     constructor(size){
//         this.data = new Array(size);
//     }
//     _hash(key){
//         let hash = 0;
//         for(let i=0; i<key.length; i++){
//             hash = (hash + key.charCodeAt(i)*i)%
//             this.data.length
//         }
//         return hash;
//     }
// }
// const myHashTable = new HashTable(50);
// myHashTable.set('graps',10000);
// myHashTable.get('grapes')

// =======given an array find the first recurring value of array=======
function findRecurringValue (array){ ////=======O(n)=======
    let hashMap = {}
    // =====edge case====
    for (let i = 0; i < array.length; i++){
        if ( array[i] in hashMap) {
            return array[i];
        }
        hashMap[array[i]] = true;
    }
    return false;
    // =====BigO====O(n)
}
console.log(findRecurringValue([2,1,1,2,9,7,5,3,6,4]));

function firstRecurringCharacter(input){
    for (let i = 0; i < input.length; i++){
        for (let j = i+1; j < input.length; j++){
            if(input[j] === input[j - 1] ){
                return input[j]
            }
        }
    }
    return undefined;
    // O(n^2)=====
}
console.log(firstRecurringCharacter([2,1,1,5,6,5,2,5,3,6,4]));
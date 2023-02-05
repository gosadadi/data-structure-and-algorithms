class HashTable {
    constructor(size = 17) {
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        let wierd_prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total + wierd_prime + value) % this.keyMap.length;
        }
        return total;
    }
    set(key,value) {
        let index = this._hash(key);
        return index;
    }
    get(key) {

    }
}
let ht = new HashTable();
ht.set("hello world", "goodbye!!");

// Write a function that would get the sum of all the even numbers from 1 to 1000. 
// You may use a modulus operator for this exercise.
function get_even(){
    let sum = 0;
    for (let i =1; i <=1000;i++){
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(get_even());
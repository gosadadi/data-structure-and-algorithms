//recursively find the factorial of num and return it!
function factorial(num){
    if(num===1){
        return 1;
    }
    else{
        (num-factorial(num-1));
    }
}
factorial(5);
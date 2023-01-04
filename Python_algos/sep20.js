//recursively find the place number in the fibonacci sequence
function fib(place){
    if(place===1){
        return 0   
    }
    else if (place===2){
        return 1
    }
    else{
        return fib(place-1)+fib(place-2)
    }

}
console.log(fib(40))


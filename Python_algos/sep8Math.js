//Write an algorithm that takes in a string and checks to make sure the parentheses are valid.
//all '(' should have a matching ')'
//parentheses should also be in the correct order(i.e. ')(' would not be valid)

//example: ()           -> true
//example: (([(8+13)])) -> true
//example: (()))()      -> false
//example: (            -> false
//example: ())())((()   -> false

function parensValid(str) {
    var countOpen = 0;
    var countclose = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '['){
            countOpen++;
        }
    }
    for (var j = str.length - 1; j >= 0; j--) {
        if (str[j] === ')' || str[j] === ']') {
            countclose++;
        }
    }
    if (countOpen === countclose) {
        console.log("count")
        return true;

        //return true or false
    }
    console.log("false")
    return false;
}
var str = "())())((()";

parensValid(str);
/* 
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/
function reverseWords(str) {
    var new_str='';
    for (var i =str.length-1;i>=0; i--) {
        new_str+=str[i];
        }
        return new_str
}

// var str1 = "hello";
// var expected1 = "olleh";
// console.log(reverseWords(str1));

// var str2 = "hello world";
// var expected2 = "olleh dlrow";
// console.log(reverseWords(str2));

var str3 = "abc def ghi";
var expected3 = "cba fed ihg";
console.log(reverseWords(str3));


// //write a function that, given a string of words(with spaces),
// //returns a new string with words in reverse sequence.
// //"This is a test" -> "test a is This"
// const reverseWordOrder = (str) => {
// }

// console.log(reverseWordOrder("Did I shine my shoes       today?        "));
// console.log(reverseWordOrder("'Son, I am able,' she said 'Though you scare me' 'Watch,' said I 'beloved,' I said, 'Watch me scare you though,' Said she, 'Able am I son.'"))
// console.log(reverseWordOrder("This is freaking insane because I live in Cincinnati but I want to live in Mississippi with my family!"));
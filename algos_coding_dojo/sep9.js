// Question1:
const str = "Hello World";
function rotatestr(str,n){
    var results='';
    for(var i=0;i<str.length;i++){
    // results+=str[i];

    }
    str[i]=str[strength-(n--)]
    return results;
}
console.log(rotatestr('hello world',2));

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";

// Question2:

/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

// const strA1 = "ABCD";
// const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
// const expected1 = true;

// const strA2 = "ABCD";
// const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
// const expected2 = false;

// const strA3 = "ABCD";
// const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
// const expected3 = false;
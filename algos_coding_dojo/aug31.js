// You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
function encode(str) {
var result="";
var count=1;
for (var i=0;i<str.length;i++){
    if(str[i]==str[i-1]){

        count++  
    }
    else{
        count=1;
    }
    console.log(count,str[i]);
}

return str;
}
encode("aaaabbcddd" );









// console.log(encode("aaabbcccc"));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
// //special note: can your function handle "g14f12"?
// function decode(str){
            
// }

// console.log(decode("a3b2c4"));
// console.log(decode("t2h10j4"));
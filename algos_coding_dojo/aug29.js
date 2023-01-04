function acronymize(str) {}

var str1 = "object oriented programming";
var expected1 = "OOP";
console.log(acronymize(str1));

// // The 4 pillars of OOP
var str2 = "abstraction polymorphism inheritance encapsulation";
var expected2 = "APIE";
console.log(acronymize(str2));

var str3 = "software development life cycle";
var expected3 = "SDLC";
console.log(acronymize(str3));

// // Bonus: ignore extra spaces
var str4 = "  global   information tracker    ";
var expected4 = "GIT";
console.log(acronymize(str4))
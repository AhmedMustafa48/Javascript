// var , let , const -- line by line comparison
// var = ES5
// let , const = ES6

// ================= declaration and initialization =================

var a; // declaration
var a = 12; // declaration and initialization

// var problems
//  1. window mein add hota hai
//  2. function scoped hota hai
//  3. redeclaration bhi kr skty ho same name se and error bhi nhi ayega
// for example
// var a = 12;
// var a = 13;

// LET is reassignable but not redeclareable

let b = 12;
b = 13;
console.log(b);

console.log("========== Lets talk about temporal dead zone ");

console.log(letTdz);
let letTdz = 1;

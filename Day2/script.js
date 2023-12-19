// "let" keyword is used in mordern javascript to declare variables

// let message;
// message = "hello";
// alert(message); // shows the variable content

// Single Line Variable: The Let keyword is used for all the 3 variable initializations
// let user = "John", age = 25, message = "Hello"; 

// Separate Line:
// let user = "John";
// let age = 25;
// let message = "Hello";

// Note that "let" keyword is used more often than the "var" keyword
// The "let" keyword is the modern way of writing Javascript while
// the "var" keyword is the old way of writing Javascript

// Note that the variable is like a box that is saving information

let message = "hello";
let message = "world";
console.log(message);
// Note that in this scenario, javascript will behind the scene remove
// the first initialization of "hello" and replace it with "world"

// Note that same name variable can  not be used to hold data like 
// "message" word above

// Variables must contain only letters, digits, or the symbol $ and _
// reserved words can not also be used eg let, return, function, name, etc
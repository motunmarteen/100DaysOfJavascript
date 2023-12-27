"use strict"
// Function Declaration VS Function Expression part 2

let age = prompt("What is your age?", 18);
let welcome;

if (age < 18) {
    welcome = function() {
        alert("You are a Teenager")
    }
}
else {
    welcome = function() {
        alert("You are not a Teenager")
    }
}
welcome()
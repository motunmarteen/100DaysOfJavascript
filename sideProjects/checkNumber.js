// Write a program that checks if a given number is positive, negative, or zero.

let checkNumber = prompt("What number do you want to check?", -1);

if (checkNumber == 0) {
    alert("You Number is Zero!");
} 
else if (checkNumber < 0) {
    alert("You Number is Negative!");
} 
else {
    alert("You Number is Positive!");
}
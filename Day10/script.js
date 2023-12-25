// SYNTAX

/*
let (expression) = ...
let condition;

switch (expression) {
    case value1:
        // Code to execute if expression matches value1
        break;
    case value2:
        // Code to execute if expression matches value2
        break;
    // more cases as needed
    default:
        // Code to execute if no cases match the expression
}
*/

/*
Breakdown:
switch (expression): Begins the switch statement. expression is evaluated, and its value is compared against different cases.

case value1: Each case represents a possible value that expression might match. If expression matches value1, the code block associated with value1 will be executed.

break;: It's crucial! After executing the code block for a matching case, break is used to exit the switch statement. Without break, JavaScript will continue executing code in subsequent cases even if their values don’t match, potentially leading to unexpected behavior.

default: (optional): This is the default case that executes when no case matches the expression. It's similar to the else statement in if-else constructs.
*/ 

let month = +prompt("What number is yur month?");
let monthName;
// let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

switch (month) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default:
        monthName = "Invalid month";
}
alert("The month is: " + monthName); // Output: The month is: July

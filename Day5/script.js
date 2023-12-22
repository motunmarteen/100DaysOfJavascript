// Conditional Branching in JavaScript
// Note that prompt is used to ask users Questions or get information from users
// Always wrap your conditional statement with curly braces even if you have only one statement in it

let year = prompt("In which year were you born?");
if (year == 1997) {
    alert("you are right!")
    alert("You are very smart")
}
else {
    alert("You have to be 1997 to use this code, I think you are younger or older")
}

// if (1) {
//     ...
// }

let footballYear = prompt("In which year was football world cup played in France?");
if (footballYear == 1998) {
    alert("You are right!")
} else if (footballYear == 2002) {
    alert("You are still right!")
} else if (footballYear == 2006) {
    alert("You are still right!")
} else {
    alert("You are wrong")
}
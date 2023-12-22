// This is a ternary operator
let accessAllowed;

let year = prompt("In which year was football world cup held?")

if (year == 2000) {
    accessAllowed = true;
}
else {
    accessAllowed = false;
}

alert(accessAllowed)

// let result = condition ? value1 : value2
// let accessAllowed = (year == 2000) ? true : false

let age = prompt("Age?", 18);

let message = (age < 3) ? "Hi" :
    (age < 18) ? "Hello" : 
    (age < 100) ? "Greetings" :
    "What an unusual Age";

alert(message);
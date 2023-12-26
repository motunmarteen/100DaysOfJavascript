// Returning from a Function

function sum (a, b) {
    return a + b
}
let result = sum(12, 13)
alert(result)

// SAMPLE 2

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

let age = prompt("How old are you? ", 18);

if (checkAge(age)) {
    alert("Access Granted")
} else {
    alert("Access Denied")
}

/*
checkAge Function:

It takes an age parameter.
Inside the function, it checks if the provided age is >= 18.
If the age is greater than or equal to 18, it returns true, indicating the user is old enough.
If the age is less than 18, it returns false, indicating the user is not old enough.
Asking User Age:

It prompts the user with the question "How old are you?" and provides a default value of 18.
Whatever the user enters is stored in the variable age.
Checking Access:

The code then calls the checkAge function, passing the age variable as an argument.
If checkAge(age) returns true (meaning the user is 18 or older), it displays an "Access Granted" message using alert().
If checkAge(age) returns false (meaning the user is younger than 18), it displays an "Access Denied" message using alert().
So, in simple terms, the code asks the user's age, checks if they are 18 or older, and then either grants or denies access based on their age. The checkAge function is used to determine this, and the result determines which alert message is shown to the user.
*/ 
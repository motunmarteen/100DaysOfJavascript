// Implement a function that checks if a given string is a valid email address.

let email = prompt("What is your email address?")
if (email.includes("@") && email.includes("gmail.com") || email.includes("yahoo.com") || email.includes(".net") || email.includes(".ng") || email.includes(".us")) {
    alert("This is a valid email")
} else if (email.includes(" ")) {
    alert("This is not a valid email")
} else {
    alert("This is not a valid email")
}
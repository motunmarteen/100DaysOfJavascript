// Write a program that compares two numbers and prints the larger one.

let numA = Number(prompt("What is the first number to compare?"))
let numB = Number(prompt("What is the second number to compare?"))

if (numA > numB) {
    alert(`${numA} is bigger than ${numB}`)
    alert(`${numA}`)
}
else {
    alert(`${numB} is bigger than ${numA}`)
    alert(`${numB}`)
}

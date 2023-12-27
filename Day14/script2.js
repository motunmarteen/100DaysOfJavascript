// Function Declaration VS Function Expression
// JavaScript searches for function declaration before acknowledging function expression

alert("First Line")
alert("Second Line")
alert("Third Line")
alert("Fourth Line")
alert("Fifth Line")

sub(3, 4)
function sum(a, b) {
    alert(a + b)
}
function sub(a, b) {
    alert(a - b)
}
let multiply = function(a, b) {
    alert(a * b)
}
multiply(3, 6)



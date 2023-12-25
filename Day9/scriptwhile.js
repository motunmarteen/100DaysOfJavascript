// While Loop Syntax

/* 
while (condition) {
    loop body
}
*/

/*
let i = 3;
while (i) {
    alert(i);
    i--;
}
alert("The loop has ended")
*/

/*
let a = 0;
while (a < 3) {
    alert(a);
    a++;
}
alert("The loop has ended")
*/

let sum = 0;

while (true) {
    let value = +prompt("Enter a number", "")
    if (!value) break;
    sum += value;
}
alert("The total sum is " + sum);
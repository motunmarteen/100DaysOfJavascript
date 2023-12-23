// alert("100 Days of JavaScript - Day 6")
// console.log("100 Days of JavaScript - Day 6")

/* Logical Operators
OR ...............................  (||) It has same precedence as AND
AND ............................... (&&) It has same precedence as OR
NOT ............................... (!) This has the highest Precedence
NULLISH COERCING .................. (??) This is not used often
*/

/* OR OPERATOR
true || true => true
true || false => true
false || true => true
false || false => false
*/

/* AND OPERATOR
true && true => true
true && false => false
false && true => false
false && false => false
NOTE: in AND operator, if any object is false it bring a false response
*/

/* NOT OPERATOR
    !true => false
    !false => true
*/

a = 12;
b = 23;
c = 56;

if ((a == 12) || (b == 23) || (c == 56)) {
    alert("True Returned")
} 
else {
    alert("False Returned")
}

// Lets change the b to 28 in the if statement
if ((a == 12) && (b == 28) && (c == 56)) {
    alert("True Returned")
} 
else {
    alert("False Returned")
}

a = true;
x = false;

alert(!a)
alert(!x)
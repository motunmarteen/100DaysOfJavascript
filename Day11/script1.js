// ASSIGNMENT 1
/* What is the last value alerted by this code? Why?
let i = 3;
while (i) {
  alert( i-- );
}
*/

// SOLUTION 1

/*  
The last value alerted by that code will be 1. Here's why:

The while loop in the code will continue as long as the condition inside the parentheses is truthy. In JavaScript, any non-zero number is considered truthy.

Initially, i is set to 3. The loop starts when i is 3, and it will execute the alert(i--) statement. This statement will first alert the current value of i (which is 3), and then decrement i by 1.

The loop continues as long as i is truthy. After the i-- operation in the first iteration, i becomes 2. This value (2) is truthy, so the loop continues.

In subsequent iterations, the loop continues decrementing i by 1 after each alert. It goes through 2, then 1. When i becomes 0, 0 is considered falsy in JavaScript, so the loop stops before executing the alert(0) statement, and the loop exits.

Therefore, the sequence of alerted values will be 3, 2, and finally 1, with 1 being the last value alerted before the loop exits.
*/
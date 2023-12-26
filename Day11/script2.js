// ASSIGNMENT 2

/*
For every loop iteration, write down which value it outputs and then compare it with the solution.
Both loops alert the same values, or not?
The prefix form ++i:
let i = 0;
while (++i < 5) alert( i );
The postfix form i++
let i = 0;
while (i++ < 5) alert( i );
*/ 


// SOLUTION 2

/*
Both loops alert the same values (0, 1, 2, 3, 4). The only difference between the postfix and prefix forms in this specific scenario (for loop with constant increment and boundary check) won't affect the final alerted values since the increment happens before the alert in both cases.

*/
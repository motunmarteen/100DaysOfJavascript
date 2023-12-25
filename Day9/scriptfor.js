// FOR LOOP 

// Initialization : This is the Start
// Condition      : This is the Stop
// Update I/D     : This is the Step

// The syntax are all in the bracket before the 
// block of code to be executed.


for (let a = 0; a < 10; a++) {
    alert("Motun" + a);
    // if (a == 5) break;
}


// Write a JavaScript for loop that prints all the even numbers from 1 to 10 to the console.

for (n = 2; n <= 10; n += 2) {
    alert(n)
}






for (let i = 1; i <= 17; i+=2) {
    if (i === 13) {
        break; // This will exit the loop when i becomes 13
    }
    alert(i);
}
// Output: 1, 3, 5, 7, 9, 11, 13


for (let a = 4; a <= 20; a += 4) {
    if (a == 16) {
        continue; // This will skip the loop when a becomes 16
    }
    alert(a);
}
// output: 4, 8, 12, 20

// Note that the break keyword completely exits the loop
// while the continue keyword skips the loop and continues

// Continue directive will help us reduce nesting
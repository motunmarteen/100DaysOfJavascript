

outerloop:
for (let i = 0; i < 3; i++) {
    alert("Outer loop: " + i);

    innerloop:
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            continue outerloop; // Skips to the next iteration of the outer loop
        }
        alert("Inner loop: " + j);
    }
}




/* In this example:

outerloop is the label for the outer loop.
innerloop is the label for the inner loop.

Here, continue outerloop; will skip to the next iteration of the outer loop when j is equal to 1. This means it'll print "Outer loop: 0" but not execute the inner loop beyond "Inner loop: 0" for that iteration because of the continue statement.

Labels are especially useful when working with nested loops and needing to break or continue a specific loop from within another one. However, it's important to use labels judiciously as they can make the code harder to read and understand if overused or used unnecessarily. They can be quite handy for handling more complex flow control scenarios in nested loops.

*/
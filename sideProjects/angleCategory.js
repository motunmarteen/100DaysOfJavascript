// Create a program that categorizes a given angle as acute, right, obtuse, or straight.

let angle = Number(prompt("What angle do you want to check?", 90))

if (angle < 90) {
    alert("An acute angle")
} else if (angle == 90) {
    alert("A right angle")
} else if (angle < 180) {
    alert("An obtuse angle")
} else if (angle == 180) {
    alert("A straight angle")
} else {
    alert("Not in the category of angle listed")
}
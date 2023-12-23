// Create a program that determines whether a given year is a leap year.

let year = prompt("WHat year do you want to check?");

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))  {
    alert("Leap Year")
}
else {
    alert("Not a Leap Year")
}
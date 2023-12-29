// Table of 7: Use a loop to print the multiplication table of 7 up to 10.

let num = Number(prompt("What number will you check it's times table?", 7));


for (i = 1; i <= 12; i++) {

    let multiplication = num * i;
    alert(`${num} * ${i} = ${multiplication}`)

}
const number = parseInt(prompt("Enter a positive No > 1: "));
let isPrime = true;

if (number === 1) {
    alert("1 is neither a prime nor composite number")
}
else if (number > 1) {
    for(let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false; 
            break;
        }
    }
    if (isPrime) {
        alert("The number is a prime number")
    } else {
        alert("The number is not a prime number")
    }
}
else {
    alert("The number is not a prime number")
}
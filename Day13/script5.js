function isPrime(number) {
    if (number <= 1) {
      return false; //cd  Numbers less than or equal to 1 are not prime
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false; // If the number is divisible by any number other than 1 and itself, it's not prime
        }
      }
      return true; // If the number is not divisible by any number other than 1 and itself, it's prime
    }
  }
  
  const numToCheck = +prompt("What number do you want to check? "); // You can change this number to check if it's prime or not
  
  if (isPrime(numToCheck)) {
    alert(`${numToCheck} is a prime number.`);
  } else {
    alert(`${numToCheck} is a composite number.`);
  }


/*
Now, let's break down what this code does in a way a 6th grader might understand:

Imagine we want to know if a number is special. We call a number "special" if it has only two factors: 1 and itself. For example, 2, 3, 5, 7 are special because they can only be divided by 1 and themselves.

Here's what our code does:

isPrime Function: This function tells us if a number is special (prime) or not.

If the number is less than or equal to 1, it's not special (not prime).
Otherwise, it checks if any number from 2 to just before the number itself can divide our number without leaving a remainder.
If any number can divide our number without leaving a remainder, then it's not special (not prime).
If none of the numbers can divide our number without a remainder, then it's special (prime).
Checking the Number: We choose a number (in the code it's 17 but you can change it), and the code tells us if that number is special (prime) or not.

If it's special, it says, "Yes, this number is special (prime)."
If it's not special, it says, "No, this number is not special (not prime)."
So, the code helps us figure out if a number is special (prime) or not by checking if it has only two factors: 1 and itself. If it does, then it's special!







*/ 
// Function Declaration: This is the traditional way of creating a named function using the function keyword. These functions are hoisted, meaning they can be called before they are declared in the code.

// Function Declaration 1

function add(a, b) {
    return a + b;
}
let addition = add(7, 8) // This is a way to call the function.
alert(addition)


// Function Declaration 2

function functionDeclaration() {
    alert("This is a function declaration");
}
functionDeclaration() // This is a way to call the function.



// Function Expression: Involves defining a function as part of an expression. These functions can be anonymous (without a name) or assigned to a variable. Function expressions are not hoisted.

const multiply = function(a, b) {
    return a * b;
};
alert(multiply(8, 12))

let functionExpression = function() {
    alert("This is a function expression in Javascript");
}
functionExpression()



// Arrow Function: Introduced in ES6, arrow functions are a concise way of writing functions in JavaScript. They have a more compact syntax, lexically bind this, and do not have their own this, arguments, super, or new.target.

const divide = (a, b) => {
    return a / b;
};

// For simple, one-line functions that return a value, arrow functions offer a concise syntax:

const double = num => num * 2;

// The choice between these function creation methods often depends on the specific use case and coding style preferences. Arrow functions are commonly used for shorter, concise functions, while function expressions are versatile and can be named or anonymous, and function declarations are useful for named functions that might be hoisted.
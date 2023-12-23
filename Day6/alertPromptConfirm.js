// ALERT

// the alert method shows a message from the window page. It a mini window called the modal window
// modal means the visitor can not interact with the rest of the page
// except for the mini window

// PROMPT

// This accepts title and default from users
// default is the square parameter
// prompt(title, [default])
let age = prompt("How old are you?", 100);
alert(`You are ${age} years old!`);

// CONFIRM

// The confirm keyword works with True or false value
// This keyword brings Okay or Cancel to choose from
let isMarried = confirm("Are you married?")
alert(isMarried)